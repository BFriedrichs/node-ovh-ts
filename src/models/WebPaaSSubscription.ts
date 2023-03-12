/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSSubscriptionAddon } from './WebPaaSSubscriptionAddon';
import { WebPaaSSubscriptionMetadata } from './WebPaaSSubscriptionMetadata';
import { WebPaaSOfferEnum } from './WebPaaSOfferEnum';
import { WebPaaSStatusEnum } from './WebPaaSStatusEnum';

export type WebPaaSSubscription = {
  addons: WebPaaSSubscriptionAddon[];
  createdAt: Date;
  endDate: Date | null;
  metadata: WebPaaSSubscriptionMetadata;
  offer: WebPaaSOfferEnum;
  partnerProjectId: string | null;
  projectName: string;
  serviceId: string;
  startDate: Date | null;
  status: WebPaaSStatusEnum;
};
