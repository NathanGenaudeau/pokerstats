import { User } from 'database/schema/users';
import { UserDto } from '../dtos/user.dto';

export class UserModel implements User {
  id: string;
  pseudo: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.pseudo = user.pseudo;
    this.passwordHash = user.passwordHash;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  static fromResult(result: User): UserModel {
    return new UserModel(result);
  }

  // any calculated properties goes here
  get joined_years_ago() {
    return new Date().getFullYear() - this.createdAt.getFullYear();
  }

  toDto(): UserDto {
    return {
      id: this.id,
      pseudo: this.pseudo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
