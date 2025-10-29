# Creative Spaces

**Flow Finder + Idea Garden: A Dual Creative Experience**

A creative web application featuring two interactive experiences:

1. **Flow Finder** 🌊 - Discover your perfect balance between skill and challenge. Measure your flow state based on Mihaly Csikszentmihalyi's psychological concept.

2. **Idea Garden** 🌱 - A collaborative space where ideas bloom. Plant your thoughts and watch a living garden of creativity grow with contributions from others.

## ✨ Features

### Flow Finder 🌊
- **Research-Based Assessment**: 8 comprehensive questions based on Csikszentmihalyi's flow theory
- **8-Channel Model**: Accurately maps you to one of 7 flow zones using the research-validated model
- **Real-time Visualization**: Beautiful scatter plot showing your position on the skill-challenge spectrum
- **Personalized Insights**: Detailed feedback and actionable recommendations based on your flow zone
- **Session History**: Track your progress over time with localStorage persistence
- **Flow Zones**: Flow, Arousal, Control, Relaxation, Boredom, Apathy, Anxiety

### Idea Garden 🌱
- **Collaborative Creation**: Plant ideas that everyone can see and enjoy
- **Real-time Updates**: Watch ideas bloom instantly across all users
- **Beautiful Animations**: Floating plants with unique positions and styles
- **4 Plant Types**: Flowers, trees, sprouts, and mushrooms
- **Interactive Tooltips**: Hover to read each idea and its author
- **Supabase Integration**: Real-time database with localStorage fallback

## Flow Zones

The app identifies 7 different psychological states:

- **Flow**  - Perfect balance, optimal performance
- **Arousal** - Slightly over-challenged, opportunity for growth
- **Control**  - In command, could seek more challenge
- **Relaxation**  - Low pressure, comfortable state
- **Boredom**  - Under-challenged, need stimulation
- **Apathy**  - Low engagement overall
- **Anxiety**  - Over-challenged, need skill development

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

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Charts**: Chart.js 4 with react-chartjs-2
- **Database**: Firebase Firestore (with localStorage fallback)
- **State Management**: React Hooks (useState, useEffect)
- **Real-time**: Firebase onSnapshot listeners
- **Deployment**: Vercel

## Project Structure

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

## The Science Behind Flow

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

