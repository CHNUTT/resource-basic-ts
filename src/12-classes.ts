// classes
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;
  // constructor(client: string, details: string, amount: number) {
  //   this.client = client;
  //   this.details = details;
  //   this.amount = amount;
  // }
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

const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi';
invTwo.amount = 400;

console.log(invOne, invTwo);
console.log(invoices);
