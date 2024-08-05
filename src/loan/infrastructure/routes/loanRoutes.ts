import { Router } from 'express';
import { CreateLoanUseCase } from '../../application/services/createLoanUseCase';
import { GetLoanUseCase } from '../../application/services/getLoanUseCase';
import { ListLoansUseCase } from '../../application/services/listLoansUseCase';
import { UpdateLoanUseCase } from '../../application/services/updateLoanUseCase';
import { DeleteLoanUseCase } from '../../application/services/deleteLoanUseCase';
import { CreateLoanController } from '../controllers/createLoanController';
import { GetLoanController } from '../controllers/getLoanController';
import { ListLoansController } from '../controllers/listLoansController';
import { UpdateLoanController } from '../controllers/updateLoanController';
import { DeleteLoanController } from '../controllers/deleteLoanController';
import { loanRepository } from '../repositories/postgresRepository';

const router: Router = Router();

const createLoanUseCase = new CreateLoanUseCase(loanRepository);
const getLoanUseCase = new GetLoanUseCase(loanRepository);
const listLoansUseCase = new ListLoansUseCase(loanRepository);
const updateLoanUseCase = new UpdateLoanUseCase(loanRepository);
const deleteLoanUseCase = new DeleteLoanUseCase(loanRepository);

const createLoanController = new CreateLoanController(createLoanUseCase);
const getLoanController = new GetLoanController(getLoanUseCase);
const listLoansController = new ListLoansController(listLoansUseCase);
const updateLoanController = new UpdateLoanController(updateLoanUseCase);
const deleteLoanController = new DeleteLoanController(deleteLoanUseCase);

router.post('/loans', (req, res) => createLoanController.handle(req, res));
router.get('/loans/:loanId', (req, res) => getLoanController.handle(req, res));
router.get('/loans', (req, res) => listLoansController.handle(req, res));
router.put('/loans/:loanId', (req, res) => updateLoanController.handle(req, res));
router.delete('/loans/:loanId', (req, res) => deleteLoanController.handle(req, res));

export default router;
