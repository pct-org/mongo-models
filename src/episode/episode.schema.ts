import { Schema } from 'mongoose'

import { torrentSchema } from '../content/content.schema'

/**
 * The schema object for the show model.
 * @type {Object}
 */
export const episodeSchema: Object = {
  tmdbId: Number,
  number: Number,
  season: Number,
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
  },
  torrents: {
    type: [torrentSchema]
  }
}

export default new Schema(episodeSchema, {
  collection: 'episodes'
})
