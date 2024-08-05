import { BookRepository } from '../../domain/repositories/bookRepository';

export class CreateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookData: any) {
    return await this.bookRepository.createBook(bookData);
  }
}
