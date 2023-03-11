/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailMxplanServer } from '../models/EmailMxplanServer';
import { EmailMxplanAccountAlias } from '../models/EmailMxplanAccountAlias';
import { EmailMxplanDomain } from '../models/EmailMxplanDomain';
import { EmailMxplanAccountDiagnosis } from '../models/EmailMxplanAccountDiagnosis';
import { EmailProObjectStateEnum } from '../models/EmailProObjectStateEnum';
import { EmailMxplanAccountSendAs } from '../models/EmailMxplanAccountSendAs';
import { EmailMxplanAccountCapabilities } from '../models/EmailMxplanAccountCapabilities';
import { EmailMxplanAccountFullAccess } from '../models/EmailMxplanAccountFullAccess';
import { EmailMxplanAccount } from '../models/EmailMxplanAccount';
import { EmailMxplanService } from '../models/EmailMxplanService';
import { EmailProDisclaimerAttributeEnum } from '../models/EmailProDisclaimerAttributeEnum';
import { EmailMxplanExternalContact } from '../models/EmailMxplanExternalContact';
import { EmailProDisclaimer } from '../models/EmailProDisclaimer';
import { EmailMxplanAccountSendOnBehalfTo } from '../models/EmailMxplanAccountSendOnBehalfTo';
import { EmailProTask } from '../models/EmailProTask';
import OVHBase from '../ovh';

class EmailMxplanHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getMxplan = (): Promise<string> => {
    return this.ovh.request('GET', '/email/mxplan');
  };

  /** Get this object properties */
  getMxplanService = (service: string): Promise<EmailMxplanService> => {
    return this.ovh.request('GET', `/email/mxplan/${service}`);
  };

  /** Alter this object properties */
  putMxplanService = (service: string, body: EmailMxplanService): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}`, body);
  };

  /** Accounts associated to this mxplan service */
  getMxplanServiceAccount = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account`);
  };

  /** Delete existing mailbox in mxplan server */
  deleteMxplanServiceAccountEmail = (email: string, service: string): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/account/${email}`);
  };

  /** Get this object properties */
  getMxplanServiceAccountEmail = (email: string, service: string): Promise<EmailMxplanAccount> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}`);
  };

  /** Alter this object properties */
  putMxplanServiceAccountEmail = (
    email: string,
    service: string,
    body: EmailMxplanAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}/account/${email}`, body);
  };

  /** Aliases associated to this mailbox */
  getMxplanServiceAccountEmailAlias = (email: string, service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/alias`);
  };

  /** Create new alias */
  postMxplanServiceAccountEmailAlias = (
    email: string,
    service: string,
    body: { alias: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/alias`, body);
  };

  /** Delete existing alias */
  deleteMxplanServiceAccountEmailAliasAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/account/${email}/alias/${alias}`);
  };

  /** Get this object properties */
  getMxplanServiceAccountEmailAliasAlias = (
    alias: string,
    email: string,
    service: string
  ): Promise<EmailMxplanAccountAlias> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/alias/${alias}`);
  };

  /** Get available capabilities for this account */
  getMxplanServiceAccountEmailCapabilities = (
    email: string,
    service: string
  ): Promise<EmailMxplanAccountCapabilities> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/capabilities`);
  };

  /** Change mailbox password */
  postMxplanServiceAccountEmailChangePassword = (
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
  getMxplanServiceAccountEmailDiagnostic = (
    email: string,
    service: string
  ): Promise<EmailMxplanAccountDiagnosis> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/diagnostic`);
  };

  /** Create new diagnosis request */
  postMxplanServiceAccountEmailDiagnostic = (
    email: string,
    service: string,
    body: { password: string }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/diagnostic`, body);
  };

  /** Full access granted users for this mailbox */
  getMxplanServiceAccountEmailFullAccess = (email: string, service: string): Promise<number> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/fullAccess`);
  };

  /** Allow full access to a user */
  postMxplanServiceAccountEmailFullAccess = (
    email: string,
    service: string,
    body: { allowedAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/fullAccess`, body);
  };

  /** Revoke full access */
  deleteMxplanServiceAccountEmailFullAccessAllowedAccountId = (
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
  getMxplanServiceAccountEmailFullAccessAllowedAccountId = (
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
  getMxplanServiceAccountEmailSendAs = (email: string, service: string): Promise<number> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/sendAs`);
  };

  /** Allow another user to send mails from this mailbox */
  postMxplanServiceAccountEmailSendAs = (
    email: string,
    service: string,
    body: { allowAccountId: number }
  ): Promise<EmailProTask> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/account/${email}/sendAs`, body);
  };

  /** Delete allowed user for sendAs */
  deleteMxplanServiceAccountEmailSendAsAllowedAccountId = (
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
  getMxplanServiceAccountEmailSendAsAllowedAccountId = (
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
  getMxplanServiceAccountEmailSendOnBehalfTo = (
    email: string,
    service: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/sendOnBehalfTo`);
  };

  /** Allow another user to Send On Behalf To mails from this mailbox */
  postMxplanServiceAccountEmailSendOnBehalfTo = (
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
  deleteMxplanServiceAccountEmailSendOnBehalfToAllowedAccountId = (
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
  getMxplanServiceAccountEmailSendOnBehalfToAllowedAccountId = (
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
  getMxplanServiceAccountEmailTask = (email: string, service: string): Promise<number> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/task`);
  };

  /** Get this object properties */
  getMxplanServiceAccountEmailTaskId = (
    email: string,
    id: number,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/account/${email}/task/${id}`);
  };

  /** Domains associated to this service */
  getMxplanServiceDomain = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain`);
  };

  /** Get this object properties */
  getMxplanServiceDomainDomainName = (
    domainName: string,
    service: string
  ): Promise<EmailMxplanDomain> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain/${domainName}`);
  };

  /** Alter this object properties */
  putMxplanServiceDomainDomainName = (
    domainName: string,
    service: string,
    body: EmailMxplanDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/mxplan/${service}/domain/${domainName}`, body);
  };

  /** Delete existing organization disclaimer */
  deleteMxplanServiceDomainDomainNameDisclaimer = (
    domainName: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request('DELETE', `/email/mxplan/${service}/domain/${domainName}/disclaimer`);
  };

  /** Get this object properties */
  getMxplanServiceDomainDomainNameDisclaimer = (
    domainName: string,
    service: string
  ): Promise<EmailProDisclaimer> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/domain/${domainName}/disclaimer`);
  };

  /** Create organization disclaimer of each email */
  postMxplanServiceDomainDomainNameDisclaimer = (
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
  putMxplanServiceDomainDomainNameDisclaimer = (
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
  getMxplanServiceDomainDomainNameDisclaimerAttribute = (
    domainName: string,
    service: string
  ): Promise<EmailProDisclaimerAttributeEnum> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/domain/${domainName}/disclaimerAttribute`
    );
  };

  /** External contacts for this service */
  getMxplanServiceExternalContact = (service: string): Promise<string> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/externalContact`);
  };

  /** create new external contact */
  postMxplanServiceExternalContact = (
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
  deleteMxplanServiceExternalContactExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailProTask> => {
    return this.ovh.request(
      'DELETE',
      `/email/mxplan/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Get this object properties */
  getMxplanServiceExternalContactExternalEmailAddress = (
    externalEmailAddress: string,
    service: string
  ): Promise<EmailMxplanExternalContact> => {
    return this.ovh.request(
      'GET',
      `/email/mxplan/${service}/externalContact/${externalEmailAddress}`
    );
  };

  /** Alter this object properties */
  putMxplanServiceExternalContactExternalEmailAddress = (
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
  getMxplanServiceServer = (service: string): Promise<EmailMxplanServer> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/server`);
  };

  /** Pending actions */
  getMxplanServiceTask = (service: string): Promise<number> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/task`);
  };

  /** Get this object properties */
  getMxplanServiceTaskId = (id: number, service: string): Promise<EmailProTask> => {
    return this.ovh.request('GET', `/email/mxplan/${service}/task/${id}`);
  };

  /** Update spam and virus flags on all active accounts */
  postMxplanServiceUpdateFlagsOnAllAccounts = (service: string): Promise<void> => {
    return this.ovh.request('POST', `/email/mxplan/${service}/updateFlagsOnAllAccounts`);
  };
}

export default EmailMxplanHandler;
