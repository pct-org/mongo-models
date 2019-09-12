import { Field, ObjectType } from 'type-graphql'

import { Content } from '../shared/content.object-type'
import { Torrent } from '../shared/torrent.object-type'

@ObjectType()
export class Movie extends Content {

  @Field({ description: 'Did the user watched this movie already.' })
  watched: boolean

  @Field(type => [Torrent], { description: 'The movie\'s torrents.' })
  torrents: Array<Torrent>

  /**
   * Create a new Movie object.
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
    bookmarked,
    images,
    genres,
    type = 'movie',
    trailer,
    createdAt,
    updatedAt,
    torrents,
    watched
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
      bookmarked,
      images,
      genres,
      type,
      trailer,
      createdAt,
      updatedAt
    })

    this.watched = watched
    this.torrents = torrents
  }

}
