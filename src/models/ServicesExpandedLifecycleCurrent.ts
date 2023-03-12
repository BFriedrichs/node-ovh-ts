/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedLifecycleStateEnum } from './ServicesExpandedLifecycleStateEnum';
import { ServicesExpandedLifecycleActionEnum } from './ServicesExpandedLifecycleActionEnum';

export type ServicesExpandedLifecycleCurrent = {
  creationDate?: Date | null;
  pendingActions?: ServicesExpandedLifecycleActionEnum[];
  state?: ServicesExpandedLifecycleStateEnum;
  terminationDate?: Date | null;
};
