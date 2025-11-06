# ⚡ Quick Reference - Portfolio Commands

## 🚀 Common Commands

### Development
```bash
# Start development server
npm start

# Open in browser
http://localhost:3000
```

### Build & Deploy
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Git Commands
```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Sargurui/portfolio.git
git push -u origin main

# Regular updates
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## 📁 File Locations

### Update Content
- **Hero/Bio:** `src/components/Hero.js`
- **Skills:** `src/components/Skills.js`
- **Projects:** `src/components/Projects.js`
- **Experience:** `src/components/Experience.js`
- **Education:** `src/components/Education.js`
- **Contact:** `src/components/Contact.js`

### Update Styling
- **Navigation:** `src/components/Navigation.css`
- **Hero:** `src/components/Hero.css`
- **Skills:** `src/components/Skills.css`
- **Projects:** `src/components/Projects.css`
- **Experience:** `src/components/Experience.css`
- **Education:** `src/components/Education.css`
- **Contact:** `src/components/Contact.css`
- **Global:** `src/App.css`

### Images
- **Location:** `public/assets/`
- **Profile:** `profile.png`
- **Logos:** `supporticon.png`, `adople.png`

## 🔗 Important Links

### Your Portfolio
- **Local:** http://localhost:3000
- **Live:** https://sargurui.github.io/portfolio

### GitHub
- **Repository:** https://github.com/Sargurui/portfolio
- **Settings:** https://github.com/Sargurui/portfolio/settings/pages

### Contact Info
- **Email:** sargurui66murugan@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/sarguru-i/
- **Phone:** +91 6379032189

## 🎨 Theme Colors

```css
Black: #000000
Golden Yellow: #FFD700
Golden Dark: #B8860B
Gray: #a0a0a0
```

## 🛠️ Troubleshooting

### Build Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Issues
```bash
# Check remote
git remote -v

# Re-add remote
git remote set-url origin https://github.com/Sargurui/portfolio.git

# Deploy again
npm run deploy
```

### Clear Cache
```bash
# Windows
rd /s /q node_modules
del package-lock.json
npm install

# Mac/Linux
rm -rf node_modules package-lock.json
npm install
```

## 📝 Quick Updates Checklist

- [ ] Update content in component files
- [ ] Test locally: `npm start`
- [ ] Build: `npm run build`
- [ ] Commit changes: `git add . && git commit -m "Update"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Deploy: `npm run deploy`
- [ ] Wait 2-3 minutes
- [ ] Check live site: https://sargurui.github.io/portfolio

## 🎯 Key Features

✅ 3D Animations (Framer Motion)
✅ Responsive Design
✅ Black & Golden Yellow Theme
✅ 6 Main Sections
✅ Smooth Scroll Navigation
✅ Contact Form
✅ Social Media Links
✅ Project Showcase
✅ Experience Timeline
✅ Skills Display

## 📞 Need Help?

**Email:** sargurui66murugan@gmail.com

---

**Keep this file handy for quick reference! 📌**

