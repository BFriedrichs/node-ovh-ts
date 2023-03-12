/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSAddonStatusEnum } from './WebPaaSAddonStatusEnum';
import { WebPaaSAddonFamilyEnum } from './WebPaaSAddonFamilyEnum';
import { WebPaaSAddonProductNameEnum } from './WebPaaSAddonProductNameEnum';

export type WebPaaSSubscriptionAddon = {
  planFamilyName: WebPaaSAddonFamilyEnum;
  productName: WebPaaSAddonProductNameEnum;
  quantity: number;
  serviceName: string;
  status: WebPaaSAddonStatusEnum;
};
