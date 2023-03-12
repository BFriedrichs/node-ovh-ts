/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeActiveSyncPolicyEnum } from './EmailExchangeActiveSyncPolicyEnum';

export type EmailExchangeExchangeServiceProtocol = {
  IMAP?: boolean;
  POP?: boolean;
  activeSync?: boolean;
  activeSyncPolicy?: EmailExchangeActiveSyncPolicyEnum;
  creationDate?: Date;
  lastUpdate?: Date | null;
  taskPendingId?: number;
  webMail?: boolean;
};
