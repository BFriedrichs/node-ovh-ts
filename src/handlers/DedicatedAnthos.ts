/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAnthosPublicAddressRange } from '../models/DedicatedAnthosPublicAddressRange';
import { DedicatedAnthosBaremetal } from '../models/DedicatedAnthosBaremetal';
import { ServicesService } from '../models/ServicesService';
import { DedicatedAnthosPrivateAddressRange } from '../models/DedicatedAnthosPrivateAddressRange';
import { DedicatedAnthosTenantAccess } from '../models/DedicatedAnthosTenantAccess';
import { DedicatedAnthosUsage } from '../models/DedicatedAnthosUsage';
import { DedicatedAnthosTenant } from '../models/DedicatedAnthosTenant';
import { DedicatedAnthosStorageVM } from '../models/DedicatedAnthosStorageVM';
import { DedicatedAnthosVersionInfo } from '../models/DedicatedAnthosVersionInfo';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DedicatedAnthosCapabilities } from '../models/DedicatedAnthosCapabilities';
import { DedicatedAnthosUpgradeAnthosRequest } from '../models/DedicatedAnthosUpgradeAnthosRequest';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DedicatedAnthosIpRestrictionUpsert } from '../models/DedicatedAnthosIpRestrictionUpsert';
import OVHBase from '../ovh';

class DedicatedAnthosHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available regions and versions */
  getAnthosCapabilities = (): Promise<DedicatedAnthosCapabilities> => {
    return this.ovh.request('GET', '/dedicated/anthos/capabilities');
  };

  /** List your Anthos tenants */
  getAnthosTenants = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/anthos/tenants');
  };

  /** Get an Anthos tenant */
  getAnthosTenantsServiceName = (serviceName: string): Promise<DedicatedAnthosTenant> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}`);
  };

  /** Edit an Anthos tenant */
  putAnthosTenantsServiceName = (
    serviceName: string,
    body: DedicatedAnthosTenant
  ): Promise<DedicatedAnthosTenant> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}`, body);
  };

  /** Start an upgrade */
  postAnthosTenantsServiceNameActionsUpgrade = (
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
  getAnthosTenantsServiceNameAvailableVersions = (
    serviceName: string
  ): Promise<DedicatedAnthosVersionInfo> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/availableVersions`);
  };

  /** List baremetal servers */
  getAnthosTenantsServiceNameBaremetals = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/baremetals`);
  };

  /** Get a baremetal server */
  getAnthosTenantsServiceNameBaremetalsBaremetalId = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}`
    );
  };

  /** Edit a baremetal server */
  putAnthosTenantsServiceNameBaremetalsBaremetalId = (
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
  postAnthosTenantsServiceNameBaremetalsBaremetalIdActionsReinstall = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}/actions/reinstall`
    );
  };

  /** Restart a baremetal server */
  postAnthosTenantsServiceNameBaremetalsBaremetalIdActionsRestart = (
    baremetalId: string,
    serviceName: string
  ): Promise<DedicatedAnthosBaremetal> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/baremetals/${baremetalId}/actions/restart`
    );
  };

  /** Launch a contact change procedure */
  postAnthosTenantsServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postAnthosTenantsServiceNameConfirmTermination = (
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
  postAnthosTenantsServiceNameCredentialsReset = (
    serviceName: string
  ): Promise<DedicatedAnthosTenantAccess> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/credentials/reset`);
  };

  /** List ip restrictions */
  getAnthosTenantsServiceNameIpRestrictions = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`);
  };

  /** Append a list of ip restrictions */
  postAnthosTenantsServiceNameIpRestrictions = (
    serviceName: string,
    body: DedicatedAnthosIpRestrictionUpsert
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`,
      body
    );
  };

  /** Remove the current list and add a list of ip restrictions */
  putAnthosTenantsServiceNameIpRestrictions = (
    serviceName: string,
    body: DedicatedAnthosIpRestrictionUpsert
  ): Promise<string> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}/ipRestrictions`, body);
  };

  /** Delete an ip restriction */
  deleteAnthosTenantsServiceNameIpRestrictionsIp = (
    ip: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/ipRestrictions/${ip}`
    );
  };

  /** List private IP ranges */
  getAnthosTenantsServiceNameIpsPrivate = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ips/private`);
  };

  /** Create a new private IP range */
  postAnthosTenantsServiceNameIpsPrivate = (
    serviceName: string,
    body: DedicatedAnthosPrivateAddressRange
  ): Promise<DedicatedAnthosPrivateAddressRange> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/ips/private`, body);
  };

  /** Delete a private IP range */
  deleteAnthosTenantsServiceNameIpsPrivateRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/ips/private/${rangeId}`
    );
  };

  /** Get a private IP range */
  getAnthosTenantsServiceNameIpsPrivateRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<DedicatedAnthosPrivateAddressRange> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/ips/private/${rangeId}`
    );
  };

  /** List public IP ranges */
  getAnthosTenantsServiceNameIpsPublic = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/ips/public`);
  };

  /** Get a public IP range */
  getAnthosTenantsServiceNameIpsPublicRangeId = (
    rangeId: string,
    serviceName: string
  ): Promise<DedicatedAnthosPublicAddressRange> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/ips/public/${rangeId}`
    );
  };

  /** Get this object properties */
  getAnthosTenantsServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putAnthosTenantsServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/anthos/tenants/${serviceName}/serviceInfos`, body);
  };

  /** List SVMs */
  getAnthosTenantsServiceNameStorageNetappSvms = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms`);
  };

  /** Create a new SVM */
  postAnthosTenantsServiceNameStorageNetappSvms = (
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
  deleteAnthosTenantsServiceNameStorageNetappSvmsStorageVmId = (
    serviceName: string,
    storageVmId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms/${storageVmId}`
    );
  };

  /** Get a SVM */
  getAnthosTenantsServiceNameStorageNetappSvmsStorageVmId = (
    serviceName: string,
    storageVmId: string
  ): Promise<DedicatedAnthosStorageVM> => {
    return this.ovh.request(
      'GET',
      `/dedicated/anthos/tenants/${serviceName}/storage/netapp/svms/${storageVmId}`
    );
  };

  /** Get total storage usage */
  getAnthosTenantsServiceNameStorageNetappUsage = (
    serviceName: string
  ): Promise<DedicatedAnthosUsage> => {
    return this.ovh.request('GET', `/dedicated/anthos/tenants/${serviceName}/storage/netapp/usage`);
  };

  /** Terminate your service */
  postAnthosTenantsServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/anthos/tenants/${serviceName}/terminate`);
  };
}

export default DedicatedAnthosHandler;
