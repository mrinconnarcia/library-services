import { LoanRepository } from '../../domain/repositories/loanRepository';

export class ListLoansUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute() {
    return await this.loanRepository.getAllLoans();
  }
}
