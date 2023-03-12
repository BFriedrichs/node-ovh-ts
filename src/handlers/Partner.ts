/* WARNING: This file is auto-generated . Do not edit manually. */

import { Partner2Partner } from '../models/Partner2Partner';
import OVHBase from '../ovh';

class PartnerHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get partner status */
  get = (): Promise<Partner2Partner> => {
    return this.ovh.request('GET', '/partner');
  };

  /** Register as a partner */
  post = (body: Partner2Partner): Promise<void> => {
    return this.ovh.request('POST', '/partner', body);
  };
}

export { PartnerHandler };
