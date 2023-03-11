/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuditLogAuthDetails } from './AuditLogAuthDetails';
import { AuditLogLoginSuccessDetails } from './AuditLogLoginSuccessDetails';
import { AuditLogTypeEnum } from './AuditLogTypeEnum';

export type AuditLog = {
  authDetails: AuditLogAuthDetails | null;
  createdAt: Date;
  ip: string | null;
  loginSuccessDetails: AuditLogLoginSuccessDetails | null;
  type: AuditLogTypeEnum;
};
