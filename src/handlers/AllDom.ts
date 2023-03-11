/* WARNING: This file is auto-generated . Do not edit manually. */

import { AllDomAllDom } from '../models/AllDomAllDom';
import { AllDomAllDomDomain } from '../models/AllDomAllDomDomain';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class AllDomHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/allDom');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<AllDomAllDom> => {
    return this.ovh.request('GET', `/allDom/${serviceName}`);
  };

  /** Domains attached to this allDom */
  getServiceNameDomain = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/domain`);
  };

  /** Get this object properties */
  getServiceNameDomainDomain = (
    domain: string,
    serviceName: string
  ): Promise<AllDomAllDomDomain> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/domain/${domain}`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/allDom/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/allDom/${serviceName}/serviceInfos`, body);
  };
}

export default AllDomHandler;
