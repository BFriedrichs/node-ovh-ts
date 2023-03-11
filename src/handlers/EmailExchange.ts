/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from '../models/EmailExchangeObjectStateEnum';
import { EmailExchangeExchangeSharedAccountSendAs } from '../models/EmailExchangeExchangeSharedAccountSendAs';
import { EmailExchangePublicFolderQuota } from '../models/EmailExchangePublicFolderQuota';
import { EmailExchangeExchangeExternalContact } from '../models/EmailExchangeExchangeExternalContact';
import { EmailExchangeSharedAccountQuota } from '../models/EmailExchangeSharedAccountQuota';
import { EmailExchangeExchangeServiceProtocol } from '../models/EmailExchangeExchangeServiceProtocol';
import { EmailExchangeResourceAccount } from '../models/EmailExchangeResourceAccount';
import { EmailExchangeExchangeDistributionGroupSendOnBehalfTo } from '../models/EmailExchangeExchangeDistributionGroupSendOnBehalfTo';
import { EmailExchangeDisclaimerAttributeEnum } from '../models/EmailExchangeDisclaimerAttributeEnum';
import { EmailExchangeExchangeSharedAccountSendOnBehalfTo } from '../models/EmailExchangeExchangeSharedAccountSendOnBehalfTo';
import { EmailExchangeExchangeAccountArchive } from '../models/EmailExchangeExchangeAccountArchive';
import { EmailExchangeExchangeSharedAccountAlias } from '../models/EmailExchangeExchangeSharedAccountAlias';
import { EmailExchangeShowMeetingDetailsEnum } from '../models/EmailExchangeShowMeetingDetailsEnum';
import { EmailExchangeCountryCodeEnum } from '../models/EmailExchangeCountryCodeEnum';
import { EmailExchangeMailingList } from '../models/EmailExchangeMailingList';
import { EmailExchangeExport } from '../models/EmailExchangeExport';
import { EmailExchangeMailingListJoinRestrictionEnum } from '../models/EmailExchangeMailingListJoinRestrictionEnum';
import { EmailExchangeOvhLicenceEnum } from '../models/EmailExchangeOvhLicenceEnum';
import { EmailExchangeDomain } from '../models/EmailExchangeDomain';
import { EmailExchangePasswordPolicy } from '../models/EmailExchangePasswordPolicy';
import { EmailExchangeExchangeServiceDevice } from '../models/EmailExchangeExchangeServiceDevice';
import { EmailExchangeExchangeDistributionGroupMember } from '../models/EmailExchangeExchangeDistributionGroupMember';
import { EmailExchangeExchangeDistributionGroupManager } from '../models/EmailExchangeExchangeDistributionGroupManager';
import { EmailExchangeOutlookVersions } from '../models/EmailExchangeOutlookVersions';
import { ServicesService } from '../models/ServicesService';
import { EmailExchangeExchangeDistributionGroupSendAs } from '../models/EmailExchangeExchangeDistributionGroupSendAs';
import { EmailExchangeExchangeAccountAlias } from '../models/EmailExchangeExchangeAccountAlias';
import { EmailExchangeExchangeCustomIsolation } from '../models/EmailExchangeExchangeCustomIsolation';
import { EmailExchangeDeviceActiveSyncStateEnum } from '../models/EmailExchangeDeviceActiveSyncStateEnum';
import { EmailExchangeExchangeService } from '../models/EmailExchangeExchangeService';
import { EmailExchangeExchangeMailingListAlias } from '../models/EmailExchangeExchangeMailingListAlias';
import { EmailExchangePublicFolderRightTypeEnum } from '../models/EmailExchangePublicFolderRightTypeEnum';
import { EmailExchangeMailingListDepartRestrictionEnum } from '../models/EmailExchangeMailingListDepartRestrictionEnum';
import { EmailExchangeExchangeAccountFullAccess } from '../models/EmailExchangeExchangeAccountFullAccess';
import { EmailExchangeExchangePublicFolderPermission } from '../models/EmailExchangeExchangePublicFolderPermission';
import { EmailExchangeTask } from '../models/EmailExchangeTask';
import { EmailExchangeExchangeServiceAuthorizedIp } from '../models/EmailExchangeExchangeServiceAuthorizedIp';
import { EmailExchangeAccount } from '../models/EmailExchangeAccount';
import { EmailExchangeMailingFilterEnum } from '../models/EmailExchangeMailingFilterEnum';
import { EmailExchangeExportUrl } from '../models/EmailExchangeExportUrl';
import { EmailExchangeSpamAndVirusConfiguration } from '../models/EmailExchangeSpamAndVirusConfiguration';
import { EmailExchangeOvhCustomIsolationFieldEnum } from '../models/EmailExchangeOvhCustomIsolationFieldEnum';
import { EmailExchangeResourceTypeEnum } from '../models/EmailExchangeResourceTypeEnum';
import { EmailExchangeSharedAccount } from '../models/EmailExchangeSharedAccount';
import { EmailExchangeExchangeAccountProtocol } from '../models/EmailExchangeExchangeAccountProtocol';
import { EmailExchangeOutlookVersionEnum } from '../models/EmailExchangeOutlookVersionEnum';
import { EmailExchangeExchangeServiceActiveSyncNotification } from '../models/EmailExchangeExchangeServiceActiveSyncNotification';
import { EmailExchangeSendConnector } from '../models/EmailExchangeSendConnector';
import { EmailExchangeSmartHostAuthMechanismEnum } from '../models/EmailExchangeSmartHostAuthMechanismEnum';
import { EmailExchangePublicFolderTypeEnum } from '../models/EmailExchangePublicFolderTypeEnum';
import { EmailExchangeExchangeAccountImpersonation } from '../models/EmailExchangeExchangeAccountImpersonation';
import { EmailExchangeLanguageEnum } from '../models/EmailExchangeLanguageEnum';
import { EmailExchangeOutlookUrl } from '../models/EmailExchangeOutlookUrl';
import { EmailExchangeDisclaimer } from '../models/EmailExchangeDisclaimer';
import { EmailExchangeDkim } from '../models/EmailExchangeDkim';
import { EmailExchangeDailyLicense } from '../models/EmailExchangeDailyLicense';
import { EmailExchangeDomainTypeEnum } from '../models/EmailExchangeDomainTypeEnum';
import { EmailExchangeExchangeAccountDiagnosis } from '../models/EmailExchangeExchangeAccountDiagnosis';
import { EmailExchangeExchangeAccountSendOnBehalfTo } from '../models/EmailExchangeExchangeAccountSendOnBehalfTo';
import { EmailExchangePublicFolder } from '../models/EmailExchangePublicFolder';
import { EmailExchangeServer } from '../models/EmailExchangeServer';
import { EmailExchangeExchangeSharedAccountFullAccess } from '../models/EmailExchangeExchangeSharedAccountFullAccess';
import { EmailExchangeExchangeResourceAccountDelegate } from '../models/EmailExchangeExchangeResourceAccountDelegate';
import { EmailExchangeExchangeAccountSendAs } from '../models/EmailExchangeExchangeAccountSendAs';
import OVHBase from '../ovh';

class EmailExchangeHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getExchange = (): Promise<string> => {
    return this.ovh.request('GET', '/email/exchange');
  };

  /** List available services */
  getExchangeOrganizationNameService = (organizationName: string): Promise<string> => {
    return this.ovh.request('GET', `/email/exchange/${organizationName}/service`);
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeService> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeService = (
    exchangeService: string,
    organizationName: string,
    body: EmailExchangeExchangeService
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}`,
      body
    );
  };

  /** Accounts associated to this exchange service */
  getExchangeOrganizationNameServiceExchangeServiceAccount = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account`
    );
  };

  /** Create new mailbox in exchange server */
  postExchangeOrganizationNameServiceExchangeServiceAccount = (
    exchangeService: string,
    organizationName: string,
    body: {
      SAMAccountName?: string;
      city?: string;
      company?: string;
      countryCode?: EmailExchangeCountryCodeEnum;
      description?: string;
      displayName?: string;
      domain: string;
      fax?: string;
      firstName?: string;
      forwardingEmail?: string;
      hiddenFromGAL?: boolean;
      initials?: string;
      jobDepartment?: string;
      jobTitle?: string;
      lastName?: string;
      license: EmailExchangeOvhLicenceEnum;
      litigation?: boolean;
      litigationPeriod?: number;
      login: string;
      mailSenderDisplay?: string;
      mailingFilter?: EmailExchangeMailingFilterEnum;
      mobile?: string;
      office?: string;
      outlookLicense?: boolean;
      password: string;
      phone?: string;
      postalCode?: string;
      quota?: number;
      region?: string;
      sbrDestination?: string;
      sendConnectorId?: number;
      spamAndVirusConfiguration?: EmailExchangeSpamAndVirusConfiguration;
      storeCopyOfEmail?: boolean;
      streetAddress?: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account`,
      body
    );
  };

  /** Delete existing mailbox in exchange server */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeAccount> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: EmailExchangeAccount
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`,
      body
    );
  };

  /** Aliases associated to this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressAlias = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`
    );
  };

  /** Create new alias */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressAlias = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { alias: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`,
      body
    );
  };

  /** Delete existing alias */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExchangeAccountAlias> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`
    );
  };

  /** Delete existing archive mailbox */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressArchive = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressArchive = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExchangeAccountArchive> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`
    );
  };

  /** Create new archive mailbox */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressArchive = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { quota?: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`,
      body
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressArchive = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: EmailExchangeExchangeAccountArchive
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`,
      body
    );
  };

  /** Change mailbox password */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressChangePassword = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { password: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/changePassword`,
      body
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressDiagnostics = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExchangeAccountDiagnosis> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`
    );
  };

  /** Create new diagnosis request */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressDiagnostics = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { password: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`,
      body
    );
  };

  /** Remove request of PST file */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressExport = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressExport = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExport> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`
    );
  };

  /** Request PST file for the account */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressExport = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressExportURL = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExportUrl> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`
    );
  };

  /** Generate temporary url to PST file */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressExportURL = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`
    );
  };

  /** Full access granted users for this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressFullAccess = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`
    );
  };

  /** Allow full access to a user */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressFullAccess = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { allowedAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`,
      body
    );
  };

  /** Revoke full access */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressFullAccessAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressFullAccessAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeExchangeAccountFullAccess> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressOutlookURL = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeOutlookUrl> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`
    );
  };

  /** Generate outlook url */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressOutlookURL = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { language: EmailExchangeLanguageEnum; version: EmailExchangeOutlookVersionEnum }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`,
      body
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressProtocol = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeExchangeAccountProtocol> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressProtocol = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: EmailExchangeExchangeAccountProtocol
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`,
      body
    );
  };

  /** Send as granted users for this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendAs = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`
    );
  };

  /** Allow another user to send mails from this mailbox */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendAs = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { allowAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`,
      body
    );
  };

  /** Delete allowed user for sendAs */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeExchangeAccountSendAs> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** SendOnBehalfTo granted users for this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendOnBehalfTo = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`
    );
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendOnBehalfTo = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string,
    body: { allowAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`,
      body
    );
  };

  /** Delete allowed user for SendOnBehalfTo */
  deleteExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      primaryEmailAddress: string
    ): Promise<EmailExchangeExchangeAccountSendOnBehalfTo> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Pending task for this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressTasks = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressTasksId = (
    exchangeService: string,
    id: number,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks/${id}`
    );
  };

  /** Terminate account at expiration date */
  postExchangeOrganizationNameServiceExchangeServiceAccountPrimaryEmailAddressTerminate = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/terminate`
    );
  };

  /** Activate Sharepoint infra connected to this exchange service */
  postExchangeOrganizationNameServiceExchangeServiceActivateSharepoint = (
    exchangeService: string,
    organizationName: string,
    body: { primaryEmailAddress: string; subDomain: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/activateSharepoint`,
      body
    );
  };

  /** Authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s) */
  getExchangeOrganizationNameServiceExchangeServiceAuthorizedIp = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp`
    );
  };

  /** Authorize new IP to access the service */
  postExchangeOrganizationNameServiceExchangeServiceAuthorizedIp = (
    exchangeService: string,
    organizationName: string,
    body: {
      HTTPS?: boolean;
      IMAP?: boolean;
      IMAPS?: boolean;
      IP: string;
      POP?: boolean;
      POPS?: boolean;
      SMTP?: boolean;
      SMTPS?: boolean;
      displayName?: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp`,
      body
    );
  };

  /** Delete authorized IP */
  deleteExchangeOrganizationNameServiceExchangeServiceAuthorizedIpIp = (
    exchangeService: string,
    ip: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp/${ip}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceAuthorizedIpIp = (
    exchangeService: string,
    ip: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeServiceAuthorizedIp> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp/${ip}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceAuthorizedIpIp = (
    exchangeService: string,
    ip: string,
    organizationName: string,
    body: EmailExchangeExchangeServiceAuthorizedIp
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp/${ip}`,
      body
    );
  };

  /** Setting SSL hostname for Exchange private offer */
  postExchangeOrganizationNameServiceExchangeServiceChangeHostname = (
    exchangeService: string,
    organizationName: string,
    body: { dcvEmail: string; hostname: string; useDnsAssist: boolean }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/changeHostname`,
      body
    );
  };

  /** custom isolation for mailbox */
  getExchangeOrganizationNameServiceExchangeServiceCustomIsolation = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/customIsolation`
    );
  };

  /** Create new custom isolation for mailbox */
  postExchangeOrganizationNameServiceExchangeServiceCustomIsolation = (
    exchangeService: string,
    organizationName: string,
    body: {
      isolationField: EmailExchangeOvhCustomIsolationFieldEnum;
      isolationValue: string;
      name: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/customIsolation`,
      body
    );
  };

  /** Delete existing custom isolation for mailbox */
  deleteExchangeOrganizationNameServiceExchangeServiceCustomIsolationName = (
    exchangeService: string,
    name: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/customIsolation/${name}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceCustomIsolationName = (
    exchangeService: string,
    name: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeCustomIsolation> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/customIsolation/${name}`
    );
  };

  /** Get DCV emails if your ssl will expire in next 30 days */
  getExchangeOrganizationNameServiceExchangeServiceDcvEmails = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/dcvEmails`
    );
  };

  /** List of your ActiveSync devices registered on this Exchange service */
  getExchangeOrganizationNameServiceExchangeServiceDevice = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/device`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceDeviceIdentity = (
    exchangeService: string,
    identity: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeServiceDevice> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceDeviceIdentity = (
    exchangeService: string,
    identity: string,
    organizationName: string,
    body: EmailExchangeExchangeServiceDevice
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`,
      body
    );
  };

  /** Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST. */
  postExchangeOrganizationNameServiceExchangeServiceDeviceIdentityClearDevice = (
    exchangeService: string,
    identity: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}/clearDevice`
    );
  };

  /** Domains associated to this service */
  getExchangeOrganizationNameServiceExchangeServiceDomain = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain`
    );
  };

  /** Create new domain in exchange services */
  postExchangeOrganizationNameServiceExchangeServiceDomain = (
    exchangeService: string,
    organizationName: string,
    body: {
      autoEnableDKIM?: boolean;
      configureAutodiscover?: boolean;
      configureDKIM?: boolean;
      configureMx?: boolean;
      main?: boolean;
      mxRelay?: string;
      name: string;
      organization2010?: string;
      sbrDefault?: string;
      sendConnectorIdDefault?: number;
      type: EmailExchangeDomainTypeEnum;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain`,
      body
    );
  };

  /** Delete existing domain in exchange services */
  deleteExchangeOrganizationNameServiceExchangeServiceDomainDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDomain> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceDomainDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    body: EmailExchangeDomain
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`,
      body
    );
  };

  /** Change default values of SBR used for all new created account on this domain */
  putExchangeOrganizationNameServiceExchangeServiceDomainDomainNameChangeDefaultSBR = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    body: { sbrDefault?: string; sendConnectorIdDefault?: number }
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/changeDefaultSBR`,
      body
    );
  };

  /** Delete existing organization disclaimer */
  deleteExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDisclaimer = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDisclaimer = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDisclaimer> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`
    );
  };

  /** Create organization disclaimer of each email */
  postExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDisclaimer = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    body: { content: string; outsideOnly?: boolean }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`,
      body
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDisclaimer = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    body: EmailExchangeDisclaimer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`,
      body
    );
  };

  /** Get diclaimer attributes to substitute with Active Directory properties */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDisclaimerAttribute = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDisclaimerAttributeEnum> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** dkim associated to this domain */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkim = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim`
    );
  };

  /** Create DKIM selector on this domain */
  postExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkim = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    body: { autoEnableDKIM?: boolean; configureDkim?: boolean; selectorName: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim`,
      body
    );
  };

  /** Delete DKIM selector on this domain */
  deleteExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkimSelectorName = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    selectorName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim/${selectorName}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkimSelectorName = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    selectorName: string
  ): Promise<EmailExchangeDkim> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim/${selectorName}`
    );
  };

  /** disable dkim signing */
  postExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkimSelectorNameDisable = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    selectorName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim/${selectorName}/disable`
    );
  };

  /** enable dkim signing or switch selector used */
  postExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkimSelectorNameEnable = (
    domainName: string,
    exchangeService: string,
    organizationName: string,
    selectorName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim/${selectorName}/enable`
    );
  };

  /** Get dkim selector list */
  getExchangeOrganizationNameServiceExchangeServiceDomainDomainNameDkimSelector = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkimSelector`
    );
  };

  /** External contacts for this service */
  getExchangeOrganizationNameServiceExchangeServiceExternalContact = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact`
    );
  };

  /** create new external contact */
  postExchangeOrganizationNameServiceExchangeServiceExternalContact = (
    exchangeService: string,
    organizationName: string,
    body: {
      displayName?: string;
      externalEmailAddress: string;
      firstName?: string;
      hiddenFromGAL?: boolean;
      initials?: string;
      lastName?: string;
      organization2010?: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact`,
      body
    );
  };

  /** delete external contact */
  deleteExchangeOrganizationNameServiceExchangeServiceExternalContactExternalEmailAddress = (
    exchangeService: string,
    externalEmailAddress: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceExternalContactExternalEmailAddress = (
    exchangeService: string,
    externalEmailAddress: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeExternalContact> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceExternalContactExternalEmailAddress = (
    exchangeService: string,
    externalEmailAddress: string,
    organizationName: string,
    body: EmailExchangeExchangeExternalContact
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`,
      body
    );
  };

  /** Delete user with impersonation right on all mailboxes */
  deleteExchangeOrganizationNameServiceExchangeServiceImpersonatedUser = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceImpersonatedUser = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeAccountImpersonation> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser`
    );
  };

  /** Create user with impersonation right on all mailboxes */
  postExchangeOrganizationNameServiceExchangeServiceImpersonatedUser = (
    exchangeService: string,
    organizationName: string,
    body: { password: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser`,
      body
    );
  };

  /** Change user password */
  postExchangeOrganizationNameServiceExchangeServiceImpersonatedUserChangePassword = (
    exchangeService: string,
    organizationName: string,
    body: { password: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser/changePassword`,
      body
    );
  };

  /** Get configuration of password policy linked to impersonated account */
  getExchangeOrganizationNameServiceExchangeServiceImpersonationPasswordPolicy = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangePasswordPolicy> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonationPasswordPolicy`
    );
  };

  /** Get active licenses for specific period of time */
  getExchangeOrganizationNameServiceExchangeServiceLicense = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDailyLicense> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/license`
    );
  };

  /** Mailing list for this service */
  getExchangeOrganizationNameServiceExchangeServiceMailingList = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList`
    );
  };

  /** Add mailing list */
  postExchangeOrganizationNameServiceExchangeServiceMailingList = (
    exchangeService: string,
    organizationName: string,
    body: {
      company?: string;
      departRestriction: EmailExchangeMailingListDepartRestrictionEnum;
      displayName?: string;
      hiddenFromGAL?: boolean;
      joinRestriction: EmailExchangeMailingListJoinRestrictionEnum;
      mailingListAddress: string;
      maxReceiveSize?: number;
      maxSendSize?: number;
      senderAuthentification?: boolean;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList`,
      body
    );
  };

  /** Delete mailing list */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddress = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddress = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<EmailExchangeMailingList> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddress = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: EmailExchangeMailingList
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`,
      body
    );
  };

  /** Aliases associated to this mailingList */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressAlias = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`
    );
  };

  /** Create new alias */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressAlias = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { alias: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`,
      body
    );
  };

  /** Delete existing alias */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeMailingListAlias> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`
    );
  };

  /** Mailing list account manager */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressManagerAccount = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`
    );
  };

  /** Add new mailing list manager */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressManagerAccount = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { managerAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`,
      body
    );
  };

  /** Delete mailing list manager */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressManagerAccountManagerAccountId =
    (
      exchangeService: string,
      mailingListAddress: string,
      managerAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressManagerAccountManagerAccountId =
    (
      exchangeService: string,
      mailingListAddress: string,
      managerAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeExchangeDistributionGroupManager> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`
      );
    };

  /** Mailing list account member */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberAccount = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`
    );
  };

  /** Add new mailing list member */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberAccount = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { memberAccountId?: number; memberContactId?: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`,
      body
    );
  };

  /** Delete mailing list member */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberAccountMemberAccountId =
    (
      exchangeService: string,
      mailingListAddress: string,
      memberAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberAccountMemberAccountId =
    (
      exchangeService: string,
      mailingListAddress: string,
      memberAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeExchangeDistributionGroupMember> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`
      );
    };

  /** Mailing list contact member */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberContact = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`
    );
  };

  /** Add new mailing list member */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberContact = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { memberAccountId?: number; memberContactId?: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`,
      body
    );
  };

  /** Delete mailing list member */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberContactMemberContactId =
    (
      exchangeService: string,
      mailingListAddress: string,
      memberContactId: number,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressMemberContactMemberContactId =
    (
      exchangeService: string,
      mailingListAddress: string,
      memberContactId: number,
      organizationName: string
    ): Promise<EmailExchangeExchangeDistributionGroupMember> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`
      );
    };

  /** sendAs */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendAs = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`
    );
  };

  /** Allow another user to Send aso mails from this mailing list */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendAs = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { allowAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`,
      body
    );
  };

  /** Delete allowed user for SendAs */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<EmailExchangeExchangeDistributionGroupSendAs> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** sendOnBehalfTo */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendOnBehalfTo = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`
    );
  };

  /** Allow another user to Send aso mails from this mailing list */
  postExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendOnBehalfTo = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string,
    body: { allowAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`,
      body
    );
  };

  /** Delete allowed user for SendOnBehalfTo */
  deleteExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceMailingListMailingListAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<EmailExchangeExchangeDistributionGroupSendOnBehalfTo> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Show available outlooks */
  getExchangeOrganizationNameServiceExchangeServiceOutlookAvailability = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeOutlookVersions> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/outlookAvailability`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceProtocol = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeServiceProtocol> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceProtocol = (
    exchangeService: string,
    organizationName: string,
    body: EmailExchangeExchangeServiceProtocol
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol`,
      body
    );
  };

  /** Exchange account id subscribed to ActiveSync quarantine notifications */
  getExchangeOrganizationNameServiceExchangeServiceProtocolActiveSyncMailNotification = (
    exchangeService: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`
    );
  };

  /** Subscribe new address to ActiveSync quarantine notifications */
  postExchangeOrganizationNameServiceExchangeServiceProtocolActiveSyncMailNotification = (
    exchangeService: string,
    organizationName: string,
    body: { notifiedAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`,
      body
    );
  };

  /** Unubscribe address from ActiveSync quarantine notifications */
  deleteExchangeOrganizationNameServiceExchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountId =
    (
      exchangeService: string,
      notifiedAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountId =
    (
      exchangeService: string,
      notifiedAccountId: number,
      organizationName: string
    ): Promise<EmailExchangeExchangeServiceActiveSyncNotification> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`
      );
    };

  /** Public folders associated to this service */
  getExchangeOrganizationNameServiceExchangeServicePublicFolder = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`
    );
  };

  /** Create organization public folder */
  postExchangeOrganizationNameServiceExchangeServicePublicFolder = (
    exchangeService: string,
    organizationName: string,
    body: {
      anonymousPermission?: EmailExchangePublicFolderRightTypeEnum;
      defaultPermission?: EmailExchangePublicFolderRightTypeEnum;
      path: string;
      quota: number;
      type: EmailExchangePublicFolderTypeEnum;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`,
      body
    );
  };

  /** Delete existing organization public folder */
  deleteExchangeOrganizationNameServiceExchangeServicePublicFolderPath = (
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServicePublicFolderPath = (
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<EmailExchangePublicFolder> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServicePublicFolderPath = (
    exchangeService: string,
    organizationName: string,
    path: string,
    body: EmailExchangePublicFolder
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`,
      body
    );
  };

  /** Public folder permission */
  getExchangeOrganizationNameServiceExchangeServicePublicFolderPathPermission = (
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`
    );
  };

  /** Create public folder permission */
  postExchangeOrganizationNameServiceExchangeServicePublicFolderPathPermission = (
    exchangeService: string,
    organizationName: string,
    path: string,
    body: { accessRights: EmailExchangePublicFolderRightTypeEnum; allowedAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`,
      body
    );
  };

  /** Delete existing permission from public folder */
  deleteExchangeOrganizationNameServiceExchangeServicePublicFolderPathPermissionAllowedAccountId = (
    allowedAccountId: number,
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServicePublicFolderPathPermissionAllowedAccountId = (
    allowedAccountId: number,
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<EmailExchangeExchangePublicFolderPermission> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServicePublicFolderPathPermissionAllowedAccountId = (
    allowedAccountId: number,
    exchangeService: string,
    organizationName: string,
    path: string,
    body: EmailExchangeExchangePublicFolderPermission
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`,
      body
    );
  };

  /** Get public folder quota usage in total available space */
  getExchangeOrganizationNameServiceExchangeServicePublicFolderQuota = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangePublicFolderQuota> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolderQuota`
    );
  };

  /** Renew SSL if it will expire in next 30 days */
  postExchangeOrganizationNameServiceExchangeServiceRenewSSL = (
    exchangeService: string,
    organizationName: string,
    body: { dcv: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/renewSSL`,
      body
    );
  };

  /** Resource account associated to this service */
  getExchangeOrganizationNameServiceExchangeServiceResourceAccount = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`
    );
  };

  /** create new resource account in exchange server */
  postExchangeOrganizationNameServiceExchangeServiceResourceAccount = (
    exchangeService: string,
    organizationName: string,
    body: {
      addOrganizerToSubject?: boolean;
      allowConflict?: boolean;
      bookingWindow?: number;
      capacity: number;
      company?: string;
      deleteComments?: boolean;
      deleteSubject?: boolean;
      displayName?: string;
      location?: string;
      maximumDuration?: number;
      resourceEmailAddress: string;
      showMeetingDetails?: EmailExchangeShowMeetingDetailsEnum;
      type: EmailExchangeResourceTypeEnum;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`,
      body
    );
  };

  /** delete existing resource account in exchange server */
  deleteExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddress = (
    exchangeService: string,
    organizationName: string,
    resourceEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddress = (
    exchangeService: string,
    organizationName: string,
    resourceEmailAddress: string
  ): Promise<EmailExchangeResourceAccount> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddress = (
    exchangeService: string,
    organizationName: string,
    resourceEmailAddress: string,
    body: EmailExchangeResourceAccount
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`,
      body
    );
  };

  /** Resource account manager */
  getExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddressDelegate = (
    exchangeService: string,
    organizationName: string,
    resourceEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`
    );
  };

  /** add new resource account delegate in exchange server */
  postExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddressDelegate = (
    exchangeService: string,
    organizationName: string,
    resourceEmailAddress: string,
    body: { allowedAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`,
      body
    );
  };

  /** delete existing resource account delegate in exchange server */
  deleteExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddressDelegateAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      resourceEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceResourceAccountResourceEmailAddressDelegateAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      resourceEmailAddress: string
    ): Promise<EmailExchangeExchangeResourceAccountDelegate> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`
      );
    };

  /** List of your send connectors on this Exchange service */
  getExchangeOrganizationNameServiceExchangeServiceSendConnector = (
    exchangeService: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector`
    );
  };

  /** Create new send connector */
  postExchangeOrganizationNameServiceExchangeServiceSendConnector = (
    exchangeService: string,
    organizationName: string,
    body: {
      displayName: string;
      maxSendSize?: number;
      password?: string;
      port?: number;
      requireTLS?: boolean;
      smartHost: string;
      smartHostAuthMechanism?: EmailExchangeSmartHostAuthMechanismEnum;
      user?: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector`,
      body
    );
  };

  /** Delete existing send connector */
  deleteExchangeOrganizationNameServiceExchangeServiceSendConnectorId = (
    exchangeService: string,
    id: number,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${id}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSendConnectorId = (
    exchangeService: string,
    id: number,
    organizationName: string
  ): Promise<EmailExchangeSendConnector> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${id}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceSendConnectorId = (
    exchangeService: string,
    id: number,
    organizationName: string,
    body: EmailExchangeSendConnector
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${id}`,
      body
    );
  };

  /** Change authentication on send connector */
  postExchangeOrganizationNameServiceExchangeServiceSendConnectorIdChangeAuthentication = (
    exchangeService: string,
    id: number,
    organizationName: string,
    body: {
      password?: string;
      smartHostAuthMechanism?: EmailExchangeSmartHostAuthMechanismEnum;
      user?: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${id}/changeAuthentication`,
      body
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceServer = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeServer> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/server`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceServer = (
    exchangeService: string,
    organizationName: string,
    body: EmailExchangeServer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/server`,
      body
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceServiceInfos = (
    exchangeService: string,
    organizationName: string
  ): Promise<ServicesService> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceServiceInfos = (
    exchangeService: string,
    organizationName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`,
      body
    );
  };

  /** Shared accounts associated to this exchange service */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccount = (
    exchangeService: string,
    organizationName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`
    );
  };

  /** Create new shared mailbox in exchange server */
  postExchangeOrganizationNameServiceExchangeServiceSharedAccount = (
    exchangeService: string,
    organizationName: string,
    body: {
      displayName?: string;
      firstName?: string;
      hiddenFromGAL?: boolean;
      initials?: string;
      lastName?: string;
      mailingFilter?: EmailExchangeMailingFilterEnum;
      quota: number;
      sharedEmailAddress: string;
    }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`,
      body
    );
  };

  /** Delete existing shared mailbox in exchange server */
  deleteExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<EmailExchangeSharedAccount> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`
    );
  };

  /** Alter this object properties */
  putExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string,
    body: EmailExchangeSharedAccount
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`,
      body
    );
  };

  /** Aliases associated to this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressAlias = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias`
    );
  };

  /** Create new alias */
  postExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressAlias = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string,
    body: { alias: string }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias`,
      body
    );
  };

  /** Delete existing alias */
  deleteExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias/${alias}`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressAliasAlias = (
    alias: string,
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<EmailExchangeExchangeSharedAccountAlias> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias/${alias}`
    );
  };

  /** Full access granted users for this shared mailbox */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressFullAccess = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`
    );
  };

  /** Allow full access to a user */
  postExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressFullAccess = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string,
    body: { allowedAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`,
      body
    );
  };

  /** Revoke full access */
  deleteExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressFullAccessAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressFullAccessAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeExchangeSharedAccountFullAccess> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`
      );
    };

  /** Send as granted users for this shared mailbox */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendAs = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`
    );
  };

  /** Allow another user to send mails from this shared mailbox */
  postExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendAs = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string,
    body: { allowAccountId: number }
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`,
      body
    );
  };

  /** Delete allowed user for sendAs */
  deleteExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendAsAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeExchangeSharedAccountSendAs> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`
      );
    };

  /** SendOnBehalfTo granted users for this shared mailbox */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendOnBehalfTo = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`
    );
  };

  /** Allow another user to Send On Behalf To mails from this shared mailbox */
  postExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendOnBehalfTo =
    (
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string,
      body: { allowAccountId: number }
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'POST',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`,
        body
      );
    };

  /** Delete allowed user for SendOnBehalfTo */
  deleteExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeTask> => {
      return this.ovh.request(
        'DELETE',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressSendOnBehalfToAllowedAccountId =
    (
      allowedAccountId: number,
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<EmailExchangeExchangeSharedAccountSendOnBehalfTo> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
      );
    };

  /** Pending task for this mailbox */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressTasks = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountSharedEmailAddressTasksId = (
    exchangeService: string,
    id: number,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks/${id}`
    );
  };

  /** Get shared account quota usage in total available space */
  getExchangeOrganizationNameServiceExchangeServiceSharedAccountQuota = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeSharedAccountQuota> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccountQuota`
    );
  };

  /** Pending actions */
  getExchangeOrganizationNameServiceExchangeServiceTask = (
    exchangeService: string,
    organizationName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/task`
    );
  };

  /** Get this object properties */
  getExchangeOrganizationNameServiceExchangeServiceTaskId = (
    exchangeService: string,
    id: number,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/task/${id}`
    );
  };

  /** Update device list */
  postExchangeOrganizationNameServiceExchangeServiceUpdateDeviceList = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/updateDeviceList`
    );
  };

  /** Update spam and virus flags on all active accounts */
  postExchangeOrganizationNameServiceExchangeServiceUpdateFlagsOnAllAccounts = (
    exchangeService: string,
    organizationName: string
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/updateFlagsOnAllAccounts`
    );
  };
}

export default EmailExchangeHandler;
