# 🚀 Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## Step 1: Initialize Git Repository (if not already done)

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click on "New repository"
3. Name it: `portfolio`
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/Sargurui/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

### Option 1: Using npm deploy script (Recommended)

```bash
npm run deploy
```

This will automatically:
- Build your project
- Deploy to GitHub Pages
- Your site will be live at: `https://sargurui.github.io/portfolio`

### Option 2: Using GitHub Actions (Automatic)

The GitHub Actions workflow is already set up in `.github/workflows/deploy.yml`.

1. Push your code to the `main` branch
2. Go to your repository on GitHub
3. Click on "Settings" → "Pages"
4. Under "Source", select "gh-pages" branch
5. Click "Save"

Every time you push to the `main` branch, your site will automatically rebuild and deploy!

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select the branch:
   - If using npm deploy: Select `gh-pages` branch
   - If using GitHub Actions: Select `gh-pages` branch
5. Click "Save"

Your site will be published at: `https://sargurui.github.io/portfolio`

## 🔄 Updating Your Portfolio

After making changes to your portfolio:

### Using npm deploy:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

### Using GitHub Actions:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
(GitHub Actions will automatically deploy)

## 📝 Customization

To customize for your own repository:

1. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```

2. Update the repository URL:
   ```bash
   git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```

## 🐛 Troubleshooting

### Site not loading CSS/JS files

Make sure the `homepage` field in `package.json` matches your GitHub Pages URL.

### 404 Error on GitHub Pages

1. Check if GitHub Pages is enabled in repository settings
2. Make sure you selected the correct branch (`gh-pages`)
3. Wait a few minutes for the deployment to complete

### Build errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎉 Success!

Your portfolio should now be live at: `https://sargurui.github.io/portfolio`

Share it with the world! 🌟

## 📧 Need Help?

If you encounter any issues, feel free to reach out:
- Email: sargurui66murugan@gmail.com
- LinkedIn: [linkedin.com/in/sarguru-i](https://www.linkedin.com/in/sarguru-i/)

---

**Built with ❤️ and AI**

