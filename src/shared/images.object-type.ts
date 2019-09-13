import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Images {

  @Field({ description: 'A backdrop image for the content.', nullable: true })
  backdrop?: string

  @Field({ description: 'A poster image for the content.', nullable: true })
  poster?: string

  @Field({ description: 'A hd clear logo image for the content.', nullable: true })
  logo?: string

  @Field({ description: 'A banner image for the content.', nullable: true })
  banner?: string

}
