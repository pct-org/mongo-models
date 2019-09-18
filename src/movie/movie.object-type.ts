import { Field, ObjectType } from 'type-graphql'

import { Content } from '../shared/content.object-type'
import { Torrent } from '../shared/torrent.object-type'
import { Watched } from '../shared/watched.object-type'

@ObjectType()
export class Movie extends Content {

  @Field(type => Watched, { description: 'Did the user watched this movie already.' })
  watched: Watched

  @Field(type => [Torrent], { description: 'The movie\'s torrents.' })
  torrents: Array<Torrent>

  @Field( { description: 'Is this movie downloaded', defaultValue: false })
  downloaded: boolean

  @Field( { description: 'Is this movie currently being downloaded', defaultValue: false })
  downloading: boolean

  @Field( { description: 'The time this movie is downloaded', defaultValue: null })
  downloadedOn: number

}
