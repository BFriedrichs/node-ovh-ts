/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailMxplanAccountSendOnBehalfTo } from '../models/EmailMxplanAccountSendOnBehalfTo';
import { EmailMxplanAccountSendAs } from '../models/EmailMxplanAccountSendAs';
import { EmailMxplanExternalContact } from '../models/EmailMxplanExternalContact';
import { EmailMxplanAccountDiagnosis } from '../models/EmailMxplanAccountDiagnosis';
import { EmailProDisclaimerAttributeEnum } from '../models/EmailProDisclaimerAttributeEnum';
import { EmailMxplanService } from '../models/EmailMxplanService';
import { EmailProObjectStateEnum } from '../models/EmailProObjectStateEnum';
import { EmailMxplanAccountCapabilities } from '../models/EmailMxplanAccountCapabilities';
import { EmailProDisclaimer } from '../models/EmailProDisclaimer';
import { EmailProTask } from '../models/EmailProTask';
import { EmailMxplanAccountAlias } from '../models/EmailMxplanAccountAlias';
import { EmailMxplanServer } from '../models/EmailMxplanServer';
import { EmailMxplanDomain } from '../models/EmailMxplanDomain';
import { EmailMxplanAccountFullAccess } from '../models/EmailMxplanAccountFullAccess';
import { EmailMxplanAccount } from '../models/EmailMxplanAccount';
import OVHBase from '../ovh';

class EmailMxplanHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listMxplans = (): Promise<string[]> => {
    return this.ovh.request('GET', '/email/mxplan');
  };

  /** Get this object properties */
  getMxplanByService = (service: string): Promise<EmailMxplanService> => {
    return this.ovh.request('GET', `/email/mxplan/${service}`);
  };

  /** Alter this object properties */
  updateMxplanByService = (service: string, body: EmailMxplanService): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}`, body);
  };

  /** Accounts associated to this mxplan service */
  getMxplanAccountByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account`);
  };

  /** Delete existing mailbox in mxplan server */
  deleteMxplanAccountByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/account/${email}`);
  };

  /** Get this object properties */
  getMxplanAccountByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<EmailMxplanAccount> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}`);
  };

  /** Alter this object properties */
  updateMxplanAccountByServiceAndEmail = (
    email: string,
    service: string,
    body: EmailMxplanAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}/account/${email}`, body);
  };

  /** Aliases associated to this mailbox */
  getMxplanAccountAliasByServiceAndEmail = (email: string, service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/alias`);
  };

  /** Create new alias */
  createMxplanAccountAliasByServiceAndEmail = (
    email: string,
    service: string,
    body: { alias: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/alias`, body);
  };

  /** Delete existing alias */
  deleteMxplanAccountAliasByServiceAndEmailAndAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/account/${email}/alias/${alias}`);
  };

  /** Get this object properties */
  getMxplanAccountAliasByServiceAndEmailAndAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailMxplanAccountAlias> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/alias/${alias}`);
  };

  /** Get available capabilities for this account */
  getMxplanAccountCapabilitiesByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<EmailMxplanAccountCapabilities> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/capabilities`);
  };

  /** Change mailbox password */
  updateMxplanAccountPasswordByServiceAndEmail = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'POST',
      `/email/mxplan/${service}/account/${email}/changePassword`,
      body
    );
  };

  /** Get this object properties */
  getMxplanAccountDiagnosticByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<EmailMxplanAccountDiagnosis> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/diagnostic`);
  };

  /** Create new diagnosis request */
  createMxplanAccountDiagnosticByServiceAndEmail = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/diagnostic`, body);
  };

  /** Full access granted users for this mailbox */
  getMxplanAccountFullAccessByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/fullAccess`);
  };

  /** Allow full access to a user */
  postMxplanAccountFullAccessByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowedAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/fullAccess`, body);
  };

  /** Revoke full access */
  deleteMxplanAccountFullAccessByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/mxplan/${service}/account/${email}/fullAccess/${allowedAccountId}`
    );
  };

  /** Get this object properties */
  getMxplanAccountFullAccessByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailMxplanAccountFullAccess> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/account/${email}/fullAccess/${allowedAccountId}`
    );
  };

  /** Send as granted users for this mailbox */
  sendMxplanAccountAsByServiceAndEmail = (email: string, service: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/sendAs`);
  };

  /** Allow another user to send mails from this mailbox */
  postMxplanAccountSendAsByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/sendAs`, body);
  };

  /** Delete allowed user for sendAs */
  deleteMxplanAccountSendAsByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/mxplan/${service}/account/${email}/sendAs/${allowedAccountId}`
    );
  };

  /** Get this object properties */
  getMxplanAccountSendAsByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailMxplanAccountSendAs> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/account/${email}/sendAs/${allowedAccountId}`
    );
  };

  /** SendOnBehalfTo granted users for this mailbox */
  sendMxplanAccountOnBehalfToByServiceAndEmail = (
    email: string,
    service: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/sendOnBehalfTo`);
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postMxplanAccountSendOnBehalfToByServiceAndEmail = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'POST',
      `/email/mxplan/${service}/account/${email}/sendOnBehalfTo`,
      body
    );
  };

  /** Delete allowed user for SendOnBehalfTo */
  deleteMxplanAccountSendOnBehalfToByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/mxplan/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`
    );
  };

  /** Get this object properties */
  getMxplanAccountSendOnBehalfToByServiceAndEmailAndAllowedAccountId = (
    allowedAccountId: number,
    email: string,
    service: string
  ): Promise<EmailMxplanAccountSendOnBehalfTo> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`
    );
  };

  /** Pending task for this mailbox */
  getMxplanAccountTaskByServiceAndEmail = (email: string, service: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/task`);
  };

  /** Get this object properties */
  getMxplanAccountTaskByServiceAndEmailAndId = (
    email: string,
    id: number,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/task/${id}`);
  };

  /** Domains associated to this service */
  getMxplanDomainByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain`);
  };

  /** Get this object properties */
  getMxplanDomainByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailMxplanDomain> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain/${domainName}`);
  };

  /** Alter this object properties */
  updateMxplanDomainByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: EmailMxplanDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}/domain/${domainName}`, body);
  };

  /** Delete existing organization disclaimer */
  deleteMxplanDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/domain/${domainName}/disclaimer`);
  };

  /** Get this object properties */
  getMxplanDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProDisclaimer> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain/${domainName}/disclaimer`);
  };

  /** Create organization disclaimer of each email */
  createMxplanDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: { content: string; outsideOnly?: boolean }
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'POST',
      `/email/mxplan/${service}/domain/${domainName}/disclaimer`,
      body
    );
  };

  /** Alter this object properties */
  updateMxplanDomainDisclaimerByServiceAndDomainName = (
    domainName: string,
    service: string,
    body: EmailProDisclaimer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/mxplan/${service}/domain/${domainName}/disclaimer`,
      body
    );
  };

  /** Get diclaimer attributes to substitute with Active Directory properties */
  getMxplanDomainDisclaimerAttributeByServiceAndDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailProDisclaimerAttributeEnum[]> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** External contacts for this service */
  getMxplanExternalContactByService = (service: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/externalContact`);
  };

  /** create new external contact */
  createMxplanExternalContactByService = (
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
    return this.ovh.request('POST', `/email/mxplan/${service}/externalContact`, body);
  };

  /** delete external contact */
  deleteMxplanExternalContactByServiceAndExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/mxplan/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Get this object properties */
  getMxplanExternalContactByServiceAndExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailMxplanExternalContact> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Alter this object properties */
  updateMxplanExternalContactByServiceAndExternalEmailAddress = (
    externalEmailAddress: string,
    service: string,
    body: EmailMxplanExternalContact
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/email/mxplan/${service}/externalContact/${externalEmailAddress}`,
      body
    );
  };

  /** Get this object properties */
  getMxplanServerByService = (service: string): Promise<EmailMxplanServer> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/server`);
  };

  /** Pending actions */
  getMxplanTaskByService = (service: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/task`);
  };

  /** Get this object properties */
  getMxplanTaskByServiceAndId = (id: number, service: string): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/task/${id}`);
  };

  /** Update spam and virus flags on all active accounts */
  updateMxplanFlagsOnAllAccountsByService = (service: string): Promise<void> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/updateFlagsOnAllAccounts`);
  };
}

export { EmailMxplanHandler };
