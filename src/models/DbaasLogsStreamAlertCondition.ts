/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsStreamAlertConditionConditionTypeEnum } from './DbaasLogsStreamAlertConditionConditionTypeEnum';
import { DbaasLogsStreamAlertConditionConstraintTypeEnum } from './DbaasLogsStreamAlertConditionConstraintTypeEnum';
import { DbaasLogsStreamAlertConditionThresholdTypeEnum } from './DbaasLogsStreamAlertConditionThresholdTypeEnum';

export type DbaasLogsStreamAlertCondition = {
  alertId?: string;
  backlog?: number;
  conditionType?: DbaasLogsStreamAlertConditionConditionTypeEnum | null;
  constraintType?: DbaasLogsStreamAlertConditionConstraintTypeEnum | null;
  field?: string | null;
  grace?: number;
  queryFilter?: string | null;
  repeatNotificationsEnabled?: boolean | null;
  threshold?: number | null;
  thresholdType?: DbaasLogsStreamAlertConditionThresholdTypeEnum | null;
  time?: number | null;
  title?: string;
  value?: string | null;
};
