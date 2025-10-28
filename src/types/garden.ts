export interface Idea {
  id: string
  text: string
  author: string
  timestamp: number
  color: string
  x: number // position in garden
  y: number
  size: 'small' | 'medium' | 'large'
  plantType: 'flower' | 'tree' | 'sprout' | 'mushroom'
}

export type PlantType = Idea['plantType']

