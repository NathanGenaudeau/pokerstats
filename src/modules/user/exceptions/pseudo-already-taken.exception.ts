import { BaseException } from 'common/exceptions/base.exception';
import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from 'common/errors/error-codes';

export class PseudoAlreadyTakenException extends BaseException {
  constructor(pseudo: string) {
    super(`${pseudo} already in use`, HttpStatus.CONFLICT, {
      errorCode: ErrorCodes.PseudoAlreadyInUseError,
    });
  }
}
