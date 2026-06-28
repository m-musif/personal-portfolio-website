# Muhammad Musif — AI Engineer Portfolio

[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-0891b2?style=for-the-badge)](https://m-musif.github.io/personal-portfolio-website/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

Professional portfolio showcasing AI/ML projects, Forage certifications, skills, and contact info.

**Live:** https://m-musif.github.io/personal-portfolio-website/

## Highlights

- 6 featured GitHub projects (VLM, AgriVision, YOLOv8, RAG, Multi-Agent AI, Code Review Bot)
- 4 Forage job simulation certifications (JP Morgan, Deloitte, Walmart, Goldman Sachs)
- Downloadable CV: `Muhammad_Musif_CV_Final.docx`
- Deployed via GitHub Actions → GitHub Pages

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, Vite 8, Tailwind CSS 4 |
| Deploy | GitHub Actions, GitHub Pages |
| Content | JSON-driven certifications data |

## Local development

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build
npm run preview
```

## Project structure

```
personal-portfolio-website/
├── frontend/
│   ├── public/          # CV, favicon, robots.txt, sitemap.xml
│   └── src/
│       ├── App.jsx      # Portfolio UI
│       ├── data/        # certificates.json
│       └── assets/      # Project screenshots
├── .github/workflows/   # deploy.yml
└── Muhammad_Musif_CV_Final.docx
```

## Deployment

Push to `main` → GitHub Actions builds and publishes automatically.

**Pages settings:** Source = **GitHub Actions**

## Contact

| | |
|---|---|
| Email | muhammadmusif134@gmail.com |
| GitHub | [m-musif](https://github.com/m-musif) |
| LinkedIn | [muhammad-musif](https://www.linkedin.com/in/muhammad-musif/) |
| Portfolio | [m-musif.github.io/personal-portfolio-website](https://m-musif.github.io/personal-portfolio-website/) |

## Suggested GitHub repo settings (manual)

1. **About → Website:** `https://m-musif.github.io/personal-portfolio-website/` (replace old Vercel URL)
2. **Topics:** `portfolio`, `ai`, `machine-learning`, `computer-vision`, `pytorch`, `react`, `fastapi`, `github-pages`
