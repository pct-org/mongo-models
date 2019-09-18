import { Schema } from 'mongoose'

export const downloadSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    type: String,
    quality: String,
    progress: Number,
    status: {
      type: String,
      default: 'queued'
    },
    createdAt: Number,
    updatedAt: Number
  },
  {
    collection: 'downloads'
  }
)).index({
  _id: 1
})
