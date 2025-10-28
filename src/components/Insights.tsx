import { FlowResult } from '../types'
import { getZoneDescription, getZoneRecommendation, getZoneColor } from '../utils/flowCalculations'
import { useEffect, useState } from 'react'
import { saveSession, getSessionHistory } from '../utils/storage'

interface InsightsProps {
  result: FlowResult
  onRestart: () => void
}

export default function Insights({ result, onRestart }: InsightsProps) {
  const [sessionCount, setSessionCount] = useState(0)
  const zoneColor = getZoneColor(result.zone)

  useEffect(() => {
    saveSession(result)
    const history = getSessionHistory()
    setSessionCount(history.length)
  }, [result])

  const getFlowEmoji = () => {
    if (result.flowScore >= 80) return '🔥'
    if (result.flowScore >= 60) return '✨'
    if (result.flowScore >= 40) return '💫'
    return '🌟'
  }

  const getMotivationalQuote = () => {
    const quotes = [
      "The best moments in our lives are not the passive, receptive, relaxing times... The best moments usually occur if a person's body or mind is stretched to its limits. - Mihaly Csikszentmihalyi",
      "Flow is being completely involved in an activity for its own sake. The ego falls away. Time flies. - Mihaly Csikszentmihalyi",
      "In flow, the emotions are not just contained and channeled, but positive, energized, and aligned with the task at hand. - Mihaly Csikszentmihalyi",
      "The happiness that is derived from flow is outstanding. - Mihaly Csikszentmihalyi"
    ]
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  return (
    <div className="max-w-4xl mx-auto text-white w-full">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{getFlowEmoji()}</div>
          <h2 className="text-4xl font-bold mb-2">
            Your Flow State: 
            <span 
              className="ml-2 capitalize"
              style={{ color: zoneColor }}
            >
              {result.zone}
            </span>
          </h2>
          <p className="text-xl text-gray-200 mt-2">
            Flow Score: <span className="font-bold text-2xl">{result.flowScore}/100</span>
          </p>
        </div>

        {/* Zone Description */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-2">📊</span>
            What This Means
          </h3>
          <p className="text-lg text-gray-100 leading-relaxed">
            {getZoneDescription(result.zone)}
          </p>
        </div>

        {/* Recommendations */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-2">💡</span>
            How to Reach Flow
          </h3>
          <p className="text-lg text-gray-100 leading-relaxed mb-4">
            {getZoneRecommendation(result.zone)}
          </p>
          
          {/* Additional Tips based on zone */}
          <div className="mt-4 space-y-2">
            {result.zone === 'anxiety' && (
              <div className="bg-red-500/20 rounded-lg p-3 text-sm">
                💪 <strong>Quick Tip:</strong> Break tasks into smaller, manageable chunks and celebrate small wins.
              </div>
            )}
            {result.zone === 'boredom' && (
              <div className="bg-blue-500/20 rounded-lg p-3 text-sm">
                🚀 <strong>Quick Tip:</strong> Set a time challenge or add creative constraints to increase engagement.
              </div>
            )}
            {result.zone === 'flow' && (
              <div className="bg-green-500/20 rounded-lg p-3 text-sm">
                🎯 <strong>Quick Tip:</strong> You're in the zone! Eliminate distractions and ride this wave.
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2">📈</span>
            Your Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">{sessionCount}</div>
              <div className="text-sm text-gray-300">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">{result.skill}</div>
              <div className="text-sm text-gray-300">Skill Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300">{result.challenge}</div>
              <div className="text-sm text-gray-300">Challenge</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">{result.flowScore}</div>
              <div className="text-sm text-gray-300">Flow Score</div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 mb-6 border border-white/10">
          <p className="text-sm italic text-gray-200 leading-relaxed">
            "{getMotivationalQuote()}"
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRestart}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Take Another Assessment
          </button>
          <button
            onClick={() => {
              const history = getSessionHistory()
              console.log('Session History:', history)
              alert(`You have ${history.length} session(s) saved locally!`)
            }}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all border-2 border-white/30"
          >
            View History ({sessionCount})
          </button>
        </div>
      </div>
    </div>
  )
}

