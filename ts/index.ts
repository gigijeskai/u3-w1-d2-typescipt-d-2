class Account {
  balanceInit: number;
  constructor(balanceInit: number) {
    this.balanceInit = balanceInit;
  }
  deposit(num: number) {
    this.balanceInit += num;
  }
  withDraw(num: number) {
    this.balanceInit -= num;
  }
}

class SonAccount extends Account {}
class MotherAccount extends Account {
  addInterest() {
    let num = (this.balanceInit * 10) / 100;
    this.balanceInit += num;
  }
}
let mario = new SonAccount(0);
mario.deposit(100);
mario.withDraw(10);
console.log(mario.balanceInit);
let mammaMaria = new MotherAccount(30);
mammaMaria.addInterest();
console.log(mammaMaria.balanceInit);
