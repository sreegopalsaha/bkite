<p align="center">
  <a href="https://github.com/sreegopalsaha/bkite" target="_blank" rel="noopener noreferrer">
    <img width="260" src="https://github.com/user-attachments/assets/8a7d37bf-ffb6-440e-a788-bf4cbc03d51d" alt="bkite logo">
  </a>
</p>

<h1 align="center">BKITE — Instant Backend Starter</h1>

<p align="center">
  <strong>The fastest way to kickstart your Express.js backend project.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/v/create-bkite?color=blue&label=npm" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/dt/create-bkite" alt="Total Downloads"></a>
  <a href="https://discord.gg/p9GubC7ZMP"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=flat" alt="Discord"></a>
</p>

---

`bkite` is a command-line tool that instantly scaffolds a clean, production-ready **Express.js backend**. Stop wasting time on boilerplate and configuration. With one command, you get a scalable project structure so you can start coding immediately.

## ✨ Features

* **🪁 Interactive CLI**: Beautiful prompts guide you through language, database, and ORM selection.
* **🎯 Multiple Templates**: Choose from JavaScript/TypeScript with various database and ORM combinations.
* **📁 Scalable Structure**: A modular, production-ready folder structure from the start.
* **🔄 Core Functionality Included**: Comes with built-in error handling, CORS support, and environment variable setup.
* **⚡ Blazing Fast**: Go from zero to a running server in seconds.
* **🔌 Easy to Customize**: The clean boilerplate is easy to modify and extend.
---

## 🚀 Usage

To create a new `bkite` project, run the following command in your terminal:

```bash
npm create bkite@latest
```

Then the CLI will guide you through:

1. **📝 Project Name**: Enter your project name (with validation)
2. **💻 Language Selection**: Choose JavaScript or TypeScript
3. **🗄️ Database Selection**: Pick PostgreSQL, MySQL, MongoDB, or none
4. **🔧 ORM/ODM Selection**: Select Prisma, Drizzle, Mongoose

Once the template is generated:

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

-----

## 📁 Generated Project Structure

You get a clean, organized, and scalable project structure right out of the box.

```
my-backend-app/
├── src/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

-----
## 💬 Community & Contributions

We welcome all contributions, big or small\! Even a tiny contribution can make a difference.

To get started:

  * **Visit our GitHub repository** to understand our codebase: [https://github.com/sreegopalsaha/bkite](https://github.com/sreegopalsaha/bkite)
  * **Make an issue** on GitHub to discuss your ideas with other contributors and admins: [https://github.com/sreegopalsaha/bkite/issues](https://github.com/sreegopalsaha/bkite/issues)

You can also **join our Discord server** to ask questions or collaborate with other contributors and admins: [Discord](https://discord.gg/p9GubC7ZMP)

## 🔗 Connect with the Creator

* **GitHub:** [@sreegopalsaha](https://github.com/sreegopalsaha)
* **LinkedIn:** [Sree Gopal Saha](https://www.linkedin.com/in/sreegopalsaha/)
* **Twitter / X:** [@sreegopalsaha](https://x.com/sreegopalsaha)
