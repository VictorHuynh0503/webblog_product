# Website Blog & Analytics App

This project is a full-stack web application with a TypeScript backend (Express, Supabase) and a frontend (React, TailwindCSS, PostCSS). It is organized into two main folders:

- `backend/`: API server, connects to Supabase or other APIs
- `frontend/`: UI components, pages, and services

---

## 1. Project Structure

```
website_blog/
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
└── README.md
```

---

## 2. Setup Instructions

### Backend

1. Install dependencies:
   ```powershell
   cd backend
   npm init -y
   npm install express @supabase/supabase-js
   npm install --save-dev typescript @types/node @types/express
   npx tsc --init
   ```
2. Configure environment variables:
   - Create a `.env` file in `backend/`:
     ```env
     SUPABASE_URL=your-supabase-url
     SUPABASE_KEY=your-supabase-key
     ```
3. Run the backend server:
   ```powershell
   npx tsc
   node dist/index.js
   ```

### Frontend

1. Install dependencies:
   ```powershell
   cd frontend
   npm init -y
   npm install react react-dom
   npm install --save-dev typescript tailwindcss postcss autoprefixer
   npx tailwindcss init
   npx tsc --init
   ```
2. Add Tailwind to your CSS:
   - In `src/styles/tailwind.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
3. Build and run the frontend (example with Vite):
   ```powershell
   npm install vite
   npx vite
   ```

---

## 3. Development

- Backend code: `backend/src/`
- Frontend code: `frontend/src/`
- API calls: Use `frontend/src/services/api.ts` to connect to backend
- Supabase logic: Use `backend/src/services/supabaseService.ts`

---

## 4. Deployment

### Backend
- Deploy to services like Vercel, Heroku, or AWS.
- Set environment variables for Supabase in your deployment platform.

### Frontend
- Build static assets:
  ```powershell
  npm run build
  ```
- Deploy to Vercel, Netlify, or any static hosting provider.

---

## 5. Example API Usage

**Backend health check:**
```ts
// backend/src/index.ts
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

**Frontend API call:**
```ts
// frontend/src/services/api.ts
export async function fetchHealth() {
  const res = await fetch('/api/health');
  return res.json();
}
```

---

## 6. Customization
- Add more routes/controllers in `backend/src/controllers/`
- Add more UI components in `frontend/src/components/`
- Extend Supabase logic in `backend/src/services/supabaseService.ts`

---

## 7. Troubleshooting
- Ensure all dependencies are installed.
- Check environment variables for Supabase.
- Use TypeScript for type safety and better development experience.

---

## 8. License
MIT
