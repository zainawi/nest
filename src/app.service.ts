import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let msg = 'Hello World!';
    return msg;
  }
}
