/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeAuthorizedIpStatusEnum } from './EmailExchangeAuthorizedIpStatusEnum';

export type EmailExchangeExchangeServiceAuthorizedIp = {
  HTTPS: boolean;
  IMAP: boolean;
  IMAPS: boolean;
  POP: boolean;
  POPS: boolean;
  SMTP: boolean;
  SMTPS: boolean;
  creationDate: Date;
  displayName: string;
  ip: string;
  status: EmailExchangeAuthorizedIpStatusEnum;
  updateDate: Date | null;
};
