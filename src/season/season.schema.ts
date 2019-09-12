import { Schema } from 'mongoose'

export const seasonSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    tmdbId: Number,
    number: Number,
    title: String,
    synopsis: String,
    firstAired: Number,
    type: String,
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
    },
    createdAt: Number,
    updatedAt: Number
  },
  {
    collection: 'seasons'
  }
)).index({
  number: 1,
  _id: 1
})
