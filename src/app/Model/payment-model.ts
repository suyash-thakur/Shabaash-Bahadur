export class PaymentModel {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    amount: number;
    productinfo: string;
    txnid: number;
    surl: string;
    furl: string;
  
    constructor() {
      this.furl = 'http://localhost:8100';
      this.surl = 'http://localhost:8100';
      this.txnid = this.getRandomInt();
    }
  
    getRandomInt() {
      return Math.floor(100000 + Math.random() * 900000);
    }
  }