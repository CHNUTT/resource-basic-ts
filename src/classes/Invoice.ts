// classes
class Invoice {
  constructor(
    readonly client: string,
    private _details: string,
    public amount: number
  ) {}

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
