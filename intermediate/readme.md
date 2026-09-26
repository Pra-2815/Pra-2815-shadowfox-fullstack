
# 🦷 Sakthi Dental Clinic - Full Stack Web Application

A responsive full-stack dental clinic website developed as part of the **ShadowFox Full Stack Development Internship – Intermediate Task**.

The application provides information about Sakthi Dental Clinic, its treatments, facilities, FAQs, contact information, and an online appointment booking system.

---

## 📌 Project Overview

Sakthi Dental Clinic is a dental care website designed for women, children, and families.

The project combines a responsive frontend with a Node.js and Express.js backend and MongoDB database integration.

The application supports:

- Clinic information
- Dental treatment information
- Frequently Asked Questions
- Contact enquiries
- Online appointment requests
- Form validation
- REST API communication
- MongoDB data storage

---

## ✨ Features

### Frontend Features

- Responsive Home page
- About Us page
- Treatments page
- FAQ page
- Contact page
- Appointment booking page
- Privacy page
- Responsive navigation
- Mobile menu
- Appointment call-to-action
- Patient testimonials
- Clinic facilities information

### Contact Form

The contact form includes:

- Name
- Email
- Phone number
- Message

Validation includes:

- Required field validation
- Name validation
- Email format validation
- Phone number validation

### Appointment Form

The appointment form includes:

- Name
- Email
- Phone number
- Appointment date
- Appointment time
- Treatment selection
- Additional message

Validation includes:

- Required fields
- Email validation
- Phone validation
- Appointment date validation
- Prevention of past appointment dates
- Appointment time validation
- Treatment selection validation

---

# 🛠️ Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js
- Mongoose
- CORS
- dotenv

## Database

- MongoDB Atlas

## Development Tools

- Visual Studio Code
- Git
- GitHub
- PowerShell

---

# 📂 Project Structure

```text
shadowfox/
│
└── intermediate/
    │
    ├── README.md
    │
    ├── backend/
    │   │
    │   ├── models/
    │   │   ├── Appointment.js
    │   │   └── Contact.js
    │   │
    │   ├── routes/
    │   │   ├── appointmentRoutes.js
    │   │   └── contactRoutes.js
    │   │
    │   ├── .env
    │   ├── .gitignore
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    └── frontend/
        │
        ├── index.html
        ├── about.html
        ├── treatments.html
        ├── faq.html
        ├── contact.html
        ├── appointment.html
        ├── privacy.html
        ├── style.css
        └── script.js
```
