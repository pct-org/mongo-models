import { Field, ObjectType } from 'type-graphql'

import { Content } from '../shared/content.object-type'
import { Torrent } from '../shared/torrent.object-type'

@ObjectType()
export class Movie extends Content {

  @Field({ description: 'Did the user watched this movie already.' })
  watched: boolean

  @Field(type => [Torrent], { description: 'The movie\'s torrents.' })
  torrents: Array<Torrent>

}
