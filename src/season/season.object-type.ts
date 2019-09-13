import { Field, ObjectType } from 'type-graphql'

import { Episode } from '../episode/episode.object-type'
import { ImagesSizes } from '../shared/images-sizes.object-type'

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

  @Field(type => ImagesSizes, { description: 'The season poster for the current season.' })
  images: ImagesSizes

  @Field({ description: 'The type of the content.' })
  type: string

  @Field(type => [Episode], { description: 'The episodes in the season.' })
  episodes: Array<Episode>

  @Field({ description: 'The time at which the content was created.' })
  createdAt: number

  @Field({ description: 'The time at which the content was last updated.' })
  updatedAt: number

}
