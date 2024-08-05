import { notifyLoanStatusChange } from './loanExchange';

export const updateLoanStatusSaga = async (loanId: string, status: string) => {
  try {
    await notifyLoanStatusChange(loanId, status);
  } catch (error) {
    console.error('Saga error:', error);
    throw new Error('Saga failed');
  }
};
