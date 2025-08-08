import { createUnionType, ObjectType } from '@nestjs/graphql';
import { PseudoAlreadyTakenError } from '../errors/pseudo-already-taken-error.object';

@ObjectType()
export class UserRegistrationSuccess {
  message: string;
}

export const UserRegistrationResult = createUnionType({
  name: 'UserRegistrationResult',
  description: 'User registration result',
  types: () => [UserRegistrationSuccess, PseudoAlreadyTakenError],
});
