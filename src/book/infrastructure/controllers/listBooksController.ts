import { Request, Response } from 'express';
import { ListBooksUseCase } from '../../application/services/listBooksUseCase';

export class ListBooksController {
  constructor(private listBooksUseCase: ListBooksUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const books = await this.listBooksUseCase.execute();
    res.status(200).json(books);
  }
}
