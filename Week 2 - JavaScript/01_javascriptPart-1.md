# Chapter 3 - JavaScript Programming

> **Part 1:** **JS Basics.**

### **What is JS**

JavaScript is a lightweight, interpreted scripting language used to create dynamic and interactive content on websites.  
It runs in the browser and can also be used on the server with environments like Node.js.

### **How JS Compiles**

JavaScript is interpreted but modern engines (like V8) use **Just-In-Time (JIT)** compilation to optimize performance during runtime.  
Parsing → Compilation → Execution.

### **Compiler vs Interpreter**

- **Compiler** translates code all at once before execution (e.g., C, Java).  
- **Interpreter** executes code line-by-line (e.g., traditional JS).  
  JS engines today use a hybrid model with JIT compilers.

### **Dynamically Typed Language**

In JavaScript, variables do not need a declared type and can hold any data type, changing at runtime.

```js
let data = 10;  
data = "now a string";
```

### **Single Threaded**

JavaScript uses a single-threaded event loop model, meaning it executes one instruction at a time.
Asynchronous tasks are handled using callbacks, promises, or `async/await`.

### **Garbage Collector**

JavaScript has automatic memory management via garbage collection, which frees memory that is no longer referenced.
No manual memory allocation or deallocation is needed.

### **Variables**

Variables store data. Use `let` and `const` (block-scoped) or `var` (function-scoped, older).

```js
let x = 10;  
const y = 20;
```

### **Datatypes**

JS supports 8 types: `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`, and `Object`.

```js
let name = "John"; // String  
let age = 30;      // Number  
let isTrue = true; // Boolean
```

### **Operators**

JavaScript includes arithmetic, comparison, logical, assignment, and bitwise operators.

```js
let result = (5 + 3) * 2;    // Arithmetic  
let isEqual = (a === b);     // Comparison  
let loggedIn = true && false; // Logical
```

### **Functions**

Functions encapsulate reusable logic and can be declared or expressed anonymously.

```js
function greet(name) {
  return "Hello, " + name;
}
```

### **Conditionals (if-else)**

Conditional statements run different code based on a condition.

```js
if (x > 10) {
  console.log("Greater");
} else {
  console.log("Smaller");
}
```

### **Loops (For-loop)**

Loops allow repetitive execution of code blocks.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### **Objects**

Objects store key-value pairs and are a fundamental data structure in JS.

```js
let person = {
  name: "Alice",
  age: 25
};
```

### **Arrays**

Arrays are ordered lists of values, accessible via index.

```js
let colors = ["red", "green", "blue"];
```

### **Array of Objects**

An array of objects is a common way to represent multiple structured records.

```js
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];
```

### **Object of Objects**

Nested objects are useful for representing hierarchical or grouped data.

```js
let departments = {
  HR: { head: "Alice", count: 5 },
  IT: { head: "Bob", count: 10 }
};
```

> **Part 1 Completed, Move to Next Part.** ➡️