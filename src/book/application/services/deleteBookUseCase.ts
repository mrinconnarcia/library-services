import { BookRepository } from '../../domain/repositories/bookRepository';

export class DeleteBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string) {
    await this.bookRepository.deleteBook(bookId);
  }
}
