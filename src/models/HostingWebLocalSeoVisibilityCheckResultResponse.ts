/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebLocalSeoListingStatusEnum } from './HostingWebLocalSeoListingStatusEnum';
import { HostingWebLocalSeoFlowStatusEnum } from './HostingWebLocalSeoFlowStatusEnum';
import { HostingWebLocalSeoFieldStatusEnum } from './HostingWebLocalSeoFieldStatusEnum';

export type HostingWebLocalSeoVisibilityCheckResultResponse = {
  city?: string | null;
  cityStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  country?: string | null;
  countryStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  dateCreated?: Date | null;
  directoryType?: string | null;
  email?: string | null;
  emailStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  flowStatus?: HostingWebLocalSeoFlowStatusEnum | null;
  listingId?: string | null;
  listingUrl?: string | null;
  name?: string | null;
  nameStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  phone?: string | null;
  phoneStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  province?: string | null;
  provinceStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  street?: string | null;
  streetAndNo?: string | null;
  streetAndNoStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  streetNo?: string | null;
  streetNoStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  streetStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  streetType?: string | null;
  streetTypeStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  syncStatus?: HostingWebLocalSeoListingStatusEnum | null;
  website?: string | null;
  websiteStatus?: HostingWebLocalSeoFieldStatusEnum | null;
  zip?: string | null;
  zipStatus?: HostingWebLocalSeoFieldStatusEnum | null;
};
