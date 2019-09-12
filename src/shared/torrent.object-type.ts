import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Torrent {

  @Field({ description: 'The quality of the video (1080p, 720p, 480p).' })
  quality: string

  @Field({ description: 'The website from which the torrent was obtained.' })
  provider: string

  @Field({ description: 'The language code describing the audio language of the video.' })
  language: string

  @Field({ description: 'The size of the video to which the torrent points (in bytes).' })
  size: number

  @Field({ description: 'The number of people seeding the torrent currently.' })
  seeds: number

  @Field({ description: 'The number of peers the torrent has.' })
  peers: number

  @Field({ description: 'The url pointing to the torrent.' })
  url: string

}
