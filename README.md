# Mark Zuleta — Personal Portfolio

A personal portfolio website built with **HTML, CSS, JavaScript, PHP, and MySQL**.

## 👀 View the portfolio on GitHub Pages

The root **`index.html`** is a static recruiter-friendly preview. It does **not** require PHP, XAMPP, or MySQL.

For the full application, including login and registration, use the PHP files with XAMPP or another PHP-compatible host.

## ✨ Features

- Responsive portfolio layout
- Projects showcase
- About and skills section
- Contact section
- Login and registration interface
- MySQL-backed user registration
- Password hashing with PHP `password_hash()`
- Password verification with `password_verify()`
- Prepared SQL statements
- Smooth scrolling and UI animations

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- PHP 8+
- MySQL / MariaDB
- XAMPP for local development

## 📁 Project Structure

```text
repository/
├── index.html          # GitHub Pages / recruiter preview
├── demo.js
├── style.css
├── images/files...
├── index.php           # PHP login/application entry
├── home.php
├── login.php
├── register.php
├── db.php
├── login.css
├── login.js
├── script.js
├── database/
│   └── portfolio_db.sql
├── README.md
└── .gitignore
```

## ▶️ Run the full PHP/MySQL version locally

1. Install XAMPP.
2. Start **Apache** and **MySQL** in the XAMPP Control Panel.
3. Copy this repository folder into XAMPP's `htdocs` directory.
4. Open phpMyAdmin.
5. Create a database named `portfolio_db`.
6. Import `database/portfolio_db.sql`.
7. Visit the PHP application through `http://localhost/...`.

The default local database configuration is set for the standard XAMPP setup (`root` with an empty password). For other environments, configure `DB_HOST`, `DB_USER`, `DB_PASS`, and `DB_NAME` as environment variables.

## 🔐 Security notes

The public SQL file contains **schema only**. It intentionally does not include real user accounts, email addresses, or passwords.

Do not commit production credentials, `.env` files, or real user data to GitHub.

## 📌 Portfolio review

For a recruiter or team lead who does not have XAMPP installed, open the repository's **`index.html`** through GitHub Pages. The PHP/MySQL files remain available in the repository for technical review.
