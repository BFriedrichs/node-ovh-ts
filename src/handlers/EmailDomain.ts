/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDomainUsageAccountStruct } from '../models/DomainDomainUsageAccountStruct';
import { EmailDomainTaskFilter } from '../models/EmailDomainTaskFilter';
import { EmailDomainMigrationService } from '../models/EmailDomainMigrationService';
import { EmailDomainTaskSpecialAccount } from '../models/EmailDomainTaskSpecialAccount';
import { EmailDomainAccountDelegated } from '../models/EmailDomainAccountDelegated';
import { EmailDomainMigrationCheckStruct } from '../models/EmailDomainMigrationCheckStruct';
import { EmailDomainRedirectionChangeRedirectionCreation } from '../models/EmailDomainRedirectionChangeRedirectionCreation';
import { EmailDomainTaskPop } from '../models/EmailDomainTaskPop';
import { EmailDomainFilter } from '../models/EmailDomainFilter';
import { EmailDomainResponderAccount } from '../models/EmailDomainResponderAccount';
import { EmailDomainModerator } from '../models/EmailDomainModerator';
import { DomainDomainMlOptionsStruct } from '../models/DomainDomainMlOptionsStruct';
import { EmailDomainSubscriber } from '../models/EmailDomainSubscriber';
import { EmailDomainAccount } from '../models/EmailDomainAccount';
import { EmailDomainMigrationAccount } from '../models/EmailDomainMigrationAccount';
import { EmailDomainRule } from '../models/EmailDomainRule';
import { EmailDomainDelegation } from '../models/EmailDomainDelegation';
import { EmailDomainDomainService } from '../models/EmailDomainDomainService';
import { EmailDomainMigrationServiceType } from '../models/EmailDomainMigrationServiceType';
import { EmailDomainTaskMl } from '../models/EmailDomainTaskMl';
import { EmailDomainRedirectionGlobal } from '../models/EmailDomainRedirectionGlobal';
import { DomainDomainMlLimits } from '../models/DomainDomainMlLimits';
import { EmailDomainRedirectionCreation } from '../models/EmailDomainRedirectionCreation';
import { DomainDomainSummary } from '../models/DomainDomainSummary';
import { DomainZoneRecord } from '../models/DomainZoneRecord';
import { DomainDomainMlLanguageEnum } from '../models/DomainDomainMlLanguageEnum';
import { ServicesService } from '../models/ServicesService';
import { DomainDomainFilterActionEnum } from '../models/DomainDomainFilterActionEnum';
import { EmailDomainAcl } from '../models/EmailDomainAcl';
import { DomainDomainMXFilterEnum } from '../models/DomainDomainMXFilterEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DomainDomainFilterOperandEnum } from '../models/DomainDomainFilterOperandEnum';
import { EmailDomainResponder } from '../models/EmailDomainResponder';
import { EmailDomainMailingList } from '../models/EmailDomainMailingList';
import { DomainDomainQuota } from '../models/DomainDomainQuota';
import OVHBase from '../ovh';

class EmailDomainHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listDomains = (): Promise<string[]> => {
    return this.ovh.request('GET', '/email/domain');
  };

  /** Delegated emails */
  getDomainDelegatedAccount = (): Promise<string[]> => {
    return this.ovh.request('GET', '/email/domain/delegatedAccount');
  };

  /** Get this object properties */
  getDomainDelegatedAccountByEmail = (email: string): Promise<EmailDomainAccountDelegated> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}`);
  };

  /** Alter this object properties */
  updateDomainDelegatedAccountByEmail = (
    email: string,
    body: EmailDomainAccountDelegated
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/delegatedAccount/${email}`, body);
  };

  /** Change mailbox password (length : [9;30], no space at begin and end, no accent) */
  updateDomainDelegatedAccountPasswordByEmail = (
    email: string,
    body: { password: string }
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/changePassword`, body);
  };

  /** Get filters */
  getDomainDelegatedAccountFilterByEmail = (email: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter`);
  };

  /** Create new filter for account */
  createDomainDelegatedAccountFilterByEmail = (
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
  deleteDomainDelegatedAccountFilterByEmailAndName = (
    email: string,
    name: string
  ): Promise<EmailDomainTaskFilter[]> => {
    return this.ovh.request('DELETE', `/email/domain/delegatedAccount/${email}/filter/${name}`);
  };

  /** Get this object properties */
  getDomainDelegatedAccountFilterByEmailAndName = (
    email: string,
    name: string
  ): Promise<EmailDomainFilter> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter/${name}`);
  };

  /** Change filter activity */
  updateDomainDelegatedAccountFilterActivityByEmailAndName = (
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
  updateDomainDelegatedAccountFilterPriorityByEmailAndName = (
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
  getDomainDelegatedAccountFilterRuleByEmailAndName = (
    email: string,
    name: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/filter/${name}/rule`);
  };

  /** Create new rule for filter */
  createDomainDelegatedAccountFilterRuleByEmailAndName = (
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
  deleteDomainDelegatedAccountFilterRuleByEmailAndNameAndId = (
    email: string,
    id: number,
    name: string
  ): Promise<EmailDomainTaskFilter[]> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`
    );
  };

  /** Get this object properties */
  getDomainDelegatedAccountFilterRuleByEmailAndNameAndId = (
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
  deleteDomainDelegatedAccountResponderByEmail = (
    email: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/delegatedAccount/${email}/responder`);
  };

  /** Get this object properties */
  getDomainDelegatedAccountResponderByEmail = (
    email: string
  ): Promise<EmailDomainResponderAccount> => {
    return this.ovh.request('GET', `/email/domain/delegatedAccount/${email}/responder`);
  };

  /** Create new responder in server */
  createDomainDelegatedAccountResponderByEmail = (
    email: string,
    body: { content: string; copy: boolean; copyTo?: string; from?: Date; to?: Date }
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/responder`, body);
  };

  /** Alter this object properties */
  updateDomainDelegatedAccountResponderByEmail = (
    email: string,
    body: EmailDomainResponderAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/delegatedAccount/${email}/responder`, body);
  };

  /** Update usage of account */
  updateDomainDelegatedAccountUsageByEmail = (email: string): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/updateUsage`);
  };

  /** usage of account */
  postDomainDelegatedAccountUsageByEmail = (
    email: string
  ): Promise<DomainDomainUsageAccountStruct> => {
    return this.ovh.request('POST', `/email/domain/delegatedAccount/${email}/usage`);
  };

  /** Get limits of mailing list */
  getDomainMailingListLimits = (): Promise<DomainDomainMlLimits> => {
    return this.ovh.request('GET', '/email/domain/mailingListLimits');
  };

  /** Get this object properties */
  getDomainByDomain = (domain: string): Promise<EmailDomainDomainService> => {
    return this.ovh.request('GET', `/email/domain/${domain}`);
  };

  /** Get accounts */
  getDomainAccountByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account`);
  };

  /** Create new mailbox in server */
  createDomainAccountByDomain = (
    domain: string,
    body: { accountName: string; description?: string; password: string; size?: number }
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('POST', `/email/domain/${domain}/account`, body);
  };

  /** Delete an existing mailbox in server */
  deleteDomainAccountByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/account/${accountName}`);
  };

  /** Get this object properties */
  getDomainAccountByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<EmailDomainAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}`);
  };

  /** Alter this object properties */
  updateDomainAccountByDomainAndAccountName = (
    accountName: string,
    domain: string,
    body: EmailDomainAccount
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/account/${accountName}`, body);
  };

  /** Change mailbox password (length : [9;30], no space at begin and end, no accent) */
  updateDomainAccountPasswordByDomainAndAccountName = (
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
  getDomainAccountDelegationByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/delegation`);
  };

  /** Create delegation for this account */
  createDomainAccountDelegationByDomainAndAccountName = (
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
  deleteDomainAccountDelegationByDomainAndAccountNameAndAccountId = (
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
  getDomainAccountDelegationByDomainAndAccountNameAndAccountId = (
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
  getDomainAccountFilterByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/filter`);
  };

  /** Create new filter for account */
  createDomainAccountFilterByDomainAndAccountName = (
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
  deleteDomainAccountFilterByDomainAndAccountNameAndName = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<EmailDomainTaskFilter[]> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/account/${accountName}/filter/${name}`
    );
  };

  /** Get this object properties */
  getDomainAccountFilterByDomainAndAccountNameAndName = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<EmailDomainFilter> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/filter/${name}`);
  };

  /** Change filter activity */
  updateDomainAccountFilterActivityByDomainAndAccountNameAndName = (
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
  updateDomainAccountFilterPriorityByDomainAndAccountNameAndName = (
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
  getDomainAccountFilterRuleByDomainAndAccountNameAndName = (
    accountName: string,
    domain: string,
    name: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`
    );
  };

  /** Create new rule for filter */
  createDomainAccountFilterRuleByDomainAndAccountNameAndName = (
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
  deleteDomainAccountFilterRuleByDomainAndAccountNameAndNameAndId = (
    accountName: string,
    domain: string,
    id: number,
    name: string
  ): Promise<EmailDomainTaskFilter[]> => {
    return this.ovh.request(
      'DELETE',
      `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`
    );
  };

  /** Get this object properties */
  getDomainAccountFilterRuleByDomainAndAccountNameAndNameAndId = (
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
  getDomainAccountMigrateByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/migrate`);
  };

  /** Get this object properties */
  getDomainAccountMigrateByDomainAndAccountNameAndDestinationServiceName = (
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
  listDomainAccountMigrateDestinationEmailAddressByDomainAndAccountNameAndDestinationServiceName = (
    accountName: string,
    destinationServiceName: string,
    domain: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress`
    );
  };

  /** Get this object properties */
  getDomainAccountMigrateDestinationEmailAddressByDomainAndAccountNameAndDestinationServiceNameAndDestinationEmailAddress =
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
  checkDomainAccountMigrateDestinationEmailAddressMigrateByDomainAndAccountNameAndDestinationServiceNameAndDestinationEmailAddress =
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
  postDomainAccountMigrateDestinationEmailAddressMigrateByDomainAndAccountNameAndDestinationServiceNameAndDestinationEmailAddress =
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
  updateDomainAccountUsageByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/account/${accountName}/updateUsage`);
  };

  /** usage of account */
  getDomainAccountUsageByDomainAndAccountName = (
    accountName: string,
    domain: string
  ): Promise<DomainDomainUsageAccountStruct> => {
    return this.ovh.request('GET', `/email/domain/${domain}/account/${accountName}/usage`);
  };

  /** Get ACL on your domain */
  getDomainAclByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/acl`);
  };

  /** Create new ACL */
  createDomainAclByDomain = (
    domain: string,
    body: { accountId: string }
  ): Promise<EmailDomainAcl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/acl`, body);
  };

  /** Delete ACL */
  deleteDomainAclByDomainAndAccountId = (accountId: string, domain: string): Promise<void> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/acl/${accountId}`);
  };

  /** Get this object properties */
  getDomainAclByDomainAndAccountId = (
    accountId: string,
    domain: string
  ): Promise<EmailDomainAcl> => {
    return this.ovh.request('GET', `/email/domain/${domain}/acl/${accountId}`);
  };

  /** Launch a contact change procedure */
  launchDomainChangeContactByDomain = (
    domain: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/email/domain/${domain}/changeContact`, body);
  };

  /** Change MX filter, so change MX DNS records */
  updateDomainDnsMXFilterByDomain = (
    domain: string,
    body: { customTarget?: string; mxFilter: DomainDomainMXFilterEnum; subDomain?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/changeDnsMXFilter`, body);
  };

  /** Confirm termination of your email service */
  confirmDomainTerminationByDomain = (
    domain: string,
    body: { commentary?: string; reason?: ServiceTerminationReasonEnum; token: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/email/domain/${domain}/confirmTermination`, body);
  };

  /** Domain MX filter */
  getDomainDnsMXFilterByDomain = (domain: string): Promise<DomainDomainMXFilterEnum> => {
    return this.ovh.request('GET', `/email/domain/${domain}/dnsMXFilter`);
  };

  /** Domain MX records */
  getDomainDnsMXRecordsByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/dnsMXRecords`);
  };

  /** Get mailing lists */
  getDomainMailingListByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList`);
  };

  /** Create new mailingList */
  createDomainMailingListByDomain = (
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
  deleteDomainMailingListByDomainAndName = (
    domain: string,
    name: string
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/mailingList/${name}`);
  };

  /** Get this object properties */
  getDomainMailingListByDomainAndName = (
    domain: string,
    name: string
  ): Promise<EmailDomainMailingList> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}`);
  };

  /** Alter this object properties */
  updateDomainMailingListByDomainAndName = (
    domain: string,
    name: string,
    body: EmailDomainMailingList
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/mailingList/${name}`, body);
  };

  /** Change mailing list options */
  updateDomainMailingListOptionsByDomainAndName = (
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
  listDomainMailingModeratorsByDomainAndName = (
    domain: string,
    name: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}/moderator`);
  };

  /** Add moderator to mailing list */
  addDomainMailingListModeratorByDomainAndName = (
    domain: string,
    name: string,
    body: { email: string }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/mailingList/${name}/moderator`, body);
  };

  /** Delete existing moderator */
  deleteDomainMailingListModeratorByDomainAndNameAndEmail = (
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
  getDomainMailingListModeratorByDomainAndNameAndEmail = (
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
  sendDomainMailingListListByEmailByDomainAndName = (
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
  listDomainMailingSubscribersByDomainAndName = (
    domain: string,
    name: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/mailingList/${name}/subscriber`);
  };

  /** Add subscriber to mailing list */
  addDomainMailingListSubscriberByDomainAndName = (
    domain: string,
    name: string,
    body: { email: string }
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('POST', `/email/domain/${domain}/mailingList/${name}/subscriber`, body);
  };

  /** Delete existing subscriber */
  deleteDomainMailingListSubscriberByDomainAndNameAndEmail = (
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
  getDomainMailingListSubscriberByDomainAndNameAndEmail = (
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
  createDomainMigrateDelegationV3toV6ByDomain = (domain: string): Promise<void> => {
    return this.ovh.request('POST', `/email/domain/${domain}/migrateDelegationV3toV6`);
  };

  /** List all quotas for this domain */
  listDomainQuotasByDomain = (domain: string): Promise<DomainDomainQuota> => {
    return this.ovh.request('GET', `/email/domain/${domain}/quota`);
  };

  /** Recommended domain DNS records */
  getDomainRecommendedDNSRecordsByDomain = (domain: string): Promise<DomainZoneRecord[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/recommendedDNSRecords`);
  };

  /** Get redirections */
  getDomainRedirectionByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/redirection`);
  };

  /** Create new redirection in server */
  createDomainRedirectionByDomain = (
    domain: string,
    body: EmailDomainRedirectionCreation
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('POST', `/email/domain/${domain}/redirection`, body);
  };

  /** Delete an existing redirection in server */
  deleteDomainRedirectionByDomainAndId = (
    domain: string,
    id: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/redirection/${id}`);
  };

  /** Get this object properties */
  getDomainRedirectionByDomainAndId = (
    domain: string,
    id: string
  ): Promise<EmailDomainRedirectionGlobal> => {
    return this.ovh.request('GET', `/email/domain/${domain}/redirection/${id}`);
  };

  /** Change redirection */
  updateDomainRedirectionRedirectionByDomainAndId = (
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
  getDomainResponderByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/responder`);
  };

  /** Create new responder in server */
  createDomainResponderByDomain = (
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
  deleteDomainResponderByDomainAndAccount = (
    account: string,
    domain: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('DELETE', `/email/domain/${domain}/responder/${account}`);
  };

  /** Get this object properties */
  getDomainResponderByDomainAndAccount = (
    account: string,
    domain: string
  ): Promise<EmailDomainResponder> => {
    return this.ovh.request('GET', `/email/domain/${domain}/responder/${account}`);
  };

  /** Alter this object properties */
  updateDomainResponderByDomainAndAccount = (
    account: string,
    domain: string,
    body: EmailDomainResponder
  ): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/responder/${account}`, body);
  };

  /** Get this object properties */
  getDomainServiceInfosByDomain = (domain: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/email/domain/${domain}/serviceInfos`);
  };

  /** Alter this object properties */
  updateDomainServiceInfosByDomain = (domain: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/email/domain/${domain}/serviceInfos`, body);
  };

  /** Summary for this domain */
  getDomainSummaryByDomain = (domain: string): Promise<DomainDomainSummary> => {
    return this.ovh.request('GET', `/email/domain/${domain}/summary`);
  };

  /** Get account tasks */
  getDomainTaskAccountByDomain = (domain: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/account`);
  };

  /** Get this object properties */
  getDomainTaskAccountByDomainAndId = (domain: string, id: number): Promise<EmailDomainTaskPop> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/account/${id}`);
  };

  /** Get filter tasks */
  getDomainTaskFilterByDomain = (domain: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/filter`);
  };

  /** Get this object properties */
  getDomainTaskFilterByDomainAndId = (
    domain: string,
    id: number
  ): Promise<EmailDomainTaskFilter> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/filter/${id}`);
  };

  /** Get Mailing List tasks */
  getDomainTaskMailinglistByDomain = (domain: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/mailinglist`);
  };

  /** Get this object properties */
  getDomainTaskMailinglistByDomainAndId = (
    domain: string,
    id: number
  ): Promise<EmailDomainTaskMl> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/mailinglist/${id}`);
  };

  /** Get redirection tasks */
  getDomainTaskRedirectionByDomain = (domain: string): Promise<string[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/redirection`);
  };

  /** Get this object properties */
  getDomainTaskRedirectionByDomainAndId = (
    domain: string,
    id: string
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/redirection/${id}`);
  };

  /** Get responder tasks */
  getDomainTaskResponderByDomain = (domain: string): Promise<number[]> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/responder`);
  };

  /** Get this object properties */
  getDomainTaskResponderByDomainAndId = (
    domain: string,
    id: number
  ): Promise<EmailDomainTaskSpecialAccount> => {
    return this.ovh.request('GET', `/email/domain/${domain}/task/responder/${id}`);
  };

  /** Terminate your email service */
  postDomainTerminateByDomain = (domain: string): Promise<string> => {
    return this.ovh.request('POST', `/email/domain/${domain}/terminate`);
  };
}

export { EmailDomainHandler };
