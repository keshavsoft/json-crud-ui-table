````md
# KSchema API Check

A lightweight CLI utility to validate and inspect `end-points.js` files inside KSchema-based projects.

Built for fast development workflows, clean architecture, and reusable tooling.

---

## Installation

### Run directly with npx

```bash
npx kschema-api-check
````

### Global install

```bash
npm i -g kschema-api-check
```

---

## Purpose

This package helps developers:

* Validate `end-points.js`
* Inspect API route structure
* Automate repetitive checks
* Build scalable CLI workflows
* Extend command-based tooling cleanly

---

# Features

* Clean command architecture
* Action-based execution
* Modular structure
* Easy to extend
* Lightweight
* ES Modules support
* Zero framework dependency

---

# Commands

## endPointsJs

Checks and processes `end-points.js`.

### Usage

```bash
npx kschema-api-check endPointsJs
```

---

# Actions

## ShowAll

Displays all detected endpoints.

### Usage

```bash
npx kschema-api-check endPointsJs ShowAll
```

---

# Example

Suppose your project contains:

```txt
/end-points.js
```

Running:

```bash
npx kschema-api-check endPointsJs ShowAll
```

will analyze the file and display endpoint information.

---

# Project Structure

```txt
bin/
 └── v10/
      ├── commands/
      ├── core/
      ├── tasks/
      │    ├── actions/
      │    ├── common/
      │    └── tables/
      └── start.js
```

---

# Architecture

The CLI follows a layered architecture:

## Core

Responsible for:

* parsing input
* resolving commands
* showing usage
* bootstrapping execution

## Commands

Responsible for:

* command routing
* command validation

## Actions

Responsible for:

* feature execution
* business logic

This separation keeps the codebase maintainable and scalable.

---

# Why This Project Exists

Most projects repeatedly write the same API inspection logic.

This tool centralizes:

* validation
* inspection
* command execution
* reusable CLI workflows

into one clean developer utility.

---

# Development

Clone repository:

```bash
git clone https://github.com/keshavsoft/kschema-api-check.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
node test/insert.js
```

---

# Future Plans

* Insert endpoint templates
* Auto route generation
* Schema validation
* API documentation generation
* Interactive CLI prompts
* Multi-project scanning

---

# Tech Stack

* Node.js
* ES Modules
* JavaScript

---

# Philosophy

> Simple tools. Clean architecture. Fast development.

---

# Author

KeshavSoft

GitHub:
https://github.com/keshavsoft

---

# Repository

https://github.com/keshavsoft/kschema-api-check

---

# License

MIT

```
```
