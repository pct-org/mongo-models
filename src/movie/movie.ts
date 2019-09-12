import { Field, ObjectType } from 'type-graphql'
import { Content } from '../content/content'

import { Torrent } from '../object-types/torrent.object-type'

@ObjectType()
export class Movie extends Content {

  /**
   * The movie's torrents.
   * @type {Array<Torrent>}
   */
  @Field(type => [Torrent])
  torrents: Array<Torrent>

  /**
   * Create a new Movie object.
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
   * @param {!string} [type=movie] - The type of the movie.
   * @param {!string} trailer - Youtube link to a trailer
   * @param {!number} createdAt = 0 - The time the show was created.
   * @param {!number} updatedAt = 0 - The time the show was last updated.
   * @param {!Array<Torrent>} torrents - The movie's torrents.
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
    type = 'movie',
    trailer,
    createdAt,
    updatedAt,
    torrents
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
      createdAt,
      updatedAt
    })

    this.torrents = torrents
  }

}
