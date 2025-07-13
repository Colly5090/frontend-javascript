# TypeScript Project: Exploring Core & Advanced Concepts

This project is designed to introduce and reinforce TypeScript concepts through practical tasks. Each task builds on the previous ones, exploring the use of interfaces, classes, advanced types, namespaces, declaration merging, and branding conventions.

---

## 📁 Project Structure

- `task_0`: Creating a student interface and rendering student data with vanilla JavaScript.
- `task_1`: Building a teacher interface, extending it, and working with class methods.
- `task_2`: Advanced typing concepts including function interfaces, type predicates, and string literal types.
- `task_3`: Using ambient namespaces and declaring types for external JS libraries.
- `task_4`: Working with internal namespaces, declaration merging, and polymorphism.
- `task_5`: Implementing branded types to enforce nominal typing.

---

## 🧠 Tasks Overview

### ✅ `task_0`: Creating a Student Interface
- Define an interface `Student` with properties: `firstName`, `lastName`, `age`, and `location`.
- Render a list of students into a HTML table using vanilla JavaScript.

### ✅ `task_1`: Teachers and Classes
- Define a `Teacher` interface with required and optional attributes.
- Add support for arbitrary extra attributes.
- Extend `Teacher` interface to create `Directors`.
- Create class `StudentClass` that implements its behavior through an interface.
- Print teacher names with a custom function.

### ✅ `task_2`: Advanced Employee Types
- Define `DirectorInterface` and `TeacherInterface`.
- Implement `Director` and `Teacher` classes with specific behavior.
- Use type predicates (e.g., `isDirector`) to determine instance types.
- Use string literal types (e.g., `Subjects = "Math" | "History"`) for subject control.

### ✅ `task_3`: Ambient Namespaces
- Work with ambient declarations (`crud.d.ts`) to describe types from a JS library (`crud.js`).
- Use triple-slash directives and import these types into `main.ts`.

### ✅ `task_4`: Namespaces & Declaration Merging
- Define a `Subjects` namespace with:
  - A shared `Teacher` interface.
  - A base `Subject` class with `setTeacher()`.
  - Extended classes `Cpp`, `Java`, and `React`, each with unique teaching experiences and availability logic.

### ✅ `task_5`: Brand Convention & Nominal Typing
- Define `MajorCredits` and `MinorCredits` interfaces with branding.
- Implement `sumMajorCredits()` and `sumMinorCredits()` to prevent mixing similar structures.

---

## 🚀 Getting Started

### Prerequisites

Ensure the following tools are installed:

- Node.js
- npm
- TypeScript
- Webpack

### Installation

```bash
# Navigate to project directory
cd 0x04-TypeScript

# Install dependencies
npm install

