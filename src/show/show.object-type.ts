import { Field, ObjectType } from 'type-graphql'

import { Season } from '../season/season.object-type'
import { Content } from '../shared/content.object-type'
import { AirInformation } from '../shared/air-Information.object-type'

@ObjectType()
export class Show extends Content {

  @Field({ description: 'The tvdb id for the show.' })
  tvdbId: number

  @Field(type => AirInformation, { description: 'Information about when the show airs.' })
  airInfo: AirInformation

  @Field(type => [Season], { description: 'The seasons in the show.' })
  seasons: Array<Season>

  @Field({ description: 'The total amount of seasons' })
  numSeasons: number

  constructor({
    imdbId,
    tmdbId,
    tvdbId,
    title,
    released,
    certification,
    slug,
    synopsis,
    runtime,
    rating,
    bookmarked,
    bookmarkedOn,
    images,
    genres,
    type = 'tvshow',
    airInfo,
    numSeasons,
    createdAt,
    updatedAt,
    seasons,
    trailer
  }) {
    super({
      imdbId,
      tmdbId,
      title,
      released,
      certification,
      slug,
      synopsis,
      runtime,
      rating,
      bookmarked,
      bookmarkedOn,
      images,
      genres,
      type,
      trailer,
      updatedAt,
      createdAt
    })

    this.tvdbId = tvdbId
    this.airInfo = airInfo
    this.seasons = seasons
    this.numSeasons = numSeasons
  }

}
