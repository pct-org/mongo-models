import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Image {

  @Field({ description: '' })
  full: string

  @Field({ description: '' })
  high: string

  @Field({ description: '' })
  medium: string

  @Field({ description: '' })
  thumb: string

}
