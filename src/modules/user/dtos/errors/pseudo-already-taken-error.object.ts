import { ObjectType } from '@nestjs/graphql';
import { DisplayableError } from 'common/dtos/errors/displayable-error.object';

@ObjectType({
  implements: () => [DisplayableError],
})
export class PseudoAlreadyTakenError implements DisplayableError {
  message!: string;
}
