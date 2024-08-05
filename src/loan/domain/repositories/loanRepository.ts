import { Loan } from '../entities/loan';

export interface LoanRepository {
  createLoan(loan: Loan): Promise<Loan>;
  updateLoan(loanId: string, loan: Partial<Loan>): Promise<Loan>;
  deleteLoan(loanId: string): Promise<void>;
  getLoanById(loanId: string): Promise<Loan | null>;
  getAllLoans(): Promise<Loan[]>;
}
