/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewayEligibilityStatus } from '../models/SslGatewayEligibilityStatus';
import { SslGatewayDomain } from '../models/SslGatewayDomain';
import { SslGatewaySslGateway } from '../models/SslGatewaySslGateway';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import { SslGatewayServer } from '../models/SslGatewayServer';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { SslGatewayNatIps } from '../models/SslGatewayNatIps';
import { SslGatewayTask } from '../models/SslGatewayTask';
import OVHBase from '../ovh';

class SslGatewayHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/sslGateway');
  };

  /** List of zone available for an SSL Gateway */
  listAvailableZones = (): Promise<string[]> => {
    return this.ovh.request('GET', '/sslGateway/availableZones');
  };

  /** Check domain eligibility. Return list of eligible IP(s) for this domain. */
  checkEligibility = (): Promise<SslGatewayEligibilityStatus> => {
    return this.ovh.request('GET', '/sslGateway/eligibility');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<SslGatewaySslGateway> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: SslGatewaySslGateway): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/confirmTermination`, body);
  };

  /** Domains attached to your SSL Gateway */
  getDomainByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/domain`);
  };

  /** Attach a new domain to your SSL Gateway */
  postDomainByServiceName = (
    serviceName: string,
    body: { domain: string }
  ): Promise<SslGatewayDomain> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/domain`, body);
  };

  /** Detach a domain from your SSL Gateway */
  deleteDomainByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sslGateway/${serviceName}/domain/${id}`);
  };

  /** Get this object properties */
  getDomainByServiceNameAndId = (id: number, serviceName: string): Promise<SslGatewayDomain> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/domain/${id}`);
  };

  /** Ip subnet used by OVH to nat requests to your SSL Gateway backends. */
  getNatIpByServiceName = (serviceName: string): Promise<SslGatewayNatIps[]> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/natIp`);
  };

  /** Renew your SSL certificates */
  postRenewCertificateByServiceName = (
    serviceName: string,
    body: { domain?: string }
  ): Promise<string[]> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/renewCertificate`, body);
  };

  /** Servers attached to your SSL Gateway */
  getServerByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/server`);
  };

  /** Add a new server to your SSL Gateway */
  addServerByServiceName = (
    serviceName: string,
    body: { address: string; port: number }
  ): Promise<SslGatewayServer> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/server`, body);
  };

  /** Remove a server */
  deleteServerByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sslGateway/${serviceName}/server/${id}`);
  };

  /** Get this object properties */
  getServerByServiceNameAndId = (id: number, serviceName: string): Promise<SslGatewayServer> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/server/${id}`);
  };

  /** Alter this object properties */
  updateServerByServiceNameAndId = (
    id: number,
    serviceName: string,
    body: SslGatewayServer
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}/server/${id}`, body);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}/serviceInfos`, body);
  };

  /** Task for this SSL Gateway */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndId = (id: number, serviceName: string): Promise<SslGatewayTask> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/task/${id}`);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/terminate`);
  };
}

export { SslGatewayHandler };
