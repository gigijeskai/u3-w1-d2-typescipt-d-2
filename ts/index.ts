// class Account {
//   balanceInit: number;
//   constructor(balanceInit: number) {
//     this.balanceInit = balanceInit;
//   }
//   deposit(num: number) {
//     this.balanceInit += num;
//   }
//   withDraw(num: number) {
//     this.balanceInit -= num;
//   }
// }

// class SonAccount extends Account {}
// class MotherAccount extends Account {
//   addInterest() {
//     let num = (this.balanceInit * 10) / 100;
//     this.balanceInit += num;
//   }
// }
// let mario = new SonAccount(0);
// mario.deposit(100);
// mario.withDraw(10);
// console.log(mario.balanceInit);
// let mammaMaria = new MotherAccount(30);
// mammaMaria.addInterest();
// console.log(mammaMaria.balanceInit);
class MotherAccount {
  balanceInit: number = 0;
  //^proprietà
  constructor(balanceInit: number) {
    this.balanceInit = balanceInit;
  }
  //^costruttore della classe
  deposit(amount: number) {
    this.balanceInit += amount;
  }
  withDraw(amount: number) {
    if (this.balanceInit >= amount) {
      this.balanceInit -= amount;
      this.addInterest();
    } else {
      console.log("saldo max disponibile" + this.balanceInit);
    }
  }
  private addInterest() {
    this.balanceInit -= (this.balanceInit * 10) / 100;
  }
  //^incapsulamento metodo, sara visibile solo in questo blocco di codice e non sarà possibile ereditarla
  printBalance() {
    console.log("pinuccia ha " + this.balanceInit);
  }
  //^metodi
}
class SonAccount extends MotherAccount {
  //^classe ereditata con extends, i metodi sono sovrascritti perchè cambia qualcosa da quelli ereditati
  withDraw(amount: number) {
    if (this.balanceInit >= amount) {
      this.balanceInit -= amount;
    } else {
      console.log("saldo max disponibile " + " " + this.balanceInit);
    }
  }
  printBalance() {
    console.log("mariolino ha " + this.balanceInit);
  }
}

let pinuccia = new MotherAccount(0);
let mariolino = new SonAccount(0);
//^instanze delle classi
pinuccia.deposit(100);
mariolino.deposit(25);
pinuccia.printBalance();
mariolino.printBalance();
pinuccia.withDraw(1000);
mariolino.withDraw(10);
pinuccia.printBalance();
mariolino.printBalance();
