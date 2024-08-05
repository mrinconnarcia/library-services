import { sendMessage } from '../rabbit/rabbitConfig';

export const notifyLoanStatusChange = async (loanId: string, status: string) => {
  await sendMessage('loanStatus', { loanId, status });
};
