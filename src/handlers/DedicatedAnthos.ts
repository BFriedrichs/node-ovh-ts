/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAnthosPublicAddressRange } from '../models/DedicatedAnthosPublicAddressRange';
import { DedicatedAnthosTenant } from '../models/DedicatedAnthosTenant';
import { DedicatedAnthosTenantAccess } from '../models/DedicatedAnthosTenantAccess';
import { DedicatedAnthosVersionInfo } from '../models/DedicatedAnthosVersionInfo';
import { DedicatedAnthosBaremetal } from '../models/DedicatedAnthosBaremetal';
import { DedicatedAnthosCapabilities } from '../models/DedicatedAnthosCapabilities';
import { DedicatedAnthosUsage } from '../models/DedicatedAnthosUsage';
import { DedicatedAnthosStorageVM } from '../models/DedicatedAnthosStorageVM';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DedicatedAnthosIpRestrictionUpsert } from '../models/DedicatedAnthosIpRestrictionUpsert';
import { DedicatedAnthosPrivateAddressRange } from '../models/DedicatedAnthosPrivateAddressRange';
import { DedicatedAnthosUpgradeAnthosRequest } from '../models/DedicatedAnthosUpgradeAnthosRequest';
import OVHBase from '../ovh';

class DedicatedAnthosHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available regions and versions */
  listAnthosCapabilities = (): Promise<DedicatedAnthosCapabilities> => {
    return this.ovh.request('GET', '/dedicated/anthos/capabilities');
  };

  /** List your Anthos tenants */
  listAnthosTenants = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/anthos/tenants');
  };

  /** Get an Anthos tenant */
  getAnthosTenantsByServiceName = (serviceName: string): Promise<DedicatedAnthosTenant> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}`);
  };

  /** Edit an Anthos tenant */
  updateAnthosTenantsByServiceName = (
    serviceName: string,
    body: DedicatedAnthosTenant
  ): Promise<DedicatedAnthosTenant> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}`, body);
  };

  /** Start an upgrade */
  postAnthosTenantsActionsUpgradeByServiceName = (
    serviceName: string,
    body: DedicatedAnthosUpgradeAnthosRequest
  ): Promise<DedicatedAnthosTenant> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/actions/upgrade`,
      body
    );
  };

  /** List available Anthos versions for the tenant */
  listAnthosTenantsAvailableVersionsByServiceName = (
    serviceName: string
  ): Promise<DedicatedAnthosVersionInfo[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/availableVersions`);
  };

  /** List baremetal servers */
  listAnthosTenantsBaremetalsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/baremetals`);
  };

  /** Get a baremetal server */
  getAnthosTenantsBaremetalsByServiceNameAndBaremetalId = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}`
    );
  };

  /** Edit a baremetal server */
  updateAnthosTenantsBaremetalsByServiceNameAndBaremetalId = (
    baremetalId: string,
    serviceName: string,
    body: DedicatedAnthosBaremetal
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'PUT',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}`,
      body
    );
  };

  /** Reinstall a baremetal server */
  postAnthosTenantsBaremetalsActionsReinstallByServiceNameAndBaremetalId = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}/actions/reinstall`
    );
  };

  /** Restart a baremetal server */
  postAnthosTenantsBaremetalsActionsRestartByServiceNameAndBaremetalId = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}/actions/restart`
    );
  };

  /** Launch a contact change procedure */
  launchAnthosTenantsChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmAnthosTenantsTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/confirmTermination`,
      body
    );
  };

  /** Reset and return tenant admin access */
  postAnthosTenantsCredentialsResetByServiceName = (
    serviceName: string
  ): Promise<DedicatedAnthosTenantAccess> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/credentials/reset`);
  };

  /** List ip restrictions */
  listAnthosTenantsIpRestrictionsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`);
  };

  /** Append a list of ip restrictions */
  postAnthosTenantsIpRestrictionsByServiceName = (
    serviceName: string,
    body: DedicatedAnthosIpRestrictionUpsert
  ): Promise<string[]> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`,
      body
    );
  };

  /** Remove the current list and add a list of ip restrictions */
  putAnthosTenantsIpRestrictionsByServiceName = (
    serviceName: string,
    body: DedicatedAnthosIpRestrictionUpsert
  ): Promise<string[]> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`, body);
  };

  /** Delete an ip restriction */
  deleteAnthosTenantsIpRestrictionsByServiceNameAndIp = (
    ip: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/ipRestrictions/${ip}`
    );
  };

  /** List private IP ranges */
  listAnthosTenantsIpsPrivateByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ips/private`);
  };

  /** Create a new private IP range */
  createAnthosTenantsIpsPrivateByServiceName = (
    serviceName: string,
    body: DedicatedAnthosPrivateAddressRange
  ): Promise<DedicatedAnthosPrivateAddressRange> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/ips/private`, body);
  };

  /** Delete a private IP range */
  deleteAnthosTenantsIpsPrivateByServiceNameAndRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/ips/private/${rangeId}`
    );
  };

  /** Get a private IP range */
  getAnthosTenantsIpsPrivateByServiceNameAndRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<DedicatedAnthosPrivateAddressRange> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/ips/private/${rangeId}`
    );
  };

  /** List public IP ranges */
  listAnthosTenantsIpsPublicByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ips/public`);
  };

  /** Get a public IP range */
  getAnthosTenantsIpsPublicByServiceNameAndRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<DedicatedAnthosPublicAddressRange> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/ips/public/${rangeId}`
    );
  };

  /** Get this object properties */
  getAnthosTenantsServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateAnthosTenantsServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}/serviceInfos`, body);
  };

  /** List SVMs */
  listAnthosTenantsStorageNetappSvmsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms`);
  };

  /** Create a new SVM */
  createAnthosTenantsStorageNetappSvmsByServiceName = (
    serviceName: string,
    body: DedicatedAnthosStorageVM
  ): Promise<DedicatedAnthosStorageVM> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms`,
      body
    );
  };

  /** Delete a SVM */
  deleteAnthosTenantsStorageNetappSvmsByServiceNameAndStorageVmId = (
    serviceName: string,
    storageVmId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms/${storageVmId}`
    );
  };

  /** Get a SVM */
  getAnthosTenantsStorageNetappSvmsByServiceNameAndStorageVmId = (
    serviceName: string,
    storageVmId: string
  ): Promise<DedicatedAnthosStorageVM> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms/${storageVmId}`
    );
  };

  /** Get total storage usage */
  getAnthosTenantsStorageNetappUsageByServiceName = (
    serviceName: string
  ): Promise<DedicatedAnthosUsage> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/storage/netapp/usage`);
  };

  /** Terminate your service */
  postAnthosTenantsTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/terminate`);
  };
}

export { DedicatedAnthosHandler };
