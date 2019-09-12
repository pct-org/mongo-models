import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AirInformation {

  @Field({ description: 'The name of the network on which the show airs.' })
  network: string

  @Field({ description: 'The country in which the show airs.' })
  country: string

  @Field({ description: 'The name of the day (in English), on which the show airs. (Will be null if the show has stopped airing).' })
  day: string

  @Field({ description: 'The time at which the show airs. (Will be null if the show has stopped airing).' })
  time: string

  @Field({ description: 'The status of the show\'s airing (returning series, in production, planned, cancelled, ended)'})
  status: string

}
