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
  images: {
    type: {
      backdrop: {
        type: String,
        default: null
      },
      poster: {
        type: String,
        default: null
      },
      logo: {
        type: String,
        default: null
      },
      banner: {
        type: String,
        default: null
      }
    }
  },
  genres: [String],
  type: String,
  trailer: {
    type: String,
    default: null
  }
}
