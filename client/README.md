# Full Stack AI Resume Builder — Frontend (React + Vite + Tailwind)

Frontend for the **Online Resume Builder App** (MERN stack): create resumes from templates, live preview, shareable links, ImageKit-based photo upload + background removal, and AI-assisted resume optimization.

## ✨ Features

- Authentication (sign up / sign in)
- Create and manage resumes (add / edit / delete)
- Multiple resume templates
- Live preview + shareable public link
- Upload a resume and optimize with AI
- Profile photo upload with background removal (ImageKit)

## 🧰 Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Axios
- ImageKit (upload + transformations / background removal)

## 📦 Prerequisites

- Node.js 18+ (recommended)
- Backend running locally or deployed
- ImageKit account (for image upload + transformations)

## ⚙️ Environment Variables

Create a `.env` file in the frontend root:

```bash
# Backend API
VITE_API_BASE_URL=http://localhost:5000

# ImageKit (public config used in frontend)
VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
VITE_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

# Optional: if you request auth params from backend
VITE_IMAGEKIT_AUTH_ENDPOINT=http://localhost:5000/api/imagekit/auth

# Optional: app base URL for share links
VITE_APP_URL=http://localhost:5173
```

Notes:
- Never put the ImageKit **private** key in the frontend.
- If you use authenticated uploads, the frontend should call your backend auth endpoint.

## ▶️ Running Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🔌 Backend Integration

The frontend expects the backend to provide endpoints for:
- Auth (sign up / sign in)
- Resume CRUD (create, read, update, delete)
- Public resume share link (live preview)
- AI optimization
- ImageKit auth (optional, recommended)

Example:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

## 🖼️ Image Upload + Background Removal (ImageKit)

Typical flow:
1. Upload the profile photo via ImageKit
2. Store the returned `url` / `fileId` in the resume document
3. Apply background removal via ImageKit transformations when rendering a template

## 🚀 Deployment

- Deploy on Vercel / Netlify / Cloudflare Pages
- Set the same `.env` variables in your hosting provider
- Point `VITE_API_BASE_URL` to your deployed backend

## 🛠️ Troubleshooting

- **CORS errors:** ensure the backend allows your frontend origin.
- **Image upload fails:** verify ImageKit public key + URL endpoint, and the auth endpoint if used.
- **Share link not working:** confirm backend routes and `VITE_APP_URL`.

## 📝 License

Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — You must give appropriate credit
- NonCommercial — You may not use the material for commercial purposes

Full license text: https://creativecommons.org/licenses/by-nc/4.0/legalcode

## 📧 Support

For issues and questions:
- Create an issue in the GitHub repository
- Contact: [bohigas.nur@gmail.com](mailto:bohigas.nur@gmail.com)