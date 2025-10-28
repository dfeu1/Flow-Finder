import { FlowResult } from '../types'

const STORAGE_KEY = 'flow-finder-sessions'

export interface SessionRecord extends FlowResult {
  timestamp: number
  date: string
}

export function saveSession(result: FlowResult): void {
  try {
    const history = getSessionHistory()
    const newSession: SessionRecord = {
      ...result,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString()
    }
    
    history.push(newSession)
    
    // Keep only last 50 sessions to avoid storage issues
    const trimmedHistory = history.slice(-50)
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory))
  } catch (error) {
    console.error('Failed to save session:', error)
  }
}

export function getSessionHistory(): SessionRecord[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Failed to load session history:', error)
    return []
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear history:', error)
  }
}

export function getLatestSession(): SessionRecord | null {
  const history = getSessionHistory()
  return history.length > 0 ? history[history.length - 1] : null
}

export function getAverageFlowScore(): number {
  const history = getSessionHistory()
  if (history.length === 0) return 0
  
  const sum = history.reduce((acc, session) => acc + session.flowScore, 0)
  return Math.round(sum / history.length)
}

export function getSessionStats() {
  const history = getSessionHistory()
  
  if (history.length === 0) {
    return {
      totalSessions: 0,
      averageFlowScore: 0,
      averageSkill: 0,
      averageChallenge: 0,
      mostCommonZone: null
    }
  }
  
  const totalSessions = history.length
  const averageFlowScore = getAverageFlowScore()
  
  const averageSkill = Math.round(
    history.reduce((acc, s) => acc + s.skill, 0) / totalSessions
  )
  
  const averageChallenge = Math.round(
    history.reduce((acc, s) => acc + s.challenge, 0) / totalSessions
  )
  
  // Find most common zone
  const zoneCounts = history.reduce((acc, session) => {
    acc[session.zone] = (acc[session.zone] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const mostCommonZone = Object.entries(zoneCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || null
  
  return {
    totalSessions,
    averageFlowScore,
    averageSkill,
    averageChallenge,
    mostCommonZone
  }
}

