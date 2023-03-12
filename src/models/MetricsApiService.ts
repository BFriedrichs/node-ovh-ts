/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiOption } from './MetricsApiOption';
import { MetricsApiOfferTypeEnum } from './MetricsApiOfferTypeEnum';
import { MetricsApiRegion } from './MetricsApiRegion';
import { MetricsApiServiceStatusEnum } from './MetricsApiServiceStatusEnum';

export type MetricsApiService = {
  description?: string;
  name?: string;
  offer?: string;
  quota?: MetricsApiOption;
  region?: MetricsApiRegion;
  shouldUpgrade?: boolean;
  status?: MetricsApiServiceStatusEnum;
  type?: MetricsApiOfferTypeEnum;
};
