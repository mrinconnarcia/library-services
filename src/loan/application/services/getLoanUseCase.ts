import { LoanRepository } from '../../domain/repositories/loanRepository';

export class GetLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loanId: string) {
    return await this.loanRepository.getLoanById(loanId);
  }
}
