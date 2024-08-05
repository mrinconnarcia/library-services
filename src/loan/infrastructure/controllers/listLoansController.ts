import { Request, Response } from 'express';
import { ListLoansUseCase } from '../../application/services/listLoansUseCase';

export class ListLoansController {
  constructor(private listLoansUseCase: ListLoansUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const loans = await this.listLoansUseCase.execute();
    res.status(200).json(loans);
  }
}
