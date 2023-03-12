/* WARNING: This file is auto-generated . Do not edit manually. */

import { HorizonViewDedicatedHorizon } from '../models/HorizonViewDedicatedHorizon';
import { HorizonViewPool } from '../models/HorizonViewPool';
import { HorizonViewAccessPointTypeEnum } from '../models/HorizonViewAccessPointTypeEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { HorizonViewCustomerNetwork } from '../models/HorizonViewCustomerNetwork';
import { HorizonViewDatacenter } from '../models/HorizonViewDatacenter';
import { HorizonViewCustomerNetworkPool } from '../models/HorizonViewCustomerNetworkPool';
import { HorizonViewPoolType } from '../models/HorizonViewPoolType';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { HorizonViewCustomerUser } from '../models/HorizonViewCustomerUser';
import { HorizonViewTask } from '../models/HorizonViewTask';
import { HorizonViewUser } from '../models/HorizonViewUser';
import { HorizonViewDomainTrust } from '../models/HorizonViewDomainTrust';
import { HorizonViewTaskStateEnum } from '../models/HorizonViewTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class HorizonViewHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/horizonView');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<HorizonViewDatacenter> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}`);
  };

  /** Pool associated with this Datacenter */
  getAccessPointByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/accessPoint`);
  };

  /** Add new access point to create a new network */
  addAccessPointByServiceName = (
    serviceName: string,
    body: {
      poolType: HorizonViewPoolType;
      privateBlock?: string;
      privateVlan?: number;
      vrouterPoolPublicIp?: string;
    }
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/accessPoint`, body);
  };

  /** Delete this access point  */
  deleteAccessPointByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request('DELETE', `/horizonView/${serviceName}/accessPoint/${accessPointId}`);
  };

  /** Get this object properties */
  getAccessPointByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewPool> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/accessPoint/${accessPointId}`);
  };

  /** Manage your session Timeout on Unified Access Gateway */
  postAccessPointChangeSessionTimeoutByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string,
    body: { expiration: number; onSingleAP?: HorizonViewAccessPointTypeEnum }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/changeSessionTimeout`,
      body
    );
  };

  /** You can reach from the Desktops your private network */
  getAccessPointCustomerNetworkByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`
    );
  };

  /** Add a new network  */
  addAccessPointCustomerNetworkByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string,
    body: { network: string }
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`,
      body
    );
  };

  /** Delete this Customer Network */
  deleteAccessPointCustomerNetworkByServiceNameAndAccessPointIdAndCustomerNetworkId = (
    accessPointId: number,
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getAccessPointCustomerNetworkByServiceNameAndAccessPointIdAndCustomerNetworkId = (
    accessPointId: number,
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewCustomerNetworkPool> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Disable two factor authentication on your pool */
  disableAccessPointTwoFAByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableTwoFA`
    );
  };

  /** Disable windows Username option on Unified Access Gateway */
  disableAccessPointWindowsUsernameOptionByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string,
    body: { onSingleAP?: HorizonViewAccessPointTypeEnum }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableWindowsUsernameOption`,
      body
    );
  };

  /** Enable two factor authentication on your pool */
  enableAccessPointTwoFAByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string,
    body: { onSingleAP?: HorizonViewAccessPointTypeEnum; radiusIp: string; secret: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableTwoFA`,
      body
    );
  };

  /** Enable windows Username option on Unified Access Gateway */
  enableAccessPointWindowsUsernameOptionByServiceNameAndAccessPointId = (
    accessPointId: number,
    serviceName: string,
    body: { onSingleAP?: HorizonViewAccessPointTypeEnum }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableWindowsUsernameOption`,
      body
    );
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
    return this.ovh.request('POST', `/horizonView/${serviceName}/confirmTermination`, body);
  };

  /** You can reach from the Desktops your private network */
  getCustomerNetworkByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/customerNetwork`);
  };

  /** Add a new network  */
  addCustomerNetworkByServiceName = (
    serviceName: string,
    body: { name: string; network: string }
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/customerNetwork`, body);
  };

  /** Delete this Customer Network */
  deleteCustomerNetworkByServiceNameAndCustomerNetworkId = (
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getCustomerNetworkByServiceNameAndCustomerNetworkId = (
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewCustomerNetwork> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getDedicatedHorizonByServiceName = (
    serviceName: string
  ): Promise<HorizonViewDedicatedHorizon> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon`);
  };

  /** Account to access to your pool */
  getDedicatedHorizonCustomerUserByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/customerUser`);
  };

  /** Create a new customer user  */
  createDedicatedHorizonCustomerUserByServiceName = (
    serviceName: string,
    body: { email?: string; password?: string; username: string }
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser`,
      body
    );
  };

  /** Delete this Customer User */
  deleteDedicatedHorizonCustomerUserByServiceNameAndUsername = (
    serviceName: string,
    username: string
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`
    );
  };

  /** Get this object properties */
  getDedicatedHorizonCustomerUserByServiceNameAndUsername = (
    serviceName: string,
    username: string
  ): Promise<HorizonViewCustomerUser> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`
    );
  };

  /** Change Horizon View Customer  user password */
  updateDedicatedHorizonCustomerUserPasswordByServiceNameAndUsername = (
    serviceName: string,
    username: string,
    body: { password?: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}/changePassword`,
      body
    );
  };

  /** Disable the View Storage Accelerator option on VCenter */
  disableDedicatedHorizonStorageAcceleratorByServiceName = (
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/disableStorageAccelerator`
    );
  };

  /** Enable the View Storage Accelerator option on VCenter */
  enableDedicatedHorizonStorageAcceleratorByServiceName = (
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/enableStorageAccelerator`
    );
  };

  /** Tasks associated with this Dedicated Horizon */
  getDedicatedHorizonTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/task`);
  };

  /** Get this object properties */
  getDedicatedHorizonTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/task/${taskId}`);
  };

  /** Get this object properties */
  getDedicatedHorizonUserByServiceName = (serviceName: string): Promise<HorizonViewUser> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/user`);
  };

  /** Change Horizon View user password */
  updateDedicatedHorizonUserPasswordByServiceName = (
    serviceName: string,
    body: { password?: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/user/changePassword`,
      body
    );
  };

  /** Change horizon view user properties */
  updateDedicatedHorizonUserPropertiesByServiceName = (
    serviceName: string,
    body: { email?: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/user/changeProperties`,
      body
    );
  };

  /** List all Active Directories linked to your CDI Active Directory */
  listDomainTrustByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/domainTrust`);
  };

  /** Link your Active Directory to your CDI Active Directory */
  postDomainTrustByServiceName = (
    serviceName: string,
    body: { activeDirectoryIP: string; dns1?: string; dns2?: string; domain: string }
  ): Promise<HorizonViewTask[]> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/domainTrust`, body);
  };

  /** Get this object properties */
  getDomainTrustByServiceNameAndDomainTrustId = (
    domainTrustId: number,
    serviceName: string
  ): Promise<HorizonViewDomainTrust> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/domainTrust/${domainTrustId}`);
  };

  /** Add a child domain for this domain. */
  addDomainTrustChildDomainByServiceNameAndDomainTrustId = (
    domainTrustId: number,
    serviceName: string,
    body: {
      activeDirectoryIP: string;
      domain: string;
      passphrase: string;
      serviceAccountPassword: string;
    }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addChildDomain`,
      body
    );
  };

  /** Add a Domain Controller for this domain. */
  addDomainTrustDomainControllerByServiceNameAndDomainTrustId = (
    domainTrustId: number,
    serviceName: string,
    body: { domain: string; domainControllerIp: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainController`,
      body
    );
  };

  /** Add a domain user to add your desktop in your Active Directory */
  addDomainTrustDomainUserOnComposerByServiceNameAndDomainTrustId = (
    domainTrustId: number,
    serviceName: string,
    body: { domain: string; password: string; username: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainUserOnComposer`,
      body
    );
  };

  /** Change Horizon View user password */
  updateDomainTrustCreateTrustByServiceNameAndDomainTrustId = (
    domainTrustId: number,
    serviceName: string,
    body: { passphrase: string; serviceAccountPassword: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/domainTrust/${domainTrustId}/createTrust`,
      body
    );
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/horizonView/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/terminate`);
  };
}

export { HorizonViewHandler };
