import { BookRepositoryImpl } from './domain/repositories/bookRepository';
import { CreateBookUseCase } from './application/services/createBookUseCase';
import { GetBookUseCase } from './application/services/getBookUseCase';
import { ListBooksUseCase } from './application/services/listBooksUseCase';
import { UpdateBookUseCase } from './application/services/updateBookUseCase';
import { DeleteBookUseCase } from './application/services/deleteBookUseCase';

const bookRepository = new BookRepositoryImpl();

export const createBookUseCase = new CreateBookUseCase(bookRepository);
export const getBookUseCase = new GetBookUseCase(bookRepository);
export const listBooksUseCase = new ListBooksUseCase(bookRepository);
export const updateBookUseCase = new UpdateBookUseCase(bookRepository);
export const deleteBookUseCase = new DeleteBookUseCase(bookRepository);
