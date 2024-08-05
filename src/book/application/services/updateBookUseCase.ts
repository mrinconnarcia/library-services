import { BookRepository } from '../../domain/repositories/bookRepository';

export class UpdateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: string, bookData: any) {
    return await this.bookRepository.updateBook(bookId, bookData);
  }
}
