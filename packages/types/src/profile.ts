import { Location } from './location'
import { ProfessionalUser } from './user'

export type ProfileSummary = ProfessionalUser &
  Location & {
    avatar?: URL
    profileUrl?: URL
    website?: URL
  }
