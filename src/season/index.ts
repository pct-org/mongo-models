import * as mongoose from 'mongoose'

import SeasonModel from './season.model'
import seasonSchema from './season.schema'

// Define the indexes at the schema level.
seasonSchema.index({
  number: 1,
  _id: 1
})

// Attach the functions from the classes to the schemas.
seasonSchema.loadClass(SeasonModel)

export default mongoose.model(SeasonModel, seasonSchema)

