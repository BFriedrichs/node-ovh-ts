/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProService } from '../models/EmailProService';
import { EmailProAccount } from '../models/EmailProAccount';
import { EmailProObjectStateEnum } from '../models/EmailProObjectStateEnum';
import { EmailProExternalContactNative } from '../models/EmailProExternalContactNative';
import { EmailProServer } from '../models/EmailProServer';
import { EmailProDisclaimerAttributeEnum } from '../models/EmailProDisclaimerAttributeEnum';
import { EmailProAccountNative } from '../models/EmailProAccountNative';
import { EmailProAccountAlias } from '../models/EmailProAccountAlias';
import { ServicesService } from '../models/ServicesService';
import { EmailProAccountSendAs } from '../models/EmailProAccountSendAs';
import { EmailProAccountFullAccess } from '../models/EmailProAccountFullAccess';
import { EmailProAccountDiagnosis } from '../models/EmailProAccountDiagnosis';
import { EmailProServiceNative } from '../models/EmailProServiceNative';
import { EmailProDomain } from '../models/EmailProDomain';
import { EmailProDisclaimer } from '../models/EmailProDisclaimer';
import { EmailProAccountSendOnBehalfTo } from '../models/EmailProAccountSendOnBehalfTo';
import { EmailProDomainTypeEnum } from '../models/EmailProDomainTypeEnum';
import { EmailProDisclaimerNative } from '../models/EmailProDisclaimerNative';
import { EmailProExternalContact } from '../models/EmailProExternalContact';
import { EmailProDomainNative } from '../models/EmailProDomainNative';
import { EmailProTask } from '../models/EmailProTask';
import OVHBase from '../ovh';

class EmailProHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getPro = (): Promise<string> => {
    return this.ovh.request('GET', '/email/pro');
  };

  /** Get this object properties */
  getProService = (service: string): Promise<EmailProServiceNative> => {
    return this.ovh.request('GET', `/email/pro/${service}`);
  };

  /** Alter this object properties */
  putProService = (service: string, body: EmailProService): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}`, body);
  };

  /** Accounts associated to this pro service */
  getProServiceAccount = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/account`);
  };

  /** Get this object properties */
  getProServiceAccountEmail = (service: string, email: string): Promise<EmailProAccountNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}`);
  };

  /** Delete existing mailbox in pro server */
  deleteProServiceAccountEmail = (email: string, service: string): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/account/${email}`);
  };

  /** Alter this object properties */
  putProServiceAccountEmail = (
    email: string,
    service: string,
    body: EmailProAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/account/${email}`, body);
  };

  /** Aliases associated to this mailbox */
  getProServiceAccountEmailAlias = (service: string, email: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/alias`);
  };

  /** Create new alias */
  postProServiceAccountEmailAlias = (
    email: string,
    service: string,
    body: { alias: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/alias`, body);
  };

  /** Get this object properties */
  getProServiceAccountEmailAliasAlias = (
    service: string,
    alias: string,
    email: string
  ): Promise<EmailProAccountAlias> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/alias/${alias}`);
  };

  /** Delete existing alias */
  deleteProServiceAccountEmailAliasAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/account/${email}/alias/${alias}`);
  };

  /** Change mailbox password */
  postProServiceAccountEmailChangePassword = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/changePassword`, body);
  };

  /** Get this object properties */
  getProServiceAccountEmailDiagnostics = (
    service: string,
    email: string
  ): Promise<EmailProAccountDiagnosis> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/diagnostics`);
  };

  /** Create new diagnosis request */
  postProServiceAccountEmailDiagnostics = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/diagnostics`, body);
  };

  /** Full access granted users for this mailbox */
  getProServiceAccountEmailFullAccess = (service: string, email: string): Promise<number> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/fullAccess`);
  };

  /** Allow full access to a user */
  postProServiceAccountEmailFullAccess = (
    email: string,
    service: string,
    body: { allowedAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/fullAccess`, body);
  };

  /** Get this object properties */
  getProServiceAccountEmailFullAccessAllowedAccountId = (
    service: string,
    allowedAccountId: number,
    email: string
  ): Promise<EmailProAccountFullAccess> => {
    return this.ovh.request(
      'GET',
      `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`
    );
  };

  /** Revoke full access */
  deleteProServiceAccountEmailFullAccessAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`
    );
  };

  /** Send as granted users for this mailbox */
  getProServiceAccountEmailSendAs = (service: string, email: string): Promise<number> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/sendAs`);
  };

  /** Allow another user to send mails from this mailbox */
  postProServiceAccountEmailSendAs = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/sendAs`, body);
  };

  /** Get this object properties */
  getProServiceAccountEmailSendAsAllowedAccountId = (
    service: string,
    allowedAccountId: number,
    email: string
  ): Promise<EmailProAccountSendAs> => {
    return this.ovh.request(
      'GET',
      `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`
    );
  };

  /** Delete allowed user for sendAs */
  deleteProServiceAccountEmailSendAsAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`
    );
  };

  /** SendOnBehalfTo granted users for this mailbox */
  getProServiceAccountEmailSendOnBehalfTo = (service: string, email: string): Promise<number> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/sendOnBehalfTo`);
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postProServiceAccountEmailSendOnBehalfTo = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/sendOnBehalfTo`, body);
  };

  /** Get this object properties */
  getProServiceAccountEmailSendOnBehalfToAllowedAccountId = (
    service: string,
    allowedAccountId: number,
    email: string
  ): Promise<EmailProAccountSendOnBehalfTo> => {
    return this.ovh.request(
      'GET',
      `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`
    );
  };

  /** Delete allowed user for SendOnBehalfTo */
  deleteProServiceAccountEmailSendOnBehalfToAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`
    );
  };

  /** Pending task for this mailbox */
  getProServiceAccountEmailTasks = (service: string, email: string): Promise<number> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/tasks`);
  };

  /** Get this object properties */
  getProServiceAccountEmailTasksId = (
    service: string,
    email: string,
    id: number
  ): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/tasks/${id}`);
  };

  /** Terminate account at expiration date */
  postProServiceAccountEmailTerminate = (email: string, service: string): Promise<string> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/terminate`);
  };

  /** Detects billing transition status for the service */
  getProServiceBillingMigrated = (service: string): Promise<boolean> => {
    return this.ovh.request('GET', `/email/pro/${service}/billingMigrated`);
  };

  /** Emailpro billing plan */
  getProServiceBillingPlan = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/billingPlan`);
  };

  /** Launch a contact change procedure */
  postProServiceChangeContact = (
    service: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/email/pro/${service}/changeContact`, body);
  };

  /** Domains associated to this service */
  getProServiceDomain = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain`);
  };

  /** Create new domain in pro services */
  postProServiceDomain = (
    service: string,
    body: {
      configureAutodiscover?: boolean;
      configureMx?: boolean;
      mxRelay?: string;
      name: string;
      type: EmailProDomainTypeEnum;
    }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/domain`, body);
  };

  /** Get this object properties */
  getProServiceDomainDomainName = (
    service: string,
    domainName: string
  ): Promise<EmailProDomainNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain/${domainName}`);
  };

  /** Delete existing domain in pro services */
  deleteProServiceDomainDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/domain/${domainName}`);
  };

  /** Alter this object properties */
  putProServiceDomainDomainName = (
    domainName: string,
    service: string,
    body: EmailProDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/domain/${domainName}`, body);
  };

  /** Get this object properties */
  getProServiceDomainDomainNameDisclaimer = (
    service: string,
    domainName: string
  ): Promise<EmailProDisclaimerNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain/${domainName}/disclaimer`);
  };

  /** Delete existing organization disclaimer */
  deleteProServiceDomainDomainNameDisclaimer = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/domain/${domainName}/disclaimer`);
  };

  /** Create organization disclaimer of each email */
  postProServiceDomainDomainNameDisclaimer = (
    domainName: string,
    service: string,
    body: { content: string; outsideOnly?: boolean }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/domain/${domainName}/disclaimer`, body);
  };

  /** Alter this object properties */
  putProServiceDomainDomainNameDisclaimer = (
    domainName: string,
    service: string,
    body: EmailProDisclaimer
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/domain/${domainName}/disclaimer`, body);
  };

  /** Get diclaimer attributes to substitute with Active Directory properties */
  getProServiceDomainDomainNameDisclaimerAttribute = (
    service: string,
    domainName: string
  ): Promise<EmailProDisclaimerAttributeEnum> => {
    return this.ovh.request(
      'GET',
      `/email/pro/${service}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** External contacts for this service */
  getProServiceExternalContact = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/externalContact`);
  };

  /** create new external contact */
  postProServiceExternalContact = (
    service: string,
    body: {
      displayName?: string;
      externalEmailAddress: string;
      firstName?: string;
      hiddenFromGAL?: boolean;
      initials?: string;
      lastName?: string;
    }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/externalContact`, body);
  };

  /** Get this object properties */
  getProServiceExternalContactExternalEmailAddress = (
    service: string,
    externalEmailAddress: string
  ): Promise<EmailProExternalContactNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/externalContact/${externalEmailAddress}`);
  };

  /** delete external contact */
  deleteProServiceExternalContactExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/pro/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Alter this object properties */
  putProServiceExternalContactExternalEmailAddress = (
    externalEmailAddress: string,
    service: string,
    body: EmailProExternalContact
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/pro/${service}/externalContact/${externalEmailAddress}`,
      body
    );
  };

  /** Get this object properties */
  getProServiceServer = (service: string): Promise<EmailProServer> => {
    return this.ovh.request('GET', `/email/pro/${service}/server`);
  };

  /** Get this object properties */
  getProServiceServiceInfos = (service: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/email/pro/${service}/serviceInfos`);
  };

  /** Alter this object properties */
  putProServiceServiceInfos = (service: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/serviceInfos`, body);
  };

  /** Pending actions */
  getProServiceTask = (service: string): Promise<number> => {
    return this.ovh.request('GET', `/email/pro/${service}/task`);
  };

  /** Get this object properties */
  getProServiceTaskId = (service: string, id: number): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/pro/${service}/task/${id}`);
  };

  /** Update spam and virus flags on all active accounts */
  postProServiceUpdateFlagsOnAllAccounts = (service: string): Promise<void> => {
    return this.ovh.request('POST', `/email/pro/${service}/updateFlagsOnAllAccounts`);
  };
}

export default EmailProHandler;
