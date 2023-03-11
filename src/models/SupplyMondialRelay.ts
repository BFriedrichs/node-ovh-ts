/* WARNING: This file is auto-generated . Do not edit manually. */

import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { SupplyMondialRelayOpening } from './SupplyMondialRelayOpening';
import { SupplyMondialRelayClosingPeriod } from './SupplyMondialRelayClosingPeriod';

export type SupplyMondialRelay = {
  address: string;
  city: string;
  closing: SupplyMondialRelayClosingPeriod | null;
  country: CoreTypesCountryEnum;
  distance: number | null;
  id: string;
  lat: number;
  lng: number;
  mapUrl: string | null;
  name: string;
  opening: SupplyMondialRelayOpening;
  pictureUrl: string | null;
  zipcode: string;
};
