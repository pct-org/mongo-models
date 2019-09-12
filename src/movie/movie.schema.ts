import { Schema } from 'mongoose'

import { contentSchema, torrentSchema } from '../content/content.schema'

export const movieSchema = (new Schema(
  {
    ...contentSchema,
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
