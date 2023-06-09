/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProServiceStateEnum } from './EmailProServiceStateEnum';
import { EmailProSpamAndVirusConfiguration } from './EmailProSpamAndVirusConfiguration';
import { EmailProServiceOfferEnum } from './EmailProServiceOfferEnum';

export type EmailProService = {
  complexityEnabled?: boolean;
  displayName?: string | null;
  domain?: string;
  hostname?: string | null;
  lastUpdateDate?: Date | null;
  lockoutDuration?: number;
  lockoutObservationWindow?: number;
  lockoutThreshold?: number | null;
  maxPasswordAge?: number | null;
  maxReceiveSize?: number;
  maxSendSize?: number;
  minPasswordAge?: number | null;
  minPasswordLength?: number | null;
  offer?: EmailProServiceOfferEnum;
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  state?: EmailProServiceStateEnum;
  taskPendingId?: number;
  webUrl?: string | null;
};
