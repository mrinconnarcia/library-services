import { Request, Response } from 'express';
import { DeleteBookUseCase } from '../../application/services/deleteBookUseCase';

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    await this.deleteBookUseCase.execute(req.params.bookId);
    res.status(204).send();
  }
}
