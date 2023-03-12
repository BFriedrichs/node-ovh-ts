/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiServiceStatusEnum } from './MetricsApiServiceStatusEnum';
import { MetricsApiOption } from './MetricsApiOption';
import { MetricsApiRegion } from './MetricsApiRegion';
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
