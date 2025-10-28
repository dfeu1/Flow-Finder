export interface QuestionResponse {
  skill: number
  challenge: number
}

export interface FlowResult {
  skill: number
  challenge: number
  zone: FlowZone
  flowScore: number
  responses: QuestionResponse[]
}

export type FlowZone = 
  | 'flow' 
  | 'arousal' 
  | 'boredom' 
  | 'apathy' 
  | 'control' 
  | 'anxiety' 
  | 'relaxation'

