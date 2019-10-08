export const downloadInfoSchema: Object = {
  download: {
    type: {
      downloading: {
        type: Boolean,
        default: false
      },
      downloadComplete: {
        type: Boolean,
        default: false
      },
      downloadStatus: {
        type: String,
        default: null
      },
      downloadedOn: {
        type: Number,
        default: null
      }
    }
  }
}
