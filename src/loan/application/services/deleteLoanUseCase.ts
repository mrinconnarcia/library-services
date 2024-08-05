import { LoanRepository } from '../../domain/repositories/loanRepository';

export class DeleteLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loanId: string) {
    await this.loanRepository.deleteLoan(loanId);
  }
}
