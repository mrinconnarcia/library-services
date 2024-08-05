import { Request, Response } from 'express';
import { GetLoanUseCase } from '../../application/services/getLoanUseCase';

export class GetLoanController {
  constructor(private getLoanUseCase: GetLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const loan = await this.getLoanUseCase.execute(req.params.loanId);
    res.status(200).json(loan);
  }
}
