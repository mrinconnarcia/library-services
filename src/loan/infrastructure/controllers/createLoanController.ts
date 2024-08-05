import { Request, Response } from 'express';
import { CreateLoanUseCase } from '../../application/services/createLoanUseCase';

export class CreateLoanController {
  constructor(private createLoanUseCase: CreateLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const loan = await this.createLoanUseCase.execute(req.body);
    res.status(201).json(loan);
  }
}
