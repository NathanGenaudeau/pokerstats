import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserObject {
  @Field(() => ID, { description: 'ID of the user' })
  id!: string;

  /**
   * User's pseudo
   *
   * @example jhonedoe
   * @type {string}
   * @memberof UserDto
   */
  pseudo!: string;

  /**
   * User join date
   *
   * @example 2021-09-04
   * @type {Date}
   * @memberof UserDto
   */
  createdAt!: Date;

  /**
   * User last updated
   *
   * @example 2021-09-04
   * @type {Date}
   * @memberof UserDto
   */
  updatedAt!: Date;
}
