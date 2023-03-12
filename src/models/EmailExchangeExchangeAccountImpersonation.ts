/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';

export type EmailExchangeExchangeAccountImpersonation = {
  creationDate?: Date;
  lastPasswordChange?: Date | null;
  state?: EmailExchangeObjectStateEnum;
  taskPendingId?: number | null;
  upn?: string;
};
