/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceStateEnum } from './ServiceStateEnum';
import { ServiceRenewType } from './ServiceRenewType';
import { ServiceRenewalTypeEnum } from './ServiceRenewalTypeEnum';

export type ServicesService = {
  canDeleteAtExpiration?: boolean;
  contactAdmin?: string;
  contactBilling?: string;
  contactTech?: string;
  creation?: Date;
  domain?: string;
  engagedUpTo?: Date | null;
  expiration?: Date;
  possibleRenewPeriod?: number[] | null;
  renew?: ServiceRenewType | null;
  renewalType?: ServiceRenewalTypeEnum;
  serviceId?: number;
  status?: ServiceStateEnum;
};
