/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';
import { EmailExchangeCountryCodeEnum } from './EmailExchangeCountryCodeEnum';

export type MsServicesAccount = {
  SAMAccountName?: string | null;
  city?: string | null;
  company?: string | null;
  countryCode?: EmailExchangeCountryCodeEnum | null;
  creationDate?: Date | null;
  description?: string | null;
  displayName?: string | null;
  fax?: string | null;
  firstName?: string | null;
  guid?: string | null;
  id?: number;
  initials?: string | null;
  jobDepartment?: string | null;
  jobTitle?: string | null;
  lastLogoffDate?: Date | null;
  lastLogonDate?: Date | null;
  lastName?: string | null;
  lastUpdateDate?: Date | null;
  mobile?: string | null;
  office?: string | null;
  passwordLastUpdate?: Date | null;
  phone?: string | null;
  postalCode?: string | null;
  region?: string | null;
  state?: MsServicesObjectStateEnum;
  streetAddress?: string | null;
  taskPendingId?: number;
  userPrincipalName?: string;
};
