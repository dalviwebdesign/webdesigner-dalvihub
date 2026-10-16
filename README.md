# Mahesh Dalvi — Freelance Website Designer

> **Production Website:** [https://webdesigner.dalvihub.com](https://webdesigner.dalvihub.com)  
> **Tagline:** Websites That Help Your Business Grow.

A modern, responsive, multi-page website built with React, TypeScript, Vite, and Tailwind CSS for **Mahesh Dalvi — Freelance Website Designer**. Engineered for high performance, local search engine discoverability, and direct inquiry generation via WhatsApp and Email.

---

## Verified Business Information

| Property | Details |
| :--- | :--- |
| **Brand Name** | Mahesh Dalvi |
| **Title** | Freelance Website Designer |
| **Production URL** | `https://webdesigner.dalvihub.com` |
| **Email** | `mahesh@dalvihub.com` |
| **WhatsApp** | `+91 9869850188` ([wa.me/919869850188](https://wa.me/919869850188)) |
| **Address** | B7, Navjeevan Society, Near Panchparmeshwar Mandir, Kamagar Hospital Road, Dnyeshwar Nagar, Thane West, Maharashtra 400604, India |
| **Google Maps** | [View on Google Maps](https://www.google.com/maps/search/?api=1&query=B7%2C%20Navjeevan%20Society%2C%20Near%20Panchparmeshwar%20Mandir%2C%20Kamagar%20Hospital%20Road%2C%20Dnyeshwar%20Nagar%2C%20Thane%20West%20400604) |

---

## Tech Stack & Architecture

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`) with `@tailwindcss/vite`
- **Routing:** Hash-based SPA routing via `react-router-dom` (guarantees zero 404s on page refresh across static hosts and GitHub Pages)
- **Icons:** `lucide-react`
- **Typography:** `Plus Jakarta Sans` with `JetBrains Mono` for tabular/code figures
- **SEO & Structured Data:** Semantic HTML5, Schema.org `ProfessionalService` JSON-LD, OpenGraph & Twitter tags, `sitemap.xml`, and `robots.txt`
- **Deployment Target:** GitHub Pages with custom domain `webdesigner.dalvihub.com`

---

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions workflow for GitHub Pages
├── public/
│   ├── CNAME                     # Custom domain: webdesigner.dalvihub.com
│   ├── 404.html                  # SPA redirect fallback script for static hosting
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Canonical sitemap for indexing
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx          # Original MD monogram + brand wordmark
│   │   │   └── SEOHead.tsx       # Dynamic route-based title, meta, & canonical tags
│   │   ├── contact/
│   │   │   └── ContactForm.tsx   # Validated enquiry form with WhatsApp & email handover
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Top Bar (3-zone contract, responsive drawer)
│   │   │   └── Footer.tsx        # Authoritative footer with verified details & map link
│   │   └── portfolio/
│   │       ├── ProjectMockupFrame.tsx  # High-fidelity browser chrome preview card
│   │       └── ProjectModal.tsx        # Comprehensive concept case study modal
│   ├── config/
│   │   └── siteConfig.ts         # Centralized verified business information & navigation
│   ├── data/
│   │   ├── portfolioData.ts      # 3 fictional concept demo projects & specifications
│   │   └── servicesData.ts       # 3 detailed service packages & deliverables
│   ├── pages/
│   │   ├── HomePage.tsx          # Hero, benefits, 3 services, featured work, 4-step process
│   │   ├── AboutPage.tsx         # Design approach, usability, collaboration, biography notes
│   │   ├── ServicesPage.tsx      # Business Website, WordPress, Landing Page, quote actions
│   │   ├── PortfolioPage.tsx     # 3 concept demos with category filtering & specifications
│   │   └── ContactPage.tsx       # Verified contact info, Google Maps, & enquiry form
│   ├── App.tsx                   # Main router and layout shell
│   ├── index.css                 # Global styles, fonts, accessibility & scrollbars
│   └── main.tsx                  # Application entry point
├── index.html                    # Root HTML with meta tags, fonts, & JSON-LD schema
├── metadata.json                 # AI Studio application metadata
├── package.json                  # Dependencies and build scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build and Tailwind configuration
```

---

## Local Development & Build

### 1. Install Dependencies
```bash
# Using Bun (recommended, matches bun.lock)
bun install

# Or using npm
npm install
```

### 2. Start Local Development Server
```bash
bun run dev
# or: npm run dev
```
The local server will start at `http://localhost:3000`.

### 3. Build for Production
```bash
bun run build
# or: npm run build
```
This compiles the application into the `dist/` directory, including the `CNAME`, `robots.txt`, `sitemap.xml`, and hashed asset bundles ready for static hosting.

### 4. Run TypeScript Lint / Check
```bash
bun run lint
# or: npm run lint
```

---

## GitHub Repository Setup & Deployment to GitHub Pages

Follow these step-by-step instructions to publish the website using GitHub Pages and configure your custom subdomain `webdesigner.dalvihub.com`.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account at [github.com](https://github.com).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Repository name: enter `webdesigner-dalvihub` (or your preferred repository name).
4. Select **Public**.
5. Leave "Add a README file" unchecked (a complete README is already included here).
6. Click **Create repository**.

### Step 2: Upload the Source Code
In your local project terminal:
```bash
# Initialize git if not already initialized
git init

# Add all files to staging
git add .

# Commit your code
git commit -m "Initial release: Complete website for Mahesh Dalvi"

# Set branch name to main
git branch -M main

# Add your GitHub repository as remote origin (replace with your actual GitHub URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/webdesigner-dalvihub.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions
1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages** (in the left-hand sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
4. Once selected, GitHub will automatically use the included `.github/workflows/deploy.yml` workflow whenever commits are pushed to `main`.

### Step 4: Configure DNS for the Custom Subdomain (`webdesigner.dalvihub.com`)
1. Log in to your DNS management console where the root domain `dalvihub.com` is hosted (e.g., Cloudflare, GoDaddy, Namecheap, Google Domains).
2. Add a **CNAME record**:
   - **Type:** `CNAME`
   - **Name / Host:** `webdesigner`
   - **Target / Value:** `<YOUR_GITHUB_USERNAME>.github.io`
   - **TTL:** `Automatic` or `3600` (1 hour)
   *(Note: Refer to GitHub's official documentation for any account-specific verification TXT records if requested by GitHub Pages.)*

### Step 5: Add Custom Domain in GitHub Pages Settings
1. Go back to your GitHub repository > **Settings** > **Pages**.
2. Under **Custom domain**, enter:
   ```text
   webdesigner.dalvihub.com
   ```
3. Click **Save**.
4. GitHub Pages will verify the DNS record and check for the `CNAME` file (which is already configured in `/public/CNAME`).

### Step 6: Enable HTTPS
1. Once DNS verification completes (this may take from a few minutes up to 24 hours depending on DNS propagation), the **Enforce HTTPS** checkbox will become selectable.
2. Check the **Enforce HTTPS** box.
3. GitHub Pages will automatically provision a free TLS/SSL certificate from Let's Encrypt.

### Step 7: Verify & Test the Live Website
Visit [https://webdesigner.dalvihub.com](https://webdesigner.dalvihub.com):
- Verify navigation across all 5 pages: Home, Services, Portfolio, About, Contact.
- Test deep linking and page refreshes (handled smoothly via HashRouter).
- Test the direct WhatsApp click-to-chat links (`+91 9869850188`).
- Test the email links (`mahesh@dalvihub.com`).
- Test the Google Maps link to Navjeevan Society, Thane West.
- Test contact form input validation.

---

## Quality & Compliance Guarantees

- **No Fabricated Information:** Contact details, address, and email are strictly verified. All portfolio projects are transparently marked as original concept demonstrations.
- **Accessible Design:** WCAG AA contrast compliance, keyboard focus rings (`:focus-visible`), and semantic markup.
- **Zero-Pill Typography:** Clean unboxed metadata with typographic dot separators, adhering to modern professional design standards.
- **Device Support:** Tested across 320px, 375px, 768px, 1024px, and 1440px displays.
