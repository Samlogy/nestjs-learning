import { Injectable } from '@nestjs/common';
import { IData, data } from './data';

@Injectable()
export class AppService {
  getAllReports(): IData[] {
    // business logic here
    return data;
  }
  getOneReport(id: string): IData {
    // business logic here
    return data.find((el) => el.id === id);
  }
  createReport(body: IData): IData {
    // business logic here
    return body;
  }
  updateReport(body: IData, id: string): IData {
    // business logic here
    return body;
  }
  DeleteReport(id: string): string {
    // business logic here
    return id;
  }
}
