import { HasFormatter } from '../interfaces/HasFormatter';

// create payment object
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    readonly amount: number,
    readonly details: string,
  ) {}

  format() : string {
    return `${this.recipient} is owed €${this.amount} for ${this.details}`
  }
}