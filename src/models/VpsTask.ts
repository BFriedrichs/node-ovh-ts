/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsTaskTypeEnum } from './VpsTaskTypeEnum';
import { VpsTaskStateEnum } from './VpsTaskStateEnum';

export type VpsTask = {
  date: Date;
  id: number;
  progress: number;
  state: VpsTaskStateEnum;
  type: VpsTaskTypeEnum;
};
