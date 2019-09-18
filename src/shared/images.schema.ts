import { imagesSizesSchema } from './images-sizes.schema'

export const imagesSchema: Object = {
  type: {
    backdrop: imagesSizesSchema,
    poster: imagesSizesSchema,
    logo: imagesSizesSchema,
    banner: imagesSizesSchema
  }
}
