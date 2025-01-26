# 🚀 bkite — Instant Backend Starter

`bkite` is a CLI tool that helps you instantly generate a complete backend folder structure for your Express.js project — just like how `npm create vite@latest` works for frontend apps.

No setup headaches. Just run one command and you're ready to code.

---

## Monorepo Folder Structure

The `bkite` project is organized as a monorepo with this structure:

```
bkite/
├── packages/
│   ├── bkite-core/              # Reserved for reusable core logic (optional/future)
│   └── create-bkite/            # Main CLI tool package
│       ├── bin/
│       │   └── index.js         # Entry point for the CLI (used by `npm create bkite`)
│       ├── templates/
│       │   └── template-js/     # Default Express.js backend template
│       │       └── src/         # Template source structure
│       │       ├── _gitignore   # Renamed to .gitignore on copy
│       │       └── .env         # Sample environment file
│       ├── package.json         # CLI package metadata
│       └── README.md            # CLI usage documentation
├── .gitignore
└── README.md                    # Main project documentation
```

---

## 🛠️ How to Use

To scaffold your backend project, just run:

```bash
npm create bkite@latest
```

This will ask you a few simple questions and then create a complete backend folder structure for you.

You can also:

### ➕ Create a project in a specific folder:

```bash
npm create bkite@latest my-backend-app
```

### 📍 Create the project in your current folder:

```bash
npm create bkite@latest .
```

---

## 📦 What You Get

After running the command, you’ll get a production-ready backend folder like this:

```
my-backend-app/
├── src/
│   ├── configs/             # Database config
│   ├── controllers/         # Route logic
│   ├── middlewares/         # Error handling, etc.
│   ├── models/              # Mongoose models (if needed)
│   ├── routes/              # API routes
│   ├── utils/               # Helpers like ApiError, ApiResponse
│   ├── app.js               # Main Express app
│   └── index.js             # Entry point
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Run Your Server

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run start
```

By default, the server runs at: [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

* Simple and Interactive — Follow prompts to set up.
* Clean Project Structure — Easy to understand and scalable.
* Built-in CORS and Error Handling
* Ready `.env` for configs

---

## 🌱 Future Plans & Call for Contributors

We're just getting started! We plan to add:

* ✅ Options to choose JavaScript or TypeScript
* ✅ Support for different databases (MySQL, PostgreSQL, etc.)
* ✅ Customizable features during setup

👉 We need contributors to help add these!
If you're interested in helping us grow this tool, reach out or open a PR.

---

## 🤝 Connect & Contribute

* Submit issues or pull requests on [GitHub](https://github.com/sreegopalsaha/bkite)
* Connect on [LinkedIn](https://www.linkedin.com/in/sreegopalsaha)

Let’s build something great together 🚀

---

Just run `npm create bkite@latest` and start coding! ❤️