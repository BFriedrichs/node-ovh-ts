/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastStatsTypeEnum } from '../models/CdnanycastStatsTypeEnum';
import { CdnanycastAnycast } from '../models/CdnanycastAnycast';
import { CdnanycastCacheRuleCacheTypeEnum } from '../models/CdnanycastCacheRuleCacheTypeEnum';
import { ServicesService } from '../models/ServicesService';
import { CdnanycastSsl } from '../models/CdnanycastSsl';
import { CdnanycastDomain } from '../models/CdnanycastDomain';
import { CdnanycastCacheRuleFileTypeEnum } from '../models/CdnanycastCacheRuleFileTypeEnum';
import { CdnanycastPop } from '../models/CdnanycastPop';
import { CdnanycastLogsURL } from '../models/CdnanycastLogsURL';
import { CdnanycastCacheRule } from '../models/CdnanycastCacheRule';
import { CdnanycastStatsPeriodEnum } from '../models/CdnanycastStatsPeriodEnum';
import { CdnanycastTaskStateEnum } from '../models/CdnanycastTaskStateEnum';
import { CdnanycastBackend } from '../models/CdnanycastBackend';
import { CdnanycastStatsValueEnum } from '../models/CdnanycastStatsValueEnum';
import { CdnanycastTaskFunctionEnum } from '../models/CdnanycastTaskFunctionEnum';
import { CdnanycastStatsDataType } from '../models/CdnanycastStatsDataType';
import { CdnanycastTask } from '../models/CdnanycastTask';
import OVHBase from '../ovh';

class CdnDedicatedHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getDedicated = (): Promise<string> => {
    return this.ovh.request('GET', '/cdn/dedicated');
  };

  /** List of CDN Pops */
  getDedicatedPops = (): Promise<string> => {
    return this.ovh.request('GET', '/cdn/dedicated/pops');
  };

  /** Get this object properties */
  getDedicatedPopsName = (name: string): Promise<CdnanycastPop> => {
    return this.ovh.request('GET', `/cdn/dedicated/pops/${name}`);
  };

  /** Get this object properties */
  getDedicatedServiceName = (serviceName: string): Promise<CdnanycastAnycast> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}`);
  };

  /** Launch a contact change procedure */
  postDedicatedServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/changeContact`, body);
  };

  /** Domains associated to this anycast */
  getDedicatedServiceNameDomains = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains`);
  };

  /** Add a domain on CDN */
  postDedicatedServiceNameDomains = (
    serviceName: string,
    body: { domain: string }
  ): Promise<CdnanycastDomain> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains`, body);
  };

  /** Remove a domain from the CDN */
  deleteDedicatedServiceNameDomainsDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('DELETE', `/cdn/dedicated/${serviceName}/domains/${domain}`);
  };

  /** Get this object properties */
  getDedicatedServiceNameDomainsDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastDomain> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}`);
  };

  /** Alter this object properties */
  putDedicatedServiceNameDomainsDomain = (
    domain: string,
    serviceName: string,
    body: CdnanycastDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cdn/dedicated/${serviceName}/domains/${domain}`, body);
  };

  /** Backend associated to the domain */
  getDedicatedServiceNameDomainsDomainBackends = (
    domain: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/backends`);
  };

  /** Add a backend IP */
  postDedicatedServiceNameDomainsDomainBackends = (
    domain: string,
    serviceName: string,
    body: { ip: string }
  ): Promise<CdnanycastBackend> => {
    return this.ovh.request(
      'POST',
      `/cdn/dedicated/${serviceName}/domains/${domain}/backends`,
      body
    );
  };

  /** Remove a backend IP */
  deleteDedicatedServiceNameDomainsDomainBackendsIp = (
    domain: string,
    ip: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`
    );
  };

  /** Get this object properties */
  getDedicatedServiceNameDomainsDomainBackendsIp = (
    domain: string,
    ip: string,
    serviceName: string
  ): Promise<CdnanycastBackend> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`
    );
  };

  /** Cache rules associated to the domain */
  getDedicatedServiceNameDomainsDomainCacheRules = (
    domain: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`);
  };

  /** Add a cache rule to a domain */
  postDedicatedServiceNameDomainsDomainCacheRules = (
    domain: string,
    serviceName: string,
    body: {
      cacheType: CdnanycastCacheRuleCacheTypeEnum;
      fileMatch: string;
      fileType: CdnanycastCacheRuleFileTypeEnum;
      ttl: number;
    }
  ): Promise<CdnanycastCacheRule> => {
    return this.ovh.request(
      'POST',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`,
      body
    );
  };

  /** Remove cache rule */
  deleteDedicatedServiceNameDomainsDomainCacheRulesCacheRuleId = (
    cacheRuleId: number,
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request(
      'DELETE',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`
    );
  };

  /** Get this object properties */
  getDedicatedServiceNameDomainsDomainCacheRulesCacheRuleId = (
    cacheRuleId: number,
    domain: string,
    serviceName: string
  ): Promise<CdnanycastCacheRule> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`
    );
  };

  /** Alter this object properties */
  putDedicatedServiceNameDomainsDomainCacheRulesCacheRuleId = (
    cacheRuleId: number,
    domain: string,
    serviceName: string,
    body: CdnanycastCacheRule
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`,
      body
    );
  };

  /** Flush the cache */
  postDedicatedServiceNameDomainsDomainCacheRulesCacheRuleIdFlush = (
    cacheRuleId: number,
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request(
      'POST',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/flush`
    );
  };

  /** Task associated to the cache rule */
  getDedicatedServiceNameDomainsDomainCacheRulesCacheRuleIdTasks = (
    cacheRuleId: number,
    domain: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks`
    );
  };

  /** Get this object properties */
  getDedicatedServiceNameDomainsDomainCacheRulesCacheRuleIdTasksTaskId = (
    cacheRuleId: number,
    domain: string,
    serviceName: string,
    taskId: number
  ): Promise<CdnanycastTask> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks/${taskId}`
    );
  };

  /** Flush all cache */
  postDedicatedServiceNameDomainsDomainFlush = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains/${domain}/flush`);
  };

  /** Generate URL to real time logs */
  postDedicatedServiceNameDomainsDomainLogs = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastLogsURL> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains/${domain}/logs`);
  };

  /** Return stats about a domain */
  getDedicatedServiceNameDomainsDomainStatistics = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastStatsDataType> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/statistics`);
  };

  /** Task associated to the domain */
  getDedicatedServiceNameDomainsDomainTasks = (
    domain: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/tasks`);
  };

  /** Get this object properties */
  getDedicatedServiceNameDomainsDomainTasksTaskId = (
    domain: string,
    serviceName: string,
    taskId: number
  ): Promise<CdnanycastTask> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/tasks/${taskId}`
    );
  };

  /** Generate URL to real time logs */
  postDedicatedServiceNameLogs = (serviceName: string): Promise<CdnanycastLogsURL> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/logs`);
  };

  /** Return quota history */
  getDedicatedServiceNameQuota = (serviceName: string): Promise<CdnanycastStatsDataType> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/quota`);
  };

  /** Get this object properties */
  getDedicatedServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putDedicatedServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cdn/dedicated/${serviceName}/serviceInfos`, body);
  };

  /** Remove SSL of the CDN */
  deleteDedicatedServiceNameSsl = (serviceName: string): Promise<CdnanycastTask> => {
    return this.ovh.request('DELETE', `/cdn/dedicated/${serviceName}/ssl`);
  };

  /** Get this object properties */
  getDedicatedServiceNameSsl = (serviceName: string): Promise<CdnanycastSsl> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl`);
  };

  /** Add a SSL on CDN or Generate a Lets Encrypt certificate */
  postDedicatedServiceNameSsl = (
    serviceName: string,
    body: { certificate?: string; chain?: string; key?: string; name: string }
  ): Promise<CdnanycastSsl> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/ssl`, body);
  };

  /** Task associated to the ssl */
  getDedicatedServiceNameSslTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl/tasks`);
  };

  /** Get this object properties */
  getDedicatedServiceNameSslTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl/tasks/${taskId}`);
  };

  /** Update an existing SSL with a custom certificate */
  postDedicatedServiceNameSslUpdate = (
    serviceName: string,
    body: { certificate: string; chain?: string; key: string }
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/ssl/update`, body);
  };
}

export default CdnDedicatedHandler;
