"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.Dog = exports.Product = exports.User = exports.Book = exports.BankAccount = exports.Student = exports.Person = exports.Rectangle = exports.Car = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Person: ${this.name}, ${this.age} tuổi`;
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        return `Student: ${this.name}, ${this.age} tuổi, grade: ${this.grade}`;
    }
}
exports.Student = Student;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        return `Car: ${this.brand} ${this.model} (${this.year})`;
    }
}
exports.Car = Car;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0)
            this.balance += amount;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    info() {
        return `Book: "${this.title}" - ${this.author} (${this.year})`;
    }
}
exports.Book = Book;
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.User = User;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Woof!";
    }
}
exports.Dog = Dog;
// 10. Account với public / private / readonly
class Account {
    constructor(id, secretPin) {
        this.id = id;
        this._secretPin = secretPin;
        this.createdAt = new Date();
    }
}
exports.Account = Account;
