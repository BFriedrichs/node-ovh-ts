/* WARNING: This file is auto-generated . Do not edit manually. */

import { SecretSecret } from '../models/SecretSecret';
import OVHBase from '../ovh';

class SecretHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Retrieve a secret sent by email */
  postRetrieve = (body: { id: string }): Promise<SecretSecret> => {
    return this.ovh.request('POST', '/secret/retrieve', body);
  };
}

export default SecretHandler;
