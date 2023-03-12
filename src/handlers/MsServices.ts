/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesLicensePeriodEnum } from '../models/MsServicesLicensePeriodEnum';
import { MsServicesTask } from '../models/MsServicesTask';
import { MsServicesActiveDirectoryOrganizationalUnit } from '../models/MsServicesActiveDirectoryOrganizationalUnit';
import { MsServicesSyncDailyLicense } from '../models/MsServicesSyncDailyLicense';
import { MsServicesTaskFunctionEnum } from '../models/MsServicesTaskFunctionEnum';
import { ServicesService } from '../models/ServicesService';
import { MsServicesExchangeService } from '../models/MsServicesExchangeService';
import { MsServicesTaskStatusEnum } from '../models/MsServicesTaskStatusEnum';
import { MsServicesSharepointDailyLicense } from '../models/MsServicesSharepointDailyLicense';
import { MsServicesAccount } from '../models/MsServicesAccount';
import { MsServicesSharepointServiceInfo } from '../models/MsServicesSharepointServiceInfo';
import { MsServicesSharepointService } from '../models/MsServicesSharepointService';
import { MsServicesSharepointTask } from '../models/MsServicesSharepointTask';
import { MsServicesExchangeInformation } from '../models/MsServicesExchangeInformation';
import { MsServicesSharepointInformation } from '../models/MsServicesSharepointInformation';
import { MsServicesSyncInformation } from '../models/MsServicesSyncInformation';
import { MsServicesSharepointLicenseEnum } from '../models/MsServicesSharepointLicenseEnum';
import { MsServicesSyncLicenseEnum } from '../models/MsServicesSyncLicenseEnum';
import { MsServicesActiveDirectorySyncClientUrl } from '../models/MsServicesActiveDirectorySyncClientUrl';
import { MsServicesUpnSuffix } from '../models/MsServicesUpnSuffix';
import { MsServicesMfaInformation } from '../models/MsServicesMfaInformation';
import { MsServicesSyncService } from '../models/MsServicesSyncService';
import { MsServicesExchangeTask } from '../models/MsServicesExchangeTask';
import OVHBase from '../ovh';

class MsServicesHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/msServices');
  };

  /** List available services */
  listSharepoint = (): Promise<string[]> => {
    return this.ovh.request('GET', '/msServices/sharepoint');
  };

  /** Get this object properties */
  getSharepointByDomain = (domain: string): Promise<MsServicesSharepointServiceInfo> => {
    return this.ovh.request('GET', `/msServices/sharepoint/${domain}`);
  };

  /** Get this object properties */
  getSharepointServiceInfosByDomain = (domain: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/msServices/sharepoint/${domain}/serviceInfos`);
  };

  /** Alter this object properties */
  updateSharepointServiceInfosByDomain = (domain: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/sharepoint/${domain}/serviceInfos`, body);
  };

  /** Get this object properties */
  getByServiceName = (
    serviceName: string
  ): Promise<MsServicesActiveDirectoryOrganizationalUnit> => {
    return this.ovh.request('GET', `/msServices/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (
    serviceName: string,
    body: MsServicesActiveDirectoryOrganizationalUnit
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}`, body);
  };

  /** Accounts associated to this Active Directory service */
  getAccountByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account`);
  };

  /** Get this object properties */
  getAccountByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesAccount> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}`);
  };

  /** Alter this object properties */
  updateAccountByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string,
    body: MsServicesAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/account/${userPrincipalName}`, body);
  };

  /** Change account password */
  updateAccountPasswordByServiceNameAndUserPrincipalName = (
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
  getAccountExchangeByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesExchangeInformation> => {
    return this.ovh.request(
      'GET',
      `/msServices/${serviceName}/account/${userPrincipalName}/exchange`
    );
  };

  /** Alter this object properties */
  updateAccountExchangeByServiceNameAndUserPrincipalName = (
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
  postAccountExchangeConfigureByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/exchange/configure`
    );
  };

  /** Delete Multi Factor Authentication feature for this account */
  deleteAccountMfaByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'DELETE',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa`
    );
  };

  /** Get this object properties */
  getAccountMfaByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesMfaInformation> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}/mfa`);
  };

  /** Create Multi Factor Authentication for this account */
  createAccountMfaByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/account/${userPrincipalName}/mfa`);
  };

  /** Disable Multi Factor Authentication for a period of time */
  disableAccountMfaByServiceNameAndUserPrincipalName = (
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
  enableAccountMfaByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa/enable`
    );
  };

  /** Reset Multi Factor Authentication status for this account */
  postAccountMfaResetByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/mfa/reset`
    );
  };

  /** Get this object properties */
  getAccountSharepointByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointInformation> => {
    return this.ovh.request(
      'GET',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`
    );
  };

  /** Alter this object properties */
  updateAccountSharepointByServiceNameAndUserPrincipalName = (
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
  postAccountSharepointClearSpaceByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/clearSpace`
    );
  };

  /** Configure sharepoint account to be operational */
  postAccountSharepointConfigureByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/configure`
    );
  };

  /** Delete sync account */
  deleteAccountSyncByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'DELETE',
      `/msServices/${serviceName}/account/${userPrincipalName}/sync`
    );
  };

  /** Get this object properties */
  getAccountSyncByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesSyncInformation> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/account/${userPrincipalName}/sync`);
  };

  /** Create new sync account */
  createAccountSyncByServiceNameAndUserPrincipalName = (
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
  postAccountSyncConfigureByServiceNameAndUserPrincipalName = (
    serviceName: string,
    userPrincipalName: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request(
      'POST',
      `/msServices/${serviceName}/account/${userPrincipalName}/sync/configure`
    );
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/changeContact`, body);
  };

  /** Create Mfa on all accounts. */
  createMfaOnAllUsersByServiceName = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/createMfaOnAllUsers`);
  };

  /** Get this object properties */
  getExchangeByServiceName = (serviceName: string): Promise<MsServicesExchangeService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange`);
  };

  /** Alter this object properties */
  updateExchangeByServiceName = (
    serviceName: string,
    body: MsServicesExchangeService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/exchange`, body);
  };

  /** Detects billing transition status for the service */
  getExchangeBillingMigratedByServiceName = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/billingMigrated`);
  };

  /** Pending actions */
  getExchangeTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/task`);
  };

  /** Get this object properties */
  getExchangeTaskByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<MsServicesExchangeTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/exchange/task/${id}`);
  };

  /** Remove Mfa on all accounts. */
  postRemoveMfaOnAllUsersByServiceName = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/removeMfaOnAllUsers`);
  };

  /** Get this object properties */
  getSharepointByServiceName = (serviceName: string): Promise<MsServicesSharepointService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint`);
  };

  /** Alter this object properties */
  updateSharepointByServiceName = (
    serviceName: string,
    body: MsServicesSharepointService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/msServices/${serviceName}/sharepoint`, body);
  };

  /** Detects billing transition status for the service */
  getSharepointBillingMigratedByServiceName = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/billingMigrated`);
  };

  /** Get active licenses for specific period of time */
  getSharepointLicenseByServiceName = (
    serviceName: string
  ): Promise<MsServicesSharepointDailyLicense[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/license`);
  };

  /** Restore administrator rights */
  postSharepointRestoreAdminRightsByServiceName = (
    serviceName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sharepoint/restoreAdminRights`);
  };

  /** Pending actions */
  getSharepointTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/task`);
  };

  /** Get this object properties */
  getSharepointTaskByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<MsServicesSharepointTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sharepoint/task/${id}`);
  };

  /** Delete sync service */
  deleteSyncByServiceName = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('DELETE', `/msServices/${serviceName}/sync`);
  };

  /** Get this object properties */
  getSyncByServiceName = (serviceName: string): Promise<MsServicesSyncService> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync`);
  };

  /** Change account password */
  updateSyncPasswordByServiceName = (
    serviceName: string,
    body: { password: string }
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sync/changePassword`, body);
  };

  /** Get this object properties */
  getSyncClientSoftwareURLByServiceName = (
    serviceName: string
  ): Promise<MsServicesActiveDirectorySyncClientUrl> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync/clientSoftwareURL`);
  };

  /** Generate temporary link to ADSync software executable */
  postSyncClientSoftwareURLByServiceName = (serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/sync/clientSoftwareURL`);
  };

  /** Get active licenses for specific period of time */
  getSyncLicenseByServiceName = (serviceName: string): Promise<MsServicesSyncDailyLicense[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/sync/license`);
  };

  /** Pending actions */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndId = (id: number, serviceName: string): Promise<MsServicesTask> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/task/${id}`);
  };

  /** active directory UPN suffix */
  getUpnSuffixByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/upnSuffix`);
  };

  /** Create new UPN suffix */
  createUpnSuffixByServiceName = (
    serviceName: string,
    body: { suffix: string }
  ): Promise<MsServicesTask> => {
    return this.ovh.request('POST', `/msServices/${serviceName}/upnSuffix`, body);
  };

  /** Delete existing UPN suffix */
  deleteUpnSuffixByServiceNameAndSuffix = (
    serviceName: string,
    suffix: string
  ): Promise<MsServicesTask> => {
    return this.ovh.request('DELETE', `/msServices/${serviceName}/upnSuffix/${suffix}`);
  };

  /** Get this object properties */
  getUpnSuffixByServiceNameAndSuffix = (
    serviceName: string,
    suffix: string
  ): Promise<MsServicesUpnSuffix> => {
    return this.ovh.request('GET', `/msServices/${serviceName}/upnSuffix/${suffix}`);
  };
}

export { MsServicesHandler };
