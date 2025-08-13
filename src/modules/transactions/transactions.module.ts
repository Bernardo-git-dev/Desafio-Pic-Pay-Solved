import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { ExternalModule } from '../../external/external.module';
import { UsersModule } from '../users/users.module';


@Module({
  imports: [ExternalModule, UsersModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule { }
