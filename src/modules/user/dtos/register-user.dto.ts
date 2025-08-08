import { IsNotEmpty } from 'class-validator';

/**
 * Create user
 *
 * @export
 * @class RegisterUserDto
 */
export class RegisterUserDto {
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
