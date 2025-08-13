import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserEntity } from '../modules/users/entities/user.entity';

@Injectable()
export class NotifierService {
  async notify(user: UserEntity): Promise<void> {
    try {
      await axios.post('https://util.devi.tools/api/v1/notify', {
        userId: user.getId(),
        email: user.getEmail(),
      });
    } catch (error) {
      console.error('Falha ao enviar notificação:', error.message);
      // Em produção, pode usar retry ou fallback
    }
  }
}
