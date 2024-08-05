import Book from '../entities/book';

export interface BookRepository {
  createBook(bookData: any): Promise<any>;
  getBookById(bookId: string): Promise<any>;
  getAllBooks(): Promise<any[]>;
  updateBook(bookId: string, bookData: any): Promise<any>;
  deleteBook(bookId: string): Promise<void>;
}

export class BookRepositoryImpl implements BookRepository {
  async createBook(bookData: any): Promise<any> {
    const book = new Book(bookData);
    await book.save();
    return book;
  }

  async getBookById(bookId: string): Promise<any> {
    return await Book.findById(bookId);
  }

  async getAllBooks(): Promise<any[]> {
    return await Book.find();
  }

  async updateBook(bookId: string, bookData: any): Promise<any> {
    return await Book.findByIdAndUpdate(bookId, bookData, { new: true });
  }

  async deleteBook(bookId: string): Promise<void> {
    await Book.findByIdAndDelete(bookId);
  }
}
