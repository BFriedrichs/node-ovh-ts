/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuthAccessRule } from './AuthAccessRule';
import { AuthMethodEnum } from './AuthMethodEnum';

export type AuthDetails = {
  allowedRoutes?: AuthAccessRule[] | null;
  description?: string | null;
  method?: AuthMethodEnum;
  roles?: string[] | null;
  user?: string | null;
};
