import { Model } from 'mongoose'

import { Torrent } from '../object-types/torrent.object-type'
import { Image } from '../object-types/image.object-type'

export default class EpisodeModel extends Model {

  /**
   * The imdb id of the show.
   */
  _id: string

  /**
   * The imdb id of the show.
   */
  showImdbId: string

  /**
   * The tmdb_id of the episode.
   */
  tmdbId: number

  /**
   * The episode number of the current episode.
   */
  number: number

  /**
   * Number of season the episode is in.
   */
  season: number

  /**
   * The title of the episode.
   */
  title: string

  /**
   * A brief summary of the episode.
   */
  synopsis: string

  /**
   * The date on which the episode was first aired.
   */
  firstAired: number

  /**
   * The still for the current episode.
   */
  image: Image

  /**
   * The episode's torrent.
   */
  torrents: Array<Torrent>

  /**
   * Create a new Episode object.
   *
   * @param {!Object} config = {} - The configuration object for the show.
   * @property {!number} showImdbId The imdb id of the show this episode belongs to.
   * @property {!number} tmdbId The tmdb_id of the episode.
   * @property {!number} number The episode number of the current episode.
   * @property {!number} season The season number of the current episode.
   * @property {!string} title The title of the episode.
   * @property {!string} synopsis A brief summary of the episode.
   * @property {!number} firstAired The date on which the episode was first aired.
   * @property {!string} image The still for the current episode.
   * @property {!Object} torrents The episode's torrent.
   */
  constructor({
    showImdbId,
    tmdbId,
    number,
    season,
    title,
    synopsis,
    firstAired,
    image,
    torrents
  }) {
    super()

    this._id = showImdbId
    this.showImdbId = showImdbId
    this.tmdbId = tmdbId
    this.number = number
    this.season = season
    this.title = title
    this.synopsis = synopsis
    this.firstAired = firstAired
    this.image = image
    this.torrents = torrents
  }

}
