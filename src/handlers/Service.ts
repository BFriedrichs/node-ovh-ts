/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceRenewRenewDescription } from '../models/ServiceRenewRenewDescription';
import { ServiceRenewRenewOrder } from '../models/ServiceRenewRenewOrder';
import { ServiceListService } from '../models/ServiceListService';
import OVHBase from '../ovh';

class ServiceHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<number[]> => {
    return this.ovh.request('GET', '/service');
  };

  /** Get this object properties */
  getByServiceId = (serviceId: number): Promise<ServiceListService> => {
    return this.ovh.request('GET', `/service/${serviceId}`);
  };

  /** Alter this object properties */
  updateByServiceId = (serviceId: number, body: ServiceListService): Promise<void> => {
    return this.ovh.request('PUT', `/service/${serviceId}`, body);
  };

  /** List possible renews for this service */
  listRenewByServiceId = (serviceId: string): Promise<ServiceRenewRenewDescription[]> => {
    return this.ovh.request('GET', `/service/${serviceId}/renew`);
  };

  /** Create a renew order */
  createRenewByServiceId = (
    serviceId: string,
    body: { dryRun?: boolean; duration: string; services: number[] }
  ): Promise<ServiceRenewRenewOrder> => {
    return this.ovh.request('POST', `/service/${serviceId}/renew`, body);
  };

  /** Reopen a suspended service */
  postReopenByServiceId = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/reopen`);
  };

  /** Suspend the service. The service won't be accessible, but you will still be charged for it */
  postSuspendByServiceId = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/suspend`);
  };

  /** Terminates a suspended service */
  postTerminateByServiceId = (serviceId: number): Promise<void> => {
    return this.ovh.request('POST', `/service/${serviceId}/terminate`);
  };
}

export { ServiceHandler };
