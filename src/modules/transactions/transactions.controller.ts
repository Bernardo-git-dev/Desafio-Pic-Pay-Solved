import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransferDto } from './dto/create-transfer.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post()
  async createTransfer(
    @Body() dto: CreateTransferDto
  ): Promise<any> {
    try {
      await this.transactionsService.transfer(dto);

      const payer = await this.transactionsService.getUser(dto.payer);
      const payee = await this.transactionsService.getUser(dto.payee);

      return {
        message: 'Transferência realizada com sucesso!',
        from: {
          id: payer.id,
          fullName: payer.fullName,
          balance: payer.getBalance(),
        },
        to: {
          id: payee.id,
          fullName: payee.fullName,
          balance: payee.getBalance(),
        },
      };
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro interno' },
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
