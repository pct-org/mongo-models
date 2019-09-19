import { Schema } from 'mongoose'

export const downloadSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    type: String,
    variant: String,
    quality: String,
    progress: Number,
    status: {
      type: String,
      default: 'queued'
    },
    timeRemaining: Number,
    speed: Number,
    numPeers: Number,
    createdAt: Number,
    updatedAt: Number
  },
  {
    collection: 'downloads'
  }
)).index({
  _id: 1
})
