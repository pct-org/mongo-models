import { Schema } from 'mongoose'

import { torrentSchema } from '../shared/torrent.schema'
import { watchedSchema } from '../shared/watched.schema'

export const episodeSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    tmdbId: Number,
    number: Number,
    season: Number,
    title: String,
    synopsis: String,
    firstAired: Number,
    type: String,
    ...watchedSchema,
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
    torrents: {
      type: [torrentSchema]
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    collection: 'episodes'
  }
)).index({
  season: 1,
  number: 1,
  _id: 1
})
