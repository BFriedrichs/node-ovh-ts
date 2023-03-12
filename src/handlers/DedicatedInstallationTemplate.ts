/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedInstallationTemplateTemplatePartitions } from '../models/DedicatedInstallationTemplateTemplatePartitions';
import { DedicatedInstallationTemplateTemplates } from '../models/DedicatedInstallationTemplateTemplates';
import { DedicatedTemplateOsInfo } from '../models/DedicatedTemplateOsInfo';
import { DedicatedInstallationTemplateTemplatePartitioningSchemes } from '../models/DedicatedInstallationTemplateTemplatePartitioningSchemes';
import { DedicatedInstallationTemplateHardwareRaid } from '../models/DedicatedInstallationTemplateHardwareRaid';
import OVHBase from '../ovh';

class DedicatedInstallationTemplateHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** OVH operating system installation templates */
  getInstallationTemplate = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/installationTemplate');
  };

  /** Get details about available distributions for dedicated servers */
  getInstallationTemplateTemplateInfos = (): Promise<DedicatedTemplateOsInfo[]> => {
    return this.ovh.request('GET', '/dedicated/installationTemplate/templateInfos');
  };

  /** Get this object properties */
  getInstallationTemplateByTemplateName = (
    templateName: string
  ): Promise<DedicatedInstallationTemplateTemplates> => {
    return this.ovh.request('GET', `/dedicated/installationTemplate/${templateName}`);
  };

  /** Partitioning schemes available on this template */
  getInstallationTemplatePartitionSchemeByTemplateName = (
    templateName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme`
    );
  };

  /** Get this object properties */
  getInstallationTemplatePartitionSchemeByTemplateNameAndSchemeName = (
    schemeName: string,
    templateName: string
  ): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}`
    );
  };

  /** Hardware RAIDs defined in this partitioning scheme */
  getInstallationTemplatePartitionSchemeHardwareRaidByTemplateNameAndSchemeName = (
    schemeName: string,
    templateName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`
    );
  };

  /** Get this object properties */
  getInstallationTemplatePartitionSchemeHardwareRaidByTemplateNameAndSchemeNameAndName = (
    name: string,
    schemeName: string,
    templateName: string
  ): Promise<DedicatedInstallationTemplateHardwareRaid> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`
    );
  };

  /** Partitions defined in this partitioning scheme */
  getInstallationTemplatePartitionSchemePartitionByTemplateNameAndSchemeName = (
    schemeName: string,
    templateName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`
    );
  };

  /** Get this object properties */
  getInstallationTemplatePartitionSchemePartitionByTemplateNameAndSchemeNameAndMountpoint = (
    mountpoint: string,
    schemeName: string,
    templateName: string
  ): Promise<DedicatedInstallationTemplateTemplatePartitions> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`
    );
  };
}

export { DedicatedInstallationTemplateHandler };
