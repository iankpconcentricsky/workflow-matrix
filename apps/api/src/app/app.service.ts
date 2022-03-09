import { Injectable } from '@nestjs/common';
import { Message } from '@kubeapp/api-interfaces';

@Injectable()
export class AppService {
  getData(): any {
    return { message: process.env };
  }
}
