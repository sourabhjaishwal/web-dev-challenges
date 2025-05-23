# Chapter 3 - JavaScript Programming

> **Part 3:** **JS Deep-Dive.**

### **Classes**

ES6 introduced `class` syntax as a cleaner way to create objects and define methods.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

### **Inheritance**

Classes can inherit properties and methods from a parent class using `extends` and `super()`.

```js
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  work() {
    console.log(`${this.name} is working as ${this.role}`);
  }
}
```

### **Date Class**

JavaScript’s built-in `Date` class handles dates and times.

```js
const now = new Date();
console.log(now.toLocaleString());
```

### **Map Class**

`Map` stores key-value pairs with keys of any type and preserves insertion order.

```js
const map = new Map();
map.set('name', 'Alice');
map.set(1, 'one');
console.log(map.get('name')); // Alice
```

### **Promise Class**

A `Promise` represents a value that may be available now, later, or never (asynchronous operations).

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});
promise.then(result => console.log(result));
```

### **Callback Hell**

Nested callbacks cause hard-to-read and maintain code, often called “callback hell” or “pyramid of doom.”

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doAnotherThing(newResult, function(finalResult) {
      console.log(finalResult);
    });
  });
});
```

### **Promise Version of Read File**

Using promises (or async/await) to avoid callback hell in file reading.

```js
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

> **JS Section Completed.** 🚀