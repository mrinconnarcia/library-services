import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  status: { type: String, required: true, enum: ['available', 'borrowed'] },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
