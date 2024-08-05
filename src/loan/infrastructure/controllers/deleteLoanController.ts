import { Request, Response } from 'express';
import { DeleteLoanUseCase } from '../../application/services/deleteLoanUseCase';

export class DeleteLoanController {
  constructor(private deleteLoanUseCase: DeleteLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    await this.deleteLoanUseCase.execute(req.params.loanId);
    res.status(204).send();
  }
}
