import { LoanRepositoryImpl } from './infrastructure/repositories/postgresRepository';
import { CreateLoanUseCase } from './application/services/createLoanUseCase';
import { GetLoanUseCase } from './application/services/getLoanUseCase';
import { ListLoansUseCase } from './application/services/listLoansUseCase';
import { UpdateLoanUseCase } from './application/services/updateLoanUseCase';
import { DeleteLoanUseCase } from './application/services/deleteLoanUseCase';
import connectPostgres from '../database/connectPostgres';

// Esta función inicializa los casos de uso y el repositorio
export const initializeServices = async () => {
  const client = await connectPostgres(); // Espera la conexión
  const loanRepository = new LoanRepositoryImpl(client);

  return {
    createLoanUseCase: new CreateLoanUseCase(loanRepository),
    getLoanUseCase: new GetLoanUseCase(loanRepository),
    listLoansUseCase: new ListLoansUseCase(loanRepository),
    updateLoanUseCase: new UpdateLoanUseCase(loanRepository),
    deleteLoanUseCase: new DeleteLoanUseCase(loanRepository),
  };
};
