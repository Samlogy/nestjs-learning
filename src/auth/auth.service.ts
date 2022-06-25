import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignInDto, SignUpDto, AuthResponseDto } from 'src/dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  generateUsername(email: string): string {
    return email.substring(0, email.indexOf('@'));
  }

  async signUp(body: SignUpDto) {
    const password = await argon.hash(body.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          ...body,
          password,
          username: this.generateUsername(body.email),
        },
        select: {
          password: false,
          id: true,
        },
      });

      return this.signToken(user.id, user);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signIn(body: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) throw new ForbiddenException('Credentials incorrect');
    const passwordMatches = await argon.verify(user.password, body.password);
    if (!passwordMatches) throw new ForbiddenException('Credentials incorrect');
    delete user.password;
    return this.signToken(user.id, user);
  }

  async signToken(userId: number, user: any): Promise<AuthResponseDto> {
    const payload = {
      sub: userId,
      email: user.email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
      user,
    };
  }
}
