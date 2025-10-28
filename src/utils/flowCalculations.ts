import { QuestionResponse, FlowResult, FlowZone } from '../types'

const FLOW_THRESHOLD = 15

export function calculateFlowResult(responses: QuestionResponse[]): FlowResult {
  // Calculate average skill and challenge (0-10 scale)
  const avgSkill = responses.reduce((sum, r) => sum + r.skill, 0) / responses.length
  const avgChallenge = responses.reduce((sum, r) => sum + r.challenge, 0) / responses.length
  
  // Scale to 0-100 for visualization
  const skill = Math.round(avgSkill * 10)
  const challenge = Math.round(avgChallenge * 10)
  
  // Determine flow zone
  const zone = determineFlowZone(skill, challenge)
  
  // Calculate flow score (0-100, higher is better)
  const difference = Math.abs(skill - challenge)
  const flowScore = Math.max(0, Math.round(100 - (difference / 100) * 100))
  
  return {
    skill,
    challenge,
    zone,
    flowScore,
    responses
  }
}

function determineFlowZone(skill: number, challenge: number): FlowZone {
  const difference = skill - challenge
  const total = skill + challenge
  
  // Flow: balanced skill and challenge
  if (Math.abs(difference) <= FLOW_THRESHOLD) {
    if (total > 100) return 'flow'
    if (total < 60) return 'apathy'
    return 'flow'
  }
  
  // Over-challenged (high challenge, lower skill)
  if (difference < -FLOW_THRESHOLD) {
    if (challenge > 70) return 'anxiety'
    return 'arousal'
  }
  
  // Under-challenged (high skill, lower challenge)
  if (difference > FLOW_THRESHOLD) {
    if (skill > 70) return 'boredom'
    if (challenge < 40) return 'relaxation'
    return 'control'
  }
  
  return 'flow'
}

export function getZoneDescription(zone: FlowZone): string {
  const descriptions: Record<FlowZone, string> = {
    flow: 'You\'re in the Flow Zone! Your skills perfectly match the challenge.',
    arousal: 'You\'re in Arousal. The challenge slightly exceeds your current skills.',
    boredom: 'You\'re experiencing Boredom. Your skills exceed the challenge.',
    anxiety: 'You\'re in Anxiety. The challenge significantly exceeds your skills.',
    control: 'You\'re in Control. Your skills are slightly above the challenge.',
    apathy: 'You\'re in Apathy. Both skills and challenge are low.',
    relaxation: 'You\'re in Relaxation. Low challenge with moderate skills.'
  }
  
  return descriptions[zone]
}

export function getZoneRecommendation(zone: FlowZone): string {
  const recommendations: Record<FlowZone, string> = {
    flow: 'Keep doing what you\'re doing! Maintain this balance to stay in flow.',
    arousal: 'Increase your skills through practice or slightly reduce the challenge.',
    boredom: 'Seek greater challenges or set higher goals to re-engage.',
    anxiety: 'Break down the challenge into smaller steps or build foundational skills.',
    control: 'Consider taking on slightly more challenging tasks.',
    apathy: 'Find more meaningful challenges or develop new skills.',
    relaxation: 'Introduce new challenges to increase engagement.'
  }
  
  return recommendations[zone]
}

export function getZoneColor(zone: FlowZone): string {
  const colors: Record<FlowZone, string> = {
    flow: '#10b981',      // green
    arousal: '#f59e0b',   // amber
    boredom: '#6366f1',   // indigo
    anxiety: '#ef4444',   // red
    control: '#8b5cf6',   // purple
    apathy: '#6b7280',    // gray
    relaxation: '#3b82f6' // blue
  }
  
  return colors[zone]
}

