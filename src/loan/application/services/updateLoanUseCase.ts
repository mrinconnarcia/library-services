import { LoanRepository } from '../../domain/repositories/loanRepository';
import { Loan } from '../../domain/entities/loan';

export class UpdateLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loanId: string, loan: Partial<Loan>) {
    return await this.loanRepository.updateLoan(loanId, loan);
  }
}
 