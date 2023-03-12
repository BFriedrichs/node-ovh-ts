/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingL7PolicyActionEnum } from './CloudLoadbalancingL7PolicyActionEnum';

export type CloudLoadbalancingL7PolicyUpdate = {
  action: CloudLoadbalancingL7PolicyActionEnum;
  description?: string;
  listenerId?: string;
  name?: string;
  position?: number;
  redirectHttpCode?: number | null;
  redirectPoolId?: string | null;
  redirectPrefix?: string | null;
  redirectUrl?: string | null;
};
