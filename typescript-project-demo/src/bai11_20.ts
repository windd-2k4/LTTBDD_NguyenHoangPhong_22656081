
export class Animal11 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class Dog11 extends Animal11 {
  bark(): string {
    return `${this.name} says: Woof!`;
  }
}

export class Cat11 extends Animal11 {
  meow(): string {
    return `${this.name} says: Meow!`;
  }
}

// 12. Interfaces Flyable & Swimmable, implement ở Bird & Fish
export interface Flyable {
  fly(): string;
}

export interface Swimmable {
  swim(): string;
}

export class Bird implements Flyable {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
  fly(): string {
    return `${this.species} is flying`;
  }
}

export class Fish implements Swimmable {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
  swim(): string {
    return `${this.species} is swimming`;
  }
}

// 13. Abstract class Shape + Square/Circle
export abstract class Shape {
  abstract area(): number;
}

export class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

export class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// 14. Employee base + Manager/Developer
export class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class Manager extends Employee {
  manage(): string {
    return `${this.name} is managing team`;
  }
}

export class Developer extends Employee {
  code(): string {
    return `${this.name} is coding`;
  }
}

// 15. Library lưu Book và User (đơn giản)
export class BookItem {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class UserItem {
  username: string;
  constructor(username: string) {
    this.username = username;
  }
}

export class Library {
  books: BookItem[] = [];
  users: UserItem[] = [];

  addBook(book: BookItem): void {
    this.books.push(book);
  }

  addUser(user: UserItem): void {
    this.users.push(user);
  }
}

// 16. Generic class Box<T>
export class Box<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  get(): T {
    return this.value;
  }
  set(v: T): void {
    this.value = v;
  }
}

// 17. Singleton Logger
export class Logger {
  private static instance: Logger | null = null;
  private constructor() {}
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// 18. Static class MathUtil
export class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    return b !== 0 ? a / b : NaN;
  }
}

// 19. Polymorphism: AnimalPoly + override speak()
export class AnimalPoly {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return `${this.name} makes a sound`;
  }
}

export class DogPoly extends AnimalPoly {
  speak(): string {
    return `${this.name} barks`;
  }
}

export class CatPoly extends AnimalPoly {
  speak(): string {
    return `${this.name} meows`;
  }
}

// 20. Vehicle interface + Car/Bike implement
export interface Vehicle {
  move(): string;
}

export class Car20 implements Vehicle {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
  move(): string {
    return `${this.model} is driving`;
  }
}

export class Bike implements Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  move(): string {
    return `${this.brand} is riding`;
  }
}
