import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Images {

  @Field({ description: 'A backdrop image for the content.' })
  backdrop?: string

  @Field({ description: 'A poster image for the content.' })
  poster?: string

  @Field({ description: 'A hd clear logo image for the content.' })
  logo?: string

  @Field({ description: 'A banner image for the content.' })
  banner?: string

}
