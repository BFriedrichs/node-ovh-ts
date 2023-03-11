/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { TelephonyDirectoryWayType } from '../models/TelephonyDirectoryWayType';
import { TelephonyDirectoryHeadingPJ } from '../models/TelephonyDirectoryHeadingPJ';
import { TelephonyVoicemailProperties } from '../models/TelephonyVoicemailProperties';
import { TelephonyVoicefaxRoutingEnum } from '../models/TelephonyVoicefaxRoutingEnum';
import { TelephonyEntrepriseNumberInformationsTask } from '../models/TelephonyEntrepriseNumberInformationsTask';
import { FreefaxBalanceInformations } from '../models/FreefaxBalanceInformations';
import { TelephonyVoicemailNumbers } from '../models/TelephonyVoicemailNumbers';
import { TelephonyDirectoryInfo } from '../models/TelephonyDirectoryInfo';
import { FreefaxFreefaxProperties } from '../models/FreefaxFreefaxProperties';
import OVHBase from '../ovh';

class FreefaxHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/freefax');
  };

  /** Get the credit balance and the remaining pages available for all our freefax */
  getCredits = (): Promise<FreefaxBalanceInformations> => {
    return this.ovh.request('GET', '/freefax/credits');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<FreefaxFreefaxProperties> => {
    return this.ovh.request('GET', `/freefax/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: FreefaxFreefaxProperties): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}`, body);
  };

  /** Generates a new password for your fax account */
  postServiceNameChangePassword = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/changePassword`);
  };

  /** Get this object properties */
  getServiceNameDirectory = (serviceName: string): Promise<TelephonyDirectoryInfo> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory`);
  };

  /** Alter this object properties */
  putServiceNameDirectory = (serviceName: string, body: TelephonyDirectoryInfo): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/directory`, body);
  };

  /** Get company entreprise informations by providing entreprise number */
  postServiceNameDirectoryFetchEntrepriseInformations = (
    serviceName: string,
    body: { entrepriseNumber: string }
  ): Promise<TelephonyEntrepriseNumberInformationsTask> => {
    return this.ovh.request(
      'POST',
      `/freefax/${serviceName}/directory/fetchEntrepriseInformations`,
      body
    );
  };

  /** Get directory service code from an APE code ( principal activity of the firm code ) */
  getServiceNameDirectoryGetDirectoryServiceCode = (
    serviceName: string
  ): Promise<TelephonyDirectoryHeadingPJ> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory/getDirectoryServiceCode`);
  };

  /** Get all the way types availables */
  getServiceNameDirectoryGetWayTypes = (
    serviceName: string
  ): Promise<TelephonyDirectoryWayType> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory/getWayTypes`);
  };

  /** Main service attached to freefax */
  getServiceNameMainService = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/mainService`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/serviceInfos`, body);
  };

  /** Get this object properties */
  getServiceNameVoicemail = (serviceName: string): Promise<TelephonyVoicemailProperties> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail`);
  };

  /** Alter this object properties */
  putServiceNameVoicemail = (
    serviceName: string,
    body: TelephonyVoicemailProperties
  ): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/voicemail`, body);
  };

  /** Change the voicemail password. It must be 4 digit */
  postServiceNameVoicemailChangePassword = (
    serviceName: string,
    body: { password: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/voicemail/changePassword`, body);
  };

  /** Disable/Enable voicemail. Available only if the line has fax capabilities */
  postServiceNameVoicemailChangeRouting = (
    serviceName: string,
    body: { routing: TelephonyVoicefaxRoutingEnum }
  ): Promise<void> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/voicemail/changeRouting`, body);
  };

  /** Get the status of the voicemail. Available only if the line has fax capabilities */
  getServiceNameVoicemailRouting = (serviceName: string): Promise<TelephonyVoicefaxRoutingEnum> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail/routing`);
  };

  /** Get number for internal and external voicemail */
  getServiceNameVoicemailVoicemailNumbers = (
    serviceName: string
  ): Promise<TelephonyVoicemailNumbers> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail/voicemailNumbers`);
  };
}

export default FreefaxHandler;
