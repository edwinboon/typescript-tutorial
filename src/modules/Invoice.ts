import { HasFormatter } from '../interfaces/HasFormatter';

// create invoice object
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    readonly amount: number,
    readonly details: string,
  ) {}

  format() : string {
    return `${this.client} owes €${this.amount} for ${this.details}`
  }
}