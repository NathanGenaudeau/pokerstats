import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dtos/register-user.dto';
import bcrypt from 'bcrypt';
import { UserObject } from './dtos/objects/user.object';
import { PseudoAlreadyTakenException } from './exceptions/pseudo-already-taken.exception';
import { UserRepositoy } from './repository/user.respository';

const BCRYPT_HASH_ROUNDS = 10;

@Injectable()
export class UserService {
  constructor(private readonly userRepositoy: UserRepositoy) {}

  /**
   * Register a new user
   *
   * @param {RegisterUserDto} registerUser
   * @memberof UserService
   */
  async registerUser(registerUser: RegisterUserDto) {
    const { pseudo, password } = registerUser;

    const prevUser = await this.userRepositoy.getUserByPseudo(
      pseudo.toLowerCase(),
    );

    if (prevUser) {
      throw new PseudoAlreadyTakenException(pseudo);
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_HASH_ROUNDS);

    const user = await this.userRepositoy.createUser({
      pseudo: pseudo.toLowerCase(),
      passwordHash,
    });

    return user.toDto();
  }

  async findUserByPseudo(pseudo: string) {
    return this.userRepositoy.getUserByPseudo(pseudo);
  }

  async findUserById(id: string) {
    return this.userRepositoy.getUserById(id);
  }

  async loadUsersByIdBatch(userIds: string[]): Promise<(Error | UserObject)[]> {
    const users = await this.userRepositoy.getUsersByIds(userIds);
    const userDtosMap = users.reduce<Map<string, UserObject>>(
      (result, user) => {
        result.set(user.id, user);
        return result;
      },
      new Map<string, UserObject>(),
    );

    return userIds.map(
      (userId) =>
        userDtosMap.get(userId) || new Error(`No user found for key ${userId}`),
    );
  }
}
