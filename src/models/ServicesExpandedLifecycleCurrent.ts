/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedLifecycleActionEnum } from './ServicesExpandedLifecycleActionEnum';
import { ServicesExpandedLifecycleStateEnum } from './ServicesExpandedLifecycleStateEnum';

export type ServicesExpandedLifecycleCurrent = {
  creationDate: Date | null;
  pendingActions: ServicesExpandedLifecycleActionEnum;
  state: ServicesExpandedLifecycleStateEnum;
  terminationDate: Date | null;
};
