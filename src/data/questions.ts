export interface Question {
  id: number
  scenario: string
  skillPrompt: string
  challengePrompt: string
  description?: string
}

// Based on Csikszentmihalyi's Flow Theory
// Assesses the balance between perceived skills and challenges
export const questions: Question[] = [
  {
    id: 1,
    scenario: 'Current Activity Engagement',
    description: 'Think about your main activity right now (work, study, hobby)',
    skillPrompt: 'How would you rate your skills for this activity?',
    challengePrompt: 'How challenging is this activity for you?'
  },
  {
    id: 2,
    scenario: 'Focus & Concentration',
    description: 'Consider your ability to concentrate deeply',
    skillPrompt: 'How capable are you of maintaining deep focus?',
    challengePrompt: 'How much concentration does your current work demand?'
  },
  {
    id: 3,
    scenario: 'Goal Clarity & Feedback',
    description: 'Think about how clear your goals are',
    skillPrompt: 'How confident are you in achieving your immediate goals?',
    challengePrompt: 'How demanding are these goals to accomplish?'
  },
  {
    id: 4,
    scenario: 'Control & Mastery',
    description: 'Consider your sense of control over outcomes',
    skillPrompt: 'How much control/mastery do you feel you have?',
    challengePrompt: 'How much does success require from you?'
  },
  {
    id: 5,
    scenario: 'Growth & Learning',
    description: 'Reflect on your learning and development',
    skillPrompt: 'How prepared are you for growth in this area?',
    challengePrompt: 'How much growth/learning is required?'
  },
  {
    id: 6,
    scenario: 'Enjoyment & Engagement',
    description: 'Think about your intrinsic motivation',
    skillPrompt: 'How naturally does this come to you?',
    challengePrompt: 'How much effort does full engagement require?'
  },
  {
    id: 7,
    scenario: 'Time & Immersion',
    description: 'Consider your ability to lose track of time',
    skillPrompt: 'How easily can you immerse yourself completely?',
    challengePrompt: 'How demanding is it to stay fully absorbed?'
  },
  {
    id: 8,
    scenario: 'Overall Experience',
    description: 'Sum up your current state holistically',
    skillPrompt: 'Overall, how capable do you feel right now?',
    challengePrompt: 'Overall, how challenging is your current situation?'
  }
]

