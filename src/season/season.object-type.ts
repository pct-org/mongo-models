import { Field, ObjectType } from 'type-graphql'

import { Episode } from '../episode/episode.object-type'
import { Image } from '../shared/image.object-type'

@ObjectType()
export class Season {

  @Field({ description: 'The id of the show.' })
  _id: string

  @Field({ description: 'The imdb id of the show.' })
  showImdbId: string

  @Field({ description: 'The tmdb_id of the season.' })
  tmdbId: number

  @Field({ description: 'The season number.' })
  number: number

  @Field({ description: 'The title of the season.' })
  title: string

  @Field({ description: 'A brief summary of the season.' })
  synopsis: string

  @Field({ description: 'The date on which the first episode of the season first aired.' })
  firstAired: number

  @Field(type => Image, { description: 'The season poster for the current season.' })
  image: Image

  @Field({ description: 'The type of the content.' })
  type: string

  @Field(type => [Episode], { description: 'The episodes in the season.' })
  episodes: Array<Episode>

  @Field({ description: 'The time at which the content was created.' })
  createdAt: number

  @Field({ description: 'The time at which the content was last updated.' })
  updatedAt: number

  constructor({
    showImdbId,
    tmdbId,
    number,
    title,
    synopsis,
    firstAired,
    image,
    episodes,
    createdAt,
    updatedAt
  }) {
    this._id = `${showImdbId}-S${number}`
    this.showImdbId = showImdbId
    this.tmdbId = tmdbId
    this.number = number
    this.title = title
    this.synopsis = synopsis
    this.firstAired = firstAired
    this.image = image
    this.episodes = episodes
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.type = 'season'
  }

}
