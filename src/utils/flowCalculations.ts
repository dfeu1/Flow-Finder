import { QuestionResponse, FlowResult, FlowZone } from '../types'

// Based on Csikszentmihalyi's 8-Channel Flow Model
const FLOW_THRESHOLD = 12 // Tighter threshold for more accurate flow detection

export function calculateFlowResult(responses: QuestionResponse[]): FlowResult {
  // Calculate average skill and challenge (0-10 scale)
  const avgSkill = responses.reduce((sum, r) => sum + r.skill, 0) / responses.length
  const avgChallenge = responses.reduce((sum, r) => sum + r.challenge, 0) / responses.length
  
  // Scale to 0-100 for visualization
  const skill = Math.round(avgSkill * 10)
  const challenge = Math.round(avgChallenge * 10)
  
  // Determine flow zone using 8-channel model
  const zone = determineFlowZone(skill, challenge)
  
  // Calculate flow score based on balance AND intensity
  // Flow is optimal when skills and challenges are balanced AND both are high
  const balance = 100 - Math.abs(skill - challenge)
  const intensity = (skill + challenge) / 2
  const flowScore = Math.round((balance * 0.6) + (intensity * 0.4))
  
  return {
    skill,
    challenge,
    zone,
    flowScore: Math.min(100, Math.max(0, flowScore)),
    responses
  }
}

// Csikszentmihalyi's 8-Channel Model
function determineFlowZone(skill: number, challenge: number): FlowZone {
  const difference = skill - challenge
  const average = (skill + challenge) / 2
  
  // Determine if both are high, medium, or low
  const bothHigh = average > 65
  const bothLow = average < 40
  
  // Flow: Balanced at high levels (the optimal state)
  if (Math.abs(difference) <= FLOW_THRESHOLD && bothHigh) {
    return 'flow'
  }
  
  // Apathy: Both skill and challenge are low
  if (bothLow && Math.abs(difference) <= FLOW_THRESHOLD) {
    return 'apathy'
  }
  
  // Over-challenged states (challenge > skill)
  if (difference < -FLOW_THRESHOLD) {
    // Anxiety: Challenge far exceeds skill
    if (challenge > 70 && difference < -20) {
      return 'anxiety'
    }
    // Arousal: Challenge slightly exceeds skill (can lead to flow)
    return 'arousal'
  }
  
  // Under-challenged states (skill > challenge)
  if (difference > FLOW_THRESHOLD) {
    // Boredom: Skill far exceeds challenge
    if (skill > 70 && difference > 20) {
      return 'boredom'
    }
    // Control: Skill slightly exceeds challenge (comfortable mastery)
    if (bothHigh) {
      return 'control'
    }
    // Relaxation: Moderate skill, low challenge
    return 'relaxation'
  }
  
  // Default to flow if balanced
  return 'flow'
}

export function getZoneDescription(zone: FlowZone): string {
  const descriptions: Record<FlowZone, string> = {
    flow: 'You\'re in the Flow Channel! Your skills and challenges are optimally balanced at a high level. This is the peak experience where you\'re fully immersed, energized, and performing at your best.',
    arousal: 'You\'re in Arousal. Challenges slightly exceed your skills, creating positive tension. You\'re learning and growing, close to reaching flow. This is the growth zone.',
    boredom: 'You\'re experiencing Boredom. Your skills significantly exceed the challenges you face. You\'re under-stimulated and need greater challenges to feel engaged.',
    anxiety: 'You\'re in Anxiety. Challenges far exceed your perceived abilities, creating stress. This gap between demands and skills can feel overwhelming.',
    control: 'You\'re in Control. You have mastery with comfortable challenge levels. You\'re confident and performing well, though not at peak intensity.',
    apathy: 'You\'re in Apathy. Both skills and challenges are low, resulting in disengagement. You lack both the ability and motivation in this area.',
    relaxation: 'You\'re in Relaxation. Your skills are adequate for minimal challenges. This is a comfortable, low-pressure state with little growth stimulus.'
  }
  
  return descriptions[zone]
}

export function getZoneRecommendation(zone: FlowZone): string {
  const recommendations: Record<FlowZone, string> = {
    flow: 'Excellent! Protect this state: eliminate distractions, maintain clear goals, and keep immediate feedback loops. As you improve, gradually increase challenge to stay in flow.',
    arousal: 'You\'re on the edge of flow! Build skills through focused practice. This slight stretch is ideal for growth. Stay engaged and you\'ll master these challenges.',
    boredom: 'Seek significantly greater challenges: take on complex projects, set ambitious goals, or explore new domains. Your skills are ready for more.',
    anxiety: 'Reduce overwhelm: break tasks into smaller, manageable pieces. Focus on skill development through practice and mentorship. Start with fundamentals.',
    control: 'Gradually increase challenge intensity while leveraging your existing mastery. Set stretch goals that push beyond your comfort zone.',
    apathy: 'Jump-start engagement: find activities that genuinely interest you, set meaningful goals, and commit to building foundational skills.',
    relaxation: 'This is recovery time, but don\'t stay too long. When ready, introduce new challenges or deepen your engagement to stimulate growth.'
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

