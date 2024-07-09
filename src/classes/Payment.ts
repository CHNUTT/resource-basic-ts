import HasFormatter from '../interfaces/HasFormatter';

class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private _details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this._details}`;
  }
}

export default Payment;
