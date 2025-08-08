import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class LoginInput {
  /**
   * Login should be a pseudo
   *
   * @example jhonedoe
   * @type {string}
   * @memberof LoginDto
   */
  @IsNotEmpty()
  login!: string;

  /**
   * Password of user
   *
   * @example abc@123
   * @type {string}
   * @memberof LoginDto
   */
  @IsNotEmpty()
  password!: string;
}
