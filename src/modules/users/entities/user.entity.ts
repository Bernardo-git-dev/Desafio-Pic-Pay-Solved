export enum UserType {
  COMMON = 'common',
  MERCHANT = 'merchant',
}

export class UserEntity {
  constructor(
    public readonly id: number,
    public readonly fullName: string,
    public readonly email: string,
    private readonly cpfCnpj: string,
    private password: string,
    public readonly type: UserType,
    private balance: number,
  ) { }

  canTransfer(): boolean {
    return this.type === UserType.COMMON;
  }

  getBalance(): number {
    return this.balance;
  }

  debit(value: number) {
    if (this.balance < value) throw new Error('Saldo insuficiente');
    this.balance -= value;
  }

  credit(value: number) {
    this.balance += value;
  }

  getId(): number {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }
}
