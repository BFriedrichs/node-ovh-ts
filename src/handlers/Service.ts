/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceRenewRenewDescription } from '../models/ServiceRenewRenewDescription';
import { ServiceListService } from '../models/ServiceListService';
import { ServiceRenewRenewOrder } from '../models/ServiceRenewRenewOrder';
import OVHBase from '../ovh';

class ServiceHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<number> => {
    return this.ovh.request('GET', '/service');
  };

  /** Get this object properties */
  getServiceId = (serviceId: number): Promise<ServiceListService> => {
    return this.ovh.request('GET', `/service/${serviceId}`);
  };

  /** Alter this object properties */
  putServiceId = (serviceId: number, body: ServiceListService): Promise<void> => {
    return this.ovh.request('PUT', `/service/${serviceId}`, body);
  };

  /** List possible renews for this service */
  getServiceIdRenew = (serviceId: string): Promise<ServiceRenewRenewDescription> => {
    return this.ovh.request('GET', `/service/${serviceId}/renew`);
  };

  /** Create a renew order */
  postServiceIdRenew = (
    serviceId: string,
    body: { dryRun?: boolean; duration: string; services: number }
  ): Promise<ServiceRenewRenewOrder> => {
    return this.ovh.request('POST', `/service/${serviceId}/renew`, body);
  };

  /** Reopen a suspended service */
  postServiceIdReopen = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/reopen`);
  };

  /** Suspend the service. The service won't be accessible, but you will still be charged for it */
  postServiceIdSuspend = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/suspend`);
  };

  /** Terminates a suspended service */
  postServiceIdTerminate = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/terminate`);
  };
}

export default ServiceHandler;
