# Flow Finder 🌊

**Discover your perfect balance between skill and challenge**

Flow Finder is an interactive web application that helps you measure and visualize your flow state based on the psychological concept developed by Mihaly Csikszentmihalyi. By assessing your skill level versus challenge level across different life scenarios, you can identify your current mental state and receive personalized recommendations to achieve optimal flow.

## ✨ Features

- **Interactive Questionnaire**: 5 thoughtfully designed questions that assess skill and challenge levels
- **Real-time Visualization**: Beautiful scatter plot showing your position on the skill-challenge spectrum
- **Personalized Insights**: Get specific recommendations based on your flow zone
- **Session History**: Track your progress over time with localStorage persistence
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Gradient backgrounds, smooth animations, and glassmorphism effects

## 🎯 Flow Zones

The app identifies 7 different psychological states:

- **Flow** 🔥 - Perfect balance, optimal performance
- **Arousal** ⚡ - Slightly over-challenged, opportunity for growth
- **Control** 🎯 - In command, could seek more challenge
- **Relaxation** 😌 - Low pressure, comfortable state
- **Boredom** 😴 - Under-challenged, need stimulation
- **Apathy** 💤 - Low engagement overall
- **Anxiety** 😰 - Over-challenged, need skill development

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to Vercel

This app is optimized for Vercel deployment:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   - Push your code to GitHub
   - Import your repository in [Vercel Dashboard](https://vercel.com)
   - Vercel will automatically detect the Vite configuration
   - Click "Deploy"

   Or use the CLI:
   ```bash
   vercel
   ```

3. **Configuration:**
   The `vercel.json` file is already configured for SPA routing.

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Charts**: Chart.js 4 with react-chartjs-2
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: localStorage API
- **Deployment**: Vercel

## 📁 Project Structure

```
flow-finder/
├── src/
│   ├── components/           # React components
│   │   ├── Landing.tsx       # Landing page
│   │   ├── Questionnaire.tsx # 5-question assessment
│   │   ├── Visualization.tsx # Chart.js scatter plot
│   │   └── Insights.tsx      # Results and recommendations
│   ├── data/
│   │   └── questions.ts      # Question data
│   ├── utils/
│   │   ├── flowCalculations.ts  # Core flow logic
│   │   └── storage.ts           # localStorage utilities
│   ├── types.ts              # TypeScript interfaces
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html                # HTML template
├── vercel.json              # Vercel configuration
└── package.json             # Dependencies
```

## 🎨 Customization Ideas

This is a foundation you can build upon! Here are some creative extensions:

- **History Dashboard**: Create a timeline view of all sessions
- **Progress Charts**: Line graphs showing flow score trends over time
- **Custom Questions**: Let users create their own assessment scenarios
- **Sharing**: Generate shareable cards with results
- **Dark/Light Mode**: Toggle between themes
- **Export Data**: Download session history as JSON/CSV
- **Gamification**: Badges for achieving flow states
- **Multi-language**: i18n support
- **Sound Effects**: Audio feedback for different zones
- **Animations**: More elaborate transitions using Framer Motion

## 🧠 The Science Behind Flow

Flow state, discovered by psychologist Mihaly Csikszentmihalyi, occurs when:
- Your skills match the challenge level
- You're fully immersed in the activity
- Time seems to pass differently
- You experience intrinsic motivation

This app helps you identify where you are and how to optimize for flow.

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Credits

- Flow concept by Mihaly Csikszentmihalyi
- Built with ❤️ for creativity and self-improvement

---

**Made for a creativity class project** - Feel free to fork, modify, and make it your own!

