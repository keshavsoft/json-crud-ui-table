````md id="4ij2q4"
# Development Guide

This document explains the internal development workflow of `kschema-api-check`.

---

# Local Development

Clone repository:

```bash id="6k0jtu"
git clone https://github.com/keshavsoft/kschema-api-check.git
````

Move into project:

```bash id="p3iw8d"
cd kschema-api-check
```

Install dependencies:

```bash id="f1bhdr"
npm install
```

---

# Folder Structure

```txt id="q5q9ka"
bin/
 └── v10/
      ├── core/
      ├── commands/
      ├── tasks/
      │    ├── actions/
      │    ├── common/
      │    └── tables/

test/
```

---

# Architecture

The project is divided into layers.

## core

Handles:

* parsing
* command resolving
* usage/help
* startup flow

---

## commands

Responsible for:

* command mapping
* command routing

Example:

```txt id="vxux8w"
endPointsJs
appJs
```

---

## tasks/actions

Contains actual feature execution.

Example:

```txt id="3s4x8p"
EndPointsJs/
 ├── ShowAll/
 ├── Insert/
 └── index.js
```

---

# Testing Workflow

The `test` folder is used for local feature testing.

Example:

```txt id="l5zjj3"
test/
 ├── end-points.js
 └── insert.js
```

---

# Running Tests

## Example: ShowAll

File:

```txt id="gvsk0n"
test/insert.js
```

Run:

```bash id="pw2b0j"
node test/insert.js
```

---

# Example Test File

```js id="1y7dqs"
import getLatestVersion from "../bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(`../bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

const startFunc = async () => {
    const func = await load("endPointsJs");

    func({
        action: "ShowAll",
        toPath: process.cwd()
    });
};

startFunc().then();
```

---

# Why Test Folder Exists

The `test` folder allows:

* isolated testing
* rapid debugging
* command execution without npm publish
* direct action testing
* architecture validation

This makes development much faster.

---

# Creating New Actions

Example:

```txt id="j11k8t"
tasks/actions/EndPointsJs/MyNewAction
```

Then register inside:

```txt id="r5j4zf"
tasks/actions/EndPointsJs/index.js
```

Example:

```js id="ln0w9f"
case "MyNewAction":
    myNewAction();

    break;
```

---

# Usage Strategy

There are two levels of usage help.

## Global Usage

Located at:

```txt id="1hy6ig"
core/showUsage.js
```

Used when:

```bash id="34o8mw"
npx kschema-api-check
```

---

## Command Usage

Located inside each command/action module.

Example:

```txt id="zv0brm"
tasks/actions/EndPointsJs/showUsage.js
```

Used when:

```bash id="4b4egp"
npx kschema-api-check endPointsJs
```

---

# Recommended Development Flow

1. Create action
2. Create local test file
3. Run with `node test/...`
4. Validate output
5. Integrate into command flow
6. Publish

---

# Notes

* Uses ES Modules
* Keep actions isolated
* Avoid business logic in core
* Commands should only route
* Actions should execute logic

---

# Future Improvements

* automated test runner
* snapshot testing
* schema validation
* interactive prompts
* auto-generated help menus

---

# Philosophy

> Build reusable developer tooling with clean architecture.

```
```
