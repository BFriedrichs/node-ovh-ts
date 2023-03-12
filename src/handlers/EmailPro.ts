/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProAccountSendOnBehalfTo } from '../models/EmailProAccountSendOnBehalfTo';
import { EmailProDisclaimerAttributeEnum } from '../models/EmailProDisclaimerAttributeEnum';
import { EmailProAccountAlias } from '../models/EmailProAccountAlias';
import { EmailProDisclaimer } from '../models/EmailProDisclaimer';
import { EmailProExternalContactNative } from '../models/EmailProExternalContactNative';
import { EmailProServer } from '../models/EmailProServer';
import { EmailProServiceNative } from '../models/EmailProServiceNative';
import { EmailProAccountSendAs } from '../models/EmailProAccountSendAs';
import { EmailProDisclaimerNative } from '../models/EmailProDisclaimerNative';
import { EmailProExternalContact } from '../models/EmailProExternalContact';
import { EmailProDomainTypeEnum } from '../models/EmailProDomainTypeEnum';
import { EmailProAccountDiagnosis } from '../models/EmailProAccountDiagnosis';
import { EmailProObjectStateEnum } from '../models/EmailProObjectStateEnum';
import { EmailProAccount } from '../models/EmailProAccount';
import { EmailProDomainNative } from '../models/EmailProDomainNative';
import { ServicesService } from '../models/ServicesService';
import { EmailProService } from '../models/EmailProService';
import { EmailProDomain } from '../models/EmailProDomain';
import { EmailProAccountNative } from '../models/EmailProAccountNative';
import { EmailProTask } from '../models/EmailProTask';
import { EmailProAccountFullAccess } from '../models/EmailProAccountFullAccess';
import OVHBase from '../ovh';

class EmailProHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listPros = (): Promise<string[]> => {
    return this.ovh.request('GET', '/email/pro');
  };

  /** Get this object properties */
  getProByService = (service: string): Promise<EmailProServiceNative> => {
    return this.ovh.request('GET', `/email/pro/${service}`);
  };

  /** Alter this object properties */
  updateProByService = (service: string, body: EmailProService): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}`, body);
  };

  /** Accounts associated to this pro service */
  getProAccountByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account`);
  };

  /** Get this object properties */
  getProAccountByServiceAndEmail = (
    service: string,
    email: string
  ): Promise<EmailProAccountNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}`);
  };

  /** Delete existing mailbox in pro server */
  deleteProAccountByServiceAndEmail = (email: string, service: string): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/account/${email}`);
  };

  /** Alter this object properties */
  updateProAccountByServiceAndEmail = (
    email: string,
    service: string,
    body: EmailProAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/account/${email}`, body);
  };

  /** Aliases associated to this mailbox */
  getProAccountAliasByServiceAndEmail = (service: string, email: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/alias`);
  };

  /** Create new alias */
  createProAccountAliasByServiceAndEmail = (
    email: string,
    service: string,
    body: { alias: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/alias`, body);
  };

  /** Get this object properties */
  getProAccountAliasByServiceAndEmailAndAlias = (
    service: string,
    alias: string,
    email: string
  ): Promise<EmailProAccountAlias> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/alias/${alias}`);
  };

  /** Delete existing alias */
  deleteProAccountAliasByServiceAndEmailAndAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/account/${email}/alias/${alias}`);
  };

  /** Change mailbox password */
  updateProAccountPasswordByServiceAndEmail = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/changePassword`, body);
  };

  /** Get this object properties */
  getProAccountDiagnosticsByServiceAndEmail = (
    service: string,
    email: string
  ): Promise<EmailProAccountDiagnosis> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/diagnostics`);
  };

  /** Create new diagnosis request */
  createProAccountDiagnosticsByServiceAndEmail = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/diagnostics`, body);
  };

  /** Full access granted users for this mailbox */
  getProAccountFullAccessByServiceAndEmail = (
    service: string,
    email: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/fullAccess`);
  };

  /** Allow full access to a user */
  postProAccountFullAccessByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowedAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/fullAccess`, body);
  };

  /** Get this object properties */
  getProAccountFullAccessByServiceAndEmailAndAllowedAccountId = (
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
  deleteProAccountFullAccessByServiceAndEmailAndAllowedAccountId = (
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
  sendProAccountAsByServiceAndEmail = (service: string, email: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/sendAs`);
  };

  /** Allow another user to send mails from this mailbox */
  postProAccountSendAsByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/sendAs`, body);
  };

  /** Get this object properties */
  getProAccountSendAsByServiceAndEmailAndAllowedAccountId = (
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
  deleteProAccountSendAsByServiceAndEmailAndAllowedAccountId = (
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
  sendProAccountOnBehalfToByServiceAndEmail = (
    service: string,
    email: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/sendOnBehalfTo`);
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postProAccountSendOnBehalfToByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/sendOnBehalfTo`, body);
  };

  /** Get this object properties */
  getProAccountSendOnBehalfToByServiceAndEmailAndAllowedAccountId = (
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
  deleteProAccountSendOnBehalfToByServiceAndEmailAndAllowedAccountId = (
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
  getProAccountTasksByServiceAndEmail = (service: string, email: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/tasks`);
  };

  /** Get this object properties */
  getProAccountTasksByServiceAndEmailAndId = (
    service: string,
    email: string,
    id: number
  ): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/pro/${service}/account/${email}/tasks/${id}`);
  };

  /** Terminate account at expiration date */
  postProAccountTerminateByServiceAndEmail = (email: string, service: string): Promise<string> => {
    return this.ovh.request('POST', `/email/pro/${service}/account/${email}/terminate`);
  };

  /** Detects billing transition status for the service */
  getProBillingMigratedByService = (service: string): Promise<boolean> => {
    return this.ovh.request('GET', `/email/pro/${service}/billingMigrated`);
  };

  /** Emailpro billing plan */
  getProBillingPlanByService = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/pro/${service}/billingPlan`);
  };

  /** Launch a contact change procedure */
  launchProChangeContactByService = (
    service: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/email/pro/${service}/changeContact`, body);
  };

  /** Domains associated to this service */
  getProDomainByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain`);
  };

  /** Create new domain in pro services */
  createProDomainByService = (
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
  getProDomainByServiceAndDomainName = (
    service: string,
    domainName: string
  ): Promise<EmailProDomainNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain/${domainName}`);
  };

  /** Delete existing domain in pro services */
  deleteProDomainByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/domain/${domainName}`);
  };

  /** Alter this object properties */
  updateProDomainByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: EmailProDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/domain/${domainName}`, body);
  };

  /** Get this object properties */
  getProDomainDisclaimerByServiceAndDomainName = (
    service: string,
    domainName: string
  ): Promise<EmailProDisclaimerNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/domain/${domainName}/disclaimer`);
  };

  /** Delete existing organization disclaimer */
  deleteProDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/pro/${service}/domain/${domainName}/disclaimer`);
  };

  /** Create organization disclaimer of each email */
  createProDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: { content: string; outsideOnly?: boolean }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/pro/${service}/domain/${domainName}/disclaimer`, body);
  };

  /** Alter this object properties */
  updateProDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: EmailProDisclaimer
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/domain/${domainName}/disclaimer`, body);
  };

  /** Get diclaimer attributes to substitute with Active Directory properties */
  getProDomainDisclaimerAttributeByServiceAndDomainName = (
    service: string,
    domainName: string
  ): Promise<EmailProDisclaimerAttributeEnum[]> => {
    return this.ovh.request(
      'GET',
      `/email/pro/${service}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** External contacts for this service */
  getProExternalContactByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/externalContact`);
  };

  /** create new external contact */
  createProExternalContactByService = (
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
  getProExternalContactByServiceAndExternalEmailAddress = (
    service: string,
    externalEmailAddress: string
  ): Promise<EmailProExternalContactNative> => {
    return this.ovh.request('GET', `/email/pro/${service}/externalContact/${externalEmailAddress}`);
  };

  /** delete external contact */
  deleteProExternalContactByServiceAndExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/pro/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Alter this object properties */
  updateProExternalContactByServiceAndExternalEmailAddress = (
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
  getProServerByService = (service: string): Promise<EmailProServer> => {
    return this.ovh.request('GET', `/email/pro/${service}/server`);
  };

  /** Get this object properties */
  getProServiceInfosByService = (service: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/email/pro/${service}/serviceInfos`);
  };

  /** Alter this object properties */
  updateProServiceInfosByService = (service: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/email/pro/${service}/serviceInfos`, body);
  };

  /** Pending actions */
  getProTaskByService = (service: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/pro/${service}/task`);
  };

  /** Get this object properties */
  getProTaskByServiceAndId = (service: string, id: number): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/pro/${service}/task/${id}`);
  };

  /** Update spam and virus flags on all active accounts */
  updateProFlagsOnAllAccountsByService = (service: string): Promise<void> => {
    return this.ovh.request('POST', `/email/pro/${service}/updateFlagsOnAllAccounts`);
  };
}

export { EmailProHandler };
