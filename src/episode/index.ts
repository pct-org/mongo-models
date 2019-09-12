import * as mongoose from 'mongoose'

import EpisodeModel from './episode.model'
import episodeSchema from './episode.schema'

// Define the indexes at the schema level.
episodeSchema.index({
  season: 1,
  number: 1,
  _id: 1
})

// Attach the functions from the classes to the schemas.
episodeSchema.loadClass(EpisodeModel)

export default mongoose.model(EpisodeModel, episodeSchema)

