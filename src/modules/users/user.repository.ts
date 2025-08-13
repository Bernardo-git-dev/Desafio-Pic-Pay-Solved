import { Injectable } from '@nestjs/common';
import { UserEntity, UserType } from './entities/user.entity';

// Mock simples. Em produção, use Prisma.
const usersDb = new Map<number, UserEntity>();

@Injectable()
export class UserRepository {
  constructor() {
    // Mock inicial (remova isso em produção)
    usersDb.set(1, new UserEntity(1, 'João Silva', 'joao@email.com', '11111111111', '123', UserType.COMMON, 1000));
    usersDb.set(2, new UserEntity(2, 'Loja XPTO', 'loja@xpto.com', '22222222222222', '123', UserType.MERCHANT, 0));
  }

  async findById(id: number): Promise<UserEntity | null> {
    return usersDb.get(id) || null;
  }

  async updateBalance(user: UserEntity): Promise<void> {
    usersDb.set(user.id, user); // simula update no "banco"
  }
}
