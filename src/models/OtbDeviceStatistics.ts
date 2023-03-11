/* WARNING: This file is auto-generated . Do not edit manually. */

import { OtbDeviceStatisticsUnitEnum } from './OtbDeviceStatisticsUnitEnum';
import { OtbDeviceStatisticsTag } from './OtbDeviceStatisticsTag';
import { OtbDeviceStatisticsPoint } from './OtbDeviceStatisticsPoint';

export type OtbDeviceStatistics = {
  name: string;
  points: OtbDeviceStatisticsPoint;
  tags: OtbDeviceStatisticsTag;
  unit: OtbDeviceStatisticsUnitEnum;
};
