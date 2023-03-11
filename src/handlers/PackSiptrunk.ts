/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { PackSiptrunkPackSipTrunk } from '../models/PackSiptrunkPackSipTrunk';
import OVHBase from '../ovh';

class PackSiptrunkHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getSiptrunk = (): Promise<string> => {
    return this.ovh.request('GET', '/pack/siptrunk');
  };

  /** Get this object properties */
  getSiptrunkPackName = (packName: string): Promise<PackSiptrunkPackSipTrunk> => {
    return this.ovh.request('GET', `/pack/siptrunk/${packName}`);
  };

  /** Launch a contact change procedure */
  postSiptrunkPackNameChangeContact = (
    packName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/pack/siptrunk/${packName}/changeContact`, body);
  };

  /** Get this object properties */
  getSiptrunkPackNameServiceInfos = (packName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/pack/siptrunk/${packName}/serviceInfos`);
  };

  /** Alter this object properties */
  putSiptrunkPackNameServiceInfos = (packName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/pack/siptrunk/${packName}/serviceInfos`, body);
  };
}

export default PackSiptrunkHandler;
