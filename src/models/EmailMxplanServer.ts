/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProServerStateEnum } from './EmailProServerStateEnum';

export type EmailMxplanServer = {
  currentDiskUsage: number | null;
  diskSize: number | null;
  ip: string;
  ipV6: string | null;
  isAValid: boolean;
  isAaaaValid: boolean;
  isPtrV6Valid: boolean;
  isPtrValid: boolean;
  state: EmailProServerStateEnum;
  taskPendingId: number;
  version: number | null;
};
