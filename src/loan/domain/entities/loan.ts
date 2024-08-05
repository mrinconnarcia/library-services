export class Loan {
    id?: string;
    bookId?: string;
    userId?: string;
    loanDate?: Date;
    returnDate?: Date | null;
    status?: string;
  
    constructor(props: Partial<Loan>) {
      Object.assign(this, props);
    }
  }
  