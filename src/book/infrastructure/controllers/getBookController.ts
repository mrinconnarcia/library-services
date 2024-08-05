import { Request, Response } from 'express';
import { GetBookUseCase } from '../../application/services/getBookUseCase';

export class GetBookController {
  constructor(private getBookUseCase: GetBookUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const book = await this.getBookUseCase.execute(req.params.bookId);
    res.status(200).json(book);
  }
}
