# Rajesh AS — Portfolio

Personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

Light minimal design with editorial typography.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Instrument Serif, DM Sans, Space Mono (via next/font)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. **Place your assets:**
   - Add your profile photo as `/public/photo.jpg`
   - Add your resume as `/public/resume.pdf`

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view.

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment on Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   ```

2. Create a new repo on [github.com](https://github.com) and push:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. Deploy on Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click **New Project** → Import your GitHub repo
   - Framework: Next.js (auto-detected)
   - Click **Deploy**
   - Live in ~60 seconds at `rajesh-as.vercel.app`

4. Optional custom domain:
   - Vercel dashboard → Settings → Domains → Add domain

## Project Structure

```
/app
  layout.tsx        — fonts, metadata, OG tags
  page.tsx          — imports and renders all sections
/components
  Navbar.tsx        — sticky nav, hamburger mobile menu
  Hero.tsx          — photo + text two-column layout
  About.tsx         — education timeline with dots + badges
  Skills.tsx        — category rows with pill tags
  Projects.tsx      — three project cards
  Certifications.tsx— three cert cards
  Contact.tsx       — three contact link rows
  Footer.tsx        — one-line footer
/public
  photo.jpg         — profile photo
  resume.pdf        — resume PDF
/styles
  globals.css       — CSS variables, base resets
```

## License

MIT
