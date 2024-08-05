// bookExchange.ts
import { sendMessage } from '../rabbit/rabbitConfig';

export const notifyBookStatusChange = async (bookId: string, status: string) => {
  await sendMessage('bookStatus', { bookId, status });
};
