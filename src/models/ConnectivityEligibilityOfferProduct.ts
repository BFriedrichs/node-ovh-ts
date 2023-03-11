/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityOfferProductProviderEnum } from './ConnectivityEligibilityOfferProductProviderEnum';
import { ConnectivityEligibilityOfferProductUnbundlingTypeEnum } from './ConnectivityEligibilityOfferProductUnbundlingTypeEnum';
import { ConnectivityEligibilityOfferProductTypeEnum } from './ConnectivityEligibilityOfferProductTypeEnum';

export type ConnectivityEligibilityOfferProduct = {
  code: string;
  downloadRate: number;
  grt: string;
  guaranteed: boolean;
  name: string;
  pairs: number | null;
  provider: ConnectivityEligibilityOfferProductProviderEnum;
  type: ConnectivityEligibilityOfferProductTypeEnum;
  unbundlingType: ConnectivityEligibilityOfferProductUnbundlingTypeEnum | null;
  uploadRate: number;
};
