import { imagesSizesSchema } from './images-sizes.schema'

export const contentSchema: Object = {
  _id: {
    type: String,
    required: true
  },
  imdbId: String,
  tmdbId: Number,
  title: String,
  released: Number,
  certification: String,
  slug: String,
  synopsis: String,
  createdAt: Number,
  updatedAt: Number,
  runtime: {
    full: {
      type: String
    },
    short: {
      type: String
    },
    hours: {
      type: Number
    },
    minutes: {
      type: Number
    }
  },
  rating: {
    percentage: {
      type: Number
    },
    watching: {
      type: Number
    },
    votes: {
      type: Number
    },
    stars: {
      type: Number
    }
  },
  bookmarked: {
    type: Boolean,
    default: false
  },
  bookmarkedOn: Number,
  images: {
    type: {
      backdrop: imagesSizesSchema,
      poster: imagesSizesSchema,
      logo: imagesSizesSchema,
      banner: imagesSizesSchema
    }
  },
  genres: [String],
  type: String,
  trailer: {
    type: String,
    default: null
  }
}
