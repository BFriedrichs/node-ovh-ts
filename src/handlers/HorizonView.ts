/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { HorizonViewDatacenter } from '../models/HorizonViewDatacenter';
import { HorizonViewPool } from '../models/HorizonViewPool';
import { HorizonViewUser } from '../models/HorizonViewUser';
import { HorizonViewDomainTrust } from '../models/HorizonViewDomainTrust';
import { HorizonViewCustomerNetwork } from '../models/HorizonViewCustomerNetwork';
import { HorizonViewTask } from '../models/HorizonViewTask';
import { HorizonViewAccessPointTypeEnum } from '../models/HorizonViewAccessPointTypeEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { HorizonViewCustomerNetworkPool } from '../models/HorizonViewCustomerNetworkPool';
import { HorizonViewDedicatedHorizon } from '../models/HorizonViewDedicatedHorizon';
import { HorizonViewPoolType } from '../models/HorizonViewPoolType';
import { HorizonViewTaskStateEnum } from '../models/HorizonViewTaskStateEnum';
import { HorizonViewCustomerUser } from '../models/HorizonViewCustomerUser';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class HorizonViewHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/horizonView');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<HorizonViewDatacenter> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}`);
  };

  /** Pool associated with this Datacenter */
  getServiceNameAccessPoint = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/accessPoint`);
  };

  /** Add new access point to create a new network */
  postServiceNameAccessPoint = (
    serviceName: string,
    body: {
      poolType: HorizonViewPoolType;
      privateBlock?: string;
      privateVlan?: number;
      vrouterPoolPublicIp?: string;
    }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/accessPoint`, body);
  };

  /** Delete this access point  */
  deleteServiceNameAccessPointAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('DELETE', `/horizonView/${serviceName}/accessPoint/${accessPointId}`);
  };

  /** Get this object properties */
  getServiceNameAccessPointAccessPointId = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewPool> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/accessPoint/${accessPointId}`);
  };

  /** Manage your session Timeout on Unified Access Gateway */
  postServiceNameAccessPointAccessPointIdChangeSessionTimeout = (
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
  getServiceNameAccessPointAccessPointIdCustomerNetwork = (
    accessPointId: number,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`
    );
  };

  /** Add a new network  */
  postServiceNameAccessPointAccessPointIdCustomerNetwork = (
    accessPointId: number,
    serviceName: string,
    body: { network: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`,
      body
    );
  };

  /** Delete this Customer Network */
  deleteServiceNameAccessPointAccessPointIdCustomerNetworkCustomerNetworkId = (
    accessPointId: number,
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getServiceNameAccessPointAccessPointIdCustomerNetworkCustomerNetworkId = (
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
  postServiceNameAccessPointAccessPointIdDisableTwoFA = (
    accessPointId: number,
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableTwoFA`
    );
  };

  /** Disable windows Username option on Unified Access Gateway */
  postServiceNameAccessPointAccessPointIdDisableWindowsUsernameOption = (
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
  postServiceNameAccessPointAccessPointIdEnableTwoFA = (
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
  postServiceNameAccessPointAccessPointIdEnableWindowsUsernameOption = (
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
  postServiceNameConfirmTermination = (
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
  getServiceNameCustomerNetwork = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/customerNetwork`);
  };

  /** Add a new network  */
  postServiceNameCustomerNetwork = (
    serviceName: string,
    body: { name: string; network: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/customerNetwork`, body);
  };

  /** Delete this Customer Network */
  deleteServiceNameCustomerNetworkCustomerNetworkId = (
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getServiceNameCustomerNetworkCustomerNetworkId = (
    customerNetworkId: number,
    serviceName: string
  ): Promise<HorizonViewCustomerNetwork> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
    );
  };

  /** Get this object properties */
  getServiceNameDedicatedHorizon = (serviceName: string): Promise<HorizonViewDedicatedHorizon> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon`);
  };

  /** Account to access to your pool */
  getServiceNameDedicatedHorizonCustomerUser = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/customerUser`);
  };

  /** Create a new customer user  */
  postServiceNameDedicatedHorizonCustomerUser = (
    serviceName: string,
    body: { email?: string; password?: string; username: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser`,
      body
    );
  };

  /** Delete this Customer User */
  deleteServiceNameDedicatedHorizonCustomerUserUsername = (
    serviceName: string,
    username: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'DELETE',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`
    );
  };

  /** Get this object properties */
  getServiceNameDedicatedHorizonCustomerUserUsername = (
    serviceName: string,
    username: string
  ): Promise<HorizonViewCustomerUser> => {
    return this.ovh.request(
      'GET',
      `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`
    );
  };

  /** Change Horizon View Customer  user password */
  postServiceNameDedicatedHorizonCustomerUserUsernameChangePassword = (
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
  postServiceNameDedicatedHorizonDisableStorageAccelerator = (
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/disableStorageAccelerator`
    );
  };

  /** Enable the View Storage Accelerator option on VCenter */
  postServiceNameDedicatedHorizonEnableStorageAccelerator = (
    serviceName: string
  ): Promise<HorizonViewTask> => {
    return this.ovh.request(
      'POST',
      `/horizonView/${serviceName}/dedicatedHorizon/enableStorageAccelerator`
    );
  };

  /** Tasks associated with this Dedicated Horizon */
  getServiceNameDedicatedHorizonTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/task`);
  };

  /** Get this object properties */
  getServiceNameDedicatedHorizonTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/task/${taskId}`);
  };

  /** Get this object properties */
  getServiceNameDedicatedHorizonUser = (serviceName: string): Promise<HorizonViewUser> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/dedicatedHorizon/user`);
  };

  /** Change Horizon View user password */
  postServiceNameDedicatedHorizonUserChangePassword = (
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
  postServiceNameDedicatedHorizonUserChangeProperties = (
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
  getServiceNameDomainTrust = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/domainTrust`);
  };

  /** Link your Active Directory to your CDI Active Directory */
  postServiceNameDomainTrust = (
    serviceName: string,
    body: { activeDirectoryIP: string; dns1?: string; dns2?: string; domain: string }
  ): Promise<HorizonViewTask> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/domainTrust`, body);
  };

  /** Get this object properties */
  getServiceNameDomainTrustDomainTrustId = (
    domainTrustId: number,
    serviceName: string
  ): Promise<HorizonViewDomainTrust> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/domainTrust/${domainTrustId}`);
  };

  /** Add a child domain for this domain. */
  postServiceNameDomainTrustDomainTrustIdAddChildDomain = (
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
  postServiceNameDomainTrustDomainTrustIdAddDomainController = (
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
  postServiceNameDomainTrustDomainTrustIdAddDomainUserOnComposer = (
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
  postServiceNameDomainTrustDomainTrustIdCreateTrust = (
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
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/horizonView/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/horizonView/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/horizonView/${serviceName}/terminate`);
  };
}

export default HorizonViewHandler;
