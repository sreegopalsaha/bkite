# 🚀 BKITE ![npm](https://img.shields.io/npm/v/create-bkite) ![npm downloads](https://img.shields.io/npm/dt/create-bkite)

**BKITE** is a fast and minimal CLI tool to **instantly scaffold a complete backend folder structure for Express.js** — similar to how create vite@latest works for frontend apps.

No config. No boilerplate mess. Just a clean backend, ready to build.

---

## 🛠️ Usage

To get started, run:

```bash
npm create bkite@latest
```

This will walk you through a few prompts and scaffold a fully working Express.js backend.

You can also:

* Create a project in a specific directory:

  ```bash
  npm create bkite@latest my-backend-app
  ```

* Initialize in the current folder:

  ```bash
  npm create bkite@latest .
  ```

---

## 📁 Project Structure

After running the command, you’ll get:

```
my-backend-app/
├── src/
│   ├── configs/             # DB & environment configs
│   ├── controllers/         # Business logic
│   ├── middlewares/         # Error & request handling
│   ├── models/              # Mongoose models (if using MongoDB)
│   ├── routes/              # Express route handlers
│   ├── utils/               # Helpers like ApiError, ApiResponse
│   ├── app.js               # Express app instance
│   └── index.js             # Main server entry
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Run the Server

Install and start your project:

```bash
npm install
npm run start
```

Server runs on: **[http://localhost:3000](http://localhost:3000)**

---

## ✨ Features

* 🧠 **Prompt-driven setup**
* 📁 **Clean modular structure**
* 🔐 **Prebuilt CORS and error middleware**
* ⚙️ **`.env` ready to configure**

---

## 🌱 Roadmap & Contributions

We're just getting started. Planned features:

* [ ] Choose between **JavaScript or TypeScript**
* [ ] Add support for **PostgreSQL, MySQL**, etc.
* [ ] Toggle features like CORS, MongoDB, Auth, etc.

👉 **We need contributors** to help bring this to life! Whether it's features, docs, or testing — PRs are very welcome.

---

## 🤝 Contribute & Connect

* GitHub: [sreegopalsaha/bkite](https://github.com/sreegopalsaha/bkite)
* LinkedIn: [Sree Gopal Saha](https://www.linkedin.com/in/sreegopalsaha/)

---

Just run `npm create bkite@latest` and start building your backend. Let's ship clean code faster.
