/* WARNING: This file is auto-generated . Do not edit manually. */

import { AllDomAllDom } from '../models/AllDomAllDom';
import { ServicesService } from '../models/ServicesService';
import { AllDomAllDomDomain } from '../models/AllDomAllDomDomain';
import OVHBase from '../ovh';

class AllDomHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/allDom');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<AllDomAllDom> => {
    return this.ovh.request('GET', `/allDom/${serviceName}`);
  };

  /** Domains attached to this allDom */
  getDomainByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/domain`);
  };

  /** Get this object properties */
  getDomainByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<AllDomAllDomDomain> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/domain/${domain}`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/allDom/${serviceName}/serviceInfos`, body);
  };
}

export { AllDomHandler };
