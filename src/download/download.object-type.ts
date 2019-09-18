import { Field, ObjectType } from 'type-graphql'

import { Episode, Movie } from '../'

@ObjectType()
export class Download {

  @Field({ description: 'The id of the download, also id of the movie or episode.' })
  _id: string

  @Field({ description: 'The type of the download, episode or movie.' })
  type: string

  @Field(type => Episode, { description: 'The episode if type === "episode".', defaultValue: null })
  episode: Episode

  @Field(type => Movie, { description: 'The movie if type === "movie".', defaultValue: null })
  movie: Movie

  @Field({ description: 'The quality of the download.' })
  quality: string

  @Field({ description: 'The progress of the download.' })
  progress: number

  @Field({ description: 'Status of the download.', defaultValue: 'queued' })
  status: string

  @Field({ description: 'The time at which the download was created.' })
  createdAt: number

  @Field({ description: 'The time at which the download was last updated.' })
  updatedAt: number

}
