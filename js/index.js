"use strict";
class Account {
    constructor(balanceInit) {
        this.balanceInit = balanceInit;
    }
    deposit(num) {
        this.balanceInit += num;
    }
    withDraw(num) {
        this.balanceInit -= num;
    }
}
class SonAccount extends Account {
}
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
