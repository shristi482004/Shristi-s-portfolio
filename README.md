# Shristi's Portfolio

Personal portfolio website. Live at **https://shristi-portfolio-415569814474.us-central1.run.app/**

---

## Tech Stack

### Frontend
| Technology | Version | Role |
|---|---|---|
| React | 19 | UI framework, functional components + hooks |
| Vite | 8 | Build tool, dev server, HMR |
| Framer Motion | 12 | Page and card animations |
| Custom CSS | — | All styling (no CSS framework) |

### Backend
| Technology | Version | Role |
|---|---|---|
| Node.js | 20 | Runtime |
| Express | 5 | HTTP server and API routing |
| Mongoose | 9 | MongoDB ODM (Message schema) |
| Resend | 6 | Transactional email delivery |
| Helmet | 8 | HTTP security headers |
| express-rate-limit | 8 | Rate limiting on contact endpoint (5 req/min) |
| validator | 13 | Server-side input sanitisation |
| dotenv | 17 | Environment variable loading |

### Infrastructure
| Technology | Role |
|---|---|
| Docker (multi-stage) | Builds React, copies dist into Express, single image |
| Google Cloud Run | Hosts the container (us-central1, port 8080) |
| MongoDB Atlas | Cloud database for contact form messages |

---

## Architecture

```
/
  /client         React + Vite frontend
  /server         Express backend
  Dockerfile      Multi-stage build
  .env.example    Environment variable template
```

**Production:** A single Docker container runs Express on port 8080. The multi-stage `Dockerfile` builds the React app first (`npm run build`), then copies the `dist/` output into `server/public/`. Express serves these static assets and falls back to `index.html` for all non-API routes — so the whole site is one deployed service.

**Development:** Two processes run in parallel. The Vite dev server (`:5173`) proxies any `/api/*` requests to the Express server (`:5001`) via `vite.config.js`.

---

## Contact Form Flow

1. User submits name, email, and message via the frontend form.
2. React POSTs to `POST /api/contact`.
3. Express validates and sanitises all fields (validator.js).
4. Rate limiter rejects more than 5 requests per minute from the same IP.
5. Resend sends a formatted HTML email to `shristish484@gmail.com` with `reply-to` set to the sender's address.

---

## Local Development

```bash
# Frontend — http://localhost:5173
cd client
npm install
npm run dev

# Backend — http://localhost:5001
cd server
cp ../.env.example .env   # fill in values
npm install
npm run dev
```

### Environment Variables (`server/.env`)

```env
RESEND_API_KEY=re_...
TO_EMAIL=shristish484@gmail.com
PORT=5001
CLIENT_ORIGIN=http://localhost:5173
```

---

## Content

All site content is in `/client/src/data/` — no hardcoded strings in JSX.

| File | Contents |
|---|---|
| `projects.js` | Project cards with links and thumbnails |
| `achievements.js` | Awards and recognition |
| `experience.js` | Work experience entries |
| `education.js` | Education timeline |
| `leadership.js` | Leadership and extracurriculars |
| `skills.js` | Skill groups |
| `social.js` | Social link URLs |

---

## Build & Deploy

```bash
# Build the Docker image
docker build -t shristi-portfolio .

# Run locally
docker run -p 8080:8080 \
  -e RESEND_API_KEY=re_... \
  -e TO_EMAIL=shristish484@gmail.com \
  shristi-portfolio
```

Deployed to Google Cloud Run via the `gcloud` CLI or Cloud Build trigger pointed at this repo.
