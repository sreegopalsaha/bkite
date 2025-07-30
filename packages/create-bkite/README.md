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

**BKITE** is a CLI tool that helps you create a working Express.js backend in just a few seconds. No setup needed. It creates all the folders and files you need so you can start writing code right away.

Whether you're a beginner learning Express or a pro needing to prototype something fast, BKITE gives you a production-ready structure in seconds.

It’s designed for:

* ✨ **Beginners** who want to learn Express with a real-world structure
* 💼 **Developers** who need to quickly start backend apps
* 🧱 **Hackathon teams** who don’t want to waste time on boilerplate

---

## ⚡️ Quick Start

```bash
npm create bkite@latest
```

Answer a few prompts — and boom 💥 — you’ve got a complete Express backend ready.

Create in a folder:

```bash
npm create bkite@latest my-backend-app
```

Initialize in current directory:

```bash
npm create bkite@latest .
```

---

## 📁 What You Get

A clean, modular Express.js backend:

```
my-backend-app/
├── src/
│   ├── configs/             # DB/env config files
│   ├── controllers/         # All business logic
│   ├── middlewares/         # Error, request handling
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routers
│   ├── utils/               # Common helpers
│   ├── app.js               # Express instance
│   └── index.js             # Server start point
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Run the Server

```bash
npm install
npm run dev
```

Server runs at: **[http://localhost:3000](http://localhost:3000)**

---

## 🔥 Why BKITE?

* 🧠 Prompt-powered setup
* 📆 Clean modular structure
* 🔐 Prebuilt CORS and error middleware
* ⚙️ `.env` pre-configured

---

## 🌱 Roadmap

* [ ] TypeScript support
* [ ] Choose DB: MongoDB, MySQL, PostgreSQL
* [ ] ORM/ODM options: Prisma, Drizzle, Mongoose

> **PRs are welcome!** Docs, features, tests — help us grow!

---

## 🤝 Contribute & Connect

* GitHub: [sreegopalsaha/bkite](https://github.com/sreegopalsaha/bkite)
* LinkedIn: [Sree Gopal Saha](https://www.linkedin.com/in/sreegopalsaha/)

---

## ✅ TL;DR

```bash
npm create bkite@latest
```

That’s it. Clean backend, ready to code. Zero config, zero mess.
