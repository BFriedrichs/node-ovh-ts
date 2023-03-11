/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewayTask } from '../models/SslGatewayTask';
import { ServicesService } from '../models/ServicesService';
import { SslGatewayEligibilityStatus } from '../models/SslGatewayEligibilityStatus';
import { SslGatewaySslGateway } from '../models/SslGatewaySslGateway';
import { SslGatewayNatIps } from '../models/SslGatewayNatIps';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { SslGatewayDomain } from '../models/SslGatewayDomain';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { SslGatewayServer } from '../models/SslGatewayServer';
import OVHBase from '../ovh';

class SslGatewayHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/sslGateway');
  };

  /** List of zone available for an SSL Gateway */
  getAvailableZones = (): Promise<string> => {
    return this.ovh.request('GET', '/sslGateway/availableZones');
  };

  /** Check domain eligibility. Return list of eligible IP(s) for this domain. */
  getEligibility = (): Promise<SslGatewayEligibilityStatus> => {
    return this.ovh.request('GET', '/sslGateway/eligibility');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<SslGatewaySslGateway> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: SslGatewaySslGateway): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postServiceNameConfirmTermination = (
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
  getServiceNameDomain = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/domain`);
  };

  /** Attach a new domain to your SSL Gateway */
  postServiceNameDomain = (
    serviceName: string,
    body: { domain: string }
  ): Promise<SslGatewayDomain> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/domain`, body);
  };

  /** Detach a domain from your SSL Gateway */
  deleteServiceNameDomainId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sslGateway/${serviceName}/domain/${id}`);
  };

  /** Get this object properties */
  getServiceNameDomainId = (id: number, serviceName: string): Promise<SslGatewayDomain> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/domain/${id}`);
  };

  /** Ip subnet used by OVH to nat requests to your SSL Gateway backends. */
  getServiceNameNatIp = (serviceName: string): Promise<SslGatewayNatIps> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/natIp`);
  };

  /** Renew your SSL certificates */
  postServiceNameRenewCertificate = (
    serviceName: string,
    body: { domain?: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/renewCertificate`, body);
  };

  /** Servers attached to your SSL Gateway */
  getServiceNameServer = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/server`);
  };

  /** Add a new server to your SSL Gateway */
  postServiceNameServer = (
    serviceName: string,
    body: { address: string; port: number }
  ): Promise<SslGatewayServer> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/server`, body);
  };

  /** Remove a server */
  deleteServiceNameServerId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sslGateway/${serviceName}/server/${id}`);
  };

  /** Get this object properties */
  getServiceNameServerId = (id: number, serviceName: string): Promise<SslGatewayServer> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/server/${id}`);
  };

  /** Alter this object properties */
  putServiceNameServerId = (
    id: number,
    serviceName: string,
    body: SslGatewayServer
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}/server/${id}`, body);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/sslGateway/${serviceName}/serviceInfos`, body);
  };

  /** Task for this SSL Gateway */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskId = (id: number, serviceName: string): Promise<SslGatewayTask> => {
    return this.ovh.request('GET', `/sslGateway/${serviceName}/task/${id}`);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/sslGateway/${serviceName}/terminate`);
  };
}

export default SslGatewayHandler;
