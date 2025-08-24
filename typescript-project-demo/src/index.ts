import {
  Person,
  Student,
  Car,
  Rectangle,
  BankAccount,
  Book,
  User,
  Product,
  Dog,
  Account,
  Animal,
} from "./bai1";

// 1. Person
let p = new Person("wind", 20);
console.log(p.displayInfo());

// 2. Student
let s = new Student("wind", 20, "A");
console.log(s.displayAllInfo());

// 3. Car
let c = new Car("Toyota", "Vios", "2022");
console.log(c.showInfo());

// 4. Rectangle
let r = new Rectangle(20, 30);
console.log("Area:", r.area);
console.log("Perimeter:", r.perimeter);

// 5. BankAccount
let acc = new BankAccount(500);
acc.deposit(200);
const ok = acc.withdraw(300);
console.log("Withdraw success:", ok, "Balance:", acc.getBalance());

// 6. Book
let b = new Book("Clean Code", "Robert C. Martin", 2008);
console.log(b.info());

// 7. User private name + getter/setter
let u = new User("Alice");
console.log("User name:", u.name);
u.name = "Bob";
console.log("User name (after set):", u.name);

// 8. Product + filter price > 100
let products: Product[] = [
  new Product("Mouse", 25),
  new Product("Keyboard", 120),
  new Product("Monitor", 220),
  new Product("USB", 15),
];
let expensive = products.filter((item) => item.price > 100);
console.log("Products > 100:", expensive);

// 9. Animal interface
const dog: Animal = new Dog("Milo");
console.log(`${dog.name} says:`, dog.sound());

// 10. Account with public/private/readonly
let account = new Account(1, 1234);
console.log("Account id:", account.id);
console.log("Account createdAt:", account.createdAt);

//Bai11_20
import {
  Dog11, Bird, Fish, Square, Circle,
  Manager, Developer, Library, BookItem, UserItem,
  Box, Logger, MathUtil, DogPoly, CatPoly, Car20, Bike
} from "./bai11_20";

const d = new Dog11("Rex");
console.log(d.bark());

console.log(new Bird("Eagle").fly());
console.log(new Fish("Salmon").swim());

console.log(new Square(4).area(), new Circle(3).area());

console.log(new Manager("Alice").manage());
console.log(new Developer("Bob").code());

const lib = new Library();
lib.addBook(new BookItem("Clean Code"));
lib.addUser(new UserItem("wind"));
console.log(lib.books, lib.users);

const box = new Box<number>(123);
console.log(box.get());

Logger.getInstance().log("hello singleton");

console.log(
  MathUtil.add(1,2),
  MathUtil.subtract(5,3),
  MathUtil.multiply(2,4),
  MathUtil.divide(10,2)
);

// const animals: AnimalPoly[] = [new DogPoly("Kiki"), new CatPoly("Mimi")];
// animals.forEach(a => console.log(a.speak()));

console.log(new Car20("Civic").move(), new Bike("Giant").move());

