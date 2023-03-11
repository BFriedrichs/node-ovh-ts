/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { NutanixRedundancyFactorEnum } from '../models/NutanixRedundancyFactorEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { NutanixRequirements } from '../models/NutanixRequirements';
import { NutanixCluster } from '../models/NutanixCluster';
import { NutanixAvailability } from '../models/NutanixAvailability';
import { NutanixState } from '../models/NutanixState';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class NutanixHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get list of owned Nutanix Clusters */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/nutanix');
  };

  /** Fetch the availabilities for a given cluster configuration */
  getAvailabilities = (): Promise<NutanixAvailability> => {
    return this.ovh.request('GET', '/nutanix/availabilities');
  };

  /** Fetch the available Nutanix versions to install */
  getAvailableVersions = (): Promise<string> => {
    return this.ovh.request('GET', '/nutanix/availableVersions');
  };

  /** Fetch the requirements for a given cluster configuration */
  getRequirements = (): Promise<NutanixRequirements> => {
    return this.ovh.request('GET', '/nutanix/requirements');
  };

  /** Get nutanix cluster info */
  getServiceName = (serviceName: string): Promise<NutanixState> => {
    return this.ovh.request('GET', `/nutanix/${serviceName}`);
  };

  /** Update nutanix cluster info */
  putServiceName = (serviceName: string, body: NutanixCluster): Promise<NutanixState> => {
    return this.ovh.request('PUT', `/nutanix/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/nutanix/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/nutanix/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/nutanix/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/nutanix/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/nutanix/${serviceName}/terminate`);
  };
}

export default NutanixHandler;
