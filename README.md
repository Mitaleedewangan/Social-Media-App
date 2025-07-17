# 📱 Social Media App

## 📖 Description

This Social Media App is a full-stack web application that mimics the core functionality of popular platforms like Facebook or Instagram. 
Users can register, log in, and interact with each other through posts, comments, and likes.
The app features a clean and responsive UI with real-time updates (optional), context-based authentication, and dark mode support.

It’s built using **React.js** on the frontend with modular components for maintainability and scalability.
The backend is designed to handle user authentication, post and comment management, and secure data handling.
Whether you're using this as a personal project, a learning tool, or a base for something bigger, this app provides a great foundation for modern social networking features.



---

## 🚀 Features

- 🔐 User authentication (login/register)
- 📝 Post creation and sharing
- ❤️ Like and comment on posts
- 💬 Real-time comment section (optional)
- 🌙 Dark mode (toggle via Context API)
- 👥 Follow/unfollow users (extendable)
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- SCSS
- Context API (for authentication and dark mode)
- React Router
- Axios

**Backend:**

- Node.js
- Express
-  MYSQL 
- JWT for authentication

---

## 🗂️ Project Structure

social-media-app/
├── Backend/ # Backend API
│ ├── public/assests
│ └── src/
│ ├── component/ # UI Components
│ │ ├── comments/
│ │ ├── leftBar/
│ │ ├── navBar/
│ │ ├── post/
│ │ ├── posts/
│ │ ├── rightBar/
│ │ ├── share/
│ │ └── stories/
│ ├── context/
│ │ ├── authContext.js
│ │ └── darkModeContext.js
│ ├── pages/
│ │ ├── home/
│ │ ├── login/
│ │ ├── profile/
│ │ └── register/
│ ├── App.js
│ ├── index.js
│ └── style.scss

