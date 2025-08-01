# <img src="https://github.com/user-attachments/assets/6b92b75f-d032-4bae-979b-3e52eb17d0aa" alt="bkite logo" height="50"/> Contributing to bkite

[![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=flat)](https://discord.gg/p9GubC7ZMP)
[![NPM Version](https://img.shields.io/npm/v/create-bkite?color=blue&label=npm)](https://www.npmjs.com/package/create-bkite)
[![Total Downloads](https://img.shields.io/npm/dt/create-bkite)](https://www.npmjs.com/package/create-bkite)

Welcome to the **bkite** community! 🚀 We're thrilled you’re here to help make our Express backend starter even better. Whether it’s code, bug fixes, new templates, or better docs, we welcome all contributions! Let’s build something awesome together.

---

## 🌟 Getting Started

**bkite** is a **monorepo**, meaning we keep multiple projects in one repository under the `packages/` folder. Here’s how to get started:

### Pick Your Project:

* **create-bkite**: The main CLI tool (`npm create bkite@latest`) lives in `packages/create-bkite/`. This is the core of bkite right now, where you can improve the CLI that scaffolds Express apps! 🎉
* **bkite-core**: The `packages/bkite-core/` folder is for future reusable components or shared logic. It’s early days, but we’re open to your ideas.

### Fork and Clone:

1.  **Fork the repo**: Go to `https://github.com/sreegopalsaha/bkite` and click the "Fork" button to create your own copy of the repo.
2.  **Clone your forked repo**:
    ```bash
    git clone [https://github.com/YOUR-USERNAME/bkite.git](https://github.com/YOUR-USERNAME/bkite.git)
    cd bkite
    ```
3.  **Navigate to the project you want to work on**. For example, for the `create-bkite`:
    ```bash
    cd packages/create-bkite
    ```
4.  **Install dependencies**:
    ```bash
    npm install
    ```

---

## 🛠️ How to Contribute

We’re open to all contributions — code, bug fixes, new templates (like TypeScript or database support), documentation, or cool CLI ideas! Here’s the process:

---

## 📦 Project Structure

The project follows a monorepo layout:

```
packages/
├── create-bkite/      # The main CLI tool
└── bkite-core/        # Shared logic and future internals (WIP)
```

Inside `packages/create-bkite/`, you'll find:

```
create-bkite/
├── bin/               # CLI entry point
└── templates/         # All backend template folders (your main area)
```



> You will mostly be working inside `packages/create-bkite/`.

---

## 🚀 Try Before You Contribute

Before contributing, **use the CLI yourself** to understand how it works:

```bash
npm create bkite@latest
````

This helps you grasp how the scaffolding logic works and what the output structure looks like.

## 🧠 How the Template System Works

Each backend stack combination has its own folder inside:

`packages/create-bkite/templates/`

We follow this naming convention:

`<database>-<orm>-<language>`

All lowercase and hyphen-separated.

-----

## 📂 Templates You Can Help Build

Below is a list of required folder combinations. You can contribute one or more of them — just make sure each PR is atomic (one template = one PR).

### ✅ Core Logic

* `core-js/` — already exists  
* `core-ts/`

### ✅ PostgreSQL

  * `postgres-prisma-js/`
  * `postgres-prisma-ts/`
  * `postgres-drizzle-js/`
  * `postgres-drizzle-ts/`

### ✅ MySQL

  * `mysql-prisma-js/`
  * `mysql-prisma-ts/`
  * `mysql-drizzle-js/`
  * `mysql-drizzle-ts/`

### ✅ MongoDB

- `mongodb-mongoose-js/` — already exists  
- `mongodb-mongoose-ts/`  
- `mongodb-prisma-js/`  
- `mongodb-prisma-ts/`  

**Example:** If you’re building a TypeScript backend using MongoDB and Mongoose, your folder should be: `mongodb-mongoose-ts/`

-----

## 📐 Contribution Guidelines

> ⚠️ **Adding a template won’t automatically make it show up in the CLI.**

When users run `npm create bkite@latest`, your template won’t appear unless you also update the logic in `/bin/index.js`.

If /bin/index.js feels confusing, **no problem** — just skip it and we’ll wire it up for you later.  

---

### 🔁 Use Existing Templates as Reference

Start by looking at existing templates:

- `templates/core-js/`
- `templates/mongodb-mongoose-js/`

🔒 **Do not** change the folder structure, file names, or base logic unnecessarily.  
🛠️ Only update the parts relevant to your tech stack (e.g., dependencies, DB config, code in `src/`).

---

### 📦 `package.json` Format

Use the following structure for your `package.json`:

```json
{
  "name": "placeholder",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```
-----

## 🔄 Contribution Workflow

1.  **Fork & Clone**

    ```bash
    git clone [https://github.com/YOUR-USERNAME/bkite.git](https://github.com/YOUR-USERNAME/bkite.git)
    cd bkite/packages/create-bkite
    npm install
    ```

2.  **Create a Branch**

    ```bash
    git checkout -b add/mysql-prisma-ts
    ```

3.  **Add Your Template Folder**
    Add your folder under `templates/`, using the correct naming convention.
    Only commit your folder — no CLI logic or other files.

4.  **Push & Open a Pull Request**

    ```bash
    git push origin add/mysql-prisma-ts
    ```

    Then open a pull request against the `main` branch.

    Link the issue number (e.g., “Closes \#42”) and clearly describe your changes.

-----

## 🧹 Code Practices

  * Keep code minimal and idiomatic
  * Match formatting of `core-js`/`core-ts`
  * Clear commit messages:
      * `Add mysql-drizzle-ts template`
      * `Fix MongoDB connection error in template`
  * Avoid adding new dependencies unless necessary for your stack

-----

Straight to the point. Here you go:

---

## 👥 Join Our Discord — Contributors, Mentors, Curious Folks

Whether you want to **contribute**, **understand the project better**, or just see what we're building —
**join our Discord server**.

We’re also looking for **mentors** to join the **core team** and help:

* Review and merge pull requests
* Collaborate with other core members
* Support new contributors
* Keep things organized and active

If you're interested in being part of the core team, just **hop in the Discord and let us know**.
Just vibe and build.

[![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=flat)](https://discord.gg/p9GubC7ZMP)

## 🙏 Thanks for Being Here

Your contributions matter — even a single folder or typo fix helps move bkite forward.

We’re building a tool for backend developers to move faster, smarter, and cleaner.
Let’s build **bkite**, together.