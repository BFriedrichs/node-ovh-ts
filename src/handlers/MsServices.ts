/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesMfaInformation } from '../models/MsServicesMfaInformation';
import { MsServicesActiveDirectoryOrganizationalUnit } from '../models/MsServicesActiveDirectoryOrganizationalUnit';
import { MsServicesUpnSuffix } from '../models/MsServicesUpnSuffix';
import { MsServicesLicensePeriodEnum } from '../models/MsServicesLicensePeriodEnum';
import { MsServicesSharepointTask } from '../models/MsServicesSharepointTask';
import { MsServicesTask } from '../models/MsServicesTask';
import { MsServicesSyncLicenseEnum } from '../models/MsServicesSyncLicenseEnum';
import { MsServicesTaskFunctionEnum } from '../models/MsServicesTaskFunctionEnum';
import { MsServicesSyncService } from '../models/MsServicesSyncService';
import { MsServicesSharepointServiceInfo } from '../models/MsServicesSharepointServiceInfo';
import { MsServicesSharepointDailyLicense } from '../models/MsServicesSharepointDailyLicense';
import { ServicesService } from '../models/ServicesService';
import { MsServicesAccount } from '../models/MsServicesAccount';
import { MsServicesExchangeTask } from '../models/MsServicesExchangeTask';
import { MsServicesSharepointInformation } from '../models/MsServicesSharepointInformation';
import { MsServicesSyncInformation } from '../models/MsServicesSyncInformation';
import { MsServicesSharepointLicenseEnum } from '../models/MsServicesSharepointLicenseEnum';
import { MsServicesExchangeService } from '../models/MsServicesExchangeService';
import { MsServicesExchangeInformation } from '../models/MsServicesExchangeInformation';
import { MsServicesTaskStatusEnum } from '../models/MsServicesTaskStatusEnum';
import { MsServicesSharepointService } from '../models/MsServicesSharepointService';
import { MsServicesActiveDirectorySyncClientUrl } from '../models/MsServicesActiveDirectorySyncClientUrl';
import { MsServicesSyncDailyLicense } from '../models/MsServicesSyncDailyLicense';
import OVHBase from '../ovh';

class MsServicesHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/msServices');
  };

  /** List available services */
  getSharepoint = (): Promise<string> => {
    return this.ovh.request('GET', '/msServices/sharepoint');
  };

  /** Get this object properties */
  getSharepointDomain = (domain: string): Promise<MsServicesSharepointServiceInfo> => {
    return this.ovh.request('GET', `/msServices/sharepoint/${domain}`);
  };

  /** Get this object properties */
  getSharepointDomainServiceInfos = (domain: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/msServices/sharepoint/${domain}/serviceInfos`);
  };

  /** Alter this object properties */
  putSharepointDomainServiceInfos = (domain: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/sharepoint/${domain}/serviceInfos`, body);
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<MsServicesActiveDirectoryOrganizationalUnit> => {
    return this.ovh.request('GET', `/msServices/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (
    serviceName: string,
    body: MsServicesActiveDirectoryOrganizationalUnit
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}`, body);
  };

  /** Accounts associated to this Active Directory service */
  getServiceNameAccount = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account`);
  };

  /** Get this object properties */
  getServiceNameAccountUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesAccount> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}`);
  };

  /** Alter this object properties */
  putServiceNameAccountUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string,
    body: MsServicesAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/account/${userPrincipalName}`, body);
  };

  /** Change account password */
  postServiceNameAccountUserPrincipalNameChangePassword = (
    serviceName: string,
    userPrincipalName: string,
    body: { password: string }
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/changePassword`,
      body
    );
  };

  /** Get this object properties */
  getServiceNameAccountUserPrincipalNameExchange = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesExchangeInformation> => {
    return this.ovh.request(
      'GET',
      `/msServices/${serviceName}/account/${userPrincipalName}/exchange`
    );
  };

  /** Alter this object properties */
  putServiceNameAccountUserPrincipalNameExchange = (
    serviceName: string,
    userPrincipalName: string,
    body: MsServicesExchangeInformation
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/msServices/${serviceName}/account/${userPrincipalName}/exchange`,
      body
    );
  };

  /** Configure mailbox to be operational */
  postServiceNameAccountUserPrincipalNameExchangeConfigure = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/exchange/configure`
    );
  };

  /** Delete Multi Factor Authentication feature for this account */
  deleteServiceNameAccountUserPrincipalNameMfa = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'DELETE',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa`
    );
  };

  /** Get this object properties */
  getServiceNameAccountUserPrincipalNameMfa = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesMfaInformation> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}/mfa`);
  };

  /** Create Multi Factor Authentication for this account */
  postServiceNameAccountUserPrincipalNameMfa = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/account/${userPrincipalName}/mfa`);
  };

  /** Disable Multi Factor Authentication for a period of time */
  postServiceNameAccountUserPrincipalNameMfaDisable = (
    serviceName: string,
    userPrincipalName: string,
    body: { period: number }
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa/disable`,
      body
    );
  };

  /** Enable Mfa (enabled by default when created) */
  postServiceNameAccountUserPrincipalNameMfaEnable = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa/enable`
    );
  };

  /** Reset Multi Factor Authentication status for this account */
  postServiceNameAccountUserPrincipalNameMfaReset = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa/reset`
    );
  };

  /** Get this object properties */
  getServiceNameAccountUserPrincipalNameSharepoint = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointInformation> => {
    return this.ovh.request(
      'GET',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`
    );
  };

  /** Alter this object properties */
  putServiceNameAccountUserPrincipalNameSharepoint = (
    serviceName: string,
    userPrincipalName: string,
    body: MsServicesSharepointInformation
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`,
      body
    );
  };

  /** On-demand MySite clearance */
  postServiceNameAccountUserPrincipalNameSharepointClearSpace = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/clearSpace`
    );
  };

  /** Configure sharepoint account to be operational */
  postServiceNameAccountUserPrincipalNameSharepointConfigure = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/configure`
    );
  };

  /** Delete sync account */
  deleteServiceNameAccountUserPrincipalNameSync = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'DELETE',
      `/msServices/${serviceName}/account/${userPrincipalName}/sync`
    );
  };

  /** Get this object properties */
  getServiceNameAccountUserPrincipalNameSync = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSyncInformation> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}/sync`);
  };

  /** Create new sync account */
  postServiceNameAccountUserPrincipalNameSync = (
    serviceName: string,
    userPrincipalName: string,
    body: { license: MsServicesSyncLicenseEnum }
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sync`,
      body
    );
  };

  /** Configure sync account to be operational */
  postServiceNameAccountUserPrincipalNameSyncConfigure = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sync/configure`
    );
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/changeContact`, body);
  };

  /** Create Mfa on all accounts. */
  postServiceNameCreateMfaOnAllUsers = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/createMfaOnAllUsers`);
  };

  /** Get this object properties */
  getServiceNameExchange = (serviceName: string): Promise<MsServicesExchangeService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange`);
  };

  /** Alter this object properties */
  putServiceNameExchange = (
    serviceName: string,
    body: MsServicesExchangeService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/exchange`, body);
  };

  /** Detects billing transition status for the service */
  getServiceNameExchangeBillingMigrated = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/billingMigrated`);
  };

  /** Pending actions */
  getServiceNameExchangeTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/task`);
  };

  /** Get this object properties */
  getServiceNameExchangeTaskId = (
    id: number,
    serviceName: string
  ): Promise<MsServicesExchangeTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/task/${id}`);
  };

  /** Remove Mfa on all accounts. */
  postServiceNameRemoveMfaOnAllUsers = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/removeMfaOnAllUsers`);
  };

  /** Get this object properties */
  getServiceNameSharepoint = (serviceName: string): Promise<MsServicesSharepointService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint`);
  };

  /** Alter this object properties */
  putServiceNameSharepoint = (
    serviceName: string,
    body: MsServicesSharepointService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/sharepoint`, body);
  };

  /** Detects billing transition status for the service */
  getServiceNameSharepointBillingMigrated = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/billingMigrated`);
  };

  /** Get active licenses for specific period of time */
  getServiceNameSharepointLicense = (
    serviceName: string
  ): Promise<MsServicesSharepointDailyLicense> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/license`);
  };

  /** Restore administrator rights */
  postServiceNameSharepointRestoreAdminRights = (
    serviceName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sharepoint/restoreAdminRights`);
  };

  /** Pending actions */
  getServiceNameSharepointTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/task`);
  };

  /** Get this object properties */
  getServiceNameSharepointTaskId = (
    id: number,
    serviceName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/task/${id}`);
  };

  /** Delete sync service */
  deleteServiceNameSync = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('DELETE', `/msServices/${serviceName}/sync`);
  };

  /** Get this object properties */
  getServiceNameSync = (serviceName: string): Promise<MsServicesSyncService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync`);
  };

  /** Change account password */
  postServiceNameSyncChangePassword = (
    serviceName: string,
    body: { password: string }
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sync/changePassword`, body);
  };

  /** Get this object properties */
  getServiceNameSyncClientSoftwareURL = (
    serviceName: string
  ): Promise<MsServicesActiveDirectorySyncClientUrl> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync/clientSoftwareURL`);
  };

  /** Generate temporary link to ADSync software executable */
  postServiceNameSyncClientSoftwareURL = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sync/clientSoftwareURL`);
  };

  /** Get active licenses for specific period of time */
  getServiceNameSyncLicense = (serviceName: string): Promise<MsServicesSyncDailyLicense> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync/license`);
  };

  /** Pending actions */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskId = (id: number, serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/task/${id}`);
  };

  /** active directory UPN suffix */
  getServiceNameUpnSuffix = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/upnSuffix`);
  };

  /** Create new UPN suffix */
  postServiceNameUpnSuffix = (
    serviceName: string,
    body: { suffix: string }
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/upnSuffix`, body);
  };

  /** Delete existing UPN suffix */
  deleteServiceNameUpnSuffixSuffix = (
    serviceName: string,
    suffix: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request('DELETE', `/msServices/${serviceName}/upnSuffix/${suffix}`);
  };

  /** Get this object properties */
  getServiceNameUpnSuffixSuffix = (
    serviceName: string,
    suffix: string
  ): Promise<MsServicesUpnSuffix> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/upnSuffix/${suffix}`);
  };
}

export default MsServicesHandler;
