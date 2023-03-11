/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { WebPaaSSubscription } from '../models/WebPaaSSubscription';
import { WebPaaSSubscriptionProjectAddCustomer } from '../models/WebPaaSSubscriptionProjectAddCustomer';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { WebPaaSOfferEnum } from '../models/WebPaaSOfferEnum';
import { WebPaaSCapabilities } from '../models/WebPaaSCapabilities';
import { WebPaaSSubscriptionCustomer } from '../models/WebPaaSSubscriptionCustomer';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class WebPaaSHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available regions and templates */
  getCapabilities = (): Promise<WebPaaSCapabilities> => {
    return this.ovh.request('GET', '/webPaaS/capabilities');
  };

  /** List your subscriptions */
  getSubscription = (): Promise<string> => {
    return this.ovh.request('GET', '/webPaaS/subscription');
  };

  /** Get information about your subscription */
  getSubscriptionServiceName = (serviceName: string): Promise<WebPaaSSubscription> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}`);
  };

  /** Confirm termination of your service */
  postSubscriptionServiceNameConfirmTermination = (
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
  getSubscriptionServiceNameCustomer = (
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/customer`);
  };

  /** Add customer to the project */
  postSubscriptionServiceNameCustomer = (
    serviceName: string,
    body: WebPaaSSubscriptionProjectAddCustomer
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request('POST', `/webPaaS/subscription/${serviceName}/customer`, body);
  };

  /** Remove customer from the project */
  deleteSubscriptionServiceNameCustomerCustomerId = (
    customerId: string,
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request(
      'DELETE',
      `/webPaaS/subscription/${serviceName}/customer/${customerId}`
    );
  };

  /** Get the customer details */
  getSubscriptionServiceNameCustomerCustomerId = (
    customerId: string,
    serviceName: string
  ): Promise<WebPaaSSubscriptionCustomer> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/customer/${customerId}`);
  };

  /** Get this object properties */
  getSubscriptionServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/webPaaS/subscription/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putSubscriptionServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/webPaaS/subscription/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postSubscriptionServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/webPaaS/subscription/${serviceName}/terminate`);
  };
}

export default WebPaaSHandler;
