/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleIpRegistryEnum } from './NichandleIpRegistryEnum';
import { NichandleCountryEnum } from './NichandleCountryEnum';

export type NichandleIpv4Org = {
  abuse_mailbox: string;
  address: string;
  city: string;
  country: NichandleCountryEnum;
  firstname: string;
  lastname: string;
  organisationId: string;
  phone: string;
  registry: NichandleIpRegistryEnum;
  state: string | null;
  zip: string | null;
};
