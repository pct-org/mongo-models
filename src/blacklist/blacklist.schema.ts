import { Schema } from 'mongoose'

export const blacklistSchema = (new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    type: String,
    reason: String,
    createdAt: Number,
    updatedAt: Number,
    expires: Number
  },
  {
    collection: 'blacklist'
  }
))
