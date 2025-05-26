# 🚀 JavaScript Training – Day 2: Intermediate Concepts

Welcome back!  
Today we'll dive into more powerful features of JavaScript, including destructuring, array functions, prototypes, and more.

---

## 🧩 Destructuring

Destructuring lets you unpack values from arrays or properties from objects into distinct variables.

### ✅ Array Destructuring
```js
const arr = [1, 2, 3];
const [a, b] = arr; // a = 1, b = 2
```

### ✅ Object Destructuring
```js
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
```

---

## 📚 Array Methods (Prototypes)

JavaScript arrays come with **built-in methods** via prototypes. Common ones:

| Method         | Description                                 |
|----------------|---------------------------------------------|
| `forEach()`    | Executes a function for each array element  |
| `map()`        | Returns a new array by transforming each element |
| `filter()`     | Returns a new array with only elements that match a condition |
| `reduce()`     | Reduces array to a single value             |
| `find()`       | Returns the first element that matches a condition |
| `includes()`   | Checks if an element exists                 |
| `sort()`       | Sorts elements in place                     |
| `push()` / `pop()` | Add/remove from end of array            |
| `shift()` / `unshift()` | Remove/add from beginning of array |

---

## 🧠 Function Prototypes

Functions in JavaScript are also objects and have a prototype.

### ✅ Example
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, I’m ${this.name}`;
};

const p = new Person('Bob');
console.log(p.greet()); // "Hello, I’m Bob"
```

---

## 🌀 Spread and Rest Operators

### ✅ Spread (`...`)
Expands iterable elements.

```js
const a = [1, 2];
const b = [...a, 3, 4]; // [1, 2, 3, 4]
```

### ✅ Rest (`...`)
Collects remaining items.

```js
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
```

---

## 🧰 Arrow Functions

A shorter syntax for writing functions.

```js
const add = (a, b) => a + b;
```

- No `this` binding
- No `arguments` object

---

## 🏷️ Template Literals

Use backticks (`` ` ``) for multi-line and embedded expressions.

```js
const name = 'Sam';
const msg = `Hello, ${name}!`;
```

---

## 📦 Modules (Intro)

Split code across multiple files using modules.

```js
// utils.js
export const greet = (name) => `Hi, ${name}`;

// app.js
import { greet } from './utils.js';
```

---

## 📺 Bonus: YouTube Tutorial

[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

---

## ✅ Practice Challenge

- Use `map()` to double the numbers in an array.
- Destructure an object inside a function parameter.
- Write a function using rest parameters to sum any number of inputs.

---

Happy coding! 💻✨
