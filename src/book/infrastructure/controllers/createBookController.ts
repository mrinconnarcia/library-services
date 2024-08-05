import { Request, Response } from 'express';
import { CreateBookUseCase } from '../../application/services/createBookUseCase';

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const book = await this.createBookUseCase.execute(req.body);
    res.status(201).json(book);
  }
}
