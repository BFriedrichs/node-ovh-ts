/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { VipSupportVip } from '../models/VipSupportVip';
import OVHBase from '../ovh';

class VipHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/vip');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<VipSupportVip> => {
    return this.ovh.request('GET', `/vip/${serviceName}`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/vip/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/vip/${serviceName}/serviceInfos`, body);
  };
}

export { VipHandler };
