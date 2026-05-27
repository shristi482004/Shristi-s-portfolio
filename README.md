# Shristi — Portfolio 2026

Personal portfolio website built with the MERN stack (MongoDB, Express, React/Vite, Node.js). Sticky-note scrapbook aesthetic with Framer Motion animations.

## Project Structure

```
/portfolio
  /client        Vite + React frontend
  /server        Express + MongoDB backend
  .env.example   Environment variable template
```

## Install

```bash
# Frontend
cd client
npm install

# Backend
cd server
npm install
```

## Development

Run two terminals in parallel:

```bash
# Terminal 1 — frontend (http://localhost:5173)
cd client
npm run dev

# Terminal 2 — backend (http://localhost:5000)
cd server
cp ../.env.example .env   # fill in MONGODB_URI
npm run dev
```

The Vite dev server proxies `/api/*` to `localhost:5000` automatically.

## Adding your photo

Place `shristi.jpg` in `/client/public/shristi.jpg` (already included).

## Content

All site content lives in `/client/src/data/`:

| File | Contents |
|------|----------|
| `projects.js` | All project cards including links |
| `achievements.js` | Awards and recognition |
| `experience.js` | Work experience entries |
| `education.js` | Education timeline |
| `leadership.js` | Leadership & extracurriculars |
| `skills.js` | Skill groups |
| `social.js` | Social link URLs |

Edit these files — the JSX never has hardcoded content.

## Deployment

### Frontend → Vercel

```bash
cd client
npm run build
# Push to GitHub, connect repo on vercel.com
# Build command: npm run build
# Output dir: dist
```

### Backend → Render or Railway

- Set environment variables: `MONGODB_URI`, `PORT`, `CLIENT_ORIGIN`
- Start command: `node index.js`

### Database → MongoDB Atlas

1. Create a free M0 cluster on mongodb.com/atlas
2. Add your connection string to `MONGODB_URI` in the server `.env`

## Environment Variables (server/.env)

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
PORT=5000
CLIENT_ORIGIN=https://your-deployed-frontend.vercel.app
```
