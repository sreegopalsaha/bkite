<p align="center">
  <a href="https://github.com/sreegopalsaha/bkite" target="_blank" rel="noopener noreferrer">
    <img width="260" src="https://github.com/user-attachments/assets/8a7d37bf-ffb6-440e-a788-bf4cbc03d51d" alt="bkite logo">
  </a>
</p>

<h1 align="center">BKITE - Instant Backend Starter</h1>

<p align="center">
  <strong>The fastest way to kickstart your Express.js backend project.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/v/create-bkite?color=blue&label=npm" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/dt/create-bkite" alt="Total Downloads"></a>
  <a href="https://discord.gg/p9GubC7ZMP"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=flat" alt="Discord"></a>
</p>

**`bkite`** is a CLI tool that instantly scaffolds a clean, production-ready **Express.js backend** — just like `npm create vite@latest` does for frontend projects.
It removes boilerplate and setup hassles, so you can focus on actually building your app.

It’s perfect for everyone, from beginners learning Express.js to professionals prototyping a new idea or teams in a hackathon who need to move fast.

## ✨ Features

* **⚙️ Interactive CLI**: Simple prompts guide you through project setup.
* **📁 Scalable Structure**: A modular, production-ready folder structure from the start.
* **🔄 Core Functionality Included**: Comes with built-in error handling, CORS support, and environment variable setup.
* **⚡ Blazing Fast**: Go from zero to a running server in seconds.
* **🔌 Easy to Customize**: The clean boilerplate is easy to modify and extend.

## 🚀 Getting Started

To create a new `bkite` project, run the following command in your terminal:

```bash
npm create bkite@latest
```

Follow the interactive prompts to name and configure your project. Once it's done:

1. **Navigate to your project directory:**

   ```bash
   cd your-backend-app
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Start the development server:**

   ```bash
   npm run dev
   ```

Your new Express.js server will be running at `http://localhost:3000`.

### ⚙️ Additional Commands

* **Create in a specific folder:**

  ```bash
  # Creates the project inside a new folder named 'my-app'
  npm create bkite@latest my-app
  ```
* **Create in the current directory:**

  ```bash
  # Scaffolds the project in the current working directory
  npm create bkite@latest .
  ```

### 📁 Generated Project Structure

Your new project will have the following structure, designed for scalability and maintainability:

```
my-backend-app/
├── src/
│   ├── configs/        # Database connection setup
│   ├── controllers/    # Route logic and request handling
│   ├── middlewares/    # Custom Express middlewares
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express route definitions
│   ├── utils/          # Utility classes (ApiResponse, ApiError)
│   ├── app.js          # Express app configuration
│   └── index.js        # Server entry point
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🤝 Contributing to bkite

We'd love your help to make `bkite` even better! Contributions of all sizes are welcome.

Before you start, please read our **[CONTRIBUTING.md](https://github.com/sreegopalsaha/bkite/blob/main/CONTRIBUTING.md)** and our **[Code of Conduct](https://github.com/sreegopalsaha/bkite/blob/main/CODE_OF_CONDUCT.md)**.

### Understanding the Monorepo

The `bkite` repository is a monorepo containing multiple packages. The core logic for the CLI tool is located in `packages/create-bkite`.

```
bkite/
├── packages/
│   ├── bkite-core/     # (Future) Shared logic and modules
│   └── create-bkite/   # The CLI tool for scaffolding projects
│       ├── bin/
│       │   └── index.js    # CLI entry point
│       ├── templates/      #The Express.js boilerplate templates
│       └── package.json    # CLI package metadata
├── .github/              # GitHub templates and workflows
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
└── README.md             # You are here!
```

### How to Contribute

1. Fork the repository and create a new branch.
2. Navigate to the CLI package: `cd packages/create-bkite`.
3. Make your changes, whether it's fixing a bug, adding a feature, or improving documentation.
4. Open a pull request with a clear description of your changes.

Check out the [open issues](https://github.com/sreegopalsaha/bkite/issues) to find a good place to start!

## 🌱 Roadmap

We have big plans for `bkite`! Here's what we're working on next:

* [x] JavaScript project template.
* [ ] TypeScript project template.
* [ ] Database options: SQLite, MySQL, PostgreSQL, or none.
* [ ] ORM/ODM support: Prisma, Drizzle.
* [ ] Toggles for common middleware (e.g., authentication, logging).

Have an idea? [Open an issue](https://github.com/sreegopalsaha/bkite/issues/new) or join the discussion on Discord.

## ❤️ Connect with Us

* **Join our Community:** Hang out with us on our [**Discord Server**](https://discord.gg/p9GubC7ZMP).
* **Creator's Socials:**

  * **GitHub:** [@sreegopalsaha](https://github.com/sreegopalsaha)
  * **LinkedIn:** [Sree Gopal Saha](https://www.linkedin.com/in/sreegopalsaha/)
  * **Twitter / X:** [@sreegopalsaha](https://x.com/sreegopalsaha)

## 📜 License

This project is distributed under the MIT License. See the **[LICENSE](https://github.com/sreegopalsaha/bkite/blob/main/LICENSE)** file for more information.
