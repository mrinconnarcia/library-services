import { BookRepository } from '../../domain/repositories/bookRepository';

export class ListBooksUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.getAllBooks();
  }
}
