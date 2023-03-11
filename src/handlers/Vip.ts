/* WARNING: This file is auto-generated . Do not edit manually. */

import { VipSupportVip } from '../models/VipSupportVip';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class VipHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/vip');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<VipSupportVip> => {
    return this.ovh.request('GET', `/vip/${serviceName}`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/vip/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/vip/${serviceName}/serviceInfos`, body);
  };
}

export default VipHandler;
