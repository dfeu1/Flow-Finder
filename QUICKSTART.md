# Quick Start Guide 🚀

Get Flow Finder running in 3 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- Chart.js 4
- And all other dependencies

## Step 2: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 3: Open in Browser

Navigate to `http://localhost:5173/` and start using Flow Finder!

---

## Next Steps

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your app will be live in ~30 seconds.

### Local Storage

Flow Finder uses localStorage to save your session history. All data stays on your device - no backend required!

To view your saved data:
1. Complete an assessment
2. Click "View History" on the insights page
3. Or open browser DevTools → Application → Local Storage → check `flow-finder-sessions`

---

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
- Make sure you have Node.js 18+ installed
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Chart not displaying?**
- Check browser console for errors
- Make sure all dependencies installed correctly
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## Creative Extensions Ideas

Want to make this project even more impressive for your class? Try adding:

1. **Animated Transitions** - Use Framer Motion for smooth page transitions
2. **Sound Effects** - Add subtle audio cues for different flow states
3. **Share Feature** - Generate a shareable image of results
4. **Progress Dashboard** - Visualize trends over multiple sessions
5. **Custom Themes** - Let users choose color schemes
6. **Gamification** - Add achievements/badges for reaching flow states
7. **Export Data** - Download session history as CSV
8. **Voice Input** - Use Web Speech API for hands-free assessment
9. **3D Visualization** - Try Three.js for a 3D skill-challenge space
10. **Social Features** - Compare anonymized flow patterns

Have fun building! 🎨



