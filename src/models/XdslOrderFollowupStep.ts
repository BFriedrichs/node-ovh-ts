/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslOrderFollowupStepStatusEnum } from './XdslOrderFollowupStepStatusEnum';
import { XdslOrderFollowupDurationUnitEnum } from './XdslOrderFollowupDurationUnitEnum';
import { XdslOrderFollowupStepNameEnum } from './XdslOrderFollowupStepNameEnum';

export type XdslOrderFollowupStep = {
  comments?: string[];
  doneDate?: Date | null;
  durationUnit?: XdslOrderFollowupDurationUnitEnum;
  expectedDuration?: number;
  name?: XdslOrderFollowupStepNameEnum;
  status?: XdslOrderFollowupStepStatusEnum;
};
