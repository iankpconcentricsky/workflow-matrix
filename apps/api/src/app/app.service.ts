import { Injectable } from '@nestjs/common';
import { Message } from '@kubeapp/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: process.env.NODE_ENV };
  }
}
