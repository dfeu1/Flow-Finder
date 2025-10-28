import { useState, useEffect } from 'react'
import { collection, addDoc, onSnapshot, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Idea, PlantType } from '../types/garden'

interface IdeaGardenProps {
  onBack: () => void
}

const plantEmojis: Record<PlantType, string> = {
  flower: '🌸',
  tree: '🌳',
  sprout: '🌱',
  mushroom: '🍄'
}

const plantColors = [
  '#ff6b9d', '#c44569', '#f8b500', '#38ada9', 
  '#78e08f', '#60a3bc', '#8395a7', '#a29bfe',
  '#fd79a8', '#fdcb6e', '#6c5ce7', '#00b894'
]

export default function IdeaGarden({ onBack }: IdeaGardenProps) {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [newIdea, setNewIdea] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [isPlanting, setIsPlanting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // Listen to Firestore changes in real-time
    const q = query(collection(db, 'ideas'), orderBy('timestamp', 'desc'), limit(50))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedIdeas: Idea[] = []
      snapshot.forEach((doc) => {
        fetchedIdeas.push({ id: doc.id, ...doc.data() } as Idea)
      })
      setIdeas(fetchedIdeas)
    }, () => {
      console.log('Firestore demo mode - using local storage')
      // Fallback to localStorage if Firebase not configured
      const localIdeas = localStorage.getItem('garden-ideas')
      if (localIdeas) {
        setIdeas(JSON.parse(localIdeas))
      }
    })

    return () => unsubscribe()
  }, [])

  const getRandomPosition = () => ({
    x: Math.random() * 80 + 10, // 10-90%
    y: Math.random() * 70 + 15  // 15-85%
  })

  const getRandomPlantType = (): PlantType => {
    const types: PlantType[] = ['flower', 'tree', 'sprout', 'mushroom']
    return types[Math.floor(Math.random() * types.length)]
  }

  const handlePlantIdea = async () => {
    if (!newIdea.trim() || !authorName.trim()) return

    setIsPlanting(true)
    const position = getRandomPosition()
    
    const idea: Omit<Idea, 'id'> = {
      text: newIdea.trim(),
      author: authorName.trim(),
      timestamp: Date.now(),
      color: plantColors[Math.floor(Math.random() * plantColors.length)],
      x: position.x,
      y: position.y,
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as Idea['size'],
      plantType: getRandomPlantType()
    }

    // Check if Firebase is configured (not demo mode)
    const isFirebaseConfigured = import.meta.env.VITE_FIREBASE_PROJECT_ID && 
                                   import.meta.env.VITE_FIREBASE_PROJECT_ID !== 'demo-project'

    if (isFirebaseConfigured) {
      try {
        await addDoc(collection(db, 'ideas'), idea)
      } catch (err) {
        console.log('Firebase error, falling back to localStorage:', err)
        // Fallback to localStorage
        const localIdea = { ...idea, id: Date.now().toString() }
        const updatedIdeas = [localIdea, ...ideas]
        setIdeas(updatedIdeas)
        localStorage.setItem('garden-ideas', JSON.stringify(updatedIdeas))
      }
    } else {
      // Use localStorage directly (Firebase not configured)
      console.log('Using localStorage (Firebase not configured)')
      const localIdea = { ...idea, id: Date.now().toString() }
      const updatedIdeas = [localIdea, ...ideas]
      setIdeas(updatedIdeas)
      localStorage.setItem('garden-ideas', JSON.stringify(updatedIdeas))
    }

    // Reset form
    setNewIdea('')
    setAuthorName('')
    setShowForm(false)
    setIsPlanting(false)
  }

  const getSizeClass = (size: Idea['size']) => {
    switch (size) {
      case 'small': return 'text-3xl'
      case 'medium': return 'text-5xl'
      case 'large': return 'text-7xl'
    }
  }

  return (
    <div className="max-w-7xl mx-auto text-white w-full h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-4 shadow-2xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-200 to-emerald-300 bg-clip-text text-transparent">
              🌱 Idea Garden
            </h1>
            <p className="text-gray-200">
              {ideas.length} idea{ideas.length !== 1 ? 's' : ''} growing • Plant yours and watch it bloom
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              🌱 Plant Idea
            </button>
            <button
              onClick={onBack}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-white/30"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>

      {/* Garden Area */}
      <div className="flex-1 bg-gradient-to-b from-green-900/20 to-green-800/30 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        {/* Ground effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/40 to-transparent pointer-events-none" />
        
        {/* Sky effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

        {ideas.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center animate-pulse">
              <div className="text-8xl mb-4">🌾</div>
              <p className="text-2xl text-gray-300 mb-2">The garden awaits...</p>
              <p className="text-gray-400">Plant the first idea and watch it grow!</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* Decorative butterflies */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDuration: '4s' }}>🦋</div>
            <div className="absolute top-20 right-20 text-3xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>🦋</div>
            
            {ideas.map((idea, index) => (
              <div
                key={idea.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${idea.x}%`,
                  top: `${idea.y}%`,
                  transform: 'translate(-50%, -50%)',
                  animation: `grow 0.8s ease-out, float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                {/* Glowing aura effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ 
                    backgroundColor: idea.color,
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1.5)'
                  }}
                />
                
                {/* Plant */}
                <div className={`${getSizeClass(idea.size)} relative z-10 transition-transform group-hover:scale-125`}>
                  {plantEmojis[idea.plantType]}
                </div>
                
                {/* Sparkles on hover */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl animate-ping">✨</span>
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-56 z-20">
                  <div className="bg-gradient-to-br from-black/95 to-gray-900/95 text-white text-sm rounded-xl p-4 shadow-2xl border-2 backdrop-blur-sm" style={{ borderColor: idea.color }}>
                    <p className="font-bold mb-2 text-base" style={{ color: idea.color }}>
                      "{idea.text}"
                    </p>
                    <p className="text-gray-300 text-xs flex items-center gap-1">
                      <span>🌱</span> {idea.author}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {new Date(idea.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Planting Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-green-900/90 to-emerald-900/90 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-green-400/30">
            <h2 className="text-3xl font-bold mb-6 text-green-200">Plant Your Idea 🌱</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-green-100">
                  Your Idea
                </label>
                <textarea
                  value={newIdea}
                  onChange={(e) => setNewIdea(e.target.value)}
                  placeholder="What's sprouting in your mind?"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  rows={3}
                  maxLength={100}
                />
                <p className="text-xs text-gray-400 mt-1">{newIdea.length}/100</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-green-100">
                  Your Name
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Gardener's name"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  maxLength={30}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePlantIdea}
                disabled={!newIdea.trim() || !authorName.trim() || isPlanting}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 shadow-lg"
              >
                {isPlanting ? '🌱 Planting...' : '🌱 Plant Idea'}
              </button>
              <button
                onClick={() => {
                  setShowForm(false)
                  setNewIdea('')
                  setAuthorName('')
                }}
                className="px-6 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all border-2 border-white/30"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        
        @keyframes grow {
          0% { 
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
          }
          100% { 
            transform: translate(-50%, -50%) scale(1) rotate(360deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

