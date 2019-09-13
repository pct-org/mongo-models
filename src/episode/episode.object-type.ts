import { Field, ObjectType } from 'type-graphql'

import { Torrent } from '../shared/torrent.object-type'
import { ImagesSizes } from '../shared/images-sizes.object-type'

@ObjectType()
export class Episode {

  @Field({ description: 'The id of the episode.' })
  _id: string

  @Field({ description: 'The imdb id of the show.' })
  showImdbId: string

  @Field({ description: 'The tmdb_id of the episode.' })
  tmdbId: number

  @Field({ description: 'The episode number of the current episode.' })
  number: number

  @Field({ description: 'Number of season the episode is in.' })
  season: number

  @Field({ description: 'The title of the episode.' })
  title: string

  @Field({ description: 'A brief summary of the episode.' })
  synopsis: string

  @Field({ description: 'The date on which the episode was first aired.' })
  firstAired: number

  @Field({ description: 'Did the user watched this episode already.' })
  watched: boolean

  @Field({ description: 'The type of the content.' })
  type: string

  @Field(type => ImagesSizes, { description: 'The still for the current episode.' })
  images: ImagesSizes

  @Field(type => [Torrent], { description: 'The episode\'s torrent.' })
  torrents: Array<Torrent>

  @Field({ description: 'The time at which the content was created.' })
  createdAt: number

  @Field({ description: 'The time at which the content was last updated.' })
  updatedAt: number

}
