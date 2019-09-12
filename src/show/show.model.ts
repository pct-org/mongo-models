import { Content } from '../content/content'

import { Torrent } from '../object-types/torrent.object-type'

/**
 * The images model type.
 * @typedef {Object} Images
 * @property {!string} full
 * @property {!string} high
 * @property {!string} medium
 * @property {!string} thumb
 */
type Images = {
  full: string,
  high: string,
  medium: string,
  thumb: string
}

/**
 * The episode model type.
 * @typedef {Object} Episode
 * @property {!number} tmdbId The tmdb_id of the episode.
 * @property {!number} number The episode number of the current episode.
 * @property {!string} title The title of the episode.
 * @property {!string} synopsis A brief summary of the episode
 * @property {!number} first_aired The date on which the episode was first
 * aired.
 * @property {!string} image The still for the current episode.
 * @property {!Object} torrents The episode's torrent.
 */
type Episode = {
  tmdbId: number,
  number: number,
  title: string,
  synopsis: string,
  firstAired: number,
  image: Images,
  torrents: Array<Torrent>
}

/**
 * The season model type.
 *
 * @typedef {Object} Season
 * @property {!number} tmdbId The tmdb_id of the season.
 * @property {!number} number The season number.
 * @property {!string} title The title of the season.
 * @property {!string} synopsis A brief summary of the season.
 * @property {!number} firstAired The date on which the first episode of the season first aired.
 * @property {!string} image The season poster for the current season.
 * @property {!Array<Episode>} episodes The episodes in the season.
 */
type Season = {
  tmdbId: number,
  number: number,
  title: string,
  synopsis: string,
  firstAired: number,
  image: Images,
  episodes: Array<Episode>
}

/**
 * The air information model type.
 * @typedef {Object} AirInformation
 * @property {!string} network The name of the network on which the show airs.
 * @property {!string} country The country in which the show airs.
 * @property {!string} day The name of the day (in English), on which the show
 * airs. (Will be null if the show has stopped airing).
 * @property {!string} time The time at which the show airs. (Will be null if
 * the show has stopped airing).
 * @property {!string} status The status of the show's airing (returning
 * series, in production, planned, cancelled, ended).
 */
type AirInformation = {
  network: string,
  country: string,
  day: string,
  time: string,
  status: string
}

/**
 * Class for show attributes and methods.
 * @extends {ContentModel}
 * @type {ShowModel}
 */
export default class ShowModel extends Content {

  /**
   * The tvdb id for the show.
   * @type {number}
   */
  tvdbId: number

  /**
   * Information about when the show airs.
   * @type {AirInformation}
   */
  airInfo: AirInformation

  /**
   * The seasons in the show.
   * @type {Array<Season>}
   */
  seasons: Array<Season>

  /**
   * The total amount of seasons
   * @type {number}
   */
  numSeasons: number

  /**
   * Create a new Show object.
   *
   * @param {!Object} config = {} - The configuration object for the show.
   * @param {!string} imdbId - The imdb id of the show.
   * @param {!number} tmdbId - The tmdb id of the show.
   * @param {!string} title - The title of the show.
   * @param {!number} released - The release date of the show.
   * @param {!string} certification - The certification of the show.
   * @param {!string} slug - The slug of the show.
   * @param {!string} synopsis - A brief summary of the show.
   * @param {!number} runtime - How long each episode in the show is,
   * approximately (in minutes).
   * @param {!Rating} rating - The rating of the show.
   * @param {!Images} images - The images for the show.
   * @param {!Array<string>} genres - The genres describing the show.
   * @param {!string} [type=tvshow] - The type of the show.
   * @param {!number} tvdbId - The tvdb id for the show.
   * @param {!AirInformation} airInfo - Information about when the show airs.
   * @param {!number} updatedAt = 0 - The time the show was last updated.
   * @param {!number} createdAt = 0 - The time the show was created.
   * @param {!Array<Season>} seasons - The seasons in the show.
   */
  constructor({
    imdbId,
    tmdbId,
    tvdbId,
    title,
    released,
    certification,
    slug,
    synopsis,
    runtime,
    rating,
    images,
    genres,
    type = 'tvshow',
    airInfo,
    numSeasons,
    createdAt,
    updatedAt,
    seasons,
    trailer
  }) {
    super({
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
      updatedAt,
      createdAt
    })

    this.tvdbId = tvdbId
    this.airInfo = airInfo
    this.seasons = seasons
    this.numSeasons = numSeasons
  }

}
