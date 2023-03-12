/* WARNING: This file is auto-generated . Do not edit manually. */

import { AuthApiCredentialRequestParams } from '../models/AuthApiCredentialRequestParams';
import { AuthApiCredentialRequest } from '../models/AuthApiCredentialRequest';
import { AuthDetails } from '../models/AuthDetails';
import { AuthApiCredential } from '../models/AuthApiCredential';
import OVHBase from '../ovh';

class AuthHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Request a new credential for your application */
  postCredential = (body: AuthApiCredentialRequestParams): Promise<AuthApiCredentialRequest> => {
    return this.ovh.request('POST', '/auth/credential', body);
  };

  /** Get the current credential details */
  getCurrentCredential = (): Promise<AuthApiCredential> => {
    return this.ovh.request('GET', '/auth/currentCredential');
  };

  /** Details about the current authentication */
  getDetails = (): Promise<AuthDetails> => {
    return this.ovh.request('GET', '/auth/details');
  };

  /** Expire current credential */
  postLogout = (): Promise<void> => {
    return this.ovh.request('POST', '/auth/logout');
  };

  /** Get the current time of the OVH servers, since UNIX epoch */
  getTime = (): Promise<number> => {
    return this.ovh.request('GET', '/auth/time');
  };
}

export { AuthHandler };
