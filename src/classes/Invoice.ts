// classes

import HasFormatter from '../interfaces/HasFormatter.js';

class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private _details: string,
    public amount: number
  ) {}

  // this method must be implemented because of the HasFormatter interface
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }

  get details() {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }
}

export default Invoice;
