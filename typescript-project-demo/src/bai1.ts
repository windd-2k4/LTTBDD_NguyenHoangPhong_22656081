class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): string {
    return `Person: ${this.name}, ${this.age} tuổi`;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): string {
    return `Student: ${this.name}, ${this.age} tuổi, grade: ${this.grade}`;
  }
}

export class Car {
  brand: string;
  model: string;
  year: string;

  constructor(brand: string, model: string, year: string) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): string {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}

export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    return this.width * this.height;
  }

  get perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  info(): string {
    return `Book: "${this.title}" - ${this.author} (${this.year})`;
  }
}

class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 9. Interface
interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}

// 10. Account với public / private / readonly
class Account {
  public id: number;
  private _secretPin: number;
  readonly createdAt: Date;

  constructor(id: number, secretPin: number) {
    this.id = id;
    this._secretPin = secretPin;
    this.createdAt = new Date();
  }
}

export {
  Person,
  Student,
  BankAccount,
  Book,
  User,
  Product,
  Dog,
  Account,
};

export type { Animal };

