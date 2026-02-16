# Full Stack AI Resume Builder — Backend (Node.js + Express + MongoDB)

Backend API for the **Online Resume Builder App** with authentication, resume management, shareable public links, AI-powered optimization, and ImageKit integration.

## ✨ Features

- ✅ User authentication (JWT-based signup/login)
- ✅ Resume CRUD operations (create, read, update, delete)
- ✅ Public resume sharing with unique live links
- ✅ AI-powered resume optimization and content improvement
- ✅ ImageKit integration for secure image uploads and background removal
- ✅ Multiple resume templates support
- ✅ MongoDB data persistence with Mongoose ODM

---

## 🧰 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **ImageKit** - Image upload and transformations
- **OpenAI/Gemini API** - AI resume optimization
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

---

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB (local installation or MongoDB Atlas account)
- ImageKit account (for image upload features)
- OpenAI API key or Gemini API key (for AI features)
- Postman/Insomnia (for API testing)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=mongodb://127.0.0.1:27017/resume_builder
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_builder

# JWT Authentication
JWT_SECRET=your_super_secret_key_here_change_in_production
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRES_IN=7

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

# AI Provider (choose one)
OPENAI_API_KEY=your_openai_api_key
# or
GEMINI_API_KEY=your_gemini_api_key

# Application URL (for generating share links)
APP_BASE_URL=http://localhost:5173
```

### 4. Start MongoDB

**Local MongoDB:**
```bash
# Start MongoDB service
sudo service mongod start
# or
mongod
```

**Using Docker:**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 5. Run the server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start at `http://localhost:5000`

---

## 🧪 Testing with Postman

Import the provided Postman collection for API testing:

1. Create a new environment with variables:
   - `baseUrl`: `http://localhost:5000`
   - `token`: (automatically set after login)

2. Test endpoints in order:
   - Register/Login → Get token
   - Create resume → Get resume ID
   - Test AI endpoints
   - Test image upload auth
   - Test public share link


---

## 🔒 Security Best Practices

- ✅ Helmet.js for security headers
- ✅ Rate limiting to prevent brute force
- ✅ Input validation and sanitization
- ✅ Prepared statements (via Mongoose)
- ✅ JWT tokens with short expiry
- ✅ HTTP-only cookies
- ✅ CORS properly configured
- ✅ Environment variables for secrets
- ✅ Password hashing with bcrypt
- ✅ MongoDB injection prevention

---

## 🐛 Troubleshooting

**MongoDB Connection Error:**
```bash
# Check if MongoDB is running
sudo systemctl status mongod
# Start MongoDB
sudo systemctl start mongod
```

**JWT Issues:**
- Ensure JWT_SECRET is set in .env
- Check token expiry in auth middleware

**CORS Errors:**
- Verify CLIENT_URL matches frontend origin
- Check CORS configuration in server.js

**ImageKit Upload Fails:**
- Verify ImageKit credentials
- Check if auth endpoint is properly configured

---

## 📝 License

Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — You must give appropriate credit
- **NonCommercial** — You may not use the material for commercial purposes

Full license text: https://creativecommons.org/licenses/by-nc/4.0/legalcode

---

## 📧 Support

For issues and questions:
- Create an issue in the GitHub repository
- Contact: [bohigas.nur@gmail.com]

---