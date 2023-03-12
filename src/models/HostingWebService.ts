/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebPhpVersion } from './HostingWebPhpVersion';
import { HostingWebServiceAccess } from './HostingWebServiceAccess';
import { HostingWebResourceEnum } from './HostingWebResourceEnum';
import { HostingWebStateEnum } from './HostingWebStateEnum';
import { HostingWebOperatingSystemEnum } from './HostingWebOperatingSystemEnum';
import { HostingWebCountriesIp } from './HostingWebCountriesIp';
import { HostingWebOfferCapabilitiesEnum } from './HostingWebOfferCapabilitiesEnum';
import { HostingWebAvailableOfferStruct } from './HostingWebAvailableOfferStruct';
import { HostingWebDatacenterEnum } from './HostingWebDatacenterEnum';
import { HostingWebOfferEnum } from './HostingWebOfferEnum';

export type HostingWebService = {
  availableBoostOffer: HostingWebAvailableOfferStruct[];
  boostOffer: HostingWebOfferCapabilitiesEnum | null;
  cluster: string;
  clusterIp: string | null;
  clusterIpv6: string | null;
  countriesIp: HostingWebCountriesIp[] | null;
  datacenter: HostingWebDatacenterEnum;
  displayName: string | null;
  filer: string | null;
  hasCdn: boolean | null;
  hasHostedSsl: boolean | null;
  home: string;
  hostingIp: string | null;
  hostingIpv6: string | null;
  lastOvhConfigScan: Date | null;
  offer: HostingWebOfferCapabilitiesEnum;
  operatingSystem: HostingWebOperatingSystemEnum;
  phpVersions: HostingWebPhpVersion[];
  primaryLogin: string;
  quotaSize: number;
  quotaUsed: number | null;
  recommendedOffer: HostingWebOfferEnum | null;
  resourceType: HostingWebResourceEnum;
  serviceManagementAccess: HostingWebServiceAccess;
  serviceName: string;
  state: HostingWebStateEnum;
  token: string | null;
  trafficQuotaSize: number | null;
  trafficQuotaUsed: number | null;
  updates: string[];
};
