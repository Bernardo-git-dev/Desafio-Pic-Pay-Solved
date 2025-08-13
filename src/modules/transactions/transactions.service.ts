import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { AuthorizerService } from '../../external/authorizer.service';
import { NotifierService } from '../../external/notifier.service';
import { UserRepository } from '../users/user.repository';
import { UserEntity } from '../users/entities/user.entity';


@Injectable()
export class TransactionsService {
  constructor(
    private readonly authorizer: AuthorizerService,
    private readonly notifier: NotifierService,
    private readonly userRepo: UserRepository,
  ) { }

  async getUser(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  }

  async transfer(dto: CreateTransferDto): Promise<void> {
    const { payer, payee, value } = dto;
    console.log('➡️  Iniciando transferência', dto);

    const payerUser = await this.userRepo.findById(payer);
    const payeeUser = await this.userRepo.findById(payee);

    if (!payerUser || !payeeUser) {
      console.error('❌ Usuário não encontrado');
      throw new Error('Usuário não encontrado');
    }

    if (!payerUser.canTransfer()) {
      console.error('❌ Usuário não pode transferir');
      throw new Error('Usuário não autorizado a transferir');
    }

    if (payerUser.getBalance() < value) {
      console.error('❌ Saldo insuficiente');
      throw new Error('Saldo insuficiente');
    }

    const isAuthorized = await this.authorizer.authorize();
    console.log('✅ Autorização recebida:', isAuthorized);

    if (!isAuthorized) throw new Error('Transação não autorizada');

    try {
      payerUser.debit(value);
      payeeUser.credit(value);

      await this.userRepo.updateBalance(payerUser);
      await this.userRepo.updateBalance(payeeUser);

      console.log('📤 Enviando notificação...');
      await this.notifier.notify(payeeUser);
      console.log('✅ Transferência finalizada com sucesso!');
    } catch (err) {
      console.error('🔥 Erro durante transação:', err.message);
      throw new Error('Falha ao processar transferência');
    }
  }

}
