/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslOrderFollowupStepNameEnum } from './XdslOrderFollowupStepNameEnum';
import { XdslOrderFollowupDurationUnitEnum } from './XdslOrderFollowupDurationUnitEnum';
import { XdslOrderFollowupStepStatusEnum } from './XdslOrderFollowupStepStatusEnum';

export type XdslOrderFollowupStep = {
  comments: string[];
  doneDate: Date | null;
  durationUnit: XdslOrderFollowupDurationUnitEnum;
  expectedDuration: number;
  name: XdslOrderFollowupStepNameEnum;
  status: XdslOrderFollowupStepStatusEnum;
};
