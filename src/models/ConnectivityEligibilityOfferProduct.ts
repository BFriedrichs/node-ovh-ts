/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityOfferProductTypeEnum } from './ConnectivityEligibilityOfferProductTypeEnum';
import { ConnectivityEligibilityOfferProductUnbundlingTypeEnum } from './ConnectivityEligibilityOfferProductUnbundlingTypeEnum';
import { ConnectivityEligibilityOfferProductProviderEnum } from './ConnectivityEligibilityOfferProductProviderEnum';

export type ConnectivityEligibilityOfferProduct = {
  code?: string;
  downloadRate?: number;
  grt?: string[];
  guaranteed?: boolean;
  name?: string;
  pairs?: number | null;
  provider?: ConnectivityEligibilityOfferProductProviderEnum;
  type?: ConnectivityEligibilityOfferProductTypeEnum;
  unbundlingType?: ConnectivityEligibilityOfferProductUnbundlingTypeEnum | null;
  uploadRate?: number;
};
