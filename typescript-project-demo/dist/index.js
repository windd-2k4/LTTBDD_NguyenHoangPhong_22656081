"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
// 1. Person
let p = new bai1_1.Person("wind", 20);
console.log(p.displayInfo());
// 2. Student
let s = new bai1_1.Student("wind", 20, "A");
console.log(s.displayAllInfo());
// 3. Car
let c = new bai1_1.Car("Toyota", "Vios", "2022");
console.log(c.showInfo());
// 4. Rectangle
let r = new bai1_1.Rectangle(20, 30);
console.log("Area:", r.area);
console.log("Perimeter:", r.perimeter);
// 5. BankAccount
let acc = new bai1_1.BankAccount(500);
acc.deposit(200);
const ok = acc.withdraw(300);
console.log("Withdraw success:", ok, "Balance:", acc.getBalance());
// 6. Book
let b = new bai1_1.Book("Clean Code", "Robert C. Martin", 2008);
console.log(b.info());
// 7. User private name + getter/setter
let u = new bai1_1.User("Alice");
console.log("User name:", u.name);
u.name = "Bob";
console.log("User name (after set):", u.name);
// 8. Product + filter price > 100
let products = [
    new bai1_1.Product("Mouse", 25),
    new bai1_1.Product("Keyboard", 120),
    new bai1_1.Product("Monitor", 220),
    new bai1_1.Product("USB", 15),
];
let expensive = products.filter((item) => item.price > 100);
console.log("Products > 100:", expensive);
// 9. Animal interface
const dog = new bai1_1.Dog("Milo");
console.log(`${dog.name} says:`, dog.sound());
// 10. Account with public/private/readonly
let account = new bai1_1.Account(1, 1234);
console.log("Account id:", account.id);
console.log("Account createdAt:", account.createdAt);
//Bai11_20
const bai11_20_1 = require("./bai11_20");
const d = new bai11_20_1.Dog11("Rex");
console.log(d.bark());
console.log(new bai11_20_1.Bird("Eagle").fly());
console.log(new bai11_20_1.Fish("Salmon").swim());
console.log(new bai11_20_1.Square(4).area(), new bai11_20_1.Circle(3).area());
console.log(new bai11_20_1.Manager("Alice").manage());
console.log(new bai11_20_1.Developer("Bob").code());
const lib = new bai11_20_1.Library();
lib.addBook(new bai11_20_1.BookItem("Clean Code"));
lib.addUser(new bai11_20_1.UserItem("wind"));
console.log(lib.books, lib.users);
const box = new bai11_20_1.Box(123);
console.log(box.get());
bai11_20_1.Logger.getInstance().log("hello singleton");
console.log(bai11_20_1.MathUtil.add(1, 2), bai11_20_1.MathUtil.subtract(5, 3), bai11_20_1.MathUtil.multiply(2, 4), bai11_20_1.MathUtil.divide(10, 2));
// const animals: AnimalPoly[] = [new DogPoly("Kiki"), new CatPoly("Mimi")];
// animals.forEach(a => console.log(a.speak()));
console.log(new bai11_20_1.Car20("Civic").move(), new bai11_20_1.Bike("Giant").move());
