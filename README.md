# Ronak Sankaranarayanan — Portfolio

Personal portfolio site built with **React + Vite + Tailwind CSS**, deployed to GitHub Pages.

Live site: [ronakshankar.github.io/ronak-portfolio](https://ronakshankar.github.io/ronak-portfolio)

---

## Local Development

### Install dependencies
```bash
npm install
```

### Start the dev server (with hot-reload)
```bash
npm run dev
```
Opens at `http://localhost:5173` by default.

### Preview the production build locally
```bash
npm run build
npm run preview
```
Opens at `http://localhost:4173`.

---

## Deploying to GitHub Pages

The site is deployed via the `gh-pages` npm package, which pushes the built `dist/` folder to the `github-pages` branch. GitHub Pages is configured in the repo **Settings → Pages** to serve from the `github-pages` branch.

### One-command deploy
```bash
npm run deploy
```
This runs `npm run build` first (via the `predeploy` hook), then pushes the output to the `github-pages` branch automatically.

### Full workflow for updating the live site
```bash
# 1. Make your changes on a feature branch
git checkout -b your-branch-name

# 2. Test locally
npm run dev

# 3. Commit and push your changes
git add <files>
git commit -m "your message"
git push origin your-branch-name

# 4. Merge into main (via PR or directly)
git checkout main
git merge your-branch-name

# 5. Deploy to GitHub Pages (github-pages branch)
npm run deploy
```

After `npm run deploy` completes, GitHub Pages picks up the new build from the `github-pages` branch within ~1 minute.

---

## Project Structure

```
ronak-portfolio/
├── public/               # Static assets (images, resume PDF)
├── src/
│   ├── components/       # React components (Hero, About, Experience, …)
│   ├── data/constants.jsx # All content — experience, skills, projects, education
│   ├── hooks/
│   ├── utils/
│   └── main.jsx
├── vite.config.js        # base: '/ronak-portfolio/'
└── package.json
```

> To update portfolio content (experience bullets, projects, skills, education), edit **`src/data/constants.jsx`** and redeploy.
