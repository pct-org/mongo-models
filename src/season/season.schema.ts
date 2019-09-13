import { Schema } from 'mongoose'

import { imagesSizesSchema } from '../shared/images-sizes.schema'

export const seasonSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    showImdbId: String,
    tmdbId: Number,
    number: Number,
    title: String,
    synopsis: String,
    firstAired: Number,
    type: String,
    images: imagesSizesSchema,
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
