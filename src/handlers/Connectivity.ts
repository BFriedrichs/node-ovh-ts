/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityCity } from '../models/ConnectivityEligibilityCity';
import { ConnectivityMonitoringGenericIncidentStatusEnum } from '../models/ConnectivityMonitoringGenericIncidentStatusEnum';
import { ConnectivityEligibilityOfferProductTypeEnum } from '../models/ConnectivityEligibilityOfferProductTypeEnum';
import { ConnectivityEligibilityEligibilityTest } from '../models/ConnectivityEligibilityEligibilityTest';
import { ConnectivityEligibilityStreet } from '../models/ConnectivityEligibilityStreet';
import { ConnectivityEligibilityOfferProductUnbundlingTypeEnum } from '../models/ConnectivityEligibilityOfferProductUnbundlingTypeEnum';
import { ConnectivityEligibilityMeetings } from '../models/ConnectivityEligibilityMeetings';
import { ConnectivityMaintenanceWorkPlanned } from '../models/ConnectivityMaintenanceWorkPlanned';
import { ConnectivityEligibilityBuilding } from '../models/ConnectivityEligibilityBuilding';
import { ConnectivityMonitoringGenericIncident } from '../models/ConnectivityMonitoringGenericIncident';
import { ConnectivityEligibilityLineStatusEnum } from '../models/ConnectivityEligibilityLineStatusEnum';
import { ConnectivityEligibilityLine } from '../models/ConnectivityEligibilityLine';
import OVHBase from '../ovh';

class ConnectivityHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Get the details for a building */
  postEligibilitySearchBuildingDetails = (body: {
    building: string;
  }): Promise<ConnectivityEligibilityBuilding> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/buildingDetails', body);
  };

  /** Get all buildings for a specific address */
  postEligibilitySearchBuildings = (body: {
    streetCode: string;
    streetNumber: string;
  }): Promise<ConnectivityEligibilityBuilding> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/buildings', body);
  };

  /** Get building references from a given line number */
  postEligibilitySearchBuildingsByLine = (body: {
    lineNumber: string;
    status: ConnectivityEligibilityLineStatusEnum;
  }): Promise<ConnectivityEligibilityBuilding> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/buildingsByLine', body);
  };

  /** Get all localities linked to a zip code */
  postEligibilitySearchCities = (body: {
    zipCode: string;
  }): Promise<ConnectivityEligibilityCity> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/cities', body);
  };

  /** Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified */
  postEligibilitySearchLines = (body: {
    ownerName?: string;
    streetCode: string;
    streetNumber: string;
  }): Promise<ConnectivityEligibilityLine> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/lines', body);
  };

  /** Search for available copper line creation or fiber installation meeting time slots */
  postEligibilitySearchMeetings = (body: {
    eligibilityReference: string;
    planCode?: string;
    productCode?: string;
    type?: ConnectivityEligibilityOfferProductTypeEnum;
    unbundlingType?: ConnectivityEligibilityOfferProductUnbundlingTypeEnum;
  }): Promise<ConnectivityEligibilityMeetings> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/meetings', body);
  };

  /** Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets) */
  postEligibilitySearchStreetNumbers = (body: { streetCode: string }): Promise<string> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/streetNumbers', body);
  };

  /** Get all street linked to a locality */
  postEligibilitySearchStreets = (body: {
    inseeCode: string;
  }): Promise<ConnectivityEligibilityStreet> => {
    return this.ovh.request('POST', '/connectivity/eligibility/search/streets', body);
  };

  /** Get an eligibility by its reference */
  getEligibilityTest = (): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('GET', '/connectivity/eligibility/test');
  };

  /** Do an eligibility for an address, if no line exist */
  postEligibilityTestAddress = (body: {
    streetCode: string;
    streetNumber: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/address', body);
  };

  /** Do an eligibility for an address, if no line exist. Partners only. */
  postEligibilityTestAddressPartners = (body: {
    streetCode: string;
    streetNumber: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/address/partners', body);
  };

  /** Do an eligibility test on a building, for fiber only */
  postEligibilityTestBuilding = (body: {
    building: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/building', body);
  };

  /** Do an eligibility test on a line number, for copper only */
  postEligibilityTestLine = (body: {
    lineNumber: string;
    status: ConnectivityEligibilityLineStatusEnum;
    streetCode?: string;
    streetNumber?: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/line', body);
  };

  /** Do an eligibility test on a line number, for copper only. Partners only. */
  postEligibilityTestLinePartners = (body: {
    lineNumber: string;
    status: ConnectivityEligibilityLineStatusEnum;
    streetCode?: string;
    streetNumber?: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/line/partners', body);
  };

  /** Do an eligibility test on an OTP (Optical Termination Panel), for fiber only */
  postEligibilityTestOtp = (body: {
    otp: string;
  }): Promise<ConnectivityEligibilityEligibilityTest> => {
    return this.ovh.request('POST', '/connectivity/eligibility/test/otp', body);
  };

  /** List work planned by operators. For partners only */
  listMaintenanceWorkPlannedPartners = (): Promise<ConnectivityMaintenanceWorkPlanned[]> => {
    return this.ovh.request('GET', '/connectivity/maintenance/workPlanned/partners');
  };

  /** List work planned by operators */
  listMaintenanceWorkPlannedPublics = (): Promise<ConnectivityMaintenanceWorkPlanned[]> => {
    return this.ovh.request('GET', '/connectivity/maintenance/workPlanned/public');
  };

  /** List detected, validated and recently closed generic incidents. For partners only */
  listMonitoringGenericIncidentPartners = (): Promise<ConnectivityMonitoringGenericIncident[]> => {
    return this.ovh.request('GET', '/connectivity/monitoring/genericIncident/partners');
  };

  /** List validated and recently closed generic incidents */
  listMonitoringGenericIncidentPublics = (): Promise<ConnectivityMonitoringGenericIncident[]> => {
    return this.ovh.request('GET', '/connectivity/monitoring/genericIncident/public');
  };
}

export { ConnectivityHandler };
