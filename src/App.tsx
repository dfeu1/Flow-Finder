import { useState } from 'react'
import Landing from './components/Landing'
import Questionnaire from './components/Questionnaire'
import Visualization from './components/Visualization'
import Insights from './components/Insights'
import { FlowResult } from './types'

type Screen = 'landing' | 'questionnaire' | 'visualization' | 'insights'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing')
  const [flowResult, setFlowResult] = useState<FlowResult | null>(null)

  const handleStart = () => {
    setCurrentScreen('questionnaire')
  }

  const handleQuestionnaireComplete = (result: FlowResult) => {
    setFlowResult(result)
    setCurrentScreen('visualization')
  }

  const handleVisualizationComplete = () => {
    setCurrentScreen('insights')
  }

  const handleRestart = () => {
    setCurrentScreen('landing')
    setFlowResult(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {currentScreen === 'landing' && <Landing onStart={handleStart} />}
      
      {currentScreen === 'questionnaire' && (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
      )}
      
      {currentScreen === 'visualization' && flowResult && (
        <Visualization result={flowResult} onNext={handleVisualizationComplete} />
      )}
      
      {currentScreen === 'insights' && flowResult && (
        <Insights result={flowResult} onRestart={handleRestart} />
      )}
    </div>
  )
}

export default App

