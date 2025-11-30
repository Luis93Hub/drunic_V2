# Drunic — Corporate Website

This repository contains the source code for the corporate website of Drunic, a company specialized in developing modern websites, e-commerce solutions, and custom software. The project is built with Next.js (App Router) and supports multilingual content, a serverless contact form, and modular sections for services and portfolio.

## 🚀 Key Features

- 🌐 Multilingual support (EN / ES) using next-intl
- 📱 Fully responsive, mobile-first layout
- ⚛️ Reusable React components
- 📩 Serverless contact form (/api/contact)
- ⚡ Modern architecture with Next.js App Router
- 🔍 SEO-optimized structure
- ☁️ One-click deployment on Vercel

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- TypeScript
- next-intl
- Tailwind CSS
- Node.js 18+
- Vercel (Recommended hosting)

## 📂 Project Structure
```
src/
 ├─ app/               # Layouts, routes, and pages
 │   ├─ api/           # Serverless API endpoints
 │   ├─ (en)/          # English pages
 │   ├─ (es)/          # Spanish pages
 │   └─ components/    # Page-specific components
 ├─ components/        # Global shared components
 ├─ styles/            # Global CSS
messages/              # en.json / es.json translations
public/                # Static assets
```

## ⚙️ Installation

```
git clone https://github.com/Luis93Hub/drunic_V2
cd drunic_V2
npm install
npm run dev
```

Local server:
http://localhost:3000

## 🔐 Environment Variables

Create a .env.local file:
```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
FROM_EMAIL=
```
These are required for the contact form functionality.

## 🚀 Deployment
1. Vercel (Recommended)
2. Connect the repository to Vercel
3. Add environment variables
4. Deploy automatically from main

Useful Scripts
```
npm run dev      # Development mode
npm run build    # Production build
npm start        # Run in production
```

## 📄 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## 📞 Contact

For custom development or commercial inquiries:

## Drunic
📧 contact.drunic@gmail.com

## 🪪 License
Released under the MIT License.
