import { Schema } from 'mongoose'

import { contentSchema } from '../shared/content.schema'
import { torrentSchema } from '../shared/torrent.schema'
import { watchedSchema } from '../shared/watched.schema'

export const movieSchema = (new Schema(
  {
    ...contentSchema,
    ...watchedSchema,
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
