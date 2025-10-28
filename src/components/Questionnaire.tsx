import { useState } from 'react'
import { questions } from '../data/questions'
import { QuestionResponse, FlowResult } from '../types'
import { calculateFlowResult } from '../utils/flowCalculations'

interface QuestionnaireProps {
  onComplete: (result: FlowResult) => void
}

export default function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<QuestionResponse[]>([])
  const [skillValue, setSkillValue] = useState(5)
  const [challengeValue, setChallengeValue] = useState(5)

  const question = questions[currentQuestion]
  const progress = ((currentQuestion) / questions.length) * 100

  const handleNext = () => {
    const newResponses = [
      ...responses,
      { skill: skillValue, challenge: challengeValue }
    ]
    setResponses(newResponses)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSkillValue(5)
      setChallengeValue(5)
    } else {
      const result = calculateFlowResult(newResponses)
      onComplete(result)
    }
  }

  return (
    <div className="max-w-3xl mx-auto text-white w-full">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{question.scenario}</h2>
        </div>

        {/* Skill Slider */}
        <div className="mb-8">
          <label className="block text-lg mb-3 text-blue-100">
            {question.skillPrompt}
          </label>
          <div className="flex items-center space-x-4">
            <span className="text-sm w-16">Low (0)</span>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={skillValue}
              onChange={(e) => setSkillValue(Number(e.target.value))}
              className="flex-1 h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-sm w-20">High (10)</span>
          </div>
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-blue-300">{skillValue}</span>
          </div>
        </div>

        {/* Challenge Slider */}
        <div className="mb-8">
          <label className="block text-lg mb-3 text-purple-100">
            {question.challengePrompt}
          </label>
          <div className="flex items-center space-x-4">
            <span className="text-sm w-16">Low (0)</span>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={challengeValue}
              onChange={(e) => setChallengeValue(Number(e.target.value))}
              className="flex-1 h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-sm w-20">High (10)</span>
          </div>
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-purple-300">{challengeValue}</span>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}

