<div align="center">

# ☠️ Mini-DVWA

**Deliberately Vulnerable Web Application for Security Education**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4-blue.svg)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-Templating-orange.svg)](https://ejs.co/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-lightgrey.svg)](https://www.sqlite.org/)

[Vulnerabilities](#-vulnerabilities) • [Installation](#-installation) • [Usage](#-usage) • [Disclaimer](#-disclaimer)

</div>

---

## 📖 Overview

**Mini-DVWA** (Mini Damn Vulnerable Web App) is a modern, lightweight educational tool designed to demonstrate common web application security flaws. It provides a safe, legal environment for developers and security enthusiasts to test and understand vulnerabilities.

Unlike traditional vulnerable apps that look outdated, **Mini-DVWA** features a **modern, aesthetic dark-mode UI** with glassmorphism effects, proving that security flaws can exist even in beautiful applications.

## ☠️ Vulnerabilities

| Vulnerability | Description | Risk Level |
|---------------|-------------|------------|
| **SQL Injection (SQLi)** | Bypass authentication using malicious SQL queries. | CRITICAL |
| **Cross-Site Scripting (XSS)** | Inject malicious scripts into the application to execute in victim browsers. | HIGH |
| **IDOR** | Insecure Direct Object References allowing access to other users' private data. | HIGH |
| **Broken Authentication** | Bypass login mechanisms and admin checks. | CRITICAL |
| **CSRF** | Cross-Site Request Forgery to perform unwanted actions on behalf of a user. | MEDIUM |

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite (In-memory/File-based)
- **Frontend**: EJS, Vanilla CSS (Modern Dark Theme)
- **No external heavy frameworks** - Pure, understandable code.

## 📦 Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher)
- npm

### 1. Clone the Repo

```bash
git clone https://github.com/kursat-dev/Mini-DVWA.git
cd mini-dvwa
```

### 2. Install Dependencies

```bash
npm install
```

## 🚀 Usage

```bash
npm start
```
Access the application at `http://localhost:3000`.

## ⚠️ Disclaimer

> [!CAUTION]
> **DANGER: INTENTIONALLY VULNERABLE**
> 
> This application contains **severe security flaws** by design.
> - **DO NOT** upload this to a public server or production environment.
> - **DO NOT** run this on a machine exposed to the internet without strict firewall rules.
> - Use only for **educational purposes** on a local, isolated network.
> 
> The author is not responsible for any damage caused by the misuse of this software.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
