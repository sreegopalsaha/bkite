# 🤝 Contributing to bkite

Welcome to the bkite community! 🚀 We're thrilled you’re here to help make our Express backend starter even better. Whether it’s code, bug fixes, new templates, or better docs, we welcome all contributions! Let’s build something awesome together.

---

## 🌟 Getting Started

**bkite is a monorepo**, meaning we keep multiple projects in one repository under the `packages/` folder. Here’s how to get started:

### Pick Your Project:

* **create-bkite**: The main CLI tool (`create-bkite`) lives in `packages/create-bkite/`. This is the core of bkite right now, where you can improve the CLI that scaffolds Express apps! 🎉
* **core-bkite**: The `packages/bkite-core/` folder is for future reusable components or shared logic. It’s early days, but we’re open to your ideas.

---

### Fork and Clone:

* **Fork the repo**: Go to [https://github.com/sreegopalsaha/bkite](https://github.com/sreegopalsaha/bkite) and click the "Fork" button to create your own copy of the repo.

* **Clone your forked repo**:

  ```bash
  git clone https://github.com/YOUR-USERNAME/bkite.git
  cd bkite
  ```

* **Navigate to the project you want to work on**. For example, for the create-bkite:

  ```bash
  cd packages/create-bkite
  ```

* **Install dependencies**:

  ```bash
  npm install
  ```

---

## 🛠️ How to Contribute

We’re open to all contributions — code, bug fixes, new templates (like TypeScript or database support), documentation, or cool CLI ideas! Here’s the process:

### Start with an Issue:

* Before coding, please open an issue in the main repo to discuss your idea or bug fix. This helps us coordinate and avoid duplicate work.
* Describe your plan clearly (e.g., “Add PostgreSQL template” or “Fix CLI prompt crash”).

### Create a Branch:

* In your forked repo, create a new branch:

  ```bash
  git checkout -b feature/your-feature-name
  ```

* Use descriptive branch names (e.g., `fix/cli-prompt`, `add/typescript-template`).

### Make Changes:

* Work in the relevant folder (e.g., `packages/create-bkite/` for CLI changes).
* Match the existing JavaScript code style.
* Test your changes locally to ensure they work.

### Submit a Pull Request:

* Push your branch to your forked repo:

  ```bash
  git push origin feature/your-feature-name
  ```

* Create a PR from your fork to the `main` branch of `sreegopalsaha/bkite`.

* Link the issue number in your PR description (e.g., “Fixes #123”).

* Explain what your PR does and why it’s awesome.

### Code Review:

* We’ll review your PR as soon as possible and work with you to get it merged! 🙌

---

## 📋 Guidelines

* **Code Style**: Write clean, readable JavaScript.
* **Commits**: Use clear commit messages (e.g., “Add MongoDB template” or “Fix CORS middleware”).
* **Testing**: Test your changes locally.
---

## 🌱 Future Plans for `create-bkite`

We're evolving `create-bkite` into a smart and flexible backend scaffolding CLI, similar to how Vite handles frontend setups. Here's the upcoming logic and template structure we'll support:

### 🧰 Interactive Prompt Flow

We will prompt the user in this logical order:

1. **Select Language:**

   * TypeScript
   * JavaScript

2. **Select Database:**

   * MongoDB
   * PostgreSQL
   * MySQL
   * None

3. **Select ORM/ODM:** *(only shown if DB ≠ None)*

   * Prisma
   * Drizzle
   * Mongoose

> If the user selects `None` for Database, we skip ORM/ODM and only scaffold the core template.

### 📁 Template Folder Naming (Vite-Style)

We'll follow a clear naming convention:

```
templates/
├── core-js/
├── core-ts/
├── mongodb-js/
├── mongodb-ts/
├── postgres-prisma-js/
├── postgres-prisma-ts/
├── mysql-drizzle-js/
├── mysql-drizzle-ts/
```

**Format:**

```
<database>-<orm>-<language>
```

All lowercase, hyphen-separated.

> Example: A TypeScript project using PostgreSQL and Prisma will use: `templates/postgres-prisma-ts/`

This structure allows clean scaling of templates, easier maintenance, and faster onboarding for new contributors.

Let us know if you want to contribute to any of these templates!

---

## 💬 Join the Community

We’re building a fun and inclusive community around bkite! Got questions or ideas? Reach out:

* **GitHub**: [Share ideas in Issues or Discussions](https://github.com/sreegopalsaha/bkite)
* **LinkedIn**: [Sree Gopal Saha](https://www.linkedin.com/in/sree-gopal-saha/) - I’m always active there! 😄

Have a wild idea for a new template, database support, or CLI feature? Let’s discuss it on GitHub or LinkedIn. We want bkite to be the go-to Express starter for everyone! 🚀

---

## ❤️ Thank You!

Every contribution, big or small, helps developers save time and build awesome backends. Thanks for joining the bkite journey!
