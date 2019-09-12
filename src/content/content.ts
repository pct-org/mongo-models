import { Field, ID, ObjectType } from 'type-graphql'
import { Model } from 'mongoose'

import { Runtime } from '../object-types/runtime.object-type'
import { Rating } from '../object-types/rating.object-type'
import { Images } from '../object-types/images.object-type'

@ObjectType()
export class Content extends Model {

  /**
   * The imdb id of the content.
   */
  @Field()
  _id: string

  /**
   * The imdb id of the content.
   */
  @Field()
  imdbId: string

  /**
   * The tmdb id of the content.
   */
  @Field()
  tmdbId: number

  /**
   * The title of the content.
   */
  @Field()
  title: string

  /**
   * The release date of the content.
   */
  @Field()
  released: number

  /**
   * The certification of the content.
   */
  @Field()
  certification: string

  /**
   * The slug of the content.
   */
  @Field()
  slug: string

  /**
   * A brief summary of the content.
   */
  @Field()
  synopsis: string

  /**
   * How long the content is (in minutes).
   */
  @Field(type => Runtime)
  runtime: Runtime

  /**
   * The rating of the content.
   */
  @Field(type => Rating)
  rating: Rating

  /**
   * The images for the content.
   */
  @Field(type => Images)
  images: Images

  /**
   * The genres describing the content.
   */
  @Field(type => [String])
  genres: Array<string>

  /**
   * The type of the content.
   */
  @Field()
  type: string

  /**
   * The content's trailer
   */
  @Field()
  trailer: string

  /**
   * The time at which the content was created.
   */
  @Field()
  createdAt: number

  /**
   * The time at which the content was last updated.
   */
  @Field()
  updatedAt: number

  /**
   * Create a new Content object.
   *
   * @param {!Object} config - The configuration object for the content.
   * @param {!string} imdbId - The imdb id of the content.
   * @param {!number} tmdbId - The tmdb id of the content.
   * @param {!string} title - The title of the content.
   * @param {!number} released - The release date of the content.
   * @param {!string} certification - The certification of the content.
   * @param {!string} slug - The slug of the content.
   * @param {!string} synopsis - A brief summary of the content.
   * @param {!number} runtime - How long the content is (in minutes).
   * @param {!Rating} rating - The rating of the content.
   * @param {!Images} images - The images for the content.
   * @param {!Array<string>} genres - The genres describing the content.
   * @param {!string} type - The type of the content.
   * @param {!string} trailer - Youtube link to a trailer
   * @param {!number} createdAt = 0 - The time the show was created.
   * @param {!number} updatedAt = 0 - The time the show was last updated.
   */
  constructor({
    imdbId,
    tmdbId,
    title,
    released,
    certification,
    slug,
    synopsis,
    runtime,
    rating,
    images,
    genres,
    type,
    trailer,
    createdAt,
    updatedAt
  }) {
    super()

    this._id = imdbId
    this.imdbId = imdbId
    this.tmdbId = tmdbId
    this.title = title
    this.released = released
    this.certification = certification
    this.slug = slug
    this.synopsis = synopsis
    this.runtime = runtime
    this.rating = rating
    this.images = images
    this.genres = genres
    this.type = type
    this.trailer = trailer
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

}
