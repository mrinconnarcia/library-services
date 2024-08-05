import { notifyBookStatusChange } from './bookExchange';

export const updateBookStatusSaga = async (bookId: string, status: string) => {
  try {
    await notifyBookStatusChange(bookId, status);
  } catch (error) {
    console.error('Saga error:', error);
    throw new Error('Saga failed');
  }
};
