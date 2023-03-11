/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiServiceStatusEnum } from './MetricsApiServiceStatusEnum';
import { MetricsApiRegion } from './MetricsApiRegion';
import { MetricsApiOption } from './MetricsApiOption';
import { MetricsApiOfferTypeEnum } from './MetricsApiOfferTypeEnum';

export type MetricsApiService = {
  description: string;
  name: string;
  offer: string;
  quota: MetricsApiOption;
  region: MetricsApiRegion;
  shouldUpgrade: boolean;
  status: MetricsApiServiceStatusEnum;
  type: MetricsApiOfferTypeEnum;
};
