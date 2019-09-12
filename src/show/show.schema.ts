import { Schema } from 'mongoose'

import { contentSchema } from '../content/content.schema'

/**
 * The schema object for the show model.
 * @type {Object}
 */
export const showSchema = (new Schema(
  {
    ...contentSchema,
    tvdbId: Number,
    airInfo: {
      type: {
        network: String,
        country: String,
        day: String,
        time: String,
        status: String
      }
    },
    numSeasons: Number,
    seasons: {
      type: [
        {
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
      ]
    }
  },
  {
    collection: 'shows'
  }
)).index({
  title: 'text',
  synopsis: 'text',
  _id: 1
})
