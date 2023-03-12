/* WARNING: This file is auto-generated . Do not edit manually. */

import { VrackVrackZoneEnum } from '../models/VrackVrackZoneEnum';
import { VrackIplb } from '../models/VrackIplb';
import { VrackDedicatedServerInterface } from '../models/VrackDedicatedServerInterface';
import { ServicesNonExpiringService } from '../models/ServicesNonExpiringService';
import { VrackTask } from '../models/VrackTask';
import { VrackPccDatacenter } from '../models/VrackPccDatacenter';
import { VrackEligibleServicesResponse } from '../models/VrackEligibleServicesResponse';
import { VrackAllowedDedicatedServerInterfaces } from '../models/VrackAllowedDedicatedServerInterfaces';
import { VrackIp } from '../models/VrackIp';
import { DedicatedServerMrtgPeriodEnum } from '../models/DedicatedServerMrtgPeriodEnum';
import { VrackDedicatedServer } from '../models/VrackDedicatedServer';
import { VrackLegacyVrack } from '../models/VrackLegacyVrack';
import { VrackVrack } from '../models/VrackVrack';
import { VrackDedicatedConnect } from '../models/VrackDedicatedConnect';
import { VrackOvhCloudConnect } from '../models/VrackOvhCloudConnect';
import { VrackCloudProject } from '../models/VrackCloudProject';
import { DedicatedServerMrtgTypeEnum } from '../models/DedicatedServerMrtgTypeEnum';
import { DedicatedServerMrtgTimestampValue } from '../models/DedicatedServerMrtgTimestampValue';
import { VrackAllowedServiceEnum } from '../models/VrackAllowedServiceEnum';
import { VrackDedicatedCloud } from '../models/VrackDedicatedCloud';
import { VrackAllowedServices } from '../models/VrackAllowedServices';
import OVHBase from '../ovh';

class VrackHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/vrack');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<VrackVrack> => {
    return this.ovh.request('GET', `/vrack/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: VrackVrack): Promise<void> => {
    return this.ovh.request('PUT', `/vrack/${serviceName}`, body);
  };

  /** List all services allowed in this vrack */
  listAllowedServicesByServiceName = (serviceName: string): Promise<VrackAllowedServices> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/allowedServices`);
  };

  /** vrack for publicCloud project */
  getCloudProjectByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/cloudProject`);
  };

  /** add a publicCloud project to this vrack */
  addCloudProjectByServiceName = (
    serviceName: string,
    body: { project: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/cloudProject`, body);
  };

  /** remove this publicCloud project from this vrack */
  deleteCloudProjectByServiceNameAndProject = (
    project: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/cloudProject/${project}`);
  };

  /** Get this object properties */
  getCloudProjectByServiceNameAndProject = (
    project: string,
    serviceName: string
  ): Promise<VrackCloudProject> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/cloudProject/${project}`);
  };

  /** vrack dedicated cloud (VmNetwork) */
  getDedicatedCloudByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloud`);
  };

  /** add a dedicatedCloud (VmNetwork) to this vrack */
  addDedicatedCloudByServiceName = (
    serviceName: string,
    body: { dedicatedCloud: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedCloud`, body);
  };

  /** remove this dedicatedCloud (VmNetwork) from this vrack */
  deleteDedicatedCloudByServiceNameAndDedicatedCloud = (
    dedicatedCloud: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`);
  };

  /** Get this object properties */
  getDedicatedCloudByServiceNameAndDedicatedCloud = (
    dedicatedCloud: string,
    serviceName: string
  ): Promise<VrackDedicatedCloud> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`);
  };

  /** vrack dedicated cloud datacenter */
  getDedicatedCloudDatacenterByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloudDatacenter`);
  };

  /** Get this object properties */
  getDedicatedCloudDatacenterByServiceNameAndDatacenter = (
    datacenter: string,
    serviceName: string
  ): Promise<VrackPccDatacenter> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}`);
  };

  /** Vracks allowed for your dedicatedCloud datacenter */
  getDedicatedCloudDatacenterAllowedVrackByServiceNameAndDatacenter = (
    datacenter: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/allowedVrack`
    );
  };

  /** Move your dedicatedCloud datacenter from a Vrack to another */
  postDedicatedCloudDatacenterMoveByServiceNameAndDatacenter = (
    datacenter: string,
    serviceName: string,
    body: { targetServiceName: string }
  ): Promise<VrackTask> => {
    return this.ovh.request(
      'POST',
      `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/move`,
      body
    );
  };

  /** vrack dedicated connect */
  getDedicatedConnectByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedConnect`);
  };

  /** Get this object properties */
  getDedicatedConnectByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<VrackDedicatedConnect> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedConnect/${name}`);
  };

  /** Alter this object properties */
  updateDedicatedConnectByServiceNameAndName = (
    name: string,
    serviceName: string,
    body: VrackDedicatedConnect
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vrack/${serviceName}/dedicatedConnect/${name}`, body);
  };

  /** vrack for dedicated server */
  getDedicatedServerByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer`);
  };

  /** add a dedicated server to this vrack (LEGACY) */
  addDedicatedServerByServiceName = (
    serviceName: string,
    body: { dedicatedServer: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedServer`, body);
  };

  /** remove this server from this vrack (LEGACY) */
  deleteDedicatedServerByServiceNameAndDedicatedServer = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`);
  };

  /** Get this object properties */
  getDedicatedServerByServiceNameAndDedicatedServer = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<VrackDedicatedServer> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`);
  };

  /** Retrieve vrack traffic graph values (LEGACY) */
  getDedicatedServerMrtgByServiceNameAndDedicatedServer = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<DedicatedServerMrtgTimestampValue[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}/mrtg`);
  };

  /** vrack for dedicated server interface */
  getDedicatedServerInterfaceByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServerInterface`);
  };

  /** add a dedicated server interface to this vrack */
  addDedicatedServerInterfaceByServiceName = (
    serviceName: string,
    body: { dedicatedServerInterface: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedServerInterface`, body);
  };

  /** remove this server interface from this vrack */
  deleteDedicatedServerInterfaceByServiceNameAndDedicatedServerInterface = (
    dedicatedServerInterface: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request(
      'DELETE',
      `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`
    );
  };

  /** Get this object properties */
  getDedicatedServerInterfaceByServiceNameAndDedicatedServerInterface = (
    dedicatedServerInterface: string,
    serviceName: string
  ): Promise<VrackDedicatedServerInterface> => {
    return this.ovh.request(
      'GET',
      `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`
    );
  };

  /** Details for all dedicated server interfaces in this vrack */
  getDedicatedServerInterfaceDetailsByServiceName = (
    serviceName: string
  ): Promise<VrackAllowedDedicatedServerInterfaces[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServerInterfaceDetails`);
  };

  /** List all eligible services for this vRack asynchronously */
  listEligibleServicesByServiceName = (
    serviceName: string
  ): Promise<VrackEligibleServicesResponse> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/eligibleServices`);
  };

  /** vrack for IP blocks */
  getIpByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip`);
  };

  /** add an IP block to this vrack */
  addIpByServiceName = (serviceName: string, body: { block: string }): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ip`, body);
  };

  /** remove this IP block from this vrack */
  deleteIpByServiceNameAndIp = (ip: string, serviceName: string): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ip/${ip}`);
  };

  /** Get this object properties */
  getIpByServiceNameAndIp = (ip: string, serviceName: string): Promise<VrackIp> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip/${ip}`);
  };

  /** Announce IP to zone for vrack */
  postIpAnnounceInZoneByServiceNameAndIp = (
    ip: string,
    serviceName: string,
    body: { zone: VrackVrackZoneEnum }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ip/${ip}/announceInZone`, body);
  };

  /** Zone available to announce your block */
  getIpAvailableZoneByServiceNameAndIp = (
    ip: string,
    serviceName: string
  ): Promise<VrackVrackZoneEnum[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip/${ip}/availableZone`);
  };

  /** vrack for ipLoadbalancing */
  getIpLoadbalancingByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ipLoadbalancing`);
  };

  /** add an ipLoadbalancing to this vrack */
  addIpLoadbalancingByServiceName = (
    serviceName: string,
    body: { ipLoadbalancing: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ipLoadbalancing`, body);
  };

  /** remove this ipLoadbalancing from this vrack */
  deleteIpLoadbalancingByServiceNameAndIpLoadbalancing = (
    ipLoadbalancing: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`);
  };

  /** Get this object properties */
  getIpLoadbalancingByServiceNameAndIpLoadbalancing = (
    ipLoadbalancing: string,
    serviceName: string
  ): Promise<VrackIplb> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`);
  };

  /** vrack for legacy vrack */
  getLegacyVrackByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/legacyVrack`);
  };

  /** add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX) */
  addLegacyVrackByServiceName = (
    serviceName: string,
    body: { legacyVrack: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/legacyVrack`, body);
  };

  /** remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX) */
  deleteLegacyVrackByServiceNameAndLegacyVrack = (
    legacyVrack: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/legacyVrack/${legacyVrack}`);
  };

  /** Get this object properties */
  getLegacyVrackByServiceNameAndLegacyVrack = (
    legacyVrack: string,
    serviceName: string
  ): Promise<VrackLegacyVrack> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/legacyVrack/${legacyVrack}`);
  };

  /** vrack for ovhCloudConnect */
  getOvhCloudConnectByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ovhCloudConnect`);
  };

  /** Add an ovhCloudConnect to the vrack */
  addOvhCloudConnectByServiceName = (
    serviceName: string,
    body: { ovhCloudConnect: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ovhCloudConnect`, body);
  };

  /** Remove the ovhCloudConnect from the vrack */
  deleteOvhCloudConnectByServiceNameAndOvhCloudConnect = (
    ovhCloudConnect: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ovhCloudConnect/${ovhCloudConnect}`);
  };

  /** Get this object properties */
  getOvhCloudConnectByServiceNameAndOvhCloudConnect = (
    ovhCloudConnect: string,
    serviceName: string
  ): Promise<VrackOvhCloudConnect> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ovhCloudConnect/${ovhCloudConnect}`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesNonExpiringService> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/serviceInfos`);
  };

  /** vrack tasks */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndTaskId = (serviceName: string, taskId: number): Promise<VrackTask> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/task/${taskId}`);
  };
}

export { VrackHandler };
