/* WARNING: This file is auto-generated . Do not edit manually. */

import { VrackDedicatedServer } from '../models/VrackDedicatedServer';
import { DedicatedServerMrtgTypeEnum } from '../models/DedicatedServerMrtgTypeEnum';
import { VrackLegacyVrack } from '../models/VrackLegacyVrack';
import { VrackIplb } from '../models/VrackIplb';
import { VrackPccDatacenter } from '../models/VrackPccDatacenter';
import { VrackDedicatedCloud } from '../models/VrackDedicatedCloud';
import { VrackAllowedDedicatedServerInterfaces } from '../models/VrackAllowedDedicatedServerInterfaces';
import { VrackTask } from '../models/VrackTask';
import { VrackVrackZoneEnum } from '../models/VrackVrackZoneEnum';
import { ServicesNonExpiringService } from '../models/ServicesNonExpiringService';
import { VrackDedicatedServerInterface } from '../models/VrackDedicatedServerInterface';
import { VrackDedicatedConnect } from '../models/VrackDedicatedConnect';
import { VrackEligibleServicesResponse } from '../models/VrackEligibleServicesResponse';
import { VrackCloudProject } from '../models/VrackCloudProject';
import { VrackIp } from '../models/VrackIp';
import { VrackVrack } from '../models/VrackVrack';
import { DedicatedServerMrtgTimestampValue } from '../models/DedicatedServerMrtgTimestampValue';
import { DedicatedServerMrtgPeriodEnum } from '../models/DedicatedServerMrtgPeriodEnum';
import { VrackAllowedServices } from '../models/VrackAllowedServices';
import { VrackOvhCloudConnect } from '../models/VrackOvhCloudConnect';
import { VrackAllowedServiceEnum } from '../models/VrackAllowedServiceEnum';
import OVHBase from '../ovh';

class VrackHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/vrack');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<VrackVrack> => {
    return this.ovh.request('GET', `/vrack/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: VrackVrack): Promise<void> => {
    return this.ovh.request('PUT', `/vrack/${serviceName}`, body);
  };

  /** List all services allowed in this vrack */
  getServiceNameAllowedServices = (serviceName: string): Promise<VrackAllowedServices> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/allowedServices`);
  };

  /** vrack for publicCloud project */
  getServiceNameCloudProject = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/cloudProject`);
  };

  /** add a publicCloud project to this vrack */
  postServiceNameCloudProject = (
    serviceName: string,
    body: { project: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/cloudProject`, body);
  };

  /** remove this publicCloud project from this vrack */
  deleteServiceNameCloudProjectProject = (
    project: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/cloudProject/${project}`);
  };

  /** Get this object properties */
  getServiceNameCloudProjectProject = (
    project: string,
    serviceName: string
  ): Promise<VrackCloudProject> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/cloudProject/${project}`);
  };

  /** vrack dedicated cloud (VmNetwork) */
  getServiceNameDedicatedCloud = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloud`);
  };

  /** add a dedicatedCloud (VmNetwork) to this vrack */
  postServiceNameDedicatedCloud = (
    serviceName: string,
    body: { dedicatedCloud: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedCloud`, body);
  };

  /** remove this dedicatedCloud (VmNetwork) from this vrack */
  deleteServiceNameDedicatedCloudDedicatedCloud = (
    dedicatedCloud: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`);
  };

  /** Get this object properties */
  getServiceNameDedicatedCloudDedicatedCloud = (
    dedicatedCloud: string,
    serviceName: string
  ): Promise<VrackDedicatedCloud> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`);
  };

  /** vrack dedicated cloud datacenter */
  getServiceNameDedicatedCloudDatacenter = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloudDatacenter`);
  };

  /** Get this object properties */
  getServiceNameDedicatedCloudDatacenterDatacenter = (
    datacenter: string,
    serviceName: string
  ): Promise<VrackPccDatacenter> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}`);
  };

  /** Vracks allowed for your dedicatedCloud datacenter */
  getServiceNameDedicatedCloudDatacenterDatacenterAllowedVrack = (
    datacenter: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/allowedVrack`
    );
  };

  /** Move your dedicatedCloud datacenter from a Vrack to another */
  postServiceNameDedicatedCloudDatacenterDatacenterMove = (
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
  getServiceNameDedicatedConnect = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedConnect`);
  };

  /** Get this object properties */
  getServiceNameDedicatedConnectName = (
    name: string,
    serviceName: string
  ): Promise<VrackDedicatedConnect> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedConnect/${name}`);
  };

  /** Alter this object properties */
  putServiceNameDedicatedConnectName = (
    name: string,
    serviceName: string,
    body: VrackDedicatedConnect
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vrack/${serviceName}/dedicatedConnect/${name}`, body);
  };

  /** vrack for dedicated server */
  getServiceNameDedicatedServer = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer`);
  };

  /** add a dedicated server to this vrack (LEGACY) */
  postServiceNameDedicatedServer = (
    serviceName: string,
    body: { dedicatedServer: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedServer`, body);
  };

  /** remove this server from this vrack (LEGACY) */
  deleteServiceNameDedicatedServerDedicatedServer = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`);
  };

  /** Get this object properties */
  getServiceNameDedicatedServerDedicatedServer = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<VrackDedicatedServer> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`);
  };

  /** Retrieve vrack traffic graph values (LEGACY) */
  getServiceNameDedicatedServerDedicatedServerMrtg = (
    dedicatedServer: string,
    serviceName: string
  ): Promise<DedicatedServerMrtgTimestampValue> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}/mrtg`);
  };

  /** vrack for dedicated server interface */
  getServiceNameDedicatedServerInterface = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServerInterface`);
  };

  /** add a dedicated server interface to this vrack */
  postServiceNameDedicatedServerInterface = (
    serviceName: string,
    body: { dedicatedServerInterface: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/dedicatedServerInterface`, body);
  };

  /** remove this server interface from this vrack */
  deleteServiceNameDedicatedServerInterfaceDedicatedServerInterface = (
    dedicatedServerInterface: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request(
      'DELETE',
      `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`
    );
  };

  /** Get this object properties */
  getServiceNameDedicatedServerInterfaceDedicatedServerInterface = (
    dedicatedServerInterface: string,
    serviceName: string
  ): Promise<VrackDedicatedServerInterface> => {
    return this.ovh.request(
      'GET',
      `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`
    );
  };

  /** Details for all dedicated server interfaces in this vrack */
  getServiceNameDedicatedServerInterfaceDetails = (
    serviceName: string
  ): Promise<VrackAllowedDedicatedServerInterfaces> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/dedicatedServerInterfaceDetails`);
  };

  /** List all eligible services for this vRack asynchronously */
  getServiceNameEligibleServices = (
    serviceName: string
  ): Promise<VrackEligibleServicesResponse> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/eligibleServices`);
  };

  /** vrack for IP blocks */
  getServiceNameIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip`);
  };

  /** add an IP block to this vrack */
  postServiceNameIp = (serviceName: string, body: { block: string }): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ip`, body);
  };

  /** remove this IP block from this vrack */
  deleteServiceNameIpIp = (ip: string, serviceName: string): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ip/${ip}`);
  };

  /** Get this object properties */
  getServiceNameIpIp = (ip: string, serviceName: string): Promise<VrackIp> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip/${ip}`);
  };

  /** Announce IP to zone for vrack */
  postServiceNameIpIpAnnounceInZone = (
    ip: string,
    serviceName: string,
    body: { zone: VrackVrackZoneEnum }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ip/${ip}/announceInZone`, body);
  };

  /** Zone available to announce your block */
  getServiceNameIpIpAvailableZone = (
    ip: string,
    serviceName: string
  ): Promise<VrackVrackZoneEnum> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ip/${ip}/availableZone`);
  };

  /** vrack for ipLoadbalancing */
  getServiceNameIpLoadbalancing = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ipLoadbalancing`);
  };

  /** add an ipLoadbalancing to this vrack */
  postServiceNameIpLoadbalancing = (
    serviceName: string,
    body: { ipLoadbalancing: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ipLoadbalancing`, body);
  };

  /** remove this ipLoadbalancing from this vrack */
  deleteServiceNameIpLoadbalancingIpLoadbalancing = (
    ipLoadbalancing: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`);
  };

  /** Get this object properties */
  getServiceNameIpLoadbalancingIpLoadbalancing = (
    ipLoadbalancing: string,
    serviceName: string
  ): Promise<VrackIplb> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`);
  };

  /** vrack for legacy vrack */
  getServiceNameLegacyVrack = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/legacyVrack`);
  };

  /** add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX) */
  postServiceNameLegacyVrack = (
    serviceName: string,
    body: { legacyVrack: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/legacyVrack`, body);
  };

  /** remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX) */
  deleteServiceNameLegacyVrackLegacyVrack = (
    legacyVrack: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/legacyVrack/${legacyVrack}`);
  };

  /** Get this object properties */
  getServiceNameLegacyVrackLegacyVrack = (
    legacyVrack: string,
    serviceName: string
  ): Promise<VrackLegacyVrack> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/legacyVrack/${legacyVrack}`);
  };

  /** vrack for ovhCloudConnect */
  getServiceNameOvhCloudConnect = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ovhCloudConnect`);
  };

  /** Add an ovhCloudConnect to the vrack */
  postServiceNameOvhCloudConnect = (
    serviceName: string,
    body: { ovhCloudConnect: string }
  ): Promise<VrackTask> => {
    return this.ovh.request('POST', `/vrack/${serviceName}/ovhCloudConnect`, body);
  };

  /** Remove the ovhCloudConnect from the vrack */
  deleteServiceNameOvhCloudConnectOvhCloudConnect = (
    ovhCloudConnect: string,
    serviceName: string
  ): Promise<VrackTask> => {
    return this.ovh.request('DELETE', `/vrack/${serviceName}/ovhCloudConnect/${ovhCloudConnect}`);
  };

  /** Get this object properties */
  getServiceNameOvhCloudConnectOvhCloudConnect = (
    ovhCloudConnect: string,
    serviceName: string
  ): Promise<VrackOvhCloudConnect> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/ovhCloudConnect/${ovhCloudConnect}`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesNonExpiringService> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/serviceInfos`);
  };

  /** vrack tasks */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskTaskId = (serviceName: string, taskId: number): Promise<VrackTask> => {
    return this.ovh.request('GET', `/vrack/${serviceName}/task/${taskId}`);
  };
}

export default VrackHandler;
