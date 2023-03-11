/* WARNING: This file is auto-generated . Do not edit manually. */

import { ContactFormCharacteristic } from '../models/ContactFormCharacteristic';
import OVHBase from '../ovh';

class ContactHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get form characteristics */
  getForm = (): Promise<ContactFormCharacteristic> => {
    return this.ovh.request('GET', '/contact/form');
  };

  /** Send form following characteristics of /contact/form */
  postFormSend = (body: { form: string; type: string }): Promise<void> => {
    return this.ovh.request('POST', '/contact/form/send', body);
  };
}

export default ContactHandler;
