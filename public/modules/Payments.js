// create invoice object
export class Payments {
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
