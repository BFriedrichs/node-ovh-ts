/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslPendingAction } from '../models/XdslPendingAction';
import { XdslTask } from '../models/XdslTask';
import { XdslLineDiagnosticFaultTypeEnum } from '../models/XdslLineDiagnosticFaultTypeEnum';
import { XdslMonitoringNotificationsTypeEnum } from '../models/XdslMonitoringNotificationsTypeEnum';
import { XdslResiliationSurvey } from '../models/XdslResiliationSurvey';
import { XdslResiliationFollowUpDetail } from '../models/XdslResiliationFollowUpDetail';
import { XdslModemInfo } from '../models/XdslModemInfo';
import { XdslModem } from '../models/XdslModem';
import { XdslLineDiagnosticAnswers } from '../models/XdslLineDiagnosticAnswers';
import { XdslConnectedDevice } from '../models/XdslConnectedDevice';
import { TelephonyRma } from '../models/TelephonyRma';
import { XdslEmailProTask } from '../models/XdslEmailProTask';
import { XdslLineDiagnosticCustomerActionsEnum } from '../models/XdslLineDiagnosticCustomerActionsEnum';
import { XdslMonitoringNotificationsFrequencyEnum } from '../models/XdslMonitoringNotificationsFrequencyEnum';
import { SpareXdslXdslSpare } from '../models/SpareXdslXdslSpare';
import { XdslFiberEligibilityStatusEnum } from '../models/XdslFiberEligibilityStatusEnum';
import { XdslIncident } from '../models/XdslIncident';
import { XdslLineDiagnosticDiagnostic } from '../models/XdslLineDiagnosticDiagnostic';
import { XdslExtraIpRangeMove } from '../models/XdslExtraIpRangeMove';
import { XdslAccess } from '../models/XdslAccess';
import { XdslFiberEligibility } from '../models/XdslFiberEligibility';
import { XdslAntiSpamEvidencesInfo } from '../models/XdslAntiSpamEvidencesInfo';
import { XdslDHCPStaticAddress } from '../models/XdslDHCPStaticAddress';
import { XdslXdslEmailPro } from '../models/XdslXdslEmailPro';
import { XdslTemplateModem } from '../models/XdslTemplateModem';
import { XdslDeconsolidationTerms } from '../models/XdslDeconsolidationTerms';
import { XdslIP } from '../models/XdslIP';
import { OrderOrder } from '../models/OrderOrder';
import { XdslXdslModemConfigProtocolTypeEnum } from '../models/XdslXdslModemConfigProtocolTypeEnum';
import { XdslAntiSpam } from '../models/XdslAntiSpam';
import { XdslDslamPort } from '../models/XdslDslamPort';
import { XdslMonitoringNotification } from '../models/XdslMonitoringNotification';
import { XdslDslamPortLog } from '../models/XdslDslamPortLog';
import { XdslTaskStatusEnum } from '../models/XdslTaskStatusEnum';
import { XdslServiceStatusEnum } from '../models/XdslServiceStatusEnum';
import { ConnectivityEligibilityMeetings } from '../models/ConnectivityEligibilityMeetings';
import { XdslAccessDiagnostic } from '../models/XdslAccessDiagnostic';
import { XdslLAN } from '../models/XdslLAN';
import { XdslWLAN } from '../models/XdslWLAN';
import { XdslRadiusConnectionLog } from '../models/XdslRadiusConnectionLog';
import { XdslStatisticsPeriodEnum } from '../models/XdslStatisticsPeriodEnum';
import { ServicesService } from '../models/ServicesService';
import { XdslDslamLineProfile } from '../models/XdslDslamLineProfile';
import { XdslLineStatisticsTypeEnum } from '../models/XdslLineStatisticsTypeEnum';
import { TelephonyRmaChangeTypeEnum } from '../models/TelephonyRmaChangeTypeEnum';
import { XdslAccessStatisticsTypeEnum } from '../models/XdslAccessStatisticsTypeEnum';
import { XdslWLANFrequencyEnum } from '../models/XdslWLANFrequencyEnum';
import { XdslModemExchangeInfo } from '../models/XdslModemExchangeInfo';
import { XdslLine } from '../models/XdslLine';
import { XdslOrderFollowupStep } from '../models/XdslOrderFollowupStep';
import { XdslTimestampAndValue } from '../models/XdslTimestampAndValue';
import { XdslResiliationTerms } from '../models/XdslResiliationTerms';
import { XdslPortMapping } from '../models/XdslPortMapping';
import { XdslDHCP } from '../models/XdslDHCP';
import OVHBase from '../ovh';

class XdslHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/xdsl');
  };

  /** List available services */
  listEmailPros = (): Promise<string[]> => {
    return this.ovh.request('GET', '/xdsl/email/pro');
  };

  /** Delete the email */
  deleteEmailProByEmail = (email: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/email/pro/${email}`);
  };

  /** Get this object properties */
  getEmailProByEmail = (email: string): Promise<XdslXdslEmailPro> => {
    return this.ovh.request('GET', `/xdsl/email/pro/${email}`);
  };

  /** Alter this object properties */
  updateEmailProByEmail = (email: string, body: XdslXdslEmailPro): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/email/pro/${email}`, body);
  };

  /** Change the email password */
  updateEmailProPasswordByEmail = (
    email: string,
    body: { password: string }
  ): Promise<XdslEmailProTask> => {
    return this.ovh.request('POST', `/xdsl/email/pro/${email}/changePassword`, body);
  };

  /** List of incidents */
  listIncidents = (): Promise<number[]> => {
    return this.ovh.request('GET', '/xdsl/incidents');
  };

  /** Get this object properties */
  getIncidentsById = (id: number): Promise<XdslIncident> => {
    return this.ovh.request('GET', `/xdsl/incidents/${id}`);
  };

  /** List available services */
  listSpares = (): Promise<string[]> => {
    return this.ovh.request('GET', '/xdsl/spare');
  };

  /** Get all available spare brands */
  getSpareBrands = (): Promise<string[]> => {
    return this.ovh.request('GET', '/xdsl/spare/brands');
  };

  /** Delete the spare as if it was not belonging to OVH anymore */
  deleteSpareBySpare = (spare: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/spare/${spare}`);
  };

  /** Get this object properties */
  getSpareBySpare = (spare: string): Promise<SpareXdslXdslSpare> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}`);
  };

  /** Return the list of brand compatible to be replaced */
  getSpareCompatibleReplacementBySpare = (spare: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}/compatibleReplacement`);
  };

  /** Replace the modem by its spare */
  postSpareReplaceBySpare = (spare: string, body: { domain: string }): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/spare/${spare}/replace`, body);
  };

  /** Return the broken equipment in instantRefund */
  postSpareReturnMerchandiseBySpare = (spare: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/spare/${spare}/returnMerchandise`);
  };

  /** Get this object properties */
  getSpareServiceInfosBySpare = (spare: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}/serviceInfos`);
  };

  /** Alter this object properties */
  updateSpareServiceInfosBySpare = (spare: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/spare/${spare}/serviceInfos`, body);
  };

  /** List of TemplateModem */
  listTemplateModems = (): Promise<string[]> => {
    return this.ovh.request('GET', '/xdsl/templateModem');
  };

  /** Create new Modem Template from existing modem */
  createTemplateModem = (body: {
    name: string;
    serviceName: string;
  }): Promise<XdslTemplateModem> => {
    return this.ovh.request('POST', '/xdsl/templateModem', body);
  };

  /** Delete this Modem Template */
  deleteTemplateModemByName = (name: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/templateModem/${name}`);
  };

  /** Get this object properties */
  getTemplateModemByName = (name: string): Promise<XdslTemplateModem> => {
    return this.ovh.request('GET', `/xdsl/templateModem/${name}`);
  };

  /** Alter this object properties */
  updateTemplateModemByName = (name: string, body: XdslTemplateModem): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/templateModem/${name}`, body);
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<XdslAccess> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: XdslAccess): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}`, body);
  };

  /** Informations about the extra IP range during address move */
  getAddressMoveExtraIpRangeByServiceName = (
    serviceName: string
  ): Promise<XdslExtraIpRangeMove> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/addressMove/extraIpRange`);
  };

  /** Initiate the extra IP range migration */
  postAddressMoveExtraIpRangeMoveByServiceName = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/addressMove/extraIpRangeMove`);
  };

  /** List antiSpams for this access */
  listAntiSpamsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams`);
  };

  /** Get this object properties */
  getAntiSpamsByServiceNameAndIp = (ip: string, serviceName: string): Promise<XdslAntiSpam> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams/${ip}`);
  };

  /** List of evidences stored on PCS for this ip */
  listAntiSpamsEvidencesByServiceNameAndIp = (
    ip: string,
    serviceName: string
  ): Promise<XdslAntiSpamEvidencesInfo> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams/${ip}/evidences`);
  };

  /** Apply TemplateModem to existing Modem */
  postApplyTemplateToModemByServiceName = (
    serviceName: string,
    body: { templateName: string }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/applyTemplateToModem`, body);
  };

  /** Get information about the ongoing resiliation */
  getCanCancelResiliationByServiceName = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/canCancelResiliation`);
  };

  /** Cancel the ongoing resiliation */
  postCancelResiliationByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/changeContact`, body);
  };

  /** Get this object properties */
  getDiagnosticByServiceName = (serviceName: string): Promise<XdslAccessDiagnostic> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/diagnostic`);
  };

  /** Run diagnostic on the access */
  postDiagnosticByServiceName = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/diagnostic`);
  };

  /** List fiber eligibilities for this access */
  listFiberEligibilitiesByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/fiberEligibilities`);
  };

  /** Get this object properties */
  getFiberEligibilitiesByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<XdslFiberEligibility> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/fiberEligibilities/${id}`);
  };

  /** Get this object properties */
  getIncidentByServiceName = (serviceName: string): Promise<XdslIncident> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/incident`);
  };

  /** List of IPs addresses for this access */
  listIpsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/ips`);
  };

  /** Order an extra /29 range of IPv4 addresses */
  postIpsByServiceName = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/ips`);
  };

  /** Stop renewing this extra IPv4 option */
  deleteIpsByServiceNameAndIp = (ip: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/ips/${ip}`);
  };

  /** Get this object properties */
  getIpsByServiceNameAndIp = (ip: string, serviceName: string): Promise<XdslIP> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/ips/${ip}`);
  };

  /** Change the status of the IPv6 for this access */
  updateIpv6ByServiceName = (
    serviceName: string,
    body: { enabled: boolean }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/ipv6`, body);
  };

  /** The lines of the access */
  getLinesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines`);
  };

  /** Get this object properties */
  getLinesByServiceNameAndNumber = (number: string, serviceName: string): Promise<XdslLine> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}`);
  };

  /** Cancel line diagnostic if possible */
  postLinesDiagnosticCancelByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/diagnostic/cancel`);
  };

  /** Update and get advanced diagnostic of the line */
  updateLinesDiagnosticRunByServiceNameAndNumber = (
    number: string,
    serviceName: string,
    body: {
      actionsDone?: XdslLineDiagnosticCustomerActionsEnum[];
      answers?: XdslLineDiagnosticAnswers;
      faultType: XdslLineDiagnosticFaultTypeEnum;
    }
  ): Promise<XdslLineDiagnosticDiagnostic> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/diagnostic/run`, body);
  };

  /** Get this object properties */
  getLinesDslamPortByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamPort> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/dslamPort`);
  };

  /** List all availables profiles for this port */
  listLinesDslamPortAvailableProfilesByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamLineProfile[]> => {
    return this.ovh.request(
      'GET',
      `/xdsl/${serviceName}/lines/${number}/dslamPort/availableProfiles`
    );
  };

  /** Change the profile of the port */
  updateLinesDslamPortProfileByServiceNameAndNumber = (
    number: string,
    serviceName: string,
    body: { dslamProfileId: number }
  ): Promise<XdslTask> => {
    return this.ovh.request(
      'POST',
      `/xdsl/${serviceName}/lines/${number}/dslamPort/changeProfile`,
      body
    );
  };

  /** Get the logs emitted by the DSLAM for this port */
  getLinesDslamPortLogsByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamPortLog[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/dslamPort/logs`);
  };

  /** Reset the port on the DSLAM */
  postLinesDslamPortResetByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/dslamPort/reset`);
  };

  /** Get various statistics about the line */
  getLinesStatisticsByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<XdslTimestampAndValue> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/statistics`);
  };

  /** Get this object properties */
  getModemByServiceName = (serviceName: string): Promise<XdslModem> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem`);
  };

  /** Alter this object properties */
  updateModemByServiceName = (serviceName: string, body: XdslModem): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem`, body);
  };

  /** List available ACS backend for this modem */
  listModemAvailableACSBackendsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/availableACSBackend`);
  };

  /** List available WLAN channel for this modem */
  listModemAvailableWLANChannelsByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/availableWLANChannel`);
  };

  /** Get the status of the Bloc IP on modem */
  getModemBlocIpByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/blocIp`);
  };

  /** Change the status of the Bloc IP on modem */
  updateModemBlocIpByServiceName = (
    serviceName: string,
    body: { status: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/blocIp`, body);
  };

  /** Get the status of callWaiting on modem */
  getModemCallWaitingByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/callWaiting`);
  };

  /** Change the status of callWaiting on modem */
  updateModemCallWaitingByServiceName = (
    serviceName: string,
    body: { callWaiting: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/callWaiting`, body);
  };

  /** Get info about access modem replacement by last model. */
  getModemComfortExchangeByServiceName = (serviceName: string): Promise<XdslModemExchangeInfo> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/comfortExchange`);
  };

  /** Replace access modem by last model, fees will be applied. */
  postModemComfortExchangeByServiceName = (
    serviceName: string,
    body: { contactShipping?: string }
  ): Promise<OrderOrder> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/comfortExchange`, body);
  };

  /** List of devices connected on this modem */
  listModemConnectedDevicesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/connectedDevices`);
  };

  /** Get this object properties */
  getModemConnectedDevicesByServiceNameAndMacAddress = (
    macAddress: string,
    serviceName: string
  ): Promise<XdslConnectedDevice> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/connectedDevices/${macAddress}`);
  };

  /** Get the status of contentSharing on modem */
  getModemContentSharingByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/contentSharing`);
  };

  /** Change the status of contentSharing on modem */
  updateModemContentSharingByServiceName = (
    serviceName: string,
    body: { contentSharing: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/contentSharing`, body);
  };

  /** Get the firmware version installed on modem */
  getModemFirmwareByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/firmware`);
  };

  /** Launch a task to install target firmware on modem */
  launchModemFirmwareByServiceName = (
    serviceName: string,
    body: { firmware: string; todoDate?: Date }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/firmware`, body);
  };

  /** List available firmware for this modem */
  listModemFirmwareAvailablesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/firmwareAvailable`);
  };

  /** Get the status of ftp service on modem */
  getModemFtpByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/ftp`);
  };

  /** Change the status of the ftp service on modem */
  updateModemFtpByServiceName = (
    serviceName: string,
    body: { ftp: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/ftp`, body);
  };

  /** Get the status of ipsec alg service on modem */
  getModemIpsecAlgByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/ipsecAlg`);
  };

  /** Change the status of the ipsec alg service on modem */
  updateModemIpsecAlgByServiceName = (
    serviceName: string,
    body: { ipsecAlg: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/ipsecAlg`, body);
  };

  /** List of LANs on this modem */
  listModemLansByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan`);
  };

  /** Get this object properties */
  getModemLanByServiceNameAndLanName = (lanName: string, serviceName: string): Promise<XdslLAN> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}`);
  };

  /** Alter this object properties */
  updateModemLanByServiceNameAndLanName = (
    lanName: string,
    serviceName: string,
    body: XdslLAN
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/lan/${lanName}`, body);
  };

  /** List of DHCP on this modem */
  listModemLanDhcpsByServiceNameAndLanName = (
    lanName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp`);
  };

  /** Get this object properties */
  getModemLanDhcpByServiceNameAndLanNameAndDhcpName = (
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<XdslDHCP> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`);
  };

  /** Alter this object properties */
  updateModemLanDhcpByServiceNameAndLanNameAndDhcpName = (
    dhcpName: string,
    lanName: string,
    serviceName: string,
    body: XdslDHCP
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`,
      body
    );
  };

  /** List of DHCP Static Address of this modem */
  listModemLanDhcpDHCPStaticAddressesByServiceNameAndLanNameAndDhcpName = (
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`
    );
  };

  /** Add a DHCP static lease */
  addModemLanDhcpDHCPStaticressesByServiceNameAndLanNameAndDhcpName = (
    dhcpName: string,
    lanName: string,
    serviceName: string,
    body: { IPAddress: string; MACAddress: string; name?: string }
  ): Promise<XdslDHCPStaticAddress> => {
    return this.ovh.request(
      'POST',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`,
      body
    );
  };

  /** Delete this port mapping */
  deleteModemLanDhcpDHCPStaticAddressesByServiceNameAndLanNameAndDhcpNameAndMACAddress = (
    MACAddress: string,
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<XdslTask> => {
    return this.ovh.request(
      'DELETE',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`
    );
  };

  /** Get this object properties */
  getModemLanDhcpDHCPStaticAddressesByServiceNameAndLanNameAndDhcpNameAndMACAddress = (
    MACAddress: string,
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<XdslDHCPStaticAddress> => {
    return this.ovh.request(
      'GET',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`
    );
  };

  /** Alter this object properties */
  updateModemLanDhcpDHCPStaticAddressesByServiceNameAndLanNameAndDhcpNameAndMACAddress = (
    MACAddress: string,
    dhcpName: string,
    lanName: string,
    serviceName: string,
    body: XdslDHCPStaticAddress
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`,
      body
    );
  };

  /** List of PortMappings on this modem */
  listModemPortMappingsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/portMappings`);
  };

  /** Add a port mapping */
  addModemPortMappingsByServiceName = (
    serviceName: string,
    body: {
      allowedRemoteIp?: string;
      description?: string;
      externalPortEnd?: number;
      externalPortStart: number;
      internalClient: string;
      internalPort: number;
      internalPortEnd?: number;
      name: string;
      protocol: XdslXdslModemConfigProtocolTypeEnum;
    }
  ): Promise<XdslPortMapping> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/portMappings`, body);
  };

  /** Delete this port mapping */
  deleteModemPortMappingsByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<XdslTask> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/modem/portMappings/${name}`);
  };

  /** Get this object properties */
  getModemPortMappingsByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<XdslPortMapping> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/portMappings/${name}`);
  };

  /** Alter this object properties */
  updateModemPortMappingsByServiceNameAndName = (
    name: string,
    serviceName: string,
    body: XdslPortMapping
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/portMappings/${name}`, body);
  };

  /** Reboot the modem */
  postModemRebootByServiceName = (
    serviceName: string,
    body: { todoDate?: Date }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reboot`, body);
  };

  /** Reconfigure voip line on modem */
  postModemReconfigureVoipByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reconfigureVoip`);
  };

  /** Refresh the list of connected devices on the modem */
  postModemRefreshConnectedDevicesByServiceName = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/refreshConnectedDevices`);
  };

  /** Reset the modem to its default configuration */
  postModemResetByServiceName = (
    serviceName: string,
    body: { resetOvhConfig?: boolean }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reset`, body);
  };

  /** Remove all the current port mapping rules */
  postModemResetPortMappingConfigByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/resetPortMappingConfig`);
  };

  /** get general Modem information */
  postModemRetrieveInfoByServiceName = (serviceName: string): Promise<XdslModemInfo> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/retrieveInfo`);
  };

  /** Get the status of sip alg service on modem */
  getModemSipAlgByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/sipAlg`);
  };

  /** Change the status of the sip alg service on modem */
  updateModemSipAlgByServiceName = (
    serviceName: string,
    body: { sipAlg: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/sipAlg`, body);
  };

  /** Get the status of the Upnp on modem */
  getModemUpnpByServiceName = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/upnp`);
  };

  /** Change the status of the Upnp on modem */
  updateModemUpnpByServiceName = (
    serviceName: string,
    body: { upnp: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/upnp`, body);
  };

  /** List of WLANs on this modem */
  listModemWifisByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/wifi`);
  };

  /** Get this object properties */
  getModemWifiByServiceNameAndWifiName = (
    serviceName: string,
    wifiName: string
  ): Promise<XdslWLAN> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/wifi/${wifiName}`);
  };

  /** Alter this object properties */
  updateModemWifiByServiceNameAndWifiName = (
    serviceName: string,
    wifiName: string,
    body: XdslWLAN
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/wifi/${wifiName}`, body);
  };

  /** List the notifications for this access */
  listMonitoringNotificationsByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/monitoringNotifications`);
  };

  /** Add a notification */
  addMonitoringNotificationsByServiceName = (
    serviceName: string,
    body: {
      allowIncident?: boolean;
      downThreshold?: number;
      email?: string;
      frequency: XdslMonitoringNotificationsFrequencyEnum;
      phone?: string;
      smsAccount?: string;
      type: XdslMonitoringNotificationsTypeEnum;
    }
  ): Promise<XdslMonitoringNotification> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/monitoringNotifications`, body);
  };

  /** Delete this notification */
  deleteMonitoringNotificationsByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/monitoringNotifications/${id}`);
  };

  /** Get this object properties */
  getMonitoringNotificationsByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<XdslMonitoringNotification> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/monitoringNotifications/${id}`);
  };

  /** Alter this object properties */
  updateMonitoringNotificationsByServiceNameAndId = (
    id: number,
    serviceName: string,
    body: XdslMonitoringNotification
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/monitoringNotifications/${id}`, body);
  };

  /** Get the status of the order */
  getOrderFollowupByServiceName = (serviceName: string): Promise<XdslOrderFollowupStep[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/orderFollowup`);
  };

  /** Book a meeting and relaunch order */
  postOrderMeetingByServiceName = (
    serviceName: string,
    body: { endDate: Date; startDate: Date; uiCode: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/orderMeeting`, body);
  };

  /** Get this object properties */
  getPendingActionByServiceName = (serviceName: string): Promise<XdslPendingAction> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/pendingAction`);
  };

  /** List the radius connection logs */
  listRadiusConnectionLogsByServiceName = (
    serviceName: string
  ): Promise<XdslRadiusConnectionLog[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/radiusConnectionLogs`);
  };

  /** Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin */
  postRequestPPPLoginMailByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/requestPPPLoginMail`);
  };

  /** Switch this access to total deconsolidation */
  postRequestTotalDeconsolidationByServiceName = (
    serviceName: string,
    body: { noPortability?: boolean; rio?: string }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/requestTotalDeconsolidation`, body);
  };

  /** Resiliate the access */
  postResiliateByServiceName = (
    serviceName: string,
    body: { resiliationDate?: Date; resiliationSurvey: XdslResiliationSurvey }
  ): Promise<XdslResiliationFollowUpDetail> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/resiliate`, body);
  };

  /** Get information about the ongoing resiliation */
  getResiliationFollowupByServiceName = (
    serviceName: string
  ): Promise<XdslResiliationFollowUpDetail> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/resiliationFollowup`);
  };

  /** Get resiliation terms */
  getResiliationTermsByServiceName = (serviceName: string): Promise<XdslResiliationTerms> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/resiliationTerms`);
  };

  /** Return Merchandise Authorisation associated */
  getRmaByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/rma`);
  };

  /** Cancel the rma */
  deleteRmaByServiceNameAndId = (id: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/rma/${id}`);
  };

  /** Get this object properties */
  getRmaByServiceNameAndId = (id: string, serviceName: string): Promise<TelephonyRma> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/rma/${id}`);
  };

  /** Alter this object properties */
  updateRmaByServiceNameAndId = (
    id: string,
    serviceName: string,
    body: TelephonyRma
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/rma/${id}`, body);
  };

  /** Change RMA type */
  updateRmaTypeByServiceNameAndId = (
    id: string,
    serviceName: string,
    body: { type: TelephonyRmaChangeTypeEnum }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/rma/${id}/changeType`, body);
  };

  /** Search for available line creation meeting time slots, for order only */
  postSearchOrderMeetingsByServiceName = (
    serviceName: string
  ): Promise<ConnectivityEligibilityMeetings> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/searchOrderMeetings`);
  };

  /** Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider */
  postSendOrderToProviderByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/sendOrderToProvider`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/serviceInfos`, body);
  };

  /** Get various statistics about this access */
  getStatisticsByServiceName = (serviceName: string): Promise<XdslTimestampAndValue> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/statistics`);
  };

  /** Tasks scheduled for this access */
  getTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getTasksByServiceNameAndId = (id: number, serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/tasks/${id}`);
  };

  /** Delete the task in problem from the results */
  postTasksArchiveByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/tasks/${id}/archive`);
  };

  /** Give the price to requestTotalDeconsolidation on the access */
  getTotalDeconsolidationTermsByServiceName = (
    serviceName: string
  ): Promise<XdslDeconsolidationTerms> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/totalDeconsolidationTerms`);
  };

  /** Update RIO, or disable portability, for order in error because of missing or invalid RIO */
  updateInvalidOrMissingRioByServiceName = (
    serviceName: string,
    body: { relaunchWithoutPortability: boolean; rio?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/updateInvalidOrMissingRio`, body);
  };
}

export { XdslHandler };
