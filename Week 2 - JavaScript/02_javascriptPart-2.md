# Chapter 3 - JavaScript Programming

> **Part 2:** **JS Advance.**

### **readFiles (Read Two Files)**

You can use the `fs` module in Node.js to read files, either synchronously or asynchronously.

```js
const fs = require('fs');
const data1 = fs.readFileSync('file1.txt', 'utf8');
const data2 = fs.readFileSync('file2.txt', 'utf8');
```

### **CPU Bound Tasks**

CPU-bound tasks require heavy computation and block the main thread, like loops, encryption, or data processing.

```js
function cpuHeavyTask() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
}
```

### **I/O Bound Tasks**

I/O-bound tasks involve operations like reading files, accessing databases, or making network requests, which are slower but can be async.

```js
fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log(data);
});
```

### **Sync Code**

Synchronous code blocks the execution thread until the task finishes.

```js
console.log("Start");
let data = fs.readFileSync('file.txt', 'utf8');
console.log("End");
```

### **Functional Argument**

A function can take another function as an argument, enabling higher-order functionality like callbacks.

```js
function greet(callback) {
  callback("Hello");
}
greet(msg => console.log(msg));
```

### **Read File Using Async**

Use `fs.promises` or `fs.readFile` with a callback or `async/await` to read files without blocking.

```js
const fs = require('fs').promises;

async function readFiles() {
  const file1 = await fs.readFile('file1.txt', 'utf8');
  const file2 = await fs.readFile('file2.txt', 'utf8');
  console.log(file1, file2);
}
```

### **setTimeout**

`setTimeout` schedules a function to run after a delay, without blocking the thread.

```js
console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");
```

### **Async Code**

Async code runs without blocking the main thread using promises or `async/await`.

```js
async function getData() {
  const data = await fetch('https://api.example.com');
  console.log(await data.json());
}
```

### **Call Stack (JS Architecture)**

The call stack manages the execution of function calls in JavaScript; it's **LIFO** (Last-In-First-Out).
When a function is called, it's pushed to the stack, and popped when it returns.

```js
function one() { two(); }
function two() { console.log("Call Stack"); }
one(); // Stack: one → two
```

> **Part 2 Completed, Move to Next Part.** ➡️