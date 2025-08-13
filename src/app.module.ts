import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { UsersModule } from './modules/users/users.module';
import { AuthorizerService } from './external/authorizer.service';
import { NotifierService } from './external/notifier.service';
import { UserRepository } from './modules/users/user.repository';

@Module({
  imports: [TransactionsModule, UsersModule],
  providers: [AuthorizerService, NotifierService, UserRepository],
})
export class AppModule { }
