import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './users/user.repository';
import { UserEntity } from './users/entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) { }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
}
