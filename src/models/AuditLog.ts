/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuditLogTypeEnum } from './AuditLogTypeEnum';
import { AuditLogLoginSuccessDetails } from './AuditLogLoginSuccessDetails';
import { AuditLogAuthDetails } from './AuditLogAuthDetails';

export type AuditLog = {
  authDetails?: AuditLogAuthDetails | null;
  createdAt?: Date;
  ip?: string | null;
  loginSuccessDetails?: AuditLogLoginSuccessDetails | null;
  type?: AuditLogTypeEnum;
};
