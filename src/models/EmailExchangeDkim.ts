/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeDkimStatusEnum } from './EmailExchangeDkimStatusEnum';

export type EmailExchangeDkim = {
  customerRecord: string;
  header: string;
  lastUpdate: Date | null;
  recordType: string;
  selectorName: string;
  status: EmailExchangeDkimStatusEnum;
  targetRecord: string | null;
  taskPendingId: number | null;
};
