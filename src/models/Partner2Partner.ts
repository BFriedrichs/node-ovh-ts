/* WARNING: This file is auto-generated . Do not edit manually. */

import { Partner2PartnerShip } from './Partner2PartnerShip';
import { Partner2AreaOfExpertiseEnum } from './Partner2AreaOfExpertiseEnum';
import { Partner2Account } from './Partner2Account';
import { Partner2Contact } from './Partner2Contact';
import { Partner2AcceptanceStatusEnum } from './Partner2AcceptanceStatusEnum';

export type Partner2Partner = {
  acceptanceStatus: Partner2AcceptanceStatusEnum | null;
  account?: Partner2Account;
  areaOfExpertise: Partner2AreaOfExpertiseEnum | null;
  contact?: Partner2Contact;
  partnersProgramReason: string | null;
  partnership: Partner2PartnerShip;
  salesProjection: number | null;
};
