/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSOfferEnum } from '../models/WebPaaSOfferEnum';
import { WebPaaSCapabilities } from '../models/WebPaaSCapabilities';
import { WebPaaSSubscription } from '../models/WebPaaSSubscription';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import { WebPaaSSubscriptionProjectAddCustomer } from '../models/WebPaaSSubscriptionProjectAddCustomer';
import { WebPaaSSubscriptionCustomer } from '../models/WebPaaSSubscriptionCustomer';
import OVHBase from '../ovh';

class WebPaaSHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available regions and templates */
  listCapabilities = (): Promise<WebPaaSCapabilities> => {
    return this.ovh.request('GET', '/webPaaS/capabilities');
  };

  /** List your subscriptions */
  listSubscriptions = (): Promise<string[]> => {
    return this.ovh.request('GET', '/webPaaS/subscription');
  };

  /** Get information about your subscription */
  getSubscriptionByServiceName = (serviceName: string): Promise<WebPaaSSubscription> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}`);
  };

  /** Confirm termination of your service */
  confirmSubscriptionTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/webPaaS/subscription/${serviceName}/confirmTermination`,
      body
    );
  };

  /** List customers added to a project */
  listSubscriptionCustomersByServiceName = (
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer[]> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/customer`);
  };

  /** Add customer to the project */
  addSubscriptionCustomerByServiceName = (
    serviceName: string,
    body: WebPaaSSubscriptionProjectAddCustomer
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request('POST', `/webPaaS/subscription/${serviceName}/customer`, body);
  };

  /** Remove customer from the project */
  deleteSubscriptionCustomerByServiceNameAndCustomerId = (
    customerId: string,
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request(
      'DELETE',
      `/webPaaS/subscription/${serviceName}/customer/${customerId}`
    );
  };

  /** Get the customer details */
  getSubscriptionCustomerByServiceNameAndCustomerId = (
    customerId: string,
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/customer/${customerId}`);
  };

  /** Get this object properties */
  getSubscriptionServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateSubscriptionServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/webPaaS/subscription/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postSubscriptionTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/webPaaS/subscription/${serviceName}/terminate`);
  };
}

export { WebPaaSHandler };
