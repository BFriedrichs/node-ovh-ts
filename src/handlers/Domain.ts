/* WARNING: This file is auto-generated . Do not edit manually. */

import { DnssecKeyStatusEnum } from '../models/DnssecKeyStatusEnum';
import { DomainConfigurationRulesRuleData } from '../models/DomainConfigurationRulesRuleData';
import { DomainConfigurationsContactTypeEnum } from '../models/DomainConfigurationsContactTypeEnum';
import { DomainActionEnum } from '../models/DomainActionEnum';
import { DomainDataClaimNoticeClaimNotice } from '../models/DomainDataClaimNoticeClaimNotice';
import { DomainZoneDynHostRecord } from '../models/DomainZoneDynHostRecord';
import { DomainDomain } from '../models/DomainDomain';
import { DomainServiceOptions } from '../models/DomainServiceOptions';
import { DomainExtensionsExtensionsPricingAttributes } from '../models/DomainExtensionsExtensionsPricingAttributes';
import { ZoneRedirectionTypeEnum } from '../models/ZoneRedirectionTypeEnum';
import { DomainConfigurationsOptin } from '../models/DomainConfigurationsOptin';
import { DomainDataSmdSmd } from '../models/DomainDataSmdSmd';
import { DomainWhoisObfuscatorFieldsEnum } from '../models/DomainWhoisObfuscatorFieldsEnum';
import { DomainExtensionsOrderByTypeEnum } from '../models/DomainExtensionsOrderByTypeEnum';
import { DomainZoneZoneRestorePoint } from '../models/DomainZoneZoneRestorePoint';
import { DomainTask } from '../models/DomainTask';
import { DomainDomainOptionEnum } from '../models/DomainDomainOptionEnum';
import { DomainDnssecKey } from '../models/DomainDnssecKey';
import { DomainZoneTask } from '../models/DomainZoneTask';
import { ZoneStatus } from '../models/ZoneStatus';
import { DomainRulesOptin } from '../models/DomainRulesOptin';
import { DnssecKeyFlagEnum } from '../models/DnssecKeyFlagEnum';
import { DomainZoneRedirection } from '../models/DomainZoneRedirection';
import { DomainZoneDynHostLogin } from '../models/DomainZoneDynHostLogin';
import { DomainNameServerUpdatePayload } from '../models/DomainNameServerUpdatePayload';
import { DomainConfigurationsObfuscatedEmail } from '../models/DomainConfigurationsObfuscatedEmail';
import { DomainGlueRecordCreatePayload } from '../models/DomainGlueRecordCreatePayload';
import { ServicesService } from '../models/ServicesService';
import { DomainZoneSoa } from '../models/DomainZoneSoa';
import { DomainConfigurationsOptinUpdatePayload } from '../models/DomainConfigurationsOptinUpdatePayload';
import { DomainDataSmdSmdBody } from '../models/DomainDataSmdSmdBody';
import { ServiceRenewType } from '../models/ServiceRenewType';
import { DomainConfigurationRulesRule } from '../models/DomainConfigurationRulesRule';
import { DomainZoneRecord } from '../models/DomainZoneRecord';
import { DomainConfigurationsObfuscatedEmailUpdatePayload } from '../models/DomainConfigurationsObfuscatedEmailUpdatePayload';
import { DomainNameServerCreatePayload } from '../models/DomainNameServerCreatePayload';
import { NichandleOvhSubsidiaryEnum } from '../models/NichandleOvhSubsidiaryEnum';
import { DomainZoneDnssec } from '../models/DomainZoneDnssec';
import { DomainExtensionsExtension } from '../models/DomainExtensionsExtension';
import { ZoneCapabilities } from '../models/ZoneCapabilities';
import { DomainOperationStatusEnum } from '../models/DomainOperationStatusEnum';
import { DomainOption } from '../models/DomainOption';
import { DomainZoneOption } from '../models/DomainZoneOption';
import { DomainNameServerFullNameServer } from '../models/DomainNameServerFullNameServer';
import { DomainContact } from '../models/DomainContact';
import { DomainUkRegistrar } from '../models/DomainUkRegistrar';
import { DomainGlueRecordGlueRecord } from '../models/DomainGlueRecordGlueRecord';
import { DomainExtensionsRegistryConfigurationsRegistryConfigurations } from '../models/DomainExtensionsRegistryConfigurationsRegistryConfigurations';
import { DomainExtensionsCategoryTypeEnum } from '../models/DomainExtensionsCategoryTypeEnum';
import { DomainOwo } from '../models/DomainOwo';
import { ZoneResetRecord } from '../models/ZoneResetRecord';
import { ZoneNamedResolutionFieldTypeEnum } from '../models/ZoneNamedResolutionFieldTypeEnum';
import { DnssecKey } from '../models/DnssecKey';
import { DomainNameServerNameServerStatus } from '../models/DomainNameServerNameServerStatus';
import { DomainZoneZone } from '../models/DomainZoneZone';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DomainOutgoingTransferApprove } from '../models/DomainOutgoingTransferApprove';
import { DomainExtensionsExtensionsByCategory } from '../models/DomainExtensionsExtensionsByCategory';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DomainConfigurationsObfuscatedEmailRefreshPayload } from '../models/DomainConfigurationsObfuscatedEmailRefreshPayload';
import OVHBase from '../ovh';

class DomainHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/domain');
  };

  /** Get configuration rule applied for a domain in a given action */
  getConfigurationRule = (): Promise<DomainConfigurationRulesRule> => {
    return this.ovh.request('GET', '/domain/configurationRule');
  };

  /** Validate a rule data for a specified domain */
  postConfigurationRuleCheck = (body: DomainConfigurationRulesRuleData): Promise<void> => {
    return this.ovh.request('POST', '/domain/configurationRule/check', body);
  };

  /** List all contacts */
  getContact = (): Promise<DomainContact> => {
    return this.ovh.request('GET', '/domain/contact');
  };

  /** Create a contact */
  postContact = (body: DomainContact): Promise<DomainContact> => {
    return this.ovh.request('POST', '/domain/contact', body);
  };

  /** Get details about a contact */
  getContactContactId = (contactId: number): Promise<DomainContact> => {
    return this.ovh.request('GET', `/domain/contact/${contactId}`);
  };

  /** Update a contact */
  putContactContactId = (contactId: number, body: DomainContact): Promise<DomainContact> => {
    return this.ovh.request('PUT', `/domain/contact/${contactId}`, body);
  };

  /** Retrieve claim notices associated to a domain */
  getDataClaimNotice = (): Promise<DomainDataClaimNoticeClaimNotice> => {
    return this.ovh.request('GET', '/domain/data/claimNotice');
  };

  /** List all the extensions for a specific country */
  getDataExtension = (): Promise<string> => {
    return this.ovh.request('GET', '/domain/data/extension');
  };

  /** List all SMD files */
  getDataSmd = (): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('GET', '/domain/data/smd');
  };

  /** Create a SMD file */
  postDataSmd = (body: DomainDataSmdSmdBody): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('POST', '/domain/data/smd', body);
  };

  /** Delete a SMD file */
  deleteDataSmdSmdId = (smdId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/data/smd/${smdId}`);
  };

  /** Get details about a SMD file */
  getDataSmdSmdId = (smdId: string): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('GET', `/domain/data/smd/${smdId}`);
  };

  /** Update a SMD file */
  putDataSmdSmdId = (smdId: string, body: DomainDataSmdSmdBody): Promise<DomainDataSmdSmd> => {
    return this.ovh.request('PUT', `/domain/data/smd/${smdId}`, body);
  };

  /** List all extensions */
  getExtensions = (): Promise<string> => {
    return this.ovh.request('GET', '/domain/extensions');
  };

  /** List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe') */
  getExtensionsByCategory = (): Promise<DomainExtensionsExtensionsByCategory> => {
    return this.ovh.request('GET', '/domain/extensions/byCategory');
  };

  /** List highlighted extensions, ordered by decreased importance */
  getExtensionsHighlighted = (): Promise<string> => {
    return this.ovh.request('GET', '/domain/extensions/highlighted');
  };

  /** List extensions with their pricing attributes. It especially documents whether an extension has been implemented recently or whether the price has dropped */
  getExtensionsPricingAttributes = (): Promise<DomainExtensionsExtensionsPricingAttributes> => {
    return this.ovh.request('GET', '/domain/extensions/pricingAttributes');
  };

  /** Get an extension */
  getExtensionsName = (name: string): Promise<DomainExtensionsExtension> => {
    return this.ovh.request('GET', `/domain/extensions/${name}`);
  };

  /** Retrieve registry configuration for an extension */
  getExtensionsNameRegistryConfigurations = (
    name: string
  ): Promise<DomainExtensionsRegistryConfigurationsRegistryConfigurations> => {
    return this.ovh.request('GET', `/domain/extensions/${name}/registryConfigurations`);
  };

  /** List available services */
  getZone = (): Promise<string> => {
    return this.ovh.request('GET', '/domain/zone');
  };

  /** Get this object properties */
  getZoneZoneName = (zoneName: string): Promise<DomainZoneZone> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}`);
  };

  /** Zone capabilities */
  getZoneZoneNameCapabilities = (zoneName: string): Promise<ZoneCapabilities> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/capabilities`);
  };

  /** Launch a contact change procedure */
  postZoneZoneNameChangeContact = (
    zoneName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postZoneZoneNameConfirmTermination = (
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
  deleteZoneZoneNameDnssec = (zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dnssec`);
  };

  /** Get this object properties */
  getZoneZoneNameDnssec = (zoneName: string): Promise<DomainZoneDnssec> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dnssec`);
  };

  /** Enable Dnssec */
  postZoneZoneNameDnssec = (zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dnssec`);
  };

  /** DynHost' logins */
  getZoneZoneNameDynHostLogin = (zoneName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/login`);
  };

  /** Create a new DynHost login */
  postZoneZoneNameDynHostLogin = (
    zoneName: string,
    body: { loginSuffix: string; password: string; subDomain: string }
  ): Promise<DomainZoneDynHostLogin> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dynHost/login`, body);
  };

  /** Delete a DynHost login */
  deleteZoneZoneNameDynHostLoginLogin = (login: string, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dynHost/login/${login}`);
  };

  /** Get this object properties */
  getZoneZoneNameDynHostLoginLogin = (
    login: string,
    zoneName: string
  ): Promise<DomainZoneDynHostLogin> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/login/${login}`);
  };

  /** Alter this object properties */
  putZoneZoneNameDynHostLoginLogin = (
    login: string,
    zoneName: string,
    body: DomainZoneDynHostLogin
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/dynHost/login/${login}`, body);
  };

  /** Change password of the DynHost login */
  postZoneZoneNameDynHostLoginLoginChangePassword = (
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
  getZoneZoneNameDynHostRecord = (zoneName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/record`);
  };

  /** Create a new DynHost record (Don't forget to refresh the zone) */
  postZoneZoneNameDynHostRecord = (
    zoneName: string,
    body: { ip: string; subDomain?: string }
  ): Promise<DomainZoneDynHostRecord> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/dynHost/record`, body);
  };

  /** Delete a DynHost record (Don't forget to refresh the zone) */
  deleteZoneZoneNameDynHostRecordId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/dynHost/record/${id}`);
  };

  /** Get this object properties */
  getZoneZoneNameDynHostRecordId = (
    id: number,
    zoneName: string
  ): Promise<DomainZoneDynHostRecord> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/dynHost/record/${id}`);
  };

  /** Alter this object properties */
  putZoneZoneNameDynHostRecordId = (
    id: number,
    zoneName: string,
    body: DomainZoneDynHostRecord
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/dynHost/record/${id}`, body);
  };

  /** Export zone */
  getZoneZoneNameExport = (zoneName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/export`);
  };

  /** Zone restore points */
  getZoneZoneNameHistory = (zoneName: string): Promise<Date> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/history`);
  };

  /** Get this object properties */
  getZoneZoneNameHistoryCreationDate = (
    creationDate: Date,
    zoneName: string
  ): Promise<DomainZoneZoneRestorePoint> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/history/${creationDate}`);
  };

  /** Restore the DNS zone */
  postZoneZoneNameHistoryCreationDateRestore = (
    creationDate: Date,
    zoneName: string
  ): Promise<DomainZoneTask> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/history/${creationDate}/restore`);
  };

  /** Import zone */
  postZoneZoneNameImport = (
    zoneName: string,
    body: { zoneFile: string }
  ): Promise<DomainZoneTask> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/import`, body);
  };

  /** List zone options */
  getZoneZoneNameOption = (zoneName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option`);
  };

  /** Get this object properties */
  getZoneZoneNameOptionName = (name: string, zoneName: string): Promise<DomainZoneOption> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option/${name}`);
  };

  /** Get this object properties */
  getZoneZoneNameOptionNameServiceInfos = (
    name: string,
    zoneName: string
  ): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/option/${name}/serviceInfos`);
  };

  /** Alter this object properties */
  putZoneZoneNameOptionNameServiceInfos = (
    name: string,
    zoneName: string,
    body: { renew: ServiceRenewType }
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/option/${name}/serviceInfos`, body);
  };

  /** Records of the zone */
  getZoneZoneNameRecord = (zoneName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/record`);
  };

  /** Create a new DNS record (Don't forget to refresh the zone) */
  postZoneZoneNameRecord = (
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
  deleteZoneZoneNameRecordId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/record/${id}`);
  };

  /** Get this object properties */
  getZoneZoneNameRecordId = (id: number, zoneName: string): Promise<DomainZoneRecord> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/record/${id}`);
  };

  /** Alter this object properties */
  putZoneZoneNameRecordId = (
    id: number,
    zoneName: string,
    body: DomainZoneRecord
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/record/${id}`, body);
  };

  /** Redirections */
  getZoneZoneNameRedirection = (zoneName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/redirection`);
  };

  /** Create a new redirection (Don't forget to refresh the zone) */
  postZoneZoneNameRedirection = (
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
  deleteZoneZoneNameRedirectionId = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/zone/${zoneName}/redirection/${id}`);
  };

  /** Get this object properties */
  getZoneZoneNameRedirectionId = (id: number, zoneName: string): Promise<DomainZoneRedirection> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/redirection/${id}`);
  };

  /** Alter this object properties */
  putZoneZoneNameRedirectionId = (
    id: number,
    zoneName: string,
    body: DomainZoneRedirection
  ): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/redirection/${id}`, body);
  };

  /** Apply zone modification on DNS servers */
  postZoneZoneNameRefresh = (zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/refresh`);
  };

  /** Reset the DNS zone */
  postZoneZoneNameReset = (
    zoneName: string,
    body: { DnsRecords?: ZoneResetRecord; minimized?: boolean }
  ): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/reset`, body);
  };

  /** Get this object properties */
  getZoneZoneNameServiceInfos = (zoneName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/serviceInfos`);
  };

  /** Alter this object properties */
  putZoneZoneNameServiceInfos = (zoneName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/serviceInfos`, body);
  };

  /** Get this object properties */
  getZoneZoneNameSoa = (zoneName: string): Promise<DomainZoneSoa> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/soa`);
  };

  /** Alter this object properties */
  putZoneZoneNameSoa = (zoneName: string, body: DomainZoneSoa): Promise<void> => {
    return this.ovh.request('PUT', `/domain/zone/${zoneName}/soa`, body);
  };

  /** Zone status */
  getZoneZoneNameStatus = (zoneName: string): Promise<ZoneStatus> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/status`);
  };

  /** Domain pending tasks */
  getZoneZoneNameTask = (zoneName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/task`);
  };

  /** Get this object properties */
  getZoneZoneNameTaskId = (id: number, zoneName: string): Promise<DomainZoneTask> => {
    return this.ovh.request('GET', `/domain/zone/${zoneName}/task/${id}`);
  };

  /** Accelerate the task */
  postZoneZoneNameTaskIdAccelerate = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/accelerate`);
  };

  /** Cancel the task */
  postZoneZoneNameTaskIdCancel = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/cancel`);
  };

  /** Relaunch the task */
  postZoneZoneNameTaskIdRelaunch = (id: number, zoneName: string): Promise<void> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/task/${id}/relaunch`);
  };

  /** Terminate your service */
  postZoneZoneNameTerminate = (zoneName: string): Promise<string> => {
    return this.ovh.request('POST', `/domain/zone/${zoneName}/terminate`);
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<DomainDomain> => {
    return this.ovh.request('GET', `/domain/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: DomainDomain): Promise<void> => {
    return this.ovh.request('PUT', `/domain/${serviceName}`, body);
  };

  /** Return authInfo code if the domain is unlocked */
  getServiceNameAuthInfo = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/${serviceName}/authInfo`);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/domain/${serviceName}/changeContact`, body);
  };

  /** Retrieve obfuscated emails configuration */
  getServiceNameConfigurationsObfuscatedEmails = (
    serviceName: string
  ): Promise<DomainConfigurationsObfuscatedEmail> => {
    return this.ovh.request('GET', `/domain/${serviceName}/configurations/obfuscatedEmails`);
  };

  /** Save a new obfuscated emails configuration */
  putServiceNameConfigurationsObfuscatedEmails = (
    serviceName: string,
    body: DomainConfigurationsObfuscatedEmailUpdatePayload
  ): Promise<DomainConfigurationsObfuscatedEmail> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/configurations/obfuscatedEmails`, body);
  };

  /** Refresh an obfuscated emails configuration with new values */
  postServiceNameConfigurationsObfuscatedEmailsRefresh = (
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
  getServiceNameConfigurationsOptin = (serviceName: string): Promise<DomainConfigurationsOptin> => {
    return this.ovh.request('GET', `/domain/${serviceName}/configurations/optin`);
  };

  /** Save a new optin configuration */
  putServiceNameConfigurationsOptin = (
    serviceName: string,
    body: DomainConfigurationsOptinUpdatePayload
  ): Promise<DomainConfigurationsOptin> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/configurations/optin`, body);
  };

  /** List of domain's DS Records */
  getServiceNameDsRecord = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/${serviceName}/dsRecord`);
  };

  /** Update DS records */
  postServiceNameDsRecord = (
    serviceName: string,
    body: { keys: DnssecKey }
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/dsRecord`, body);
  };

  /** Get this object properties */
  getServiceNameDsRecordId = (id: number, serviceName: string): Promise<DomainDnssecKey> => {
    return this.ovh.request('GET', `/domain/${serviceName}/dsRecord/${id}`);
  };

  /** List of glue records */
  getServiceNameGlueRecord = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/domain/${serviceName}/glueRecord`);
  };

  /** Create a glue record */
  postServiceNameGlueRecord = (
    serviceName: string,
    body: DomainGlueRecordCreatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/glueRecord`, body);
  };

  /** Delete the glue record */
  deleteServiceNameGlueRecordHost = (serviceName: string, host: string): Promise<DomainTask> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/glueRecord/${host}`);
  };

  /** Get this glue record */
  getServiceNameGlueRecordHost = (
    serviceName: string,
    host: string
  ): Promise<DomainGlueRecordGlueRecord> => {
    return this.ovh.request('GET', `/domain/${serviceName}/glueRecord/${host}`);
  };

  /** Update the glue record */
  postServiceNameGlueRecordHostUpdate = (
    serviceName: string,
    host: string,
    body: DomainGlueRecordGlueRecord
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/glueRecord/${host}/update`, body);
  };

  /** List of current name servers */
  getServiceNameNameServer = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer`);
  };

  /** Add new name server */
  postServiceNameNameServer = (
    serviceName: string,
    body: DomainNameServerCreatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServer`, body);
  };

  /** Delete a name server */
  deleteServiceNameNameServerId = (serviceName: string, id: number): Promise<DomainTask> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/nameServer/${id}`);
  };

  /** Get this name server configuration */
  getServiceNameNameServerId = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerFullNameServer> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer/${id}`);
  };

  /** Get name server status */
  getServiceNameNameServerIdStatus = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerNameServerStatus> => {
    return this.ovh.request('GET', `/domain/${serviceName}/nameServer/${id}/status`);
  };

  /** Get name server status */
  postServiceNameNameServerIdStatus = (
    serviceName: string,
    id: number
  ): Promise<DomainNameServerNameServerStatus> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServer/${id}/status`);
  };

  /** Update DNS servers */
  postServiceNameNameServersUpdate = (
    serviceName: string,
    body: DomainNameServerUpdatePayload
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/nameServers/update`, body);
  };

  /** List domain options */
  getServiceNameOption = (serviceName: string): Promise<DomainDomainOptionEnum> => {
    return this.ovh.request('GET', `/domain/${serviceName}/option`);
  };

  /** Remove a given option */
  deleteServiceNameOptionOption = (
    serviceName: string,
    option: DomainDomainOptionEnum
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/option/${option}`);
  };

  /** Get details on this domain option */
  getServiceNameOptionOption = (
    serviceName: string,
    option: DomainDomainOptionEnum
  ): Promise<DomainOption> => {
    return this.ovh.request('GET', `/domain/${serviceName}/option/${option}`);
  };

  /** Retrieve data about the options associated to a domain */
  getServiceNameOptions = (serviceName: string): Promise<DomainServiceOptions> => {
    return this.ovh.request('GET', `/domain/${serviceName}/options`);
  };

  /** Approve Outgoing Transfer for a domain */
  postServiceNameOutgoingTransferApprove = (
    serviceName: string,
    body: DomainOutgoingTransferApprove
  ): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/outgoingTransfer/approve`, body);
  };

  /** List of whois obfuscators */
  getServiceNameOwo = (serviceName: string): Promise<DomainWhoisObfuscatorFieldsEnum> => {
    return this.ovh.request('GET', `/domain/${serviceName}/owo`);
  };

  /** Add whois obfuscators */
  postServiceNameOwo = (
    serviceName: string,
    body: { fields: DomainWhoisObfuscatorFieldsEnum }
  ): Promise<DomainWhoisObfuscatorFieldsEnum> => {
    return this.ovh.request('POST', `/domain/${serviceName}/owo`, body);
  };

  /** Delete a whois obfuscator */
  deleteServiceNameOwoField = (
    field: DomainWhoisObfuscatorFieldsEnum,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/domain/${serviceName}/owo/${field}`);
  };

  /** Get this object properties */
  getServiceNameOwoField = (
    field: DomainWhoisObfuscatorFieldsEnum,
    serviceName: string
  ): Promise<DomainOwo> => {
    return this.ovh.request('GET', `/domain/${serviceName}/owo/${field}`);
  };

  /** Retrieve emails obfuscation rule */
  getServiceNameRulesEmailsObfuscation = (
    serviceName: string
  ): Promise<DomainConfigurationsContactTypeEnum> => {
    return this.ovh.request('GET', `/domain/${serviceName}/rules/emailsObfuscation`);
  };

  /** Retrieve optin rule */
  getServiceNameRulesOptin = (serviceName: string): Promise<DomainRulesOptin> => {
    return this.ovh.request('GET', `/domain/${serviceName}/rules/optin`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/domain/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/domain/${serviceName}/serviceInfos`, body);
  };

  /** List all domain tasks */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/domain/${serviceName}/task`);
  };

  /** Get details about a domain task */
  getServiceNameTaskId = (serviceName: string, id: number): Promise<DomainTask> => {
    return this.ovh.request('GET', `/domain/${serviceName}/task/${id}`);
  };

  /** Accelerate the task */
  postServiceNameTaskIdAccelerate = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/accelerate`);
  };

  /** Cancel the task */
  postServiceNameTaskIdCancel = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/cancel`);
  };

  /** Relaunch the task */
  postServiceNameTaskIdRelaunch = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('POST', `/domain/${serviceName}/task/${id}/relaunch`);
  };

  /** Schedule an outgoing transfer task for this domain (.uk only) */
  postServiceNameUkOutgoingTransfer = (
    serviceName: string,
    body: DomainUkRegistrar
  ): Promise<DomainTask> => {
    return this.ovh.request('POST', `/domain/${serviceName}/ukOutgoingTransfer`, body);
  };

  /** Return the list of all .uk registrars */
  getServiceNameUkRegistrars = (serviceName: string): Promise<DomainUkRegistrar> => {
    return this.ovh.request('GET', `/domain/${serviceName}/ukRegistrars`);
  };
}

export default DomainHandler;
