import { Router } from 'express';
import { CreateBookUseCase } from '../../application/services/createBookUseCase';
import { GetBookUseCase } from '../../application/services/getBookUseCase';
import { ListBooksUseCase } from '../../application/services/listBooksUseCase';
import { UpdateBookUseCase } from '../../application/services/updateBookUseCase';
import { DeleteBookUseCase } from '../../application/services/deleteBookUseCase';
import { CreateBookController } from '../controllers/createBookController';
import { GetBookController } from '../controllers/getBookController';
import { ListBooksController } from '../controllers/listBooksController';
import { UpdateBookController } from '../controllers/updateBookController';
import { DeleteBookController } from '../controllers/deleteBookController';
import { bookRepository } from '../repositories/mongoRepository';

const router: Router = Router();

const createBookUseCase = new CreateBookUseCase(bookRepository);
const getBookUseCase = new GetBookUseCase(bookRepository);
const listBooksUseCase = new ListBooksUseCase(bookRepository);
const updateBookUseCase = new UpdateBookUseCase(bookRepository);
const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

const createBookController = new CreateBookController(createBookUseCase);
const getBookController = new GetBookController(getBookUseCase);
const listBooksController = new ListBooksController(listBooksUseCase);
const updateBookController = new UpdateBookController(updateBookUseCase);
const deleteBookController = new DeleteBookController(deleteBookUseCase);

router.post('/books', (req, res) => createBookController.handle(req, res));
router.get('/books/:bookId', (req, res) => getBookController.handle(req, res));
router.get('/books', (req, res) => listBooksController.handle(req, res));
router.put('/books/:bookId', (req, res) => updateBookController.handle(req, res));
router.delete('/books/:bookId', (req, res) => deleteBookController.handle(req, res));

export default router;
