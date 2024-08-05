// updateLoanController.ts
import { Request, Response } from 'express';
import { UpdateLoanUseCase } from '../../application/services/updateLoanUseCase';
import { updateLoanStatusSaga } from '../services/updateLoanStatusSaga';

export class UpdateLoanController {
  constructor(private updateLoanUseCase: UpdateLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { loanId } = req.params;
    const updateData = req.body;

    try {
      // Actualizar préstamo en la base de datos
      const updatedLoan = await this.updateLoanUseCase.execute(loanId, updateData);

      // Ejecutar saga para manejar el cambio de estado
      await updateLoanStatusSaga(loanId, updateData.status);

      res.status(200).json(updatedLoan);
    } catch (error) {
      console.error('Error updating loan:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
