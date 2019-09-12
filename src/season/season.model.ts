import { Model } from 'mongoose'
import { Image } from '../object-types/image.object-type'

export default class SeasonModel extends Model {

  /**
   * The imdb id of the show.
   */
  _id: string

  /**
   * The imdb id of the show.
   */
  showImdbId: string

  /**
   * The tmdb_id of the season.
   */
  tmdbId: number

  /**
   * The season number.
   */
  number: number

  /**
   * The title of the season.
   */
  title: string

  /**
   * A brief summary of the season.
   */
  synopsis: string

  /**
   * The date on which the first episode of the season first aired.
   */
  firstAired: number

  /**
   * The season poster for the current season.
   */
  image: Image

  /**
   * Create a new Show object.
   *
   * @param {!Object} config = {} - The configuration object for the show.
   * @property {!number} showImdbId The imdb id of the show this season belongs to.
   * @property {!number} tmdbId The tmdb_id of the season.
   * @property {!number} number The season number.
   * @property {!string} title The title of the season.
   * @property {!string} synopsis A brief summary of the season.
   * @property {!number} firstAired The date on which the first episode of the season first aired.
   * @property {!string} image The season poster for the current season.
   */
  constructor({
    showImdbId,
    tmdbId,
    number,
    title,
    synopsis,
    firstAired,
    image
  }) {
    super()

    this._id = showImdbId
    this.showImdbId = showImdbId
    this.tmdbId = tmdbId
    this.number = number
    this.title = title
    this.synopsis = synopsis
    this.firstAired = firstAired
    this.image = image
  }

}
