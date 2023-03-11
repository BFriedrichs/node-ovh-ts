/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuthMethodEnum } from './AuthMethodEnum';
import { AuthAccessRule } from './AuthAccessRule';

export type AuthDetails = {
  allowedRoutes: AuthAccessRule | null;
  description: string | null;
  method: AuthMethodEnum;
  roles: string | null;
  user: string | null;
};
