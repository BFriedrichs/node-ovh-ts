/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsTaskStateEnum } from './VpsTaskStateEnum';
import { VpsTaskTypeEnum } from './VpsTaskTypeEnum';

export type VpsTask = {
  date: Date;
  id: number;
  progress: number;
  state: VpsTaskStateEnum;
  type: VpsTaskTypeEnum;
};
