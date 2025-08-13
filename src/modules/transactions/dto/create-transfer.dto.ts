import { IsNumber, IsPositive, IsInt } from 'class-validator';

export class CreateTransferDto {
  @IsNumber()
  @IsPositive({ message: 'O valor deve ser maior que zero' })
  value: number;

  @IsInt({ message: 'O ID do pagador deve ser um número inteiro' })
  @IsPositive({ message: 'O ID do pagador deve ser positivo' })
  payer: number;

  @IsInt({ message: 'O ID do recebedor deve ser um número inteiro' })
  @IsPositive({ message: 'O ID do recebedor deve ser positivo' })
  payee: number;
}
