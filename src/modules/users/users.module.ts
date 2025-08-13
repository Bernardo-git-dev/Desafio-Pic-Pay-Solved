import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';
import { UsersService } from '../users.service';

@Module({
  controllers: [UsersController],     // <- ESSENCIAL
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository], // opcional se usados em outro módulo
})
export class UsersModule { }
