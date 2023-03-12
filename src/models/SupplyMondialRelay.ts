/* WARNING: This file is auto-generated . Do not edit manually. */

import { SupplyMondialRelayOpening } from './SupplyMondialRelayOpening';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { SupplyMondialRelayClosingPeriod } from './SupplyMondialRelayClosingPeriod';

export type SupplyMondialRelay = {
  address: string;
  city: string;
  closing: SupplyMondialRelayClosingPeriod[] | null;
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
