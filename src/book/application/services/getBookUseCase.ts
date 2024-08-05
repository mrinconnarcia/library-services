import { BookRepository } from '../../domain/repositories/bookRepository';

export class GetBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string) {
    return await this.bookRepository.getBookById(bookId);
  }
}
