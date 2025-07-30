<p align="center">
  <a href="https://github.com/sreegopalsaha/bkite" target="_blank" rel="noopener noreferrer">
    <img width="260" src="https://github.com/user-attachments/assets/8a7d37bf-ffb6-440e-a788-bf4cbc03d51d" alt="bkite logo">

  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/v/create-bkite?color=blue&label=npm" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/create-bkite">
  <img src="https://img.shields.io/npm/dt/create-bkite" alt="Total Downloads">
  </a>
</p>

<br/>

# 🚀 BKITE — Instant Backend Starter

> The fastest way to kickstart your Express backend project.

---

## 🧠 What is bkite?

**bkite** is a CLI tool that helps you **instantly scaffold a clean and production-ready Express.js backend structure** — just like how `npm create vite@latest` does for frontend apps.

It’s designed for:

* ✨ Beginners who want to learn Express with a real-world structure
* 💼 Developers who need to quickly start backend apps
* 🧱 Hackathon teams who don’t want to waste time on boilerplate

---

## 🛠️ How to Use

To scaffold a project, run:

```bash
npm create bkite@latest
```

Then follow the CLI prompts — and boom, you have a backend project ready to go!

### ➕ Create in a specific folder:

```bash
npm create bkite@latest my-app
```

### 📍 Or in current directory:

```bash
npm create bkite@latest .
```

---

## 📁 Monorepo Folder Structure

The `bkite` project is organized as a **monorepo** using a clean and scalable structure:

```bash
bkite/
├── packages/
│   ├── bkite-core/              # (future) Core shared logic, reusable modules
│   └── create-bkite/            # Main CLI tool package
│       ├── bin/
│       │   └── index.js         # CLI entry (used by npm create)
│       ├── templates/
│       │   └── template-js/     # Express.js boilerplate template
│       ├── package.json         # CLI metadata and scripts
│       └── README.md            # Usage docs for CLI
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md              # Refer to this for contribution help
├── LICENSE
└── README.md                    # You’re reading it.
```

### 🧐 Why this structure?

We're using a **structured monorepo layout** to future-proof the project. This allows us to:

* Add more tools/packages (like a TypeScript version) under `packages/`
* Isolate the CLI logic (`create-bkite`) from reusable backend logic (`bkite-core`)
* Maintain scalable and modular code

---

## 📦 What You Get

After running the CLI, your backend will look like:

```bash
my-backend-app/
├── src/
│   ├── configs/             # DB connection, constants
│   ├── controllers/         # Logic for each route
│   ├── middlewares/         # Error handling, CORS, etc.
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routes
│   ├── utils/               # ApiResponse, ApiError, etc.
│   ├── app.js               # Express app setup
│   └── index.js             # Server entry point
├── .env
├── .gitignore
├── package.json
└── README.md
```

Ready to run. No setup pain.

---

## ▶️ Running the Server

After generating your project:

```bash
cd my-backend-app
npm install
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) — your server is live.

---

## ✨ Features

* ⚙️ Simple CLI prompts
* 📁 Scalable folder structure
* 🔄 Built-in error handling and CORS
* ⚡ Fast project setup
* 🧪 `.env` and `.gitignore` auto-generated
* 🔌 Easy to customize for your use case

---

## 🌱 Future Roadmap

We're just getting started. Here's what we're planning to add:

* [x] JavaScript project template
* [ ] TypeScript project template
* [ ] Database selection: SQLite, MySQL, PostgreSQL, MongoDB, or None
* [ ] ORM/ODM options: Prisma, Drizzle, Mongoose *(based on DB choice)*
* [ ] Smart prompt flow:

  * Select Language (TypeScript / JavaScript)
  * Select Database (MongoDB / PostgreSQL / MySQL / None)
  * If DB ≠ None → Choose ORM/ODM
  * If DB = None → Use core template only
* [ ] Middleware toggles (Auth, Logger, CORS, etc.)

Your ideas are welcome too — [open an issue](https://github.com/sreegopalsaha/bkite/issues) or [start a discussion](https://github.com/sreegopalsaha/bkite/discussions). Let's build this together 🚀

---

## 🤝 Contribute

We'd love your help! Open to:

* New templates (TS, different DBs)
* Bug fixes
* CLI improvements
* Better documentation

Refer to [`CONTRIBUTING.md`](CONTRIBUTING.md) for full guidelines.

Feel free to connect with me directly if you're interested in contributing or have ideas:

* GitHub: [@sreegopalsaha](https://github.com/sreegopalsaha)
* LinkedIn: [Sree Gopal Saha](https://www.linkedin.com/in/sreegopalsaha)

---

## ❤️ Just Run & Build

```bash
npm create bkite@latest
```

> No boilerplate. No wasted time. Just start building your Express backend instantly.
