/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsTokenUpdate } from '../models/MetricsTokenUpdate';
import { MetricsLookupTokenCreation } from '../models/MetricsLookupTokenCreation';
import { MetricsApiToken } from '../models/MetricsApiToken';
import { MetricsTokenCreation } from '../models/MetricsTokenCreation';
import { MetricsApiConsumption } from '../models/MetricsApiConsumption';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { MetricsApiService } from '../models/MetricsApiService';
import { MetricsUpdate } from '../models/MetricsUpdate';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { MetricsQuotaUpdate } from '../models/MetricsQuotaUpdate';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class MetricsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/metrics');
  };

  /** Get service */
  getByServiceName = (serviceName: string): Promise<MetricsApiService> => {
    return this.ovh.request('GET', `/metrics/${serviceName}`);
  };

  /** Modify service */
  putByServiceName = (serviceName: string, body: MetricsUpdate): Promise<MetricsApiService> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/metrics/${serviceName}/confirmTermination`, body);
  };

  /** Get consumption for your service */
  getConsumptionByServiceName = (serviceName: string): Promise<MetricsApiConsumption> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/consumption`);
  };

  /** Find TokenID for a specific token */
  postLookupTokenByServiceName = (
    serviceName: string,
    body: MetricsLookupTokenCreation
  ): Promise<string[]> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/lookup/token`, body);
  };

  /** Set overquota */
  putQuotaByServiceName = (serviceName: string, body: MetricsQuotaUpdate): Promise<string> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/quota`, body);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/terminate`);
  };

  /** Get list of tokens */
  getTokenByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/token`);
  };

  /** Create a token */
  createTokenByServiceName = (
    serviceName: string,
    body: MetricsTokenCreation
  ): Promise<MetricsApiToken> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/token`, body);
  };

  /** Revoke a token */
  deleteTokenByServiceNameAndTokenId = (serviceName: string, tokenId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/metrics/${serviceName}/token/${tokenId}`);
  };

  /** Get a specific token */
  getTokenByServiceNameAndTokenId = (
    serviceName: string,
    tokenId: string
  ): Promise<MetricsApiToken> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/token/${tokenId}`);
  };

  /** Modify a token */
  putTokenByServiceNameAndTokenId = (
    serviceName: string,
    tokenId: string,
    body: MetricsTokenUpdate
  ): Promise<MetricsApiToken> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/token/${tokenId}`, body);
  };
}

export { MetricsHandler };
