import { LoanRepository } from '../../domain/repositories/loanRepository';
import { Loan } from '../../domain/entities/loan';

export class CreateLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loan: Loan) {
    return await this.loanRepository.createLoan(loan);
  }
}
