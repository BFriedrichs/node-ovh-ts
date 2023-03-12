/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuthAccessRule } from './AuthAccessRule';
import { AuthCredentialStateEnum } from './AuthCredentialStateEnum';

export type AuthApiCredential = {
  allowedIPs: string[] | null;
  applicationId: number;
  creation: Date;
  credentialId: number;
  expiration: Date | null;
  lastUse: Date | null;
  ovhSupport: boolean;
  rules: AuthAccessRule[];
  status: AuthCredentialStateEnum;
};
