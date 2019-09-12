import { Schema } from 'mongoose'

export const seasonSchema: Object = {
  tmdbId: Number,
  number: Number,
  title: String,
  synopsis: String,
  firstAired: Number,
  images: {
    type: {
      full: {
        type: String,
        default: null
      },
      high: {
        type: String,
        default: null
      },
      medium: {
        type: String,
        default: null
      },
      thumb: {
        type: String,
        default: null
      }
    }
  }
}

export default new Schema(
  seasonSchema,
  {
    collection: 'seasons'
  }
)
