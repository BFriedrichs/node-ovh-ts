/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuthCredentialStateEnum } from './AuthCredentialStateEnum';
import { AuthAccessRule } from './AuthAccessRule';

export type AuthApiCredential = {
  allowedIPs?: string[] | null;
  applicationId?: number;
  creation?: Date;
  credentialId?: number;
  expiration?: Date | null;
  lastUse?: Date | null;
  ovhSupport?: boolean;
  rules?: AuthAccessRule[];
  status?: AuthCredentialStateEnum;
};
