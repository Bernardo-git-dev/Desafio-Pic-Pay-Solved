import { Module } from '@nestjs/common';
import { AuthorizerService } from './authorizer.service';
import { NotifierService } from './notifier.service';

@Module({
  providers: [AuthorizerService, NotifierService],
  exports: [AuthorizerService, NotifierService],
})
export class ExternalModule { }
