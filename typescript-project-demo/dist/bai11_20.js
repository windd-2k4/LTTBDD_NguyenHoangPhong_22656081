"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car20 = exports.CatPoly = exports.DogPoly = exports.AnimalPoly = exports.MathUtil = exports.Logger = exports.Box = exports.Library = exports.UserItem = exports.BookItem = exports.Developer = exports.Manager = exports.Employee = exports.Circle = exports.Square = exports.Shape = exports.Fish = exports.Bird = exports.Cat11 = exports.Dog11 = exports.Animal11 = void 0;
class Animal11 {
    constructor(name) {
        this.name = name;
    }
}
exports.Animal11 = Animal11;
class Dog11 extends Animal11 {
    bark() {
        return `${this.name} says: Woof!`;
    }
}
exports.Dog11 = Dog11;
class Cat11 extends Animal11 {
    meow() {
        return `${this.name} says: Meow!`;
    }
}
exports.Cat11 = Cat11;
class Bird {
    constructor(species) {
        this.species = species;
    }
    fly() {
        return `${this.species} is flying`;
    }
}
exports.Bird = Bird;
class Fish {
    constructor(species) {
        this.species = species;
    }
    swim() {
        return `${this.species} is swimming`;
    }
}
exports.Fish = Fish;
// 13. Abstract class Shape + Square/Circle
class Shape {
}
exports.Shape = Shape;
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
// 14. Employee base + Manager/Developer
class Employee {
    constructor(name) {
        this.name = name;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    manage() {
        return `${this.name} is managing team`;
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    code() {
        return `${this.name} is coding`;
    }
}
exports.Developer = Developer;
// 15. Library lưu Book và User (đơn giản)
class BookItem {
    constructor(title) {
        this.title = title;
    }
}
exports.BookItem = BookItem;
class UserItem {
    constructor(username) {
        this.username = username;
    }
}
exports.UserItem = UserItem;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
exports.Library = Library;
// 16. Generic class Box<T>
class Box {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(v) {
        this.value = v;
    }
}
exports.Box = Box;
// 17. Singleton Logger
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
exports.Logger = Logger;
Logger.instance = null;
// 18. Static class MathUtil
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return b !== 0 ? a / b : NaN;
    }
}
exports.MathUtil = MathUtil;
// 19. Polymorphism: AnimalPoly + override speak()
class AnimalPoly {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound`;
    }
}
exports.AnimalPoly = AnimalPoly;
class DogPoly extends AnimalPoly {
    speak() {
        return `${this.name} barks`;
    }
}
exports.DogPoly = DogPoly;
class CatPoly extends AnimalPoly {
    speak() {
        return `${this.name} meows`;
    }
}
exports.CatPoly = CatPoly;
class Car20 {
    constructor(model) {
        this.model = model;
    }
    move() {
        return `${this.model} is driving`;
    }
}
exports.Car20 = Car20;
class Bike {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        return `${this.brand} is riding`;
    }
}
exports.Bike = Bike;
