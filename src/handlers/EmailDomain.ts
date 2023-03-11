/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailDomainResponderAccount } from '../models/EmailDomainResponderAccount';
import { EmailDomainDelegation } from '../models/EmailDomainDelegation';
import { EmailDomainRule } from '../models/EmailDomainRule';
import { EmailDomainRedirectionCreation } from '../models/EmailDomainRedirectionCreation';
import { EmailDomainAccount } from '../models/EmailDomainAccount';
import { EmailDomainMigrationServiceType } from '../models/EmailDomainMigrationServiceType';
import { DomainDomainFilterActionEnum } from '../models/DomainDomainFilterActionEnum';
import { DomainDomainUsageAccountStruct } from '../models/DomainDomainUsageAccountStruct';
import { EmailDomainTaskSpecialAccount } from '../models/EmailDomainTaskSpecialAccount';
import { EmailDomainSubscriber } from '../models/EmailDomainSubscriber';
import { EmailDomainMigrationCheckStruct } from '../models/EmailDomainMigrationCheckStruct';
import { EmailDomainModerator } from '../models/EmailDomainModerator';
import { DomainDomainQuota } from '../models/DomainDomainQuota';
import { DomainDomainSummary } from '../models/DomainDomainSummary';
import { DomainDomainFilterOperandEnum } from '../models/DomainDomainFilterOperandEnum';
import { ServicesService } from '../models/ServicesService';
import { EmailDomainMigrationAccount } from '../models/EmailDomainMigrationAccount';
import { EmailDomainTaskMl } from '../models/EmailDomainTaskMl';
import { EmailDomainRedirectionGlobal } from '../models/EmailDomainRedirectionGlobal';
import { DomainZoneRecord } from '../models/DomainZoneRecord';
import { DomainDomainMlOptionsStruct } from '../models/DomainDomainMlOptionsStruct';
import { EmailDomainTaskPop } from '../models/EmailDomainTaskPop';
import { EmailDomainDomainService } from '../models/EmailDomainDomainService';
import { EmailDomainFilter } from '../models/EmailDomainFilter';
import { EmailDomainRedirectionChangeRedirectionCreation } from '../models/EmailDomainRedirectionChangeRedirectionCreation';
import { DomainDomainMlLanguageEnum } from '../models/DomainDomainMlLanguageEnum';
import { EmailDomainTaskFilter } from '../models/EmailDomainTaskFilter';
import { EmailDomainMigrationService } from '../models/EmailDomainMigrationService';
import { EmailDomainAccountDelegated } from '../models/EmailDomainAccountDelegated';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DomainDomainMXFilterEnum } from '../models/DomainDomainMXFilterEnum';
import { EmailDomainAcl } from '../models/EmailDomainAcl';
import { EmailDomainMailingList } from '../models/EmailDomainMailingList';
import { EmailDomainResponder } from '../models/EmailDomainResponder';
import { DomainDomainMlLimits } from '../models/DomainDomainMlLimits';
import OVHBase from '../ovh';

class EmailDomainHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getDomain = (): Promise<string> => {
    return this.ovh.request('GET', '/email/domain');
  };

  /** Delegated emails */
  getDomainDelegatedAccount = (): Promise<string> => {
    return this.ovh.request('GET', '/email/domain/delegatedAccount');
  };

  /** Get this object properties */
  getDomainDelegatedAccountEmail = (email: string): Promise<EmailDomainAccountDelegated> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}`);
  };

  /** Alter this object properties */
  putDomainDelegatedAccountEmail = (
    email: string,
    body: EmailDomainAccountDelegated
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/delegatedAccount/${email}`, body);
  };

  /** Change mailbox password (length : [9;30], no space at begin and end, no accent) */
  postDomainDelegatedAccountEmailChangePassword = (
    email: string,
    body: { password: string }
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/changePassword`, body);
  };

  /** Get filters */
  getDomainDelegatedAccountEmailFilter = (email: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter`);
  };

  /** Create new filter for account */
  postDomainDelegatedAccountEmailFilter = (
    email: string,
    body: {
      action: DomainDomainFilterActionEnum;
      actionParam?: string;
      active: boolean;
      header: string;
      name: string;
      operand: DomainDomainFilterOperandEnum;
      priority: number;
      value: string;
    }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/filter`, body);
  };

  /** Delete an existing filter */
  deleteDomainDelegatedAccountEmailFilterName = (
    email: string,
    name: string
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request('DELETE', `/email/domain/delegatedAccount/${email}/filter/${name}`);
  };

  /** Get this object properties */
  getDomainDelegatedAccountEmailFilterName = (
    email: string,
    name: string
  ): Promise<EmailDomainFilter> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter/${name}`);
  };

  /** Change filter activity */
  postDomainDelegatedAccountEmailFilterNameChangeActivity = (
    email: string,
    name: string,
    body: { activity: boolean }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/delegatedAccount/${email}/filter/${name}/changeActivity`,
      body
    );
  };

  /** Change filter priority */
  postDomainDelegatedAccountEmailFilterNameChangePriority = (
    email: string,
    name: string,
    body: { priority: number }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/delegatedAccount/${email}/filter/${name}/changePriority`,
      body
    );
  };

  /** Get rules */
  getDomainDelegatedAccountEmailFilterNameRule = (email: string, name: string): Promise<number> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter/${name}/rule`);
  };

  /** Create new rule for filter */
  postDomainDelegatedAccountEmailFilterNameRule = (
    email: string,
    name: string,
    body: { header: string; operand: DomainDomainFilterOperandEnum; value: string }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/delegatedAccount/${email}/filter/${name}/rule`,
      body
    );
  };

  /** Delete an existing filter */
  deleteDomainDelegatedAccountEmailFilterNameRuleId = (
    email: string,
    id: number,
    name: string
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`
    );
  };

  /** Get this object properties */
  getDomainDelegatedAccountEmailFilterNameRuleId = (
    email: string,
    id: number,
    name: string
  ): Promise<EmailDomainRule> => {
    return this.ovh.request(
      'GET',
      `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`
    );
  };

  /** Delete an existing responder in server */
  deleteDomainDelegatedAccountEmailResponder = (
    email: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/delegatedAccount/${email}/responder`);
  };

  /** Get this object properties */
  getDomainDelegatedAccountEmailResponder = (
    email: string
  ): Promise<EmailDomainResponderAccount> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/responder`);
  };

  /** Create new responder in server */
  postDomainDelegatedAccountEmailResponder = (
    email: string,
    body: { content: string; copy: boolean; copyTo?: string; from?: Date; to?: Date }
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/responder`, body);
  };

  /** Alter this object properties */
  putDomainDelegatedAccountEmailResponder = (
    email: string,
    body: EmailDomainResponderAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/delegatedAccount/${email}/responder`, body);
  };

  /** Update usage of account */
  postDomainDelegatedAccountEmailUpdateUsage = (email: string): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/updateUsage`);
  };

  /** usage of account */
  postDomainDelegatedAccountEmailUsage = (
    email: string
  ): Promise<DomainDomainUsageAccountStruct> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/usage`);
  };

  /** Get limits of mailing list */
  getDomainMailingListLimits = (): Promise<DomainDomainMlLimits> => {
    return this.ovh.request('GET', '/email/domain/mailingListLimits');
  };

  /** Get this object properties */
  getDomainDomain = (domain: string): Promise<EmailDomainDomainService> => {
    return this.ovh.request('GET', `/email/domain/${domain}`);
  };

  /** Get accounts */
  getDomainDomainAccount = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account`);
  };

  /** Create new mailbox in server */
  postDomainDomainAccount = (
    domain: string,
    body: { accountName: string; description?: string; password: string; size?: number }
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('POST', `/email/domain/${domain}/account`, body);
  };

  /** Delete an existing mailbox in server */
  deleteDomainDomainAccountAccountName = (
    accountName: string,
    domain: string
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/account/${accountName}`);
  };

  /** Get this object properties */
  getDomainDomainAccountAccountName = (
    accountName: string,
    domain: string
  ): Promise<EmailDomainAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}`);
  };

  /** Alter this object properties */
  putDomainDomainAccountAccountName = (
    accountName: string,
    domain: string,
    body: EmailDomainAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/account/${accountName}`, body);
  };

  /** Change mailbox password (length : [9;30], no space at begin and end, no accent) */
  postDomainDomainAccountAccountNameChangePassword = (
    accountName: string,
    domain: string,
    body: { password: string }
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/account/${accountName}/changePassword`,
      body
    );
  };

  /** Get delegations */
  getDomainDomainAccountAccountNameDelegation = (
    accountName: string,
    domain: string
  ): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/delegation`);
  };

  /** Create delegation for this account */
  postDomainDomainAccountAccountNameDelegation = (
    accountName: string,
    domain: string,
    body: { accountId: string }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/account/${accountName}/delegation`,
      body
    );
  };

  /** Delete an existing delegation */
  deleteDomainDomainAccountAccountNameDelegationAccountId = (
    accountId: string,
    accountName: string,
    domain: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`
    );
  };

  /** Get this object properties */
  getDomainDomainAccountAccountNameDelegationAccountId = (
    accountId: string,
    accountName: string,
    domain: string
  ): Promise<EmailDomainDelegation> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`
    );
  };

  /** Get filters */
  getDomainDomainAccountAccountNameFilter = (
    accountName: string,
    domain: string
  ): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/filter`);
  };

  /** Create new filter for account */
  postDomainDomainAccountAccountNameFilter = (
    accountName: string,
    domain: string,
    body: {
      action: DomainDomainFilterActionEnum;
      actionParam?: string;
      active: boolean;
      header: string;
      name: string;
      operand: DomainDomainFilterOperandEnum;
      priority: number;
      value: string;
    }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request('POST', `/email/domain/${domain}/account/${accountName}/filter`, body);
  };

  /** Delete an existing filter */
  deleteDomainDomainAccountAccountNameFilterName = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/account/${accountName}/filter/${name}`
    );
  };

  /** Get this object properties */
  getDomainDomainAccountAccountNameFilterName = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<EmailDomainFilter> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/filter/${name}`);
  };

  /** Change filter activity */
  postDomainDomainAccountAccountNameFilterNameChangeActivity = (
    accountName: string,
    domain: string,
    name: string,
    body: { activity: boolean }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/changeActivity`,
      body
    );
  };

  /** Change filter priority */
  postDomainDomainAccountAccountNameFilterNameChangePriority = (
    accountName: string,
    domain: string,
    name: string,
    body: { priority: number }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/changePriority`,
      body
    );
  };

  /** Get rules */
  getDomainDomainAccountAccountNameFilterNameRule = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`
    );
  };

  /** Create new rule for filter */
  postDomainDomainAccountAccountNameFilterNameRule = (
    accountName: string,
    domain: string,
    name: string,
    body: { header: string; operand: DomainDomainFilterOperandEnum; value: string }
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`,
      body
    );
  };

  /** Delete an existing filter */
  deleteDomainDomainAccountAccountNameFilterNameRuleId = (
    accountName: string,
    domain: string,
    id: number,
    name: string
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`
    );
  };

  /** Get this object properties */
  getDomainDomainAccountAccountNameFilterNameRuleId = (
    accountName: string,
    domain: string,
    id: number,
    name: string
  ): Promise<EmailDomainRule> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`
    );
  };

  /** Get migration service */
  getDomainDomainAccountAccountNameMigrate = (
    accountName: string,
    domain: string
  ): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/migrate`);
  };

  /** Get this object properties */
  getDomainDomainAccountAccountNameMigrateDestinationServiceName = (
    accountName: string,
    destinationServiceName: string,
    domain: string
  ): Promise<EmailDomainMigrationService> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}`
    );
  };

  /** List of email address available for migration */
  getDomainDomainAccountAccountNameMigrateDestinationServiceNameDestinationEmailAddress = (
    accountName: string,
    destinationServiceName: string,
    domain: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress`
    );
  };

  /** Get this object properties */
  getDomainDomainAccountAccountNameMigrateDestinationServiceNameDestinationEmailAddressDestinationEmailAddress =
    (
      accountName: string,
      destinationEmailAddress: string,
      destinationServiceName: string,
      domain: string
    ): Promise<EmailDomainMigrationAccount> => {
      return this.ovh.request(
        'GET',
        `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}`
      );
    };

  /** Check if it's possible to migrate */
  getDomainDomainAccountAccountNameMigrateDestinationServiceNameDestinationEmailAddressDestinationEmailAddressCheckMigrate =
    (
      accountName: string,
      destinationEmailAddress: string,
      destinationServiceName: string,
      domain: string
    ): Promise<EmailDomainMigrationCheckStruct> => {
      return this.ovh.request(
        'GET',
        `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/checkMigrate`
      );
    };

  /** Migrate account to destination account */
  postDomainDomainAccountAccountNameMigrateDestinationServiceNameDestinationEmailAddressDestinationEmailAddressMigrate =
    (
      accountName: string,
      destinationEmailAddress: string,
      destinationServiceName: string,
      domain: string,
      body: { password: string }
    ): Promise<EmailDomainTaskPop> => {
      return this.ovh.request(
        'POST',
        `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/migrate`,
        body
      );
    };

  /** Update usage of account */
  postDomainDomainAccountAccountNameUpdateUsage = (
    accountName: string,
    domain: string
  ): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/account/${accountName}/updateUsage`);
  };

  /** usage of account */
  getDomainDomainAccountAccountNameUsage = (
    accountName: string,
    domain: string
  ): Promise<DomainDomainUsageAccountStruct> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/usage`);
  };

  /** Get ACL on your domain */
  getDomainDomainAcl = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/acl`);
  };

  /** Create new ACL */
  postDomainDomainAcl = (domain: string, body: { accountId: string }): Promise<EmailDomainAcl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/acl`, body);
  };

  /** Delete ACL */
  deleteDomainDomainAclAccountId = (accountId: string, domain: string): Promise<void> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/acl/${accountId}`);
  };

  /** Get this object properties */
  getDomainDomainAclAccountId = (accountId: string, domain: string): Promise<EmailDomainAcl> => {
    return this.ovh.request('GET', `/email/domain/${domain}/acl/${accountId}`);
  };

  /** Launch a contact change procedure */
  postDomainDomainChangeContact = (
    domain: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/email/domain/${domain}/changeContact`, body);
  };

  /** Change MX filter, so change MX DNS records */
  postDomainDomainChangeDnsMXFilter = (
    domain: string,
    body: { customTarget?: string; mxFilter: DomainDomainMXFilterEnum; subDomain?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/changeDnsMXFilter`, body);
  };

  /** Confirm termination of your email service */
  postDomainDomainConfirmTermination = (
    domain: string,
    body: { commentary?: string; reason?: ServiceTerminationReasonEnum; token: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/email/domain/${domain}/confirmTermination`, body);
  };

  /** Domain MX filter */
  getDomainDomainDnsMXFilter = (domain: string): Promise<DomainDomainMXFilterEnum> => {
    return this.ovh.request('GET', `/email/domain/${domain}/dnsMXFilter`);
  };

  /** Domain MX records */
  getDomainDomainDnsMXRecords = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/dnsMXRecords`);
  };

  /** Get mailing lists */
  getDomainDomainMailingList = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList`);
  };

  /** Create new mailingList */
  postDomainDomainMailingList = (
    domain: string,
    body: {
      language: DomainDomainMlLanguageEnum;
      name: string;
      options: DomainDomainMlOptionsStruct;
      ownerEmail: string;
      replyTo?: string;
    }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/mailingList`, body);
  };

  /** Delete existing Mailing list */
  deleteDomainDomainMailingListName = (
    domain: string,
    name: string
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/mailingList/${name}`);
  };

  /** Get this object properties */
  getDomainDomainMailingListName = (
    domain: string,
    name: string
  ): Promise<EmailDomainMailingList> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}`);
  };

  /** Alter this object properties */
  putDomainDomainMailingListName = (
    domain: string,
    name: string,
    body: EmailDomainMailingList
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/mailingList/${name}`, body);
  };

  /** Change mailing list options */
  postDomainDomainMailingListNameChangeOptions = (
    domain: string,
    name: string,
    body: { options: DomainDomainMlOptionsStruct }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/mailingList/${name}/changeOptions`,
      body
    );
  };

  /** List of moderators */
  getDomainDomainMailingListNameModerator = (domain: string, name: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}/moderator`);
  };

  /** Add moderator to mailing list */
  postDomainDomainMailingListNameModerator = (
    domain: string,
    name: string,
    body: { email: string }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/mailingList/${name}/moderator`, body);
  };

  /** Delete existing moderator */
  deleteDomainDomainMailingListNameModeratorEmail = (
    domain: string,
    email: string,
    name: string
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/mailingList/${name}/moderator/${email}`
    );
  };

  /** Get this object properties */
  getDomainDomainMailingListNameModeratorEmail = (
    domain: string,
    email: string,
    name: string
  ): Promise<EmailDomainModerator> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/mailingList/${name}/moderator/${email}`
    );
  };

  /** Send moderators list and subscribers list of this mailing list by email */
  postDomainDomainMailingListNameSendListByEmail = (
    domain: string,
    name: string,
    body: { email: string }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/mailingList/${name}/sendListByEmail`,
      body
    );
  };

  /** List of subscribers */
  getDomainDomainMailingListNameSubscriber = (domain: string, name: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}/subscriber`);
  };

  /** Add subscriber to mailing list */
  postDomainDomainMailingListNameSubscriber = (
    domain: string,
    name: string,
    body: { email: string }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/mailingList/${name}/subscriber`, body);
  };

  /** Delete existing subscriber */
  deleteDomainDomainMailingListNameSubscriberEmail = (
    domain: string,
    email: string,
    name: string
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`
    );
  };

  /** Get this object properties */
  getDomainDomainMailingListNameSubscriberEmail = (
    domain: string,
    email: string,
    name: string
  ): Promise<EmailDomainSubscriber> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`
    );
  };

  /** Create delegation of domain with same nic than V3 */
  postDomainDomainMigrateDelegationV3toV6 = (domain: string): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/migrateDelegationV3toV6`);
  };

  /** List all quotas for this domain */
  getDomainDomainQuota = (domain: string): Promise<DomainDomainQuota> => {
    return this.ovh.request('GET', `/email/domain/${domain}/quota`);
  };

  /** Recommended domain DNS records */
  getDomainDomainRecommendedDNSRecords = (domain: string): Promise<DomainZoneRecord> => {
    return this.ovh.request('GET', `/email/domain/${domain}/recommendedDNSRecords`);
  };

  /** Get redirections */
  getDomainDomainRedirection = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/redirection`);
  };

  /** Create new redirection in server */
  postDomainDomainRedirection = (
    domain: string,
    body: EmailDomainRedirectionCreation
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('POST', `/email/domain/${domain}/redirection`, body);
  };

  /** Delete an existing redirection in server */
  deleteDomainDomainRedirectionId = (
    domain: string,
    id: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/redirection/${id}`);
  };

  /** Get this object properties */
  getDomainDomainRedirectionId = (
    domain: string,
    id: string
  ): Promise<EmailDomainRedirectionGlobal> => {
    return this.ovh.request('GET', `/email/domain/${domain}/redirection/${id}`);
  };

  /** Change redirection */
  postDomainDomainRedirectionIdChangeRedirection = (
    domain: string,
    id: string,
    body: EmailDomainRedirectionChangeRedirectionCreation
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request(
      'POST',
      `/email/domain/${domain}/redirection/${id}/changeRedirection`,
      body
    );
  };

  /** Get responders */
  getDomainDomainResponder = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/responder`);
  };

  /** Create new responder in server */
  postDomainDomainResponder = (
    domain: string,
    body: {
      account: string;
      content: string;
      copy: boolean;
      copyTo?: string;
      from?: Date;
      to?: Date;
    }
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('POST', `/email/domain/${domain}/responder`, body);
  };

  /** Delete an existing responder in server */
  deleteDomainDomainResponderAccount = (
    account: string,
    domain: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/responder/${account}`);
  };

  /** Get this object properties */
  getDomainDomainResponderAccount = (
    account: string,
    domain: string
  ): Promise<EmailDomainResponder> => {
    return this.ovh.request('GET', `/email/domain/${domain}/responder/${account}`);
  };

  /** Alter this object properties */
  putDomainDomainResponderAccount = (
    account: string,
    domain: string,
    body: EmailDomainResponder
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/responder/${account}`, body);
  };

  /** Get this object properties */
  getDomainDomainServiceInfos = (domain: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/email/domain/${domain}/serviceInfos`);
  };

  /** Alter this object properties */
  putDomainDomainServiceInfos = (domain: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/serviceInfos`, body);
  };

  /** Summary for this domain */
  getDomainDomainSummary = (domain: string): Promise<DomainDomainSummary> => {
    return this.ovh.request('GET', `/email/domain/${domain}/summary`);
  };

  /** Get account tasks */
  getDomainDomainTaskAccount = (domain: string): Promise<number> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/account`);
  };

  /** Get this object properties */
  getDomainDomainTaskAccountId = (domain: string, id: number): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/account/${id}`);
  };

  /** Get filter tasks */
  getDomainDomainTaskFilter = (domain: string): Promise<number> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/filter`);
  };

  /** Get this object properties */
  getDomainDomainTaskFilterId = (domain: string, id: number): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/filter/${id}`);
  };

  /** Get Mailing List tasks */
  getDomainDomainTaskMailinglist = (domain: string): Promise<number> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/mailinglist`);
  };

  /** Get this object properties */
  getDomainDomainTaskMailinglistId = (domain: string, id: number): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/mailinglist/${id}`);
  };

  /** Get redirection tasks */
  getDomainDomainTaskRedirection = (domain: string): Promise<string> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/redirection`);
  };

  /** Get this object properties */
  getDomainDomainTaskRedirectionId = (
    domain: string,
    id: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/redirection/${id}`);
  };

  /** Get responder tasks */
  getDomainDomainTaskResponder = (domain: string): Promise<number> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/responder`);
  };

  /** Get this object properties */
  getDomainDomainTaskResponderId = (
    domain: string,
    id: number
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/responder/${id}`);
  };

  /** Terminate your email service */
  postDomainDomainTerminate = (domain: string): Promise<string> => {
    return this.ovh.request('POST', `/email/domain/${domain}/terminate`);
  };
}

export default EmailDomainHandler;
