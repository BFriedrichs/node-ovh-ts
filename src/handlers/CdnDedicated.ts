/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastStatsPeriodEnum } from '../models/CdnanycastStatsPeriodEnum';
import { CdnanycastLogsURL } from '../models/CdnanycastLogsURL';
import { CdnanycastDomain } from '../models/CdnanycastDomain';
import { CdnanycastCacheRuleFileTypeEnum } from '../models/CdnanycastCacheRuleFileTypeEnum';
import { ServicesService } from '../models/ServicesService';
import { CdnanycastTask } from '../models/CdnanycastTask';
import { CdnanycastCacheRuleCacheTypeEnum } from '../models/CdnanycastCacheRuleCacheTypeEnum';
import { CdnanycastCacheRule } from '../models/CdnanycastCacheRule';
import { CdnanycastSsl } from '../models/CdnanycastSsl';
import { CdnanycastPop } from '../models/CdnanycastPop';
import { CdnanycastStatsValueEnum } from '../models/CdnanycastStatsValueEnum';
import { CdnanycastTaskStateEnum } from '../models/CdnanycastTaskStateEnum';
import { CdnanycastStatsTypeEnum } from '../models/CdnanycastStatsTypeEnum';
import { CdnanycastBackend } from '../models/CdnanycastBackend';
import { CdnanycastStatsDataType } from '../models/CdnanycastStatsDataType';
import { CdnanycastAnycast } from '../models/CdnanycastAnycast';
import { CdnanycastTaskFunctionEnum } from '../models/CdnanycastTaskFunctionEnum';
import OVHBase from '../ovh';

class CdnDedicatedHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listDedicateds = (): Promise<string[]> => {
    return this.ovh.request('GET', '/cdn/dedicated');
  };

  /** List of CDN Pops */
  listDedicatedPops = (): Promise<string[]> => {
    return this.ovh.request('GET', '/cdn/dedicated/pops');
  };

  /** Get this object properties */
  getDedicatedPopsByName = (name: string): Promise<CdnanycastPop> => {
    return this.ovh.request('GET', `/cdn/dedicated/pops/${name}`);
  };

  /** Get this object properties */
  getDedicatedByServiceName = (serviceName: string): Promise<CdnanycastAnycast> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}`);
  };

  /** Launch a contact change procedure */
  launchDedicatedChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/changeContact`, body);
  };

  /** Domains associated to this anycast */
  getDedicatedDomainsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains`);
  };

  /** Add a domain on CDN */
  addDedicatedDomainsByServiceName = (
    serviceName: string,
    body: { domain: string }
  ): Promise<CdnanycastDomain> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains`, body);
  };

  /** Remove a domain from the CDN */
  deleteDedicatedDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('DELETE', `/cdn/dedicated/${serviceName}/domains/${domain}`);
  };

  /** Get this object properties */
  getDedicatedDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastDomain> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}`);
  };

  /** Alter this object properties */
  updateDedicatedDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string,
    body: CdnanycastDomain
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cdn/dedicated/${serviceName}/domains/${domain}`, body);
  };

  /** Backend associated to the domain */
  getDedicatedDomainsBackendsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/backends`);
  };

  /** Add a backend IP */
  addDedicatedDomainsBackendsByServiceNameAndDomain = (
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
  deleteDedicatedDomainsBackendsByServiceNameAndDomainAndIp = (
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
  getDedicatedDomainsBackendsByServiceNameAndDomainAndIp = (
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
  getDedicatedDomainsCacheRulesByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`);
  };

  /** Add a cache rule to a domain */
  addDedicatedDomainsCacheRulesByServiceNameAndDomain = (
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
  deleteDedicatedDomainsCacheRulesByServiceNameAndDomainAndCacheRuleId = (
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
  getDedicatedDomainsCacheRulesByServiceNameAndDomainAndCacheRuleId = (
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
  updateDedicatedDomainsCacheRulesByServiceNameAndDomainAndCacheRuleId = (
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
  postDedicatedDomainsCacheRulesFlushByServiceNameAndDomainAndCacheRuleId = (
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
  getDedicatedDomainsCacheRulesTasksByServiceNameAndDomainAndCacheRuleId = (
    cacheRuleId: number,
    domain: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks`
    );
  };

  /** Get this object properties */
  getDedicatedDomainsCacheRulesTasksByServiceNameAndDomainAndCacheRuleIdAndTaskId = (
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
  postDedicatedDomainsFlushByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains/${domain}/flush`);
  };

  /** Generate URL to real time logs */
  postDedicatedDomainsLogsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastLogsURL> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/domains/${domain}/logs`);
  };

  /** Return stats about a domain */
  getDedicatedDomainsStatisticsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<CdnanycastStatsDataType[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/statistics`);
  };

  /** Task associated to the domain */
  getDedicatedDomainsTasksByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/domains/${domain}/tasks`);
  };

  /** Get this object properties */
  getDedicatedDomainsTasksByServiceNameAndDomainAndTaskId = (
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
  postDedicatedLogsByServiceName = (serviceName: string): Promise<CdnanycastLogsURL> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/logs`);
  };

  /** Return quota history */
  getDedicatedQuotaByServiceName = (serviceName: string): Promise<CdnanycastStatsDataType[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/quota`);
  };

  /** Get this object properties */
  getDedicatedServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateDedicatedServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cdn/dedicated/${serviceName}/serviceInfos`, body);
  };

  /** Remove SSL of the CDN */
  deleteDedicatedSslByServiceName = (serviceName: string): Promise<CdnanycastTask> => {
    return this.ovh.request('DELETE', `/cdn/dedicated/${serviceName}/ssl`);
  };

  /** Get this object properties */
  getDedicatedSslByServiceName = (serviceName: string): Promise<CdnanycastSsl> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl`);
  };

  /** Add a SSL on CDN or Generate a Lets Encrypt certificate */
  addDedicatedSslByServiceName = (
    serviceName: string,
    body: { certificate?: string; chain?: string; key?: string; name: string }
  ): Promise<CdnanycastSsl> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/ssl`, body);
  };

  /** Task associated to the ssl */
  getDedicatedSslTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl/tasks`);
  };

  /** Get this object properties */
  getDedicatedSslTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('GET', `/cdn/dedicated/${serviceName}/ssl/tasks/${taskId}`);
  };

  /** Update an existing SSL with a custom certificate */
  updateDedicatedSslByServiceName = (
    serviceName: string,
    body: { certificate: string; chain?: string; key: string }
  ): Promise<CdnanycastTask> => {
    return this.ovh.request('POST', `/cdn/dedicated/${serviceName}/ssl/update`, body);
  };
}

export { CdnDedicatedHandler };
