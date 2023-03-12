/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProObjectStateEnum } from './EmailProObjectStateEnum';

export type XdslXdslEmailPro = {
  currentUsage?: number;
  displayName?: string | null;
  domain?: string;
  firstName?: string | null;
  id?: number;
  initial?: string | null;
  lastLogoffDate?: Date | null;
  lastLogonDate?: Date | null;
  lastName?: string | null;
  login?: string;
  passwordLastUpdate?: Date | null;
  primaryEmailAddress?: string;
  quota?: number;
  state?: EmailProObjectStateEnum;
  taskPendingId?: number | null;
};
