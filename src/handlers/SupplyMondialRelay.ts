/* WARNING: This file is auto-generated . Do not edit manually. */

import { CoreTypesCountryEnum } from '../models/CoreTypesCountryEnum';
import { SupplyMondialRelayReturn } from '../models/SupplyMondialRelayReturn';
import OVHBase from '../ovh';

class SupplyMondialRelayHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Find the 10 nearest MondialRelay points from address or city. */
  postMondialRelay = (body: {
    address?: string;
    city?: string;
    country: CoreTypesCountryEnum;
    zipcode?: string;
  }): Promise<SupplyMondialRelayReturn> => {
    return this.ovh.request('POST', '/supply/mondialRelay', body);
  };
}

export { SupplyMondialRelayHandler };
