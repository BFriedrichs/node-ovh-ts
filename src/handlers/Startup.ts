/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupStartup } from '../models/StartupStartup';
import OVHBase from '../ovh';

class StartupHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get startup status */
  get = (): Promise<StartupStartup> => {
    return this.ovh.request('GET', '/startup');
  };

  /** Register a startup */
  post = (body: StartupStartup): Promise<void> => {
    return this.ovh.request('POST', '/startup', body);
  };
}

export { StartupHandler };
