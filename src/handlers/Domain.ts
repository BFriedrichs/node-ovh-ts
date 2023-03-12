/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainWhoisObfuscatorFieldsEnum } from '../models/DomainWhoisObfuscatorFieldsEnum';
import { ZoneNamedResolutionFieldTypeEnum } from '../models/ZoneNamedResolutionFieldTypeEnum';
import { DnssecKeyStatusEnum } from '../models/DnssecKeyStatusEnum';
import { DomainZoneZoneRestorePoint } from '../models/DomainZoneZoneRestorePoint';
import { DomainNameServerFullNameServer } from '../models/DomainNameServerFullNameServer';
import { DomainConfigurationsContactTypeEnum } from '../models/DomainConfigurationsContactTypeEnum';
import { DomainContact } from '../models/DomainContact';
import { DomainZoneDnssec } from '../models/DomainZoneDnssec';
import { ServicesService } from '../models/ServicesService';
import { DomainConfigurationRulesRule } from '../models/DomainConfigurationRulesRule';
import { DomainExtensionsExtensionsPricingAttributes } from '../models/DomainExtensionsExtensionsPricingAttributes';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DomainDnssecKey } from '../models/DomainDnssecKey';
import { DomainNameServerCreatePayload } from '../models/DomainNameServerCreatePayload';
import { DomainZoneZone } from '../models/DomainZoneZone';
import { DomainExtensionsExtension } from '../models/DomainExtensionsExtension';
import { ZoneRedirectionTypeEnum } from '../models/ZoneRedirectionTypeEnum';
import { DomainOperationStatusEnum } from '../models/DomainOperationStatusEnum';
import { DomainGlueRecordGlueRecord } from '../models/DomainGlueRecordGlueRecord';
import { DomainZoneRecord } from '../models/DomainZoneRecord';
import { DomainZoneDynHostLogin } from '../models/DomainZoneDynHostLogin';
import { DomainZoneTask } from '../models/DomainZoneTask';
import { DomainConfigurationRulesRuleData } from '../models/DomainConfigurationRulesRuleData';
import { ZoneStatus } from '../models/ZoneStatus';
import { DomainNameServerNameServerStatus } from '../models/DomainNameServerNameServerStatus';
import { DomainOption } from '../models/DomainOption';
import { DomainNameServerUpdatePayload } from '../models/DomainNameServerUpdatePayload';
import { DomainOutgoingTransferApprove } from '../models/DomainOutgoingTransferApprove';
import { DomainExtensionsOrderByTypeEnum } from '../models/DomainExtensionsOrderByTypeEnum';
import { DomainZoneRedirection } from '../models/DomainZoneRedirection';
import { ZoneCapabilities } from '../models/ZoneCapabilities';
import { DomainDataClaimNoticeClaimNotice } from '../models/DomainDataClaimNoticeClaimNotice';
import { ServiceRenewType } from '../models/ServiceRenewType';
import { DomainDomainOptionEnum } from '../models/DomainDomainOptionEnum';
import { DomainUkRegistrar } from '../models/DomainUkRegistrar';
import { DomainConfigurationsObfuscatedEmail } from '../models/DomainConfigurationsObfuscatedEmail';
import { DomainDomain } from '../models/DomainDomain';
import { DnssecKey } from '../models/DnssecKey';
import { DomainTask } from '../models/DomainTask';
import { DomainConfigurationsObfuscatedEmailRefreshPayload } from '../models/DomainConfigurationsObfuscatedEmailRefreshPayload';
import { DomainActionEnum } from '../models/DomainActionEnum';
import { DnssecKeyFlagEnum } from '../models/DnssecKeyFlagEnum';
import { DomainConfigurationsObfuscatedEmailUpdatePayload } from '../models/DomainConfigurationsObfuscatedEmailUpdatePayload';
import { NichandleOvhSubsidiaryEnum } from '../models/NichandleOvhSubsidiaryEnum';
import { ZoneResetRecord } from '../models/ZoneResetRecord';
import { DomainDataSmdSmdBody } from '../models/DomainDataSmdSmdBody';
import { DomainExtensionsRegistryConfigurationsRegistryConfigurations } from '../models/DomainExtensionsRegistryConfigurationsRegistryConfigurations';
import { DomainZoneSoa } from '../models/DomainZoneSoa';
import { DomainConfigurationsOptinUpdatePayload } from '../models/DomainConfigurationsOptinUpdatePayload';
import { DomainGlueRecordCreatePayload } from '../models/DomainGlueRecordCreatePayload';
import { DomainServiceOptions } from '../models/DomainServiceOptions';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DomainZoneDynHostRecord } from '../models/DomainZoneDynHostRecord';
import { DomainOwo } from '../models/DomainOwo';
import { DomainExtensionsExtensionsByCategory } from '../models/DomainExtensionsExtensionsByCategory';
import { DomainConfigurationsOptin } from '../models/DomainConfigurationsOptin';
import { DomainZoneOption } from '../models/DomainZoneOption';
import { DomainRulesOptin } from '../models/DomainRulesOptin';
import { DomainExtensionsCategoryTypeEnum } from '../models/DomainExtensionsCategoryTypeEnum';
import { DomainDataSmdSmd } from '../models/DomainDataSmdSmd';
import OVHBase from '../ovh';

class DomainHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/domain');
  };

  /** Get configuration rule applied for a domain in a given action */
  getConfigurationRule = (): Promise<DomainConfigurationRulesRule> => {
    return this.ovh.request('GET', '/domain/configurationRule');
  };

  /** Validate a rule data for a specified domain */
  validateConfigurationRuleCheck = (body: DomainConfigurationRulesRuleData): Promise<void> => {
    return this.ovh.request('POST', '/domain/configurationRule/check', body);
  };

  /** List all contacts */
  listContact = (): Promise<DomainContact[]> => {
    return this.ovh.request('GET', '/domain/contact');
  };

  /** Create a contact */
  createContact = (body: DomainContact): Promise<DomainContact> => {
    return this.ovh.request('POST', '/domain/contact', body);
  };

  /** Get details about a contact */
  getContactByContactId = (contactId: number): Promise<DomainContact> => {
    return this.ovh.request('GET', `/domain/contact/${contactId}`);
  };

  /** Update a contact */
  updateContactByContactId = (contactId: number, body: DomainContact): Promise<DomainContact> => {
    return this.ovh.request('PUT', `/domain/contact/${contactId}`, body);
  };

  /** Retrieve claim notices associated to a domain */
  getDataClaimNotice = (): Promise<DomainDataClaimNoticeClaimNotice> => {
    return this.ovh.request('GET', '/domain/data/claimNotice');
  };

  /** List all the extensions for a specific country */
  listDataExtension = (): Promise<string[]> => {
    return this.ovh.request('GET', '/domain/data/extension');
  };

  /** List all SMD files */
  listDataSmd = (): Promise<DomainDataSmdSmd[]> => {
    return this.ovh.request('GET', '/domain/data/smd');
  };

  /** Create a SMD file */
  createDataSmd = (body: DomainDataSmdSmdBody): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('POST', '/domain/data/smd', body);
  };

  /** Delete a SMD file */
  deleteDataSmdBySmdId = (smdId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/data/smd/${smdId}`);
  };

  /** Get details about a SMD file */
  getDataSmdBySmdId = (smdId: string): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('GET', `/domain/data/smd/${smdId}`);
  };

  /** Update a SMD file */
  updateDataSmdBySmdId = (smdId: string, body: DomainDataSmdSmdBody): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('PUT', `/domain/data/smd/${smdId}`, body);
  };

  /** List all extensions */
  listExtensions = (): Promise<string[]> => {
    return this.ovh.request('GET', '/domain/extensions');
  };

  /** List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe') */
  listExtensionsByCategory = (): Promise<DomainExtensionsExtensionsByCategory> => {
    return this.ovh.request('GET', '/domain/extensions/byCategory');
  };

  /** List highlighted extensions, ordered by decreased importance */
  listExtensionsHighlighted = (): Promise<string[]> => {
    return this.ovh.request('GET', '/domain/extensions/highlighted');
  };

  /** List extensions with their pricing attributes. It especially documents whether an extension has been implemented recently or whether the price has dropped */
  listExtensionsPricingAttributes = (): Promise<DomainExtensionsExtensionsPricingAttributes[]> => {
    return this.ovh.request('GET', '/domain/extensions/pricingAttributes');
  };

  /** Get an extension */
  getExtensionsByName = (name: string): Promise<DomainExtensionsExtension> => {
    return this.ovh.request('GET', `/domain/extensions/${name}`);
  };

  /** Retrieve registry configuration for an extension */
  getExtensionsRegistryConfigurationsByName = (
    name: string
  ): Promise<DomainExtensionsRegistryConfigurationsRegistryConfigurations> => {
    return this.ovh.request('GET', `/domain/extensions/${name}/registryConfigurations`);
  };

  /** List available services */
  listZone = (): Promise<string[]> => {
    return this.ovh.request('GET', '/domain/zone');
  };

  /** Get this object properties */
  getZoneByZoneName = (zoneName: string): Promise<DomainZoneZone> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}`);
  };

  /** Zone capabilities */
  getZoneCapabilitiesByZoneName = (zoneName: string): Promise<ZoneCapabilities> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/capabilities`);
  };

  /** Launch a contact change procedure */
  launchZoneChangeContactByZoneName = (
    zoneName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmZoneTerminationByZoneName = (
    zoneName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/confirmTermination`, body);
  };

  /** Disable Dnssec */
  disableZoneDnssecByZoneName = (zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dnssec`);
  };

  /** Get this object properties */
  getZoneDnssecByZoneName = (zoneName: string): Promise<DomainZoneDnssec> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dnssec`);
  };

  /** Enable Dnssec */
  enableZoneDnssecByZoneName = (zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dnssec`);
  };

  /** DynHost' logins */
  getZoneDynHostLoginByZoneName = (zoneName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/login`);
  };

  /** Create a new DynHost login */
  createZoneDynHostLoginByZoneName = (
    zoneName: string,
    body: { loginSuffix: string; password: string; subDomain: string }
  ): Promise<DomainZoneDynHostLogin> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dynHost/login`, body);
  };

  /** Delete a DynHost login */
  deleteZoneDynHostLoginByZoneNameAndLogin = (login: string, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dynHost/login/${login}`);
  };

  /** Get this object properties */
  getZoneDynHostLoginByZoneNameAndLogin = (
    login: string,
    zoneName: string
  ): Promise<DomainZoneDynHostLogin> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/login/${login}`);
  };

  /** Alter this object properties */
  updateZoneDynHostLoginByZoneNameAndLogin = (
    login: string,
    zoneName: string,
    body: DomainZoneDynHostLogin
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/dynHost/login/${login}`, body);
  };

  /** Change password of the DynHost login */
  updateZoneDynHostLoginPasswordByZoneNameAndLogin = (
    login: string,
    zoneName: string,
    body: { password: string }
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/domain/zone/${zoneName}/dynHost/login/${login}/changePassword`,
      body
    );
  };

  /** DynHost' records */
  getZoneDynHostRecordByZoneName = (zoneName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/record`);
  };

  /** Create a new DynHost record (Don't forget to refresh the zone) */
  createZoneDynHostRecordByZoneName = (
    zoneName: string,
    body: { ip: string; subDomain?: string }
  ): Promise<DomainZoneDynHostRecord> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dynHost/record`, body);
  };

  /** Delete a DynHost record (Don't forget to refresh the zone) */
  deleteZoneDynHostRecordByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dynHost/record/${id}`);
  };

  /** Get this object properties */
  getZoneDynHostRecordByZoneNameAndId = (
    id: number,
    zoneName: string
  ): Promise<DomainZoneDynHostRecord> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/record/${id}`);
  };

  /** Alter this object properties */
  updateZoneDynHostRecordByZoneNameAndId = (
    id: number,
    zoneName: string,
    body: DomainZoneDynHostRecord
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/dynHost/record/${id}`, body);
  };

  /** Export zone */
  exportZoneByZoneName = (zoneName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/export`);
  };

  /** Zone restore points */
  getZoneHistoryByZoneName = (zoneName: string): Promise<Date[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/history`);
  };

  /** Get this object properties */
  getZoneHistoryByZoneNameAndCreationDate = (
    creationDate: Date,
    zoneName: string
  ): Promise<DomainZoneZoneRestorePoint> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/history/${creationDate}`);
  };

  /** Restore the DNS zone */
  postZoneHistoryRestoreByZoneNameAndCreationDate = (
    creationDate: Date,
    zoneName: string
  ): Promise<DomainZoneTask> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/history/${creationDate}/restore`);
  };

  /** Import zone */
  postZoneImportByZoneName = (
    zoneName: string,
    body: { zoneFile: string }
  ): Promise<DomainZoneTask> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/import`, body);
  };

  /** List zone options */
  listZoneOptionByZoneName = (zoneName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option`);
  };

  /** Get this object properties */
  getZoneOptionByZoneNameAndName = (name: string, zoneName: string): Promise<DomainZoneOption> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option/${name}`);
  };

  /** Get this object properties */
  getZoneOptionServiceInfosByZoneNameAndName = (
    name: string,
    zoneName: string
  ): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option/${name}/serviceInfos`);
  };

  /** Alter this object properties */
  updateZoneOptionServiceInfosByZoneNameAndName = (
    name: string,
    zoneName: string,
    body: { renew: ServiceRenewType }
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/option/${name}/serviceInfos`, body);
  };

  /** Records of the zone */
  getZoneRecordByZoneName = (zoneName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/record`);
  };

  /** Create a new DNS record (Don't forget to refresh the zone) */
  createZoneRecordByZoneName = (
    zoneName: string,
    body: {
      fieldType: ZoneNamedResolutionFieldTypeEnum;
      subDomain?: string;
      target: string;
      ttl?: number;
    }
  ): Promise<DomainZoneRecord> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/record`, body);
  };

  /** Delete a DNS record (Don't forget to refresh the zone) */
  deleteZoneRecordByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/record/${id}`);
  };

  /** Get this object properties */
  getZoneRecordByZoneNameAndId = (id: number, zoneName: string): Promise<DomainZoneRecord> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/record/${id}`);
  };

  /** Alter this object properties */
  updateZoneRecordByZoneNameAndId = (
    id: number,
    zoneName: string,
    body: DomainZoneRecord
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/record/${id}`, body);
  };

  /** Redirections */
  getZoneRedirectionByZoneName = (zoneName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/redirection`);
  };

  /** Create a new redirection (Don't forget to refresh the zone) */
  createZoneRedirectionByZoneName = (
    zoneName: string,
    body: {
      description?: string;
      keywords?: string;
      subDomain?: string;
      target: string;
      title?: string;
      type: ZoneRedirectionTypeEnum;
    }
  ): Promise<DomainZoneRedirection> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/redirection`, body);
  };

  /** Delete a redirection (Don't forget to refresh the zone) */
  deleteZoneRedirectionByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/redirection/${id}`);
  };

  /** Get this object properties */
  getZoneRedirectionByZoneNameAndId = (
    id: number,
    zoneName: string
  ): Promise<DomainZoneRedirection> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/redirection/${id}`);
  };

  /** Alter this object properties */
  updateZoneRedirectionByZoneNameAndId = (
    id: number,
    zoneName: string,
    body: DomainZoneRedirection
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/redirection/${id}`, body);
  };

  /** Apply zone modification on DNS servers */
  postZoneRefreshByZoneName = (zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/refresh`);
  };

  /** Reset the DNS zone */
  postZoneResetByZoneName = (
    zoneName: string,
    body: { DnsRecords?: ZoneResetRecord[]; minimized?: boolean }
  ): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/reset`, body);
  };

  /** Get this object properties */
  getZoneServiceInfosByZoneName = (zoneName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateZoneServiceInfosByZoneName = (zoneName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/serviceInfos`, body);
  };

  /** Get this object properties */
  getZoneSoaByZoneName = (zoneName: string): Promise<DomainZoneSoa> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/soa`);
  };

  /** Alter this object properties */
  updateZoneSoaByZoneName = (zoneName: string, body: DomainZoneSoa): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/soa`, body);
  };

  /** Zone status */
  getZoneStatusByZoneName = (zoneName: string): Promise<ZoneStatus> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/status`);
  };

  /** Domain pending tasks */
  getZoneTaskByZoneName = (zoneName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/task`);
  };

  /** Get this object properties */
  getZoneTaskByZoneNameAndId = (id: number, zoneName: string): Promise<DomainZoneTask> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/task/${id}`);
  };

  /** Accelerate the task */
  postZoneTaskAccelerateByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/accelerate`);
  };

  /** Cancel the task */
  postZoneTaskCancelByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/cancel`);
  };

  /** Relaunch the task */
  postZoneTaskRelaunchByZoneNameAndId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/relaunch`);
  };

  /** Terminate your service */
  postZoneTerminateByZoneName = (zoneName: string): Promise<string> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/terminate`);
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<DomainDomain> => {
    return this.ovh.request('GET', `/domain/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: DomainDomain): Promise<void> => {
    return this.ovh.request('PUT', `/domain/${serviceName}`, body);
  };

  /** Return authInfo code if the domain is unlocked */
  getAuthInfoByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/${serviceName}/authInfo`);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/domain/${serviceName}/changeContact`, body);
  };

  /** Retrieve obfuscated emails configuration */
  getConfigurationsObfuscatedEmailsByServiceName = (
    serviceName: string
  ): Promise<DomainConfigurationsObfuscatedEmail[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/configurations/obfuscatedEmails`);
  };

  /** Save a new obfuscated emails configuration */
  putConfigurationsObfuscatedEmailsByServiceName = (
    serviceName: string,
    body: DomainConfigurationsObfuscatedEmailUpdatePayload
  ): Promise<DomainConfigurationsObfuscatedEmail[]> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/configurations/obfuscatedEmails`, body);
  };

  /** Refresh an obfuscated emails configuration with new values */
  postConfigurationsObfuscatedEmailsRefreshByServiceName = (
    serviceName: string,
    body: DomainConfigurationsObfuscatedEmailRefreshPayload
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/domain/${serviceName}/configurations/obfuscatedEmails/refresh`,
      body
    );
  };

  /** Retrieve optin configuration */
  getConfigurationsOptinByServiceName = (
    serviceName: string
  ): Promise<DomainConfigurationsOptin[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/configurations/optin`);
  };

  /** Save a new optin configuration */
  putConfigurationsOptinByServiceName = (
    serviceName: string,
    body: DomainConfigurationsOptinUpdatePayload
  ): Promise<DomainConfigurationsOptin[]> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/configurations/optin`, body);
  };

  /** List of domain's DS Records */
  listDsRecordByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/dsRecord`);
  };

  /** Update DS records */
  updateDsRecordByServiceName = (
    serviceName: string,
    body: { keys: DnssecKey[] }
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/dsRecord`, body);
  };

  /** Get this object properties */
  getDsRecordByServiceNameAndId = (id: number, serviceName: string): Promise<DomainDnssecKey> => {
    return this.ovh.request('GET', `/domain/${serviceName}/dsRecord/${id}`);
  };

  /** List of glue records */
  listGlueRecordByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/glueRecord`);
  };

  /** Create a glue record */
  createGlueRecordByServiceName = (
    serviceName: string,
    body: DomainGlueRecordCreatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/glueRecord`, body);
  };

  /** Delete the glue record */
  deleteGlueRecordByServiceNameAndHost = (
    serviceName: string,
    host: string
  ): Promise<DomainTask> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/glueRecord/${host}`);
  };

  /** Get this glue record */
  getGlueRecordByServiceNameAndHost = (
    serviceName: string,
    host: string
  ): Promise<DomainGlueRecordGlueRecord> => {
    return this.ovh.request('GET', `/domain/${serviceName}/glueRecord/${host}`);
  };

  /** Update the glue record */
  updateGlueRecordByServiceNameAndHost = (
    serviceName: string,
    host: string,
    body: DomainGlueRecordGlueRecord
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/glueRecord/${host}/update`, body);
  };

  /** List of current name servers */
  listNameServerByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer`);
  };

  /** Add new name server */
  addNameServerByServiceName = (
    serviceName: string,
    body: DomainNameServerCreatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServer`, body);
  };

  /** Delete a name server */
  deleteNameServerByServiceNameAndId = (serviceName: string, id: number): Promise<DomainTask> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/nameServer/${id}`);
  };

  /** Get this name server configuration */
  getNameServerByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerFullNameServer> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer/${id}`);
  };

  /** Get name server status */
  getNameServerStatusByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerNameServerStatus> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer/${id}/status`);
  };

  /** Get name server status */
  postNameServerStatusByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerNameServerStatus> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServer/${id}/status`);
  };

  /** Update DNS servers */
  updateNameServersByServiceName = (
    serviceName: string,
    body: DomainNameServerUpdatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServers/update`, body);
  };

  /** List domain options */
  listOptionByServiceName = (serviceName: string): Promise<DomainDomainOptionEnum[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/option`);
  };

  /** Remove a given option */
  deleteOptionByServiceNameAndOption = (
    serviceName: string,
    option: DomainDomainOptionEnum
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/option/${option}`);
  };

  /** Get details on this domain option */
  getOptionByServiceNameAndOption = (
    serviceName: string,
    option: DomainDomainOptionEnum
  ): Promise<DomainOption> => {
    return this.ovh.request('GET', `/domain/${serviceName}/option/${option}`);
  };

  /** Retrieve data about the options associated to a domain */
  getOptionsByServiceName = (serviceName: string): Promise<DomainServiceOptions> => {
    return this.ovh.request('GET', `/domain/${serviceName}/options`);
  };

  /** Approve Outgoing Transfer for a domain */
  postOutgoingTransferApproveByServiceName = (
    serviceName: string,
    body: DomainOutgoingTransferApprove
  ): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/outgoingTransfer/approve`, body);
  };

  /** List of whois obfuscators */
  listOwoByServiceName = (serviceName: string): Promise<DomainWhoisObfuscatorFieldsEnum[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/owo`);
  };

  /** Add whois obfuscators */
  addOwoByServiceName = (
    serviceName: string,
    body: { fields: DomainWhoisObfuscatorFieldsEnum[] }
  ): Promise<DomainWhoisObfuscatorFieldsEnum[]> => {
    return this.ovh.request('POST', `/domain/${serviceName}/owo`, body);
  };

  /** Delete a whois obfuscator */
  deleteOwoByServiceNameAndField = (
    field: DomainWhoisObfuscatorFieldsEnum,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/owo/${field}`);
  };

  /** Get this object properties */
  getOwoByServiceNameAndField = (
    field: DomainWhoisObfuscatorFieldsEnum,
    serviceName: string
  ): Promise<DomainOwo> => {
    return this.ovh.request('GET', `/domain/${serviceName}/owo/${field}`);
  };

  /** Retrieve emails obfuscation rule */
  getRulesEmailsObfuscationByServiceName = (
    serviceName: string
  ): Promise<DomainConfigurationsContactTypeEnum[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/rules/emailsObfuscation`);
  };

  /** Retrieve optin rule */
  getRulesOptinByServiceName = (serviceName: string): Promise<DomainRulesOptin[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/rules/optin`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/serviceInfos`, body);
  };

  /** List all domain tasks */
  listTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/task`);
  };

  /** Get details about a domain task */
  getTaskByServiceNameAndId = (serviceName: string, id: number): Promise<DomainTask> => {
    return this.ovh.request('GET', `/domain/${serviceName}/task/${id}`);
  };

  /** Accelerate the task */
  postTaskAccelerateByServiceNameAndId = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/accelerate`);
  };

  /** Cancel the task */
  postTaskCancelByServiceNameAndId = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/cancel`);
  };

  /** Relaunch the task */
  postTaskRelaunchByServiceNameAndId = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/relaunch`);
  };

  /** Schedule an outgoing transfer task for this domain (.uk only) */
  postUkOutgoingTransferByServiceName = (
    serviceName: string,
    body: DomainUkRegistrar
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/ukOutgoingTransfer`, body);
  };

  /** Return the list of all .uk registrars */
  getUkRegistrarsByServiceName = (serviceName: string): Promise<DomainUkRegistrar[]> => {
    return this.ovh.request('GET', `/domain/${serviceName}/ukRegistrars`);
  };
}

export { DomainHandler };
