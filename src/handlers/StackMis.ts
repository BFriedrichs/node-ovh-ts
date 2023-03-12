/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { StackMisProduct } from '../models/StackMisProduct';
import OVHBase from '../ovh';

class StackMisHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listMis = (): Promise<string[]> => {
    return this.ovh.request('GET', '/stack/mis');
  };

  /** Get this object properties */
  getMisByServiceName = (serviceName: string): Promise<StackMisProduct> => {
    return this.ovh.request('GET', `/stack/mis/${serviceName}`);
  };

  /** Get this object properties */
  getMisServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/stack/mis/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateMisServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/stack/mis/${serviceName}/serviceInfos`, body);
  };
}

export { StackMisHandler };
