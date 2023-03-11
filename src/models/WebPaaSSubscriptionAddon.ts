/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSAddonProductNameEnum } from './WebPaaSAddonProductNameEnum';
import { WebPaaSAddonFamilyEnum } from './WebPaaSAddonFamilyEnum';
import { WebPaaSAddonStatusEnum } from './WebPaaSAddonStatusEnum';

export type WebPaaSSubscriptionAddon = {
  planFamilyName: WebPaaSAddonFamilyEnum;
  productName: WebPaaSAddonProductNameEnum;
  quantity: number;
  serviceName: string;
  status: WebPaaSAddonStatusEnum;
};
