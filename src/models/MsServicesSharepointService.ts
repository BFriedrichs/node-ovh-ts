/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesSharepointServiceOfferEnum } from './MsServicesSharepointServiceOfferEnum';
import { MsServicesServiceStateEnum } from './MsServicesServiceStateEnum';

export type MsServicesSharepointService = {
  currentUsage: number | null;
  displayName: string | null;
  domain: string;
  farmUrl: string;
  offer: MsServicesSharepointServiceOfferEnum;
  quota: number;
  state: MsServicesServiceStateEnum;
  taskPendingId: number;
  url: string | null;
};
