# JARVIS Assistant 🤖

An advanced AI assistant inspired by Tony Stark's intelligent system. JARVIS provides intelligent assistance with information, problem-solving, coding, productivity, and daily tasks.

## Features

✨ **Intelligent Conversation** - Natural language processing and understanding  
🔧 **Task Automation** - Automate repetitive tasks and workflows  
💻 **Code Assistance** - Help with programming and development  
🚀 **Productivity Tools** - Manage tasks, schedules, and priorities  
🧠 **Learning Hub** - Educational resources and explanations  
⚡ **Real-time Responses** - Fast and efficient processing  
🎯 **Personalization** - Learns and adapts to user preferences  

## Tech Stack

**Frontend:**
- React 18+
- TypeScript
- Tailwind CSS
- Socket.io (Real-time updates)

**Backend:**
- Node.js + Express
- MongoDB
- JWT Authentication
- REST API

**Deployment:**
- Vercel (Frontend)
- Railway/Heroku (Backend)

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ritesh302006/jarvis-assistant.git
cd jarvis-assistant
```

2. **Install dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Configure environment variables**

Create `.env` in backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
```

Create `.env.local` in frontend directory:
```
REACT_APP_API_URL=http://localhost:5000
```

4. **Run the application**

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. **Access the application**
- Frontend: Vite prints the exact preview URL, usually http://localhost:5173
- Backend API: http://localhost:5000

> If you are running this in a container or cloud workspace, use the forwarded port URL for port `5173` instead of `127.0.0.1`. The frontend dev and preview scripts bind to `0.0.0.0` so those forwarded URLs can connect.

## Project Structure

```
jarvis-assistant/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.ts
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Chat
- `GET /api/chat/history` - Get conversation history
- `POST /api/chat/message` - Send message to JARVIS
- `DELETE /api/chat/clear` - Clear conversation history

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Features in Development

- [ ] Voice commands support
- [ ] Advanced AI training
- [ ] Integration with external APIs
- [ ] Mobile application
- [ ] Advanced analytics
- [ ] Custom skill creation

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - See LICENSE file for details

## Author

**Ritesh302006**

## Support

For issues, suggestions, or questions:
- Open an issue on GitHub
- Contact: ritesh302006@example.com

---

*"At its heart, JARVIS is a system designed to help you accomplish more. Intelligently. Efficiently. Effectively."* 🎩✨
