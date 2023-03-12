/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoicemailProperties } from '../models/TelephonyVoicemailProperties';
import { TelephonyVoicefaxRoutingEnum } from '../models/TelephonyVoicefaxRoutingEnum';
import { TelephonyDirectoryInfo } from '../models/TelephonyDirectoryInfo';
import { TelephonyDirectoryWayType } from '../models/TelephonyDirectoryWayType';
import { FreefaxBalanceInformations } from '../models/FreefaxBalanceInformations';
import { TelephonyDirectoryHeadingPJ } from '../models/TelephonyDirectoryHeadingPJ';
import { TelephonyEntrepriseNumberInformationsTask } from '../models/TelephonyEntrepriseNumberInformationsTask';
import { FreefaxFreefaxProperties } from '../models/FreefaxFreefaxProperties';
import { ServicesService } from '../models/ServicesService';
import { TelephonyVoicemailNumbers } from '../models/TelephonyVoicemailNumbers';
import OVHBase from '../ovh';

class FreefaxHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/freefax');
  };

  /** Get the credit balance and the remaining pages available for all our freefax */
  getCredits = (): Promise<FreefaxBalanceInformations> => {
    return this.ovh.request('GET', '/freefax/credits');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<FreefaxFreefaxProperties> => {
    return this.ovh.request('GET', `/freefax/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: FreefaxFreefaxProperties): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}`, body);
  };

  /** Generates a new password for your fax account */
  postChangePasswordByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/changePassword`);
  };

  /** Get this object properties */
  getDirectoryByServiceName = (serviceName: string): Promise<TelephonyDirectoryInfo> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory`);
  };

  /** Alter this object properties */
  updateDirectoryByServiceName = (
    serviceName: string,
    body: TelephonyDirectoryInfo
  ): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/directory`, body);
  };

  /** Get company entreprise informations by providing entreprise number */
  postDirectoryFetchEntrepriseInformationsByServiceName = (
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
  getDirectoryGetDirectoryServiceCodeByServiceName = (
    serviceName: string
  ): Promise<TelephonyDirectoryHeadingPJ[]> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory/getDirectoryServiceCode`);
  };

  /** Get all the way types availables */
  getDirectoryGetWayTypesByServiceName = (
    serviceName: string
  ): Promise<TelephonyDirectoryWayType[]> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/directory/getWayTypes`);
  };

  /** Main service attached to freefax */
  getMainServiceByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/mainService`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/serviceInfos`, body);
  };

  /** Get this object properties */
  getVoicemailByServiceName = (serviceName: string): Promise<TelephonyVoicemailProperties> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail`);
  };

  /** Alter this object properties */
  updateVoicemailByServiceName = (
    serviceName: string,
    body: TelephonyVoicemailProperties
  ): Promise<void> => {
    return this.ovh.request('PUT', `/freefax/${serviceName}/voicemail`, body);
  };

  /** Change the voicemail password. It must be 4 digit */
  updateVoicemailPasswordByServiceName = (
    serviceName: string,
    body: { password: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/voicemail/changePassword`, body);
  };

  /** Disable/Enable voicemail. Available only if the line has fax capabilities */
  disableVoicemailChangeRoutingByServiceName = (
    serviceName: string,
    body: { routing: TelephonyVoicefaxRoutingEnum }
  ): Promise<void> => {
    return this.ovh.request('POST', `/freefax/${serviceName}/voicemail/changeRouting`, body);
  };

  /** Get the status of the voicemail. Available only if the line has fax capabilities */
  getVoicemailRoutingByServiceName = (
    serviceName: string
  ): Promise<TelephonyVoicefaxRoutingEnum> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail/routing`);
  };

  /** Get number for internal and external voicemail */
  getVoicemailVoicemailNumbersByServiceName = (
    serviceName: string
  ): Promise<TelephonyVoicemailNumbers> => {
    return this.ovh.request('GET', `/freefax/${serviceName}/voicemail/voicemailNumbers`);
  };
}

export { FreefaxHandler };
