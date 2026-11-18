# Rahul Pawar – Portfolio Website

React + Vite + Tailwind CSS + Framer Motion + Lucide React. Rebuilt from the original Canva design, with no Canva dependencies.

## 1. Add your images (required)

Put these files in `public/images/` (export them from Canva via Share → Download → PNG/JPG, or from Instagram):

| File | What it is |
|------|------------|
| `poster.jpg` | The "Social Media & Cinematic Video Creator" services poster (also used for social previews) |
| `gallery-1.jpg` | सेलिब्रेशन photo |
| `gallery-2.jpg` | वास्तुशांती photo |
| `gallery-3.jpg` | वाढदिवस photo |
| `gallery-4.jpg` … `gallery-6.jpg` | The other three gallery photos |

Tip: resize to about 1000px wide and compress (squoosh.app) for fast loading. A missing image shows a neutral fallback instead of a broken icon.

## 2. Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # test the production build
```

## 3. Edit content

All text, services, gallery items, phone number and Instagram handle are in `src/data/content.js`.

## 4. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/rahul-pawar-website.git
git push -u origin main
```

## 5. Free hosting

**Vercel:** vercel.com → Sign in with GitHub → Add New Project → import the repo → Framework "Vite" (auto-detected) → Deploy.

**Netlify:** netlify.com → Add new site → Import from Git → pick the repo → Build command `npm run build`, Publish directory `dist` → Deploy.

Every `git push` redeploys automatically.

## 6. Custom domain

1. Buy a domain (GoDaddy, Namecheap, Hostinger, etc.).
2. **Vercel:** Project → Settings → Domains → Add, enter your domain. **Netlify:** Site configuration → Domain management → Add a domain.
3. At your domain registrar's DNS settings, add the records the host shows you. Usually an `A` record for the root domain and a `CNAME` for `www`. Vercel uses `76.76.21.21` and `cname.vercel-dns.com`, Netlify shows its own values, so copy whatever your dashboard displays.
4. Wait from a few minutes up to 24 hours. HTTPS is enabled automatically.
5. After the domain works, change `og:image` in `index.html` to the full URL, e.g. `https://yourdomain.com/images/poster.jpg`, so link previews work on WhatsApp and Facebook.

## Structure

```
src/
├─ data/content.js
├─ components/ Navbar, Hero, Services, Gallery, Quote, Contact, Footer, Reveal, SmartImage, Logo
├─ App.jsx · main.jsx · index.css
public/ favicon.svg · images/
```
