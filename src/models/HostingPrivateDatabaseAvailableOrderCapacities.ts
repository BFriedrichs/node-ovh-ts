/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseAvailableRamSizeEnum } from './HostingPrivateDatabaseAvailableRamSizeEnum';
import { HostingPrivateDatabaseOfferEnum } from './HostingPrivateDatabaseOfferEnum';
import { HostingPrivateDatabaseAvailableVersionEnum } from './HostingPrivateDatabaseAvailableVersionEnum';
import { HostingPrivateDatabaseDatacenterEnum } from './HostingPrivateDatabaseDatacenterEnum';

export type HostingPrivateDatabaseAvailableOrderCapacities = {
  datacenter: HostingPrivateDatabaseDatacenterEnum;
  offer: HostingPrivateDatabaseOfferEnum;
  ram: HostingPrivateDatabaseAvailableRamSizeEnum;
  version: HostingPrivateDatabaseAvailableVersionEnum;
};
