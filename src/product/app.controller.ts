import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportType } from 'src/data/product';
import { AppService } from './app.service';
import { IData } from './data';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(): IData[] {
    return this.appService.getAllReports();
  }

  @Get(':id')
  getOneReport(@Param('id', ParseUUIDPipe) id: string): IData {
    return this.appService.getOneReport(id);
  }

  //@HttpCode(201)
  @Post()
  createReport(@Body() body: IData): IData {
    return this.appService.createReport(body);
  }

  @Put(':id')
  updateReport(@Body() body: IData, @Param('id') id: string): IData {
    return this.appService.updateReport(body, id);
  }

  @Delete(':id')
  DeleteReport(@Param('id', ParseUUIDPipe) id: string): string {
    return this.appService.DeleteReport(id);
  }
}
