import { Client } from "pg";
import { LoanRepository } from "../../domain/repositories/loanRepository";
import { Loan } from "../../domain/entities/loan";

export class LoanRepositoryImpl implements LoanRepository {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async createLoan(loan: Loan): Promise<Loan> {
    const result = await this.client.query(
      "INSERT INTO loans (book_id, user_id, status, due_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [loan.bookId, loan.userId, loan.status, loan.loanDate]
    );
    return result.rows[0];
  }

  async updateLoan(loanId: string, loan: Partial<Loan>): Promise<Loan> {
    const fields = Object.keys(loan)
      .map(
        (key, index) =>
          `${key.replace(/([A-Z])/g, "_$1").toLowerCase()} = $${index + 2}`
      )
      .join(", ");
    const values = [loanId, ...Object.values(loan)];

    const result = await this.client.query(
      `UPDATE loans SET ${fields} WHERE id = $1 RETURNING *`,
      values
    );
    return result.rows[0];
  }

  async deleteLoan(loanId: string): Promise<void> {
    await this.client.query("DELETE FROM loans WHERE id = $1", [loanId]);
  }

  async getLoanById(loanId: string): Promise<Loan | null> {
    const result = await this.client.query(
      "SELECT * FROM loans WHERE id = $1",
      [loanId]
    );
    return result.rows.length ? result.rows[0] : null;
  }

  async getAllLoans(): Promise<Loan[]> {
    const result = await this.client.query("SELECT * FROM loans");
    return result.rows;
  }
}

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || "5432", 10),
});

client.connect();

export const loanRepository = new LoanRepositoryImpl(client);
