/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeMailingListDepartRestrictionEnum } from '../models/EmailExchangeMailingListDepartRestrictionEnum';
import { EmailExchangeExchangeServiceDevice } from '../models/EmailExchangeExchangeServiceDevice';
import { EmailExchangeExchangeAccountFullAccess } from '../models/EmailExchangeExchangeAccountFullAccess';
import { EmailExchangeExchangeServiceAuthorizedIp } from '../models/EmailExchangeExchangeServiceAuthorizedIp';
import { EmailExchangeExchangeMailingListAlias } from '../models/EmailExchangeExchangeMailingListAlias';
import { EmailExchangeMailingList } from '../models/EmailExchangeMailingList';
import { EmailExchangeOvhLicenceEnum } from '../models/EmailExchangeOvhLicenceEnum';
import { EmailExchangeExchangeServiceActiveSyncNotification } from '../models/EmailExchangeExchangeServiceActiveSyncNotification';
import { EmailExchangeExchangeResourceAccountDelegate } from '../models/EmailExchangeExchangeResourceAccountDelegate';
import { EmailExchangeMailingFilterEnum } from '../models/EmailExchangeMailingFilterEnum';
import { EmailExchangeOutlookUrl } from '../models/EmailExchangeOutlookUrl';
import { EmailExchangeExchangeAccountAlias } from '../models/EmailExchangeExchangeAccountAlias';
import { EmailExchangeExchangeAccountSendOnBehalfTo } from '../models/EmailExchangeExchangeAccountSendOnBehalfTo';
import { EmailExchangeOvhCustomIsolationFieldEnum } from '../models/EmailExchangeOvhCustomIsolationFieldEnum';
import { EmailExchangeExchangeDistributionGroupSendAs } from '../models/EmailExchangeExchangeDistributionGroupSendAs';
import { EmailExchangePublicFolderTypeEnum } from '../models/EmailExchangePublicFolderTypeEnum';
import { EmailExchangeExchangeExternalContact } from '../models/EmailExchangeExchangeExternalContact';
import { EmailExchangeDeviceActiveSyncStateEnum } from '../models/EmailExchangeDeviceActiveSyncStateEnum';
import { EmailExchangeExchangeAccountArchive } from '../models/EmailExchangeExchangeAccountArchive';
import { EmailExchangeExchangeAccountDiagnosis } from '../models/EmailExchangeExchangeAccountDiagnosis';
import { EmailExchangeServer } from '../models/EmailExchangeServer';
import { EmailExchangeSmartHostAuthMechanismEnum } from '../models/EmailExchangeSmartHostAuthMechanismEnum';
import { EmailExchangeExchangeServiceProtocol } from '../models/EmailExchangeExchangeServiceProtocol';
import { EmailExchangePasswordPolicy } from '../models/EmailExchangePasswordPolicy';
import { EmailExchangeSharedAccountQuota } from '../models/EmailExchangeSharedAccountQuota';
import { EmailExchangeExchangeService } from '../models/EmailExchangeExchangeService';
import { EmailExchangeExchangeAccountSendAs } from '../models/EmailExchangeExchangeAccountSendAs';
import { EmailExchangeExchangeCustomIsolation } from '../models/EmailExchangeExchangeCustomIsolation';
import { EmailExchangeAccount } from '../models/EmailExchangeAccount';
import { EmailExchangeExchangeSharedAccountAlias } from '../models/EmailExchangeExchangeSharedAccountAlias';
import { EmailExchangeDkim } from '../models/EmailExchangeDkim';
import { EmailExchangeExchangeDistributionGroupSendOnBehalfTo } from '../models/EmailExchangeExchangeDistributionGroupSendOnBehalfTo';
import { EmailExchangeMailingListJoinRestrictionEnum } from '../models/EmailExchangeMailingListJoinRestrictionEnum';
import { EmailExchangeLanguageEnum } from '../models/EmailExchangeLanguageEnum';
import { EmailExchangeOutlookVersions } from '../models/EmailExchangeOutlookVersions';
import { EmailExchangeExport } from '../models/EmailExchangeExport';
import { EmailExchangeExchangeAccountImpersonation } from '../models/EmailExchangeExchangeAccountImpersonation';
import { EmailExchangeExchangeAccountProtocol } from '../models/EmailExchangeExchangeAccountProtocol';
import { EmailExchangeExchangePublicFolderPermission } from '../models/EmailExchangeExchangePublicFolderPermission';
import { EmailExchangeObjectStateEnum } from '../models/EmailExchangeObjectStateEnum';
import { EmailExchangeDailyLicense } from '../models/EmailExchangeDailyLicense';
import { EmailExchangeExchangeSharedAccountSendOnBehalfTo } from '../models/EmailExchangeExchangeSharedAccountSendOnBehalfTo';
import { EmailExchangeCountryCodeEnum } from '../models/EmailExchangeCountryCodeEnum';
import { EmailExchangeSharedAccount } from '../models/EmailExchangeSharedAccount';
import { EmailExchangeExchangeDistributionGroupMember } from '../models/EmailExchangeExchangeDistributionGroupMember';
import { EmailExchangeOutlookVersionEnum } from '../models/EmailExchangeOutlookVersionEnum';
import { EmailExchangeResourceTypeEnum } from '../models/EmailExchangeResourceTypeEnum';
import { EmailExchangeExchangeSharedAccountSendAs } from '../models/EmailExchangeExchangeSharedAccountSendAs';
import { EmailExchangeExchangeDistributionGroupManager } from '../models/EmailExchangeExchangeDistributionGroupManager';
import { EmailExchangeDisclaimer } from '../models/EmailExchangeDisclaimer';
import { ServicesService } from '../models/ServicesService';
import { EmailExchangeDomainTypeEnum } from '../models/EmailExchangeDomainTypeEnum';
import { EmailExchangeResourceAccount } from '../models/EmailExchangeResourceAccount';
import { EmailExchangePublicFolderQuota } from '../models/EmailExchangePublicFolderQuota';
import { EmailExchangePublicFolderRightTypeEnum } from '../models/EmailExchangePublicFolderRightTypeEnum';
import { EmailExchangeDomain } from '../models/EmailExchangeDomain';
import { EmailExchangeSpamAndVirusConfiguration } from '../models/EmailExchangeSpamAndVirusConfiguration';
import { EmailExchangeSendConnector } from '../models/EmailExchangeSendConnector';
import { EmailExchangeExchangeSharedAccountFullAccess } from '../models/EmailExchangeExchangeSharedAccountFullAccess';
import { EmailExchangeDisclaimerAttributeEnum } from '../models/EmailExchangeDisclaimerAttributeEnum';
import { EmailExchangePublicFolder } from '../models/EmailExchangePublicFolder';
import { EmailExchangeShowMeetingDetailsEnum } from '../models/EmailExchangeShowMeetingDetailsEnum';
import { EmailExchangeExportUrl } from '../models/EmailExchangeExportUrl';
import { EmailExchangeTask } from '../models/EmailExchangeTask';
import OVHBase from '../ovh';

class EmailExchangeHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listExchanges = (): Promise<string[]> => {
    return this.ovh.request('GET', '/email/exchange');
  };

  /** List available services */
  listExchangeServicesByOrganizationName = (organizationName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/exchange/${organizationName}/service`);
  };

  /** Get this object properties */
  getExchangeServiceByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeService> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}`
    );
  };

  /** Alter this object properties */
  updateExchangeServiceByOrganizationNameAndExchangeService = (
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
  getExchangeServiceAccountByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account`
    );
  };

  /** Create new mailbox in exchange server */
  createExchangeServiceAccountByOrganizationNameAndExchangeService = (
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
      mailingFilter?: EmailExchangeMailingFilterEnum[];
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
  deleteExchangeServiceAccountByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  updateExchangeServiceAccountByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountAliasByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`
    );
  };

  /** Create new alias */
  createExchangeServiceAccountAliasByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  deleteExchangeServiceAccountAliasByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAlias =
    (
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
  getExchangeServiceAccountAliasByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAlias =
    (
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
  deleteExchangeServiceAccountArchiveByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountArchiveByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  createExchangeServiceAccountArchiveByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  updateExchangeServiceAccountArchiveByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  updateExchangeServiceAccountPasswordByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountDiagnosticsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  createExchangeServiceAccountDiagnosticsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress =
    (
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
  deleteExchangeServiceAccountExportByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountExportByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  postExchangeServiceAccountExportByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountExportURLByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  postExchangeServiceAccountExportURLByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountFullAccessByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`
    );
  };

  /** Allow full access to a user */
  postExchangeServiceAccountFullAccessByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  deleteExchangeServiceAccountFullAccessByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  getExchangeServiceAccountFullAccessByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  getExchangeServiceAccountOutlookURLByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  postExchangeServiceAccountOutlookURLByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  getExchangeServiceAccountProtocolByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  updateExchangeServiceAccountProtocolByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  sendExchangeServiceAccountAsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`
    );
  };

  /** Allow another user to send mails from this mailbox */
  postExchangeServiceAccountSendAsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  deleteExchangeServiceAccountSendAsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  getExchangeServiceAccountSendAsByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  sendExchangeServiceAccountOnBehalfToByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`
    );
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postExchangeServiceAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress =
    (
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
  deleteExchangeServiceAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  getExchangeServiceAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndAllowedAccountId =
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
  getExchangeServiceAccountTasksByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
    exchangeService: string,
    organizationName: string,
    primaryEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks`
    );
  };

  /** Get this object properties */
  getExchangeServiceAccountTasksByOrganizationNameAndExchangeServiceAndPrimaryEmailAddressAndId = (
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
  postExchangeServiceAccountTerminateByOrganizationNameAndExchangeServiceAndPrimaryEmailAddress = (
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
  postExchangeServiceActivateSharepointByOrganizationNameAndExchangeService = (
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
  getExchangeServiceAuthorizedIpByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/authorizedIp`
    );
  };

  /** Authorize new IP to access the service */
  postExchangeServiceAuthorizedIpByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceAuthorizedIpByOrganizationNameAndExchangeServiceAndIp = (
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
  getExchangeServiceAuthorizedIpByOrganizationNameAndExchangeServiceAndIp = (
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
  updateExchangeServiceAuthorizedIpByOrganizationNameAndExchangeServiceAndIp = (
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
  postExchangeServiceChangeHostnameByOrganizationNameAndExchangeService = (
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
  getExchangeServiceCustomIsolationByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/customIsolation`
    );
  };

  /** Create new custom isolation for mailbox */
  createExchangeServiceCustomIsolationByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceCustomIsolationByOrganizationNameAndExchangeServiceAndName = (
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
  getExchangeServiceCustomIsolationByOrganizationNameAndExchangeServiceAndName = (
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
  getExchangeServiceDcvEmailsByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/dcvEmails`
    );
  };

  /** List of your ActiveSync devices registered on this Exchange service */
  listExchangeServiceDevicesByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/device`
    );
  };

  /** Get this object properties */
  getExchangeServiceDeviceByOrganizationNameAndExchangeServiceAndIdentity = (
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
  updateExchangeServiceDeviceByOrganizationNameAndExchangeServiceAndIdentity = (
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
  postExchangeServiceDeviceClearDeviceByOrganizationNameAndExchangeServiceAndIdentity = (
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
  getExchangeServiceDomainByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain`
    );
  };

  /** Create new domain in exchange services */
  createExchangeServiceDomainByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceDomainByOrganizationNameAndExchangeServiceAndDomainName = (
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
  getExchangeServiceDomainByOrganizationNameAndExchangeServiceAndDomainName = (
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
  updateExchangeServiceDomainByOrganizationNameAndExchangeServiceAndDomainName = (
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
  updateExchangeServiceDomainDefaultSBRByOrganizationNameAndExchangeServiceAndDomainName = (
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
  deleteExchangeServiceDomainDisclaimerByOrganizationNameAndExchangeServiceAndDomainName = (
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
  getExchangeServiceDomainDisclaimerByOrganizationNameAndExchangeServiceAndDomainName = (
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
  createExchangeServiceDomainDisclaimerByOrganizationNameAndExchangeServiceAndDomainName = (
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
  updateExchangeServiceDomainDisclaimerByOrganizationNameAndExchangeServiceAndDomainName = (
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
  getExchangeServiceDomainDisclaimerAttributeByOrganizationNameAndExchangeServiceAndDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDisclaimerAttributeEnum[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** dkim associated to this domain */
  getExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkim`
    );
  };

  /** Create DKIM selector on this domain */
  createExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainName = (
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
  deleteExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainNameAndSelectorName =
    (
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
  getExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainNameAndSelectorName = (
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
  disableExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainNameAndSelectorName =
    (
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
  enableExchangeServiceDomainDkimByOrganizationNameAndExchangeServiceAndDomainNameAndSelectorName =
    (
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
  getExchangeServiceDomainDkimSelectorByOrganizationNameAndExchangeServiceAndDomainName = (
    domainName: string,
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/dkimSelector`
    );
  };

  /** External contacts for this service */
  getExchangeServiceExternalContactByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/externalContact`
    );
  };

  /** create new external contact */
  createExchangeServiceExternalContactByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceExternalContactByOrganizationNameAndExchangeServiceAndExternalEmailAddress =
    (
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
  getExchangeServiceExternalContactByOrganizationNameAndExchangeServiceAndExternalEmailAddress = (
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
  updateExchangeServiceExternalContactByOrganizationNameAndExchangeServiceAndExternalEmailAddress =
    (
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
  deleteExchangeServiceImpersonatedUserByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser`
    );
  };

  /** Get this object properties */
  getExchangeServiceImpersonatedUserByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeAccountImpersonation> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonatedUser`
    );
  };

  /** Create user with impersonation right on all mailboxes */
  createExchangeServiceImpersonatedUserByOrganizationNameAndExchangeService = (
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
  updateExchangeServiceImpersonatedUserPasswordByOrganizationNameAndExchangeService = (
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
  getExchangeServiceImpersonationPasswordPolicyByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangePasswordPolicy> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/impersonationPasswordPolicy`
    );
  };

  /** Get active licenses for specific period of time */
  getExchangeServiceLicenseByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeDailyLicense[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/license`
    );
  };

  /** Mailing list for this service */
  getExchangeServiceMailingListByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList`
    );
  };

  /** Add mailing list */
  addExchangeServiceMailingListByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceMailingListByOrganizationNameAndExchangeServiceAndMailingListAddress = (
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
  getExchangeServiceMailingListByOrganizationNameAndExchangeServiceAndMailingListAddress = (
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
  updateExchangeServiceMailingListByOrganizationNameAndExchangeServiceAndMailingListAddress = (
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
  getExchangeServiceMailingListAliasByOrganizationNameAndExchangeServiceAndMailingListAddress = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`
    );
  };

  /** Create new alias */
  createExchangeServiceMailingListAliasByOrganizationNameAndExchangeServiceAndMailingListAddress = (
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
  deleteExchangeServiceMailingListAliasByOrganizationNameAndExchangeServiceAndMailingListAddressAndAlias =
    (
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
  getExchangeServiceMailingListAliasByOrganizationNameAndExchangeServiceAndMailingListAddressAndAlias =
    (
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
  getExchangeServiceMailingListManagerAccountByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`
      );
    };

  /** Add new mailing list manager */
  addExchangeServiceMailingListManagerAccountByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
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
  deleteExchangeServiceMailingListManagerAccountByOrganizationNameAndExchangeServiceAndMailingListAddressAndManagerAccountId =
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
  getExchangeServiceMailingListManagerAccountByOrganizationNameAndExchangeServiceAndMailingListAddressAndManagerAccountId =
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
  getExchangeServiceMailingListMemberAccountByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`
      );
    };

  /** Add new mailing list member */
  addExchangeServiceMailingListMemberAccountByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
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
  deleteExchangeServiceMailingListMemberAccountByOrganizationNameAndExchangeServiceAndMailingListAddressAndMemberAccountId =
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
  getExchangeServiceMailingListMemberAccountByOrganizationNameAndExchangeServiceAndMailingListAddressAndMemberAccountId =
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
  getExchangeServiceMailingListMemberContactByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`
      );
    };

  /** Add new mailing list member */
  addExchangeServiceMailingListMemberContactByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
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
  deleteExchangeServiceMailingListMemberContactByOrganizationNameAndExchangeServiceAndMailingListAddressAndMemberContactId =
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
  getExchangeServiceMailingListMemberContactByOrganizationNameAndExchangeServiceAndMailingListAddressAndMemberContactId =
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
  sendExchangeServiceMailingListAsByOrganizationNameAndExchangeServiceAndMailingListAddress = (
    exchangeService: string,
    mailingListAddress: string,
    organizationName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`
    );
  };

  /** Allow another user to Send aso mails from this mailing list */
  postExchangeServiceMailingListSendAsByOrganizationNameAndExchangeServiceAndMailingListAddress = (
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
  deleteExchangeServiceMailingListSendAsByOrganizationNameAndExchangeServiceAndMailingListAddressAndAllowedAccountId =
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
  getExchangeServiceMailingListSendAsByOrganizationNameAndExchangeServiceAndMailingListAddressAndAllowedAccountId =
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
  sendExchangeServiceMailingListOnBehalfToByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
      exchangeService: string,
      mailingListAddress: string,
      organizationName: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`
      );
    };

  /** Allow another user to Send aso mails from this mailing list */
  postExchangeServiceMailingListSendOnBehalfToByOrganizationNameAndExchangeServiceAndMailingListAddress =
    (
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
  deleteExchangeServiceMailingListSendOnBehalfToByOrganizationNameAndExchangeServiceAndMailingListAddressAndAllowedAccountId =
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
  getExchangeServiceMailingListSendOnBehalfToByOrganizationNameAndExchangeServiceAndMailingListAddressAndAllowedAccountId =
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
  getExchangeServiceOutlookAvailabilityByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeOutlookVersions[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/outlookAvailability`
    );
  };

  /** Get this object properties */
  getExchangeServiceProtocolByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeExchangeServiceProtocol> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol`
    );
  };

  /** Alter this object properties */
  updateExchangeServiceProtocolByOrganizationNameAndExchangeService = (
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
  getExchangeServiceProtocolActiveSyncMailNotificationByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`
    );
  };

  /** Subscribe new address to ActiveSync quarantine notifications */
  postExchangeServiceProtocolActiveSyncMailNotificationByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceProtocolActiveSyncMailNotificationByOrganizationNameAndExchangeServiceAndNotifiedAccountId =
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
  getExchangeServiceProtocolActiveSyncMailNotificationByOrganizationNameAndExchangeServiceAndNotifiedAccountId =
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
  getExchangeServicePublicFolderByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`
    );
  };

  /** Create organization public folder */
  createExchangeServicePublicFolderByOrganizationNameAndExchangeService = (
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
  deleteExchangeServicePublicFolderByOrganizationNameAndExchangeServiceAndPath = (
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
  getExchangeServicePublicFolderByOrganizationNameAndExchangeServiceAndPath = (
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
  updateExchangeServicePublicFolderByOrganizationNameAndExchangeServiceAndPath = (
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
  getExchangeServicePublicFolderPermissionByOrganizationNameAndExchangeServiceAndPath = (
    exchangeService: string,
    organizationName: string,
    path: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`
    );
  };

  /** Create public folder permission */
  createExchangeServicePublicFolderPermissionByOrganizationNameAndExchangeServiceAndPath = (
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
  deleteExchangeServicePublicFolderPermissionByOrganizationNameAndExchangeServiceAndPathAndAllowedAccountId =
    (
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
  getExchangeServicePublicFolderPermissionByOrganizationNameAndExchangeServiceAndPathAndAllowedAccountId =
    (
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
  updateExchangeServicePublicFolderPermissionByOrganizationNameAndExchangeServiceAndPathAndAllowedAccountId =
    (
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
  getExchangeServicePublicFolderQuotaByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangePublicFolderQuota> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/publicFolderQuota`
    );
  };

  /** Renew SSL if it will expire in next 30 days */
  postExchangeServiceRenewSSLByOrganizationNameAndExchangeService = (
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
  getExchangeServiceResourceAccountByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`
    );
  };

  /** create new resource account in exchange server */
  createExchangeServiceResourceAccountByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceResourceAccountByOrganizationNameAndExchangeServiceAndResourceEmailAddress =
    (
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
  getExchangeServiceResourceAccountByOrganizationNameAndExchangeServiceAndResourceEmailAddress = (
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
  updateExchangeServiceResourceAccountByOrganizationNameAndExchangeServiceAndResourceEmailAddress =
    (
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
  getExchangeServiceResourceAccountDelegateByOrganizationNameAndExchangeServiceAndResourceEmailAddress =
    (
      exchangeService: string,
      organizationName: string,
      resourceEmailAddress: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`
      );
    };

  /** add new resource account delegate in exchange server */
  addExchangeServiceResourceAccountDelegateByOrganizationNameAndExchangeServiceAndResourceEmailAddress =
    (
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
  deleteExchangeServiceResourceAccountDelegateByOrganizationNameAndExchangeServiceAndResourceEmailAddressAndAllowedAccountId =
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
  getExchangeServiceResourceAccountDelegateByOrganizationNameAndExchangeServiceAndResourceEmailAddressAndAllowedAccountId =
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
  listExchangeServiceSendConnectorsByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sendConnector`
    );
  };

  /** Create new send connector */
  createExchangeServiceSendConnectorByOrganizationNameAndExchangeService = (
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
  deleteExchangeServiceSendConnectorByOrganizationNameAndExchangeServiceAndId = (
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
  getExchangeServiceSendConnectorByOrganizationNameAndExchangeServiceAndId = (
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
  updateExchangeServiceSendConnectorByOrganizationNameAndExchangeServiceAndId = (
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
  updateExchangeServiceSendConnectorAuthenticationByOrganizationNameAndExchangeServiceAndId = (
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
  getExchangeServiceServerByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeServer> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/server`
    );
  };

  /** Alter this object properties */
  updateExchangeServiceServerByOrganizationNameAndExchangeService = (
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
  getExchangeServiceServiceInfosByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<ServicesService> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`
    );
  };

  /** Alter this object properties */
  updateExchangeServiceServiceInfosByOrganizationNameAndExchangeService = (
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
  getExchangeServiceSharedAccountByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`
    );
  };

  /** Create new shared mailbox in exchange server */
  createExchangeServiceSharedAccountByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string,
    body: {
      displayName?: string;
      firstName?: string;
      hiddenFromGAL?: boolean;
      initials?: string;
      lastName?: string;
      mailingFilter?: EmailExchangeMailingFilterEnum[];
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
  deleteExchangeServiceSharedAccountByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
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
  getExchangeServiceSharedAccountByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
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
  updateExchangeServiceSharedAccountByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
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
  getExchangeServiceSharedAccountAliasByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/alias`
    );
  };

  /** Create new alias */
  createExchangeServiceSharedAccountAliasByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
    (
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
  deleteExchangeServiceSharedAccountAliasByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAlias =
    (
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
  getExchangeServiceSharedAccountAliasByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAlias =
    (
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
  getExchangeServiceSharedAccountFullAccessByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
    (
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`
      );
    };

  /** Allow full access to a user */
  postExchangeServiceSharedAccountFullAccessByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
    (
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
  deleteExchangeServiceSharedAccountFullAccessByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  getExchangeServiceSharedAccountFullAccessByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  sendExchangeServiceSharedAccountAsByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`
    );
  };

  /** Allow another user to send mails from this shared mailbox */
  postExchangeServiceSharedAccountSendAsByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
    (
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
  deleteExchangeServiceSharedAccountSendAsByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  getExchangeServiceSharedAccountSendAsByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  sendExchangeServiceSharedAccountOnBehalfToByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
    (
      exchangeService: string,
      organizationName: string,
      sharedEmailAddress: string
    ): Promise<number[]> => {
      return this.ovh.request(
        'GET',
        `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`
      );
    };

  /** Allow another user to Send On Behalf To mails from this shared mailbox */
  postExchangeServiceSharedAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndSharedEmailAddress =
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
  deleteExchangeServiceSharedAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  getExchangeServiceSharedAccountSendOnBehalfToByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndAllowedAccountId =
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
  getExchangeServiceSharedAccountTasksByOrganizationNameAndExchangeServiceAndSharedEmailAddress = (
    exchangeService: string,
    organizationName: string,
    sharedEmailAddress: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks`
    );
  };

  /** Get this object properties */
  getExchangeServiceSharedAccountTasksByOrganizationNameAndExchangeServiceAndSharedEmailAddressAndId =
    (
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
  getExchangeServiceSharedAccountQuotaByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeSharedAccountQuota> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccountQuota`
    );
  };

  /** Pending actions */
  getExchangeServiceTaskByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/exchange/${organizationName}/service/${exchangeService}/task`
    );
  };

  /** Get this object properties */
  getExchangeServiceTaskByOrganizationNameAndExchangeServiceAndId = (
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
  updateExchangeServiceDeviceListByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<EmailExchangeTask> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/updateDeviceList`
    );
  };

  /** Update spam and virus flags on all active accounts */
  updateExchangeServiceFlagsOnAllAccountsByOrganizationNameAndExchangeService = (
    exchangeService: string,
    organizationName: string
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/email/exchange/${organizationName}/service/${exchangeService}/updateFlagsOnAllAccounts`
    );
  };
}

export { EmailExchangeHandler };
