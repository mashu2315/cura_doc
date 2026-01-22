# CuraDoc – Role-Based Signup & Login System

CuraDoc is a role-based authentication and dashboard system built using **Next.js (App Router)**.  
It supports two user roles — **Doctor** and **Patient** — and redirects users to their respective dashboards based on the selected role.

This project is implemented as a **frontend-only application**, using local storage to simulate authentication and persistence.

---

##  Tech Stack Used

- **Next.js 14+** (App Router)
- **React.js**
- **Tailwind CSS** (for all UI styling)
- **Framer Motion** (smooth page transitions)
- **Local Storage** (mock authentication & persistence)
- **TypeScript**

---

##  Features

###  Authentication
- Signup with:
  - Full Name
  - Email
  - Password
  - Role selection (Doctor / Patient)
- Login with role-based validation
- Basic form validation (empty fields, email format, password length)

###  Role-Based Redirection
- Doctor → Doctor Dashboard
- Patient → Patient Dashboard

###  Protected Routes
- Dashboard pages are accessible only after login
- Auto redirect to login if user is not authenticated

###  Dashboards
- Distinct Doctor & Patient dashboards
- Sidebar navigation:
  - Dashboard
  - Appointments
  - History
  - Profile
- Fully functional navigation (desktop & mobile)

###  Profile (Common for Doctor & Patient)
- View profile details
- Edit profile information (mock update)
- View:
  - Appointments
  - Medical / Activity History
- Dummy data shown based on role

###  Appointments & 📋 History
- Shared structure for both roles
- Role-based dummy data rendering

###  UI / UX
- Clean black & white theme
- Responsive layout
- Sidebar → Navbar behavior on small screens
- Smooth page transitions using Framer Motion

---

##  How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
npm run dev
```

### 2️⃣ Start development server
```bash

npm run dev
```
### 3️⃣ Open in browser
```bash
http://localhost:3000

```