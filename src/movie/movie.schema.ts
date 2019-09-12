import { Schema } from 'mongoose'

import { contentSchema } from '../shared/content.schema'
import { torrentSchema } from '../shared/torrent.schema'

export const movieSchema = (new Schema(
  {
    ...contentSchema,
    watched: {
      type: Boolean,
      default: false
    },
    torrents: {
      type: [torrentSchema]
    }
  },
  {
    collection: 'movies'
  }
)).index({
  title: 'text',
  _id: 1
})
