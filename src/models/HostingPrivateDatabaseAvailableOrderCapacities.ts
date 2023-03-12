/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseAvailableRamSizeEnum } from './HostingPrivateDatabaseAvailableRamSizeEnum';
import { HostingPrivateDatabaseAvailableVersionEnum } from './HostingPrivateDatabaseAvailableVersionEnum';
import { HostingPrivateDatabaseDatacenterEnum } from './HostingPrivateDatabaseDatacenterEnum';
import { HostingPrivateDatabaseOfferEnum } from './HostingPrivateDatabaseOfferEnum';

export type HostingPrivateDatabaseAvailableOrderCapacities = {
  datacenter: HostingPrivateDatabaseDatacenterEnum[];
  offer: HostingPrivateDatabaseOfferEnum;
  ram: HostingPrivateDatabaseAvailableRamSizeEnum[];
  version: HostingPrivateDatabaseAvailableVersionEnum[];
};
