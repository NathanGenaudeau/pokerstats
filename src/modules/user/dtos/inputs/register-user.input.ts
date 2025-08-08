import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class RegisterUserInput {
  /**
   * Pseudo of user
   *
   * @example jhonedoe
   * @type {string}
   * @memberof RegisterUserDto
   */
  @IsNotEmpty()
  pseudo!: string;

  /**
   * Password for user
   *
   * @example abc@123
   * @type {string}
   * @memberof RegisterUserDto
   */
  @IsNotEmpty()
  password!: string;
}
