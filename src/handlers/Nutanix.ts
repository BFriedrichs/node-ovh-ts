/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixState } from '../models/NutanixState';
import { NutanixCluster } from '../models/NutanixCluster';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { NutanixRequirements } from '../models/NutanixRequirements';
import { NutanixAvailability } from '../models/NutanixAvailability';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { NutanixRedundancyFactorEnum } from '../models/NutanixRedundancyFactorEnum';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class NutanixHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get list of owned Nutanix Clusters */
  get = (): Promise<string[]> => {
    return this.ovh.request('GET', '/nutanix');
  };

  /** Fetch the availabilities for a given cluster configuration */
  getAvailabilities = (): Promise<NutanixAvailability[]> => {
    return this.ovh.request('GET', '/nutanix/availabilities');
  };

  /** Fetch the available Nutanix versions to install */
  getAvailableVersions = (): Promise<string[]> => {
    return this.ovh.request('GET', '/nutanix/availableVersions');
  };

  /** Fetch the requirements for a given cluster configuration */
  getRequirements = (): Promise<NutanixRequirements> => {
    return this.ovh.request('GET', '/nutanix/requirements');
  };

  /** Get nutanix cluster info */
  getByServiceName = (serviceName: string): Promise<NutanixState> => {
    return this.ovh.request('GET', `/nutanix/${serviceName}`);
  };

  /** Update nutanix cluster info */
  updateByServiceName = (serviceName: string, body: NutanixCluster): Promise<NutanixState> => {
    return this.ovh.request('PUT', `/nutanix/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/nutanix/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/nutanix/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/nutanix/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/nutanix/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/nutanix/${serviceName}/terminate`);
  };
}

export { NutanixHandler };
