interface HomeProps {
  onSelectFlowFinder: () => void
  onSelectIdeaGarden: () => void
}

export default function Home({ onSelectFlowFinder, onSelectIdeaGarden }: HomeProps) {
  return (
    <div className="max-w-6xl mx-auto text-white w-full">
      <div className="text-center mb-12 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
          The Space Between Imagination
        </h1>
        <p className="text-xl text-gray-200">
          Every path leads to creativity—where will yours begin?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Flow Finder Card */}
        <button
          onClick={onSelectFlowFinder}
          className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all transform hover:scale-105 hover:rotate-1 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
          <div className="text-6xl mb-4 relative z-10 group-hover:animate-bounce">🌊</div>
          <h2 className="text-3xl font-bold mb-3 text-blue-200 group-hover:text-blue-100 transition-colors relative z-10">
            Flow Finder
          </h2>
          <p className="text-gray-200 mb-4 leading-relaxed relative z-10">
            Based on Csikszentmihalyi's research. An 8-question assessment that maps your position on the flow channel and provides personalized insights.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">Psychology</span>
            <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">Self-Discovery</span>
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Analytics</span>
          </div>
          <div className="text-blue-300 font-semibold group-hover:translate-x-2 transition-transform inline-block">
            Start Assessment →
          </div>
        </button>

        {/* Idea Garden Card */}
        <button
          onClick={onSelectIdeaGarden}
          className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all transform hover:scale-105 hover:-rotate-1 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
          <div className="text-6xl mb-4 relative z-10 group-hover:animate-bounce">🌱</div>
          <h2 className="text-3xl font-bold mb-3 text-green-200 group-hover:text-green-100 transition-colors">
            Creativity Garden
          </h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Plant your ideas and watch the garden grow. A collaborative space where creativity blooms and imagination flourishes.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Creative</span>
            <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm">Collaborative</span>
            <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-sm">Live</span>
          </div>
          <div className="text-green-300 font-semibold group-hover:translate-x-2 transition-transform inline-block">
            Plant an Idea →
          </div>
        </button>
      </div>

      <div className="text-center mt-12 text-gray-300 text-sm">
        <p>A creative exploration created by Daniel Feuer • Made with ❤️ for Understanding and Awakening your Creativity 2025!</p>
      </div>
    </div>
  )
}

