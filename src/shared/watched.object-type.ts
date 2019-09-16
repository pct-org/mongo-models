import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Watched {

  @Field({ description: 'Did the user completely watched this item.' })
  complete: boolean

  @Field({ description: 'Progress of the user watching this item.' })
  progress: number

}
