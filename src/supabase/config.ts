import { createClient } from '@supabase/supabase-js'
import { Idea } from '../types/garden'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface Database {
  public: {
    Tables: {
      ideas: {
        Row: Idea
        Insert: Omit<Idea, 'id'>
        Update: Partial<Omit<Idea, 'id'>>
      }
    }
  }
}

