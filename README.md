# Mini Get & Share – Fullstack Project with NestJS + Angular

This project is a mini version of the solution offered by Get & Share: a property management application. It includes a backend built with NestJS and a standalone Angular frontend, connected via a REST API.

---

## Tech Stack

### Backend: NestJS
- Modular Node.js framework
- ORM: Sequelize
- Database: SQLite
- Validation: class-validator / class-transformer
- Typing: TypeScript

### Frontend: Angular (standalone)
- Standalone components
- Form with `ngModel`
- Services for HTTP communication
- Two-way binding using `[(ngModel)]`
- Dynamic display with `*ngFor`, `*ngIf`

---

## Installation and Launch

### 1. Clone the repository
```bash
git clone https://github.com/your-username/mini-get-and-share.git
cd mini-get-and-share
```

### 2. Start the backend
```bash
cd backend
npm install
npm run start:dev
```
API available at: http://localhost:3000/properties

### 3. Start the frontend
```bash
cd ../frontend
npm install
ng serve
```
App available at: http://localhost:4200

---

## Features

### ✅ Backend (NestJS)
- `GET /properties`: fetch all properties
- `POST /properties`: create a new property
- `GET /properties/:id`: fetch a property by ID
- `PUT /properties/:id`: update a property
- `DELETE /properties/:id`: delete a property

### ✅ Frontend (Angular)
- Property creation form
- Dynamic property list via `*ngFor`
- Connected to backend via Angular `HttpClient` service

---

## Concepts Applied

- **Modular architecture (NestJS & Angular)**
- **Strict typing with TypeScript**
- **Automatic data validation (DTOs + class-validator)**
- **Clean HTTP communication using Angular services**
- **Standalone Angular components**

This project helped me explore NestJS and Angular hands-on, and understand their strengths compared to Django / React. 🙌

