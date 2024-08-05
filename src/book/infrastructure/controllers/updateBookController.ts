// updateBookController.ts
import { Request, Response } from 'express';
import { UpdateBookUseCase } from '../../application/services/updateBookUseCase';
import { updateBookStatusSaga } from '../services/updateBookStatusSaga';

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const { bookId } = req.params;
      const updateData = req.body;

      // Actualizar libro en la base de datos
      const updatedBook = await this.updateBookUseCase.execute(bookId, updateData);

      // Ejecutar saga para manejar el cambio de estado
      await updateBookStatusSaga(bookId, updateData.status);

      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
