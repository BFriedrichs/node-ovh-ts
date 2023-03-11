/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTemplateOsInfo } from '../models/DedicatedTemplateOsInfo';
import { DedicatedInstallationTemplateTemplatePartitioningSchemes } from '../models/DedicatedInstallationTemplateTemplatePartitioningSchemes';
import { DedicatedInstallationTemplateTemplates } from '../models/DedicatedInstallationTemplateTemplates';
import { DedicatedInstallationTemplateHardwareRaid } from '../models/DedicatedInstallationTemplateHardwareRaid';
import { DedicatedInstallationTemplateTemplatePartitions } from '../models/DedicatedInstallationTemplateTemplatePartitions';
import OVHBase from '../ovh';

class DedicatedInstallationTemplateHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** OVH operating system installation templates */
  getInstallationTemplate = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/installationTemplate');
  };

  /** Get details about available distributions for dedicated servers */
  getInstallationTemplateTemplateInfos = (): Promise<DedicatedTemplateOsInfo> => {
    return this.ovh.request('GET', '/dedicated/installationTemplate/templateInfos');
  };

  /** Get this object properties */
  getInstallationTemplateTemplateName = (
    templateName: string
  ): Promise<DedicatedInstallationTemplateTemplates> => {
    return this.ovh.request('GET', `/dedicated/installationTemplate/${templateName}`);
  };

  /** Partitioning schemes available on this template */
  getInstallationTemplateTemplateNamePartitionScheme = (templateName: string): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme`
    );
  };

  /** Get this object properties */
  getInstallationTemplateTemplateNamePartitionSchemeSchemeName = (
    schemeName: string,
    templateName: string
  ): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}`
    );
  };

  /** Hardware RAIDs defined in this partitioning scheme */
  getInstallationTemplateTemplateNamePartitionSchemeSchemeNameHardwareRaid = (
    schemeName: string,
    templateName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`
    );
  };

  /** Get this object properties */
  getInstallationTemplateTemplateNamePartitionSchemeSchemeNameHardwareRaidName = (
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
  getInstallationTemplateTemplateNamePartitionSchemeSchemeNamePartition = (
    schemeName: string,
    templateName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`
    );
  };

  /** Get this object properties */
  getInstallationTemplateTemplateNamePartitionSchemeSchemeNamePartitionMountpoint = (
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

export default DedicatedInstallationTemplateHandler;
