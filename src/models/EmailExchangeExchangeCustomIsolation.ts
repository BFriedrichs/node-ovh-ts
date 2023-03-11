/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeOvhCustomIsolationFieldEnum } from './EmailExchangeOvhCustomIsolationFieldEnum';

export type EmailExchangeExchangeCustomIsolation = {
  creationDate: Date;
  isolationField: EmailExchangeOvhCustomIsolationFieldEnum;
  isolationValue: string;
  name: string;
  status: EmailExchangeObjectStateEnum;
};
