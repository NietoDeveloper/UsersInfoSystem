<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=220&section=header&text=STUDENT%20INFO%20SYSTEM&fontSize=54&fontColor=FFD700&fontAlignY=42&desc=🎓%20Student%20Management%20Web%20App%20%C2%B7%20MERN%20Stack&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=20&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=760&lines=%F0%9F%93%9D+Add%2C+View%2C+Update%2C+Delete+Students;%E2%9C%85+Built-In+Form+Validation;%F0%9F%93%B1+Interactive%2C+Responsive+UI;%F0%9F%94%8C+React+%2B+Express+%2B+MongoDB;%F0%9F%8F%86+%231+GitHub+Committer+in+Colombia)](https://git.io/typing-svg)

<br/>

<p align="center">
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/Engineer-Manuel%20Nieto-blue?style=for-the-badge&logo=github"/>
  </a>
  <a href="https://committers.top/colombia#NietoDeveloper">
    <img src="https://img.shields.io/badge/Committers.top-%231%20Colombia-gold?style=for-the-badge"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=000"/>
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/NietoDeveloper/UsersInfoSystem">
    <img src="https://img.shields.io/badge/📂_Source-NietoDeveloper%2FUsersInfoSystem-000000?style=for-the-badge&logo=github&logoColor=FFD700"/>
  </a>
</p>

</div>

---

## 📋 Overview

A **Student Information Management System** — a web application designed to add, manage, and list student details efficiently. The project is built with modern web development technologies to provide a user-friendly interface and reliable functionality.

---

## 🗂️ Project Structure

```text
UsersInfoSystem/
├── back-end/          # Node.js + Express API, MongoDB integration
└── client/            # React frontend
    ├── public/
    └── src/
        └── components/  # Reusable UI components
```

---

## 🔄 Student Record Flow

```mermaid
flowchart LR
    A([👤 Admin / User]) -->|Fill Form| B[React Client]
    B -->|Validate Input| C{Form Validation}
    C -->|Valid| D[Axios Request]
    C -->|Invalid| E[⚠️ Inline Error]
    D --> F[Express API]
    F -->|CRUD Operation| G[(MongoDB\nStudents Collection)]
    G -->|Response| H([📋 Updated Student List])

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style C fill:#06B6D4,color:#000,stroke:#06B6D4
    style E fill:#FF0000,color:#fff
    style H fill:#000,color:#FFD700,stroke:#FFD700
```

---

## ✨ Features

- **Full CRUD Operations:** Add, view, update, and delete student details.
- **Interactive & Responsive UI:** Enhanced usability with Material-UI or Bootstrap.
- **Form Validation:** Built-in validation ensuring accurate data entry.

---

## 🛠️ Technologies Used

<div align="center">

| Layer | Technologies |
|:------|:-------------|
| 🎨 **Frontend** | React.js |
| ⚙️ **Backend** | Node.js, Express.js |
| 🗄️ **Database** | MongoDB |
| 💅 **Styling** | CSS |

</div>

---

## 🚀 Installation

**Step 1 — Clone the repository**

```bash
git clone https://github.com/NietoDeveloper/UsersInfoSystem
```

**Step 2 — Navigate to the project directory**

```bash
cd UsersInfoSystem
```

**Step 3 — Install dependencies**

**Frontend**

```bash
npx create-react-app my-app
cd my-app
npm install axios
```

**Backend**

```bash
# ~/Project_dir/
mkdir server
cd server
npm init -y
npm install express body-parser cors mongoose
```

**Step 4 — Configure environment variables**

Create a `.env` file in the `server` directory with your MongoDB connection string and other necessary variables.

**Step 5 — Run the application**

**Backend**

```bash
# ~/Project_dir/
cd server
node index.js
```

**Frontend**

```bash
# ~/Project_dir/
cd my-app
npm start
```

Open the application in your browser at `http://localhost:3000`.

---

## 👨‍💻 Author

**Manuel Nieto (NietoDeveloper)**
GitHub: [@NietoDeveloper](https://github.com/NietoDeveloper)

---

## 📄 License

This project is licensed under the **MIT License**.

<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=120&section=footer&animation=fadeIn" width="100%"/>

</div>























sh
git clone https://github.com/NietoDeveloper/UsersInfoSystem
```

**Step 2 — Navigate to the project directory**

```bash
cd UsersInfoSystem
```

**Step 3 — Install dependencies**

**Frontend**

```bash
npx create-react-app my-app
cd my-app
npm install axios
```

**Backend**

```bash
# ~/Project_dir/
mkdir server
cd server
npm init -y
npm install express body-parser cors mongoose
```

**Step 4 — Configure environment variables**

Create a `.env` file in the `server` directory with your MongoDB connection string and other necessary variables.

**Step 5 — Run the application**

**Backend**

```bash
# ~/Project_dir/
cd server
node index.js
```

**Frontend**

```bash
# ~/Project_dir/
cd my-app
npm start
```

Open the application in your browser at `http://localhost:3000`.

---

## 👨‍💻 Author
