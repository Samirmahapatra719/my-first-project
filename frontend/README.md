# 💬 Real-Time Chat Application

A full-stack real-time chat application(CHATSY) built using **React.js**, **HTML**, **CSS**, **JavaScript**, and **Node.js** with **Socket.io** for instant messaging.

---

## 🚀 Features

* User login with username
* Real-time messaging
* Instant message updates using WebSockets
* Multiple users chatting simultaneously
* Responsive chat interface
* Client–Server architecture
* Live communication without page refresh

---

## 🛠 Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript (ES6)
* Socket.io Client

### Backend

* Node.js
* Express.js
* Socket.io
* CORS

---

## 📂 Project Structure

```
Realtime-Chat-App
│
├── backend
│   └── server.js
│
└── frontend
    └── src
        ├── App.js
        ├── Chat.js
        ├── Login.js
        ├── socket.js
        └── index.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Samirmahapatra719/my-first-project.git
cd Realtime-Chat-App
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm start
```

Application runs on:

```
http://localhost:3000
```

---

## 💻 How It Works

* Users join chat using username.
* Frontend connects to backend using Socket.io.
* Messages are emitted as events.
* Server broadcasts messages to all connected users instantly.

---

## ✨ Future Improvements

* Authentication with JWT
* Private chat rooms
* Online/Offline status
* Message timestamps
* Database integration (MongoDB)
* Dark Mode UI
* Deployment using Vercel & Render

---
## 👨‍💻 Author

**Samir Mahapatra**
Frontend Developer | React Developer

---

## ⭐ Learning Outcome

This project demonstrates:

* Real-time communication
* React component architecture
* WebSocket implementation
* Node.js backend fundamentals
* Full-stack development workflow

---

⭐ If you like this project, give it a star!
