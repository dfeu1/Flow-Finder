interface LandingProps {
  onStart: () => void
  onBack?: () => void
}

export default function Landing({ onStart, onBack }: LandingProps) {
  return (
    <div className="max-w-2xl mx-auto text-center text-white relative">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl relative">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-xl transition-all border border-white/30 flex items-center gap-2 z-10"
          >
            ← Home
          </button>
        )}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          Flow Finder
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Discover your perfect balance between skill and challenge
        </p>
        
        <div className="mb-8 text-left space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <p className="text-lg text-gray-100">
              Complete a research-based 8-question assessment
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <p className="text-lg text-gray-100">
              See where you land on the skill-challenge spectrum
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <p className="text-lg text-gray-100">
              Get personalized insights to reach your flow state
            </p>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  )
}

