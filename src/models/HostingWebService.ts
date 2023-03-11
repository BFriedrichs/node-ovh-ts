/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebCountriesIp } from './HostingWebCountriesIp';
import { HostingWebResourceEnum } from './HostingWebResourceEnum';
import { HostingWebServiceAccess } from './HostingWebServiceAccess';
import { HostingWebDatacenterEnum } from './HostingWebDatacenterEnum';
import { HostingWebOfferCapabilitiesEnum } from './HostingWebOfferCapabilitiesEnum';
import { HostingWebStateEnum } from './HostingWebStateEnum';
import { HostingWebOfferEnum } from './HostingWebOfferEnum';
import { HostingWebAvailableOfferStruct } from './HostingWebAvailableOfferStruct';
import { HostingWebPhpVersion } from './HostingWebPhpVersion';
import { HostingWebOperatingSystemEnum } from './HostingWebOperatingSystemEnum';

export type HostingWebService = {
  availableBoostOffer: HostingWebAvailableOfferStruct;
  boostOffer: HostingWebOfferCapabilitiesEnum | null;
  cluster: string;
  clusterIp: string | null;
  clusterIpv6: string | null;
  countriesIp: HostingWebCountriesIp | null;
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
  phpVersions: HostingWebPhpVersion;
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
  updates: string;
};
