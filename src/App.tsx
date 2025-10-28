import { useState } from 'react'
import Home from './components/Home'
import Landing from './components/Landing'
import Questionnaire from './components/Questionnaire'
import Visualization from './components/Visualization'
import Insights from './components/Insights'
import IdeaGarden from './components/IdeaGarden'
import { FlowResult } from './types'

type Screen = 'home' | 'landing' | 'questionnaire' | 'visualization' | 'insights' | 'garden'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  const [flowResult, setFlowResult] = useState<FlowResult | null>(null)

  const handleSelectFlowFinder = () => {
    setCurrentScreen('landing')
  }

  const handleSelectIdeaGarden = () => {
    setCurrentScreen('garden')
  }

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

  const handleBackToHome = () => {
    setCurrentScreen('home')
    setFlowResult(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {currentScreen === 'home' && (
        <Home 
          onSelectFlowFinder={handleSelectFlowFinder}
          onSelectIdeaGarden={handleSelectIdeaGarden}
        />
      )}

      {currentScreen === 'garden' && (
        <IdeaGarden onBack={handleBackToHome} />
      )}
      
      {currentScreen === 'landing' && <Landing onStart={handleStart} onBack={handleBackToHome} />}
      
      {currentScreen === 'questionnaire' && (
        <Questionnaire onComplete={handleQuestionnaireComplete} onBack={() => setCurrentScreen('landing')} />
      )}
      
      {currentScreen === 'visualization' && flowResult && (
        <Visualization result={flowResult} onNext={handleVisualizationComplete} />
      )}
      
      {currentScreen === 'insights' && flowResult && (
        <Insights result={flowResult} onRestart={handleRestart} onHome={handleBackToHome} />
      )}
    </div>
  )
}

export default App

