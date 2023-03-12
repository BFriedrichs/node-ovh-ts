/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSOfferEnum } from './WebPaaSOfferEnum';
import { WebPaaSSubscriptionMetadata } from './WebPaaSSubscriptionMetadata';
import { WebPaaSStatusEnum } from './WebPaaSStatusEnum';
import { WebPaaSSubscriptionAddon } from './WebPaaSSubscriptionAddon';

export type WebPaaSSubscription = {
  addons?: WebPaaSSubscriptionAddon[];
  createdAt?: Date;
  endDate?: Date | null;
  metadata?: WebPaaSSubscriptionMetadata;
  offer?: WebPaaSOfferEnum;
  partnerProjectId?: string | null;
  projectName?: string;
  serviceId?: string;
  startDate?: Date | null;
  status?: WebPaaSStatusEnum;
};
