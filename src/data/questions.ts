export interface Question {
  id: number
  scenario: string
  skillPrompt: string
  challengePrompt: string
}

export const questions: Question[] = [
  {
    id: 1,
    scenario: 'Current Work/Study Tasks',
    skillPrompt: 'How skilled do you feel at your current main task?',
    challengePrompt: 'How challenging is this task for you?'
  },
  {
    id: 2,
    scenario: 'Learning New Things',
    skillPrompt: 'How confident are you in learning new concepts?',
    challengePrompt: 'How difficult are the new concepts you\'re tackling?'
  },
  {
    id: 3,
    scenario: 'Problem Solving',
    skillPrompt: 'How capable do you feel at solving complex problems?',
    challengePrompt: 'How complex are the problems you\'re facing?'
  },
  {
    id: 4,
    scenario: 'Daily Activities',
    skillPrompt: 'How competent do you feel in your daily activities?',
    challengePrompt: 'How demanding are your daily activities?'
  },
  {
    id: 5,
    scenario: 'Personal Goals',
    skillPrompt: 'How equipped are you to achieve your current goals?',
    challengePrompt: 'How ambitious are your current goals?'
  }
]

