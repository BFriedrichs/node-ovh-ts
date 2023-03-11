/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslAccess } from '../models/XdslAccess';
import { XdslResiliationTerms } from '../models/XdslResiliationTerms';
import { XdslWLAN } from '../models/XdslWLAN';
import { XdslXdslEmailPro } from '../models/XdslXdslEmailPro';
import { XdslDeconsolidationTerms } from '../models/XdslDeconsolidationTerms';
import { XdslDslamPort } from '../models/XdslDslamPort';
import { XdslModemExchangeInfo } from '../models/XdslModemExchangeInfo';
import { XdslAntiSpam } from '../models/XdslAntiSpam';
import { XdslConnectedDevice } from '../models/XdslConnectedDevice';
import { XdslStatisticsPeriodEnum } from '../models/XdslStatisticsPeriodEnum';
import { XdslLineDiagnosticDiagnostic } from '../models/XdslLineDiagnosticDiagnostic';
import { XdslLAN } from '../models/XdslLAN';
import { XdslDslamPortLog } from '../models/XdslDslamPortLog';
import { XdslFiberEligibility } from '../models/XdslFiberEligibility';
import { XdslExtraIpRangeMove } from '../models/XdslExtraIpRangeMove';
import { OrderOrder } from '../models/OrderOrder';
import { XdslPortMapping } from '../models/XdslPortMapping';
import { XdslMonitoringNotificationsTypeEnum } from '../models/XdslMonitoringNotificationsTypeEnum';
import { XdslIncident } from '../models/XdslIncident';
import { XdslResiliationSurvey } from '../models/XdslResiliationSurvey';
import { ConnectivityEligibilityMeetings } from '../models/ConnectivityEligibilityMeetings';
import { TelephonyRmaChangeTypeEnum } from '../models/TelephonyRmaChangeTypeEnum';
import { XdslXdslModemConfigProtocolTypeEnum } from '../models/XdslXdslModemConfigProtocolTypeEnum';
import { XdslModem } from '../models/XdslModem';
import { XdslDHCP } from '../models/XdslDHCP';
import { XdslLineDiagnosticFaultTypeEnum } from '../models/XdslLineDiagnosticFaultTypeEnum';
import { ServicesService } from '../models/ServicesService';
import { XdslWLANFrequencyEnum } from '../models/XdslWLANFrequencyEnum';
import { XdslFiberEligibilityStatusEnum } from '../models/XdslFiberEligibilityStatusEnum';
import { XdslOrderFollowupStep } from '../models/XdslOrderFollowupStep';
import { XdslLineDiagnosticAnswers } from '../models/XdslLineDiagnosticAnswers';
import { XdslMonitoringNotification } from '../models/XdslMonitoringNotification';
import { XdslResiliationFollowUpDetail } from '../models/XdslResiliationFollowUpDetail';
import { XdslTimestampAndValue } from '../models/XdslTimestampAndValue';
import { XdslMonitoringNotificationsFrequencyEnum } from '../models/XdslMonitoringNotificationsFrequencyEnum';
import { XdslIP } from '../models/XdslIP';
import { XdslAccessStatisticsTypeEnum } from '../models/XdslAccessStatisticsTypeEnum';
import { XdslLineDiagnosticCustomerActionsEnum } from '../models/XdslLineDiagnosticCustomerActionsEnum';
import { XdslLine } from '../models/XdslLine';
import { XdslDHCPStaticAddress } from '../models/XdslDHCPStaticAddress';
import { TelephonyRma } from '../models/TelephonyRma';
import { XdslEmailProTask } from '../models/XdslEmailProTask';
import { XdslAccessDiagnostic } from '../models/XdslAccessDiagnostic';
import { XdslTask } from '../models/XdslTask';
import { XdslTaskStatusEnum } from '../models/XdslTaskStatusEnum';
import { XdslTemplateModem } from '../models/XdslTemplateModem';
import { XdslAntiSpamEvidencesInfo } from '../models/XdslAntiSpamEvidencesInfo';
import { XdslDslamLineProfile } from '../models/XdslDslamLineProfile';
import { XdslLineStatisticsTypeEnum } from '../models/XdslLineStatisticsTypeEnum';
import { XdslModemInfo } from '../models/XdslModemInfo';
import { XdslPendingAction } from '../models/XdslPendingAction';
import { XdslRadiusConnectionLog } from '../models/XdslRadiusConnectionLog';
import { XdslServiceStatusEnum } from '../models/XdslServiceStatusEnum';
import { SpareXdslXdslSpare } from '../models/SpareXdslXdslSpare';
import OVHBase from '../ovh';

class XdslHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/xdsl');
  };

  /** List available services */
  getEmailPro = (): Promise<string> => {
    return this.ovh.request('GET', '/xdsl/email/pro');
  };

  /** Delete the email */
  deleteEmailProEmail = (email: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/email/pro/${email}`);
  };

  /** Get this object properties */
  getEmailProEmail = (email: string): Promise<XdslXdslEmailPro> => {
    return this.ovh.request('GET', `/xdsl/email/pro/${email}`);
  };

  /** Alter this object properties */
  putEmailProEmail = (email: string, body: XdslXdslEmailPro): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/email/pro/${email}`, body);
  };

  /** Change the email password */
  postEmailProEmailChangePassword = (
    email: string,
    body: { password: string }
  ): Promise<XdslEmailProTask> => {
    return this.ovh.request('POST', `/xdsl/email/pro/${email}/changePassword`, body);
  };

  /** List of incidents */
  getIncidents = (): Promise<number> => {
    return this.ovh.request('GET', '/xdsl/incidents');
  };

  /** Get this object properties */
  getIncidentsId = (id: number): Promise<XdslIncident> => {
    return this.ovh.request('GET', `/xdsl/incidents/${id}`);
  };

  /** List available services */
  getSpare = (): Promise<string> => {
    return this.ovh.request('GET', '/xdsl/spare');
  };

  /** Get all available spare brands */
  getSpareBrands = (): Promise<string> => {
    return this.ovh.request('GET', '/xdsl/spare/brands');
  };

  /** Delete the spare as if it was not belonging to OVH anymore */
  deleteSpareSpare = (spare: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/spare/${spare}`);
  };

  /** Get this object properties */
  getSpareSpare = (spare: string): Promise<SpareXdslXdslSpare> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}`);
  };

  /** Return the list of brand compatible to be replaced */
  getSpareSpareCompatibleReplacement = (spare: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}/compatibleReplacement`);
  };

  /** Replace the modem by its spare */
  postSpareSpareReplace = (spare: string, body: { domain: string }): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/spare/${spare}/replace`, body);
  };

  /** Return the broken equipment in instantRefund */
  postSpareSpareReturnMerchandise = (spare: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/spare/${spare}/returnMerchandise`);
  };

  /** Get this object properties */
  getSpareSpareServiceInfos = (spare: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/xdsl/spare/${spare}/serviceInfos`);
  };

  /** Alter this object properties */
  putSpareSpareServiceInfos = (spare: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/spare/${spare}/serviceInfos`, body);
  };

  /** List of TemplateModem */
  getTemplateModem = (): Promise<string> => {
    return this.ovh.request('GET', '/xdsl/templateModem');
  };

  /** Create new Modem Template from existing modem */
  postTemplateModem = (body: { name: string; serviceName: string }): Promise<XdslTemplateModem> => {
    return this.ovh.request('POST', '/xdsl/templateModem', body);
  };

  /** Delete this Modem Template */
  deleteTemplateModemName = (name: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/templateModem/${name}`);
  };

  /** Get this object properties */
  getTemplateModemName = (name: string): Promise<XdslTemplateModem> => {
    return this.ovh.request('GET', `/xdsl/templateModem/${name}`);
  };

  /** Alter this object properties */
  putTemplateModemName = (name: string, body: XdslTemplateModem): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/templateModem/${name}`, body);
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<XdslAccess> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: XdslAccess): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}`, body);
  };

  /** Informations about the extra IP range during address move */
  getServiceNameAddressMoveExtraIpRange = (serviceName: string): Promise<XdslExtraIpRangeMove> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/addressMove/extraIpRange`);
  };

  /** Initiate the extra IP range migration */
  postServiceNameAddressMoveExtraIpRangeMove = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/addressMove/extraIpRangeMove`);
  };

  /** List antiSpams for this access */
  getServiceNameAntiSpams = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams`);
  };

  /** Get this object properties */
  getServiceNameAntiSpamsIp = (ip: string, serviceName: string): Promise<XdslAntiSpam> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams/${ip}`);
  };

  /** List of evidences stored on PCS for this ip */
  getServiceNameAntiSpamsIpEvidences = (
    ip: string,
    serviceName: string
  ): Promise<XdslAntiSpamEvidencesInfo> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/antiSpams/${ip}/evidences`);
  };

  /** Apply TemplateModem to existing Modem */
  postServiceNameApplyTemplateToModem = (
    serviceName: string,
    body: { templateName: string }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/applyTemplateToModem`, body);
  };

  /** Get information about the ongoing resiliation */
  getServiceNameCanCancelResiliation = (serviceName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/canCancelResiliation`);
  };

  /** Cancel the ongoing resiliation */
  postServiceNameCancelResiliation = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/changeContact`, body);
  };

  /** Get this object properties */
  getServiceNameDiagnostic = (serviceName: string): Promise<XdslAccessDiagnostic> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/diagnostic`);
  };

  /** Run diagnostic on the access */
  postServiceNameDiagnostic = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/diagnostic`);
  };

  /** List fiber eligibilities for this access */
  getServiceNameFiberEligibilities = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/fiberEligibilities`);
  };

  /** Get this object properties */
  getServiceNameFiberEligibilitiesId = (
    id: number,
    serviceName: string
  ): Promise<XdslFiberEligibility> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/fiberEligibilities/${id}`);
  };

  /** Get this object properties */
  getServiceNameIncident = (serviceName: string): Promise<XdslIncident> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/incident`);
  };

  /** List of IPs addresses for this access */
  getServiceNameIps = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/ips`);
  };

  /** Order an extra /29 range of IPv4 addresses */
  postServiceNameIps = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/ips`);
  };

  /** Stop renewing this extra IPv4 option */
  deleteServiceNameIpsIp = (ip: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/ips/${ip}`);
  };

  /** Get this object properties */
  getServiceNameIpsIp = (ip: string, serviceName: string): Promise<XdslIP> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/ips/${ip}`);
  };

  /** Change the status of the IPv6 for this access */
  postServiceNameIpv6 = (serviceName: string, body: { enabled: boolean }): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/ipv6`, body);
  };

  /** The lines of the access */
  getServiceNameLines = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines`);
  };

  /** Get this object properties */
  getServiceNameLinesNumber = (number: string, serviceName: string): Promise<XdslLine> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}`);
  };

  /** Cancel line diagnostic if possible */
  postServiceNameLinesNumberDiagnosticCancel = (
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/diagnostic/cancel`);
  };

  /** Update and get advanced diagnostic of the line */
  postServiceNameLinesNumberDiagnosticRun = (
    number: string,
    serviceName: string,
    body: {
      actionsDone?: XdslLineDiagnosticCustomerActionsEnum;
      answers?: XdslLineDiagnosticAnswers;
      faultType: XdslLineDiagnosticFaultTypeEnum;
    }
  ): Promise<XdslLineDiagnosticDiagnostic> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/diagnostic/run`, body);
  };

  /** Get this object properties */
  getServiceNameLinesNumberDslamPort = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamPort> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/dslamPort`);
  };

  /** List all availables profiles for this port */
  getServiceNameLinesNumberDslamPortAvailableProfiles = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamLineProfile> => {
    return this.ovh.request(
      'GET',
      `/xdsl/${serviceName}/lines/${number}/dslamPort/availableProfiles`
    );
  };

  /** Change the profile of the port */
  postServiceNameLinesNumberDslamPortChangeProfile = (
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
  getServiceNameLinesNumberDslamPortLogs = (
    number: string,
    serviceName: string
  ): Promise<XdslDslamPortLog> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/dslamPort/logs`);
  };

  /** Reset the port on the DSLAM */
  postServiceNameLinesNumberDslamPortReset = (
    number: string,
    serviceName: string
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/lines/${number}/dslamPort/reset`);
  };

  /** Get various statistics about the line */
  getServiceNameLinesNumberStatistics = (
    number: string,
    serviceName: string
  ): Promise<XdslTimestampAndValue> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/lines/${number}/statistics`);
  };

  /** Get this object properties */
  getServiceNameModem = (serviceName: string): Promise<XdslModem> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem`);
  };

  /** Alter this object properties */
  putServiceNameModem = (serviceName: string, body: XdslModem): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem`, body);
  };

  /** List available ACS backend for this modem */
  getServiceNameModemAvailableACSBackend = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/availableACSBackend`);
  };

  /** List available WLAN channel for this modem */
  getServiceNameModemAvailableWLANChannel = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/availableWLANChannel`);
  };

  /** Get the status of the Bloc IP on modem */
  getServiceNameModemBlocIp = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/blocIp`);
  };

  /** Change the status of the Bloc IP on modem */
  postServiceNameModemBlocIp = (
    serviceName: string,
    body: { status: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/blocIp`, body);
  };

  /** Get the status of callWaiting on modem */
  getServiceNameModemCallWaiting = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/callWaiting`);
  };

  /** Change the status of callWaiting on modem */
  postServiceNameModemCallWaiting = (
    serviceName: string,
    body: { callWaiting: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/callWaiting`, body);
  };

  /** Get info about access modem replacement by last model. */
  getServiceNameModemComfortExchange = (serviceName: string): Promise<XdslModemExchangeInfo> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/comfortExchange`);
  };

  /** Replace access modem by last model, fees will be applied. */
  postServiceNameModemComfortExchange = (
    serviceName: string,
    body: { contactShipping?: string }
  ): Promise<OrderOrder> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/comfortExchange`, body);
  };

  /** List of devices connected on this modem */
  getServiceNameModemConnectedDevices = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/connectedDevices`);
  };

  /** Get this object properties */
  getServiceNameModemConnectedDevicesMacAddress = (
    macAddress: string,
    serviceName: string
  ): Promise<XdslConnectedDevice> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/connectedDevices/${macAddress}`);
  };

  /** Get the status of contentSharing on modem */
  getServiceNameModemContentSharing = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/contentSharing`);
  };

  /** Change the status of contentSharing on modem */
  postServiceNameModemContentSharing = (
    serviceName: string,
    body: { contentSharing: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/contentSharing`, body);
  };

  /** Get the firmware version installed on modem */
  getServiceNameModemFirmware = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/firmware`);
  };

  /** Launch a task to install target firmware on modem */
  postServiceNameModemFirmware = (
    serviceName: string,
    body: { firmware: string; todoDate?: Date }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/firmware`, body);
  };

  /** List available firmware for this modem */
  getServiceNameModemFirmwareAvailable = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/firmwareAvailable`);
  };

  /** Get the status of ftp service on modem */
  getServiceNameModemFtp = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/ftp`);
  };

  /** Change the status of the ftp service on modem */
  postServiceNameModemFtp = (
    serviceName: string,
    body: { ftp: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/ftp`, body);
  };

  /** Get the status of ipsec alg service on modem */
  getServiceNameModemIpsecAlg = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/ipsecAlg`);
  };

  /** Change the status of the ipsec alg service on modem */
  postServiceNameModemIpsecAlg = (
    serviceName: string,
    body: { ipsecAlg: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/ipsecAlg`, body);
  };

  /** List of LANs on this modem */
  getServiceNameModemLan = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan`);
  };

  /** Get this object properties */
  getServiceNameModemLanLanName = (lanName: string, serviceName: string): Promise<XdslLAN> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}`);
  };

  /** Alter this object properties */
  putServiceNameModemLanLanName = (
    lanName: string,
    serviceName: string,
    body: XdslLAN
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/lan/${lanName}`, body);
  };

  /** List of DHCP on this modem */
  getServiceNameModemLanLanNameDhcp = (lanName: string, serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp`);
  };

  /** Get this object properties */
  getServiceNameModemLanLanNameDhcpDhcpName = (
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<XdslDHCP> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`);
  };

  /** Alter this object properties */
  putServiceNameModemLanLanNameDhcpDhcpName = (
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
  getServiceNameModemLanLanNameDhcpDhcpNameDHCPStaticAddresses = (
    dhcpName: string,
    lanName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`
    );
  };

  /** Add a DHCP static lease */
  postServiceNameModemLanLanNameDhcpDhcpNameDHCPStaticAddresses = (
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
  deleteServiceNameModemLanLanNameDhcpDhcpNameDHCPStaticAddressesMACAddress = (
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
  getServiceNameModemLanLanNameDhcpDhcpNameDHCPStaticAddressesMACAddress = (
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
  putServiceNameModemLanLanNameDhcpDhcpNameDHCPStaticAddressesMACAddress = (
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
  getServiceNameModemPortMappings = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/portMappings`);
  };

  /** Add a port mapping */
  postServiceNameModemPortMappings = (
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
  deleteServiceNameModemPortMappingsName = (
    name: string,
    serviceName: string
  ): Promise<XdslTask> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/modem/portMappings/${name}`);
  };

  /** Get this object properties */
  getServiceNameModemPortMappingsName = (
    name: string,
    serviceName: string
  ): Promise<XdslPortMapping> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/portMappings/${name}`);
  };

  /** Alter this object properties */
  putServiceNameModemPortMappingsName = (
    name: string,
    serviceName: string,
    body: XdslPortMapping
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/portMappings/${name}`, body);
  };

  /** Reboot the modem */
  postServiceNameModemReboot = (
    serviceName: string,
    body: { todoDate?: Date }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reboot`, body);
  };

  /** Reconfigure voip line on modem */
  postServiceNameModemReconfigureVoip = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reconfigureVoip`);
  };

  /** Refresh the list of connected devices on the modem */
  postServiceNameModemRefreshConnectedDevices = (serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/refreshConnectedDevices`);
  };

  /** Reset the modem to its default configuration */
  postServiceNameModemReset = (
    serviceName: string,
    body: { resetOvhConfig?: boolean }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/reset`, body);
  };

  /** Remove all the current port mapping rules */
  postServiceNameModemResetPortMappingConfig = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/resetPortMappingConfig`);
  };

  /** get general Modem information */
  postServiceNameModemRetrieveInfo = (serviceName: string): Promise<XdslModemInfo> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/retrieveInfo`);
  };

  /** Get the status of sip alg service on modem */
  getServiceNameModemSipAlg = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/sipAlg`);
  };

  /** Change the status of the sip alg service on modem */
  postServiceNameModemSipAlg = (
    serviceName: string,
    body: { sipAlg: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/sipAlg`, body);
  };

  /** Get the status of the Upnp on modem */
  getServiceNameModemUpnp = (serviceName: string): Promise<XdslServiceStatusEnum> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/upnp`);
  };

  /** Change the status of the Upnp on modem */
  postServiceNameModemUpnp = (
    serviceName: string,
    body: { upnp: XdslServiceStatusEnum }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/modem/upnp`, body);
  };

  /** List of WLANs on this modem */
  getServiceNameModemWifi = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/wifi`);
  };

  /** Get this object properties */
  getServiceNameModemWifiWifiName = (serviceName: string, wifiName: string): Promise<XdslWLAN> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/modem/wifi/${wifiName}`);
  };

  /** Alter this object properties */
  putServiceNameModemWifiWifiName = (
    serviceName: string,
    wifiName: string,
    body: XdslWLAN
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/modem/wifi/${wifiName}`, body);
  };

  /** List the notifications for this access */
  getServiceNameMonitoringNotifications = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/monitoringNotifications`);
  };

  /** Add a notification */
  postServiceNameMonitoringNotifications = (
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
  deleteServiceNameMonitoringNotificationsId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/monitoringNotifications/${id}`);
  };

  /** Get this object properties */
  getServiceNameMonitoringNotificationsId = (
    id: number,
    serviceName: string
  ): Promise<XdslMonitoringNotification> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/monitoringNotifications/${id}`);
  };

  /** Alter this object properties */
  putServiceNameMonitoringNotificationsId = (
    id: number,
    serviceName: string,
    body: XdslMonitoringNotification
  ): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/monitoringNotifications/${id}`, body);
  };

  /** Get the status of the order */
  getServiceNameOrderFollowup = (serviceName: string): Promise<XdslOrderFollowupStep> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/orderFollowup`);
  };

  /** Book a meeting and relaunch order */
  postServiceNameOrderMeeting = (
    serviceName: string,
    body: { endDate: Date; startDate: Date; uiCode: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/orderMeeting`, body);
  };

  /** Get this object properties */
  getServiceNamePendingAction = (serviceName: string): Promise<XdslPendingAction> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/pendingAction`);
  };

  /** List the radius connection logs */
  getServiceNameRadiusConnectionLogs = (serviceName: string): Promise<XdslRadiusConnectionLog> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/radiusConnectionLogs`);
  };

  /** Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin */
  postServiceNameRequestPPPLoginMail = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/requestPPPLoginMail`);
  };

  /** Switch this access to total deconsolidation */
  postServiceNameRequestTotalDeconsolidation = (
    serviceName: string,
    body: { noPortability?: boolean; rio?: string }
  ): Promise<XdslTask> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/requestTotalDeconsolidation`, body);
  };

  /** Resiliate the access */
  postServiceNameResiliate = (
    serviceName: string,
    body: { resiliationDate?: Date; resiliationSurvey: XdslResiliationSurvey }
  ): Promise<XdslResiliationFollowUpDetail> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/resiliate`, body);
  };

  /** Get information about the ongoing resiliation */
  getServiceNameResiliationFollowup = (
    serviceName: string
  ): Promise<XdslResiliationFollowUpDetail> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/resiliationFollowup`);
  };

  /** Get resiliation terms */
  getServiceNameResiliationTerms = (serviceName: string): Promise<XdslResiliationTerms> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/resiliationTerms`);
  };

  /** Return Merchandise Authorisation associated */
  getServiceNameRma = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/rma`);
  };

  /** Cancel the rma */
  deleteServiceNameRmaId = (id: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/xdsl/${serviceName}/rma/${id}`);
  };

  /** Get this object properties */
  getServiceNameRmaId = (id: string, serviceName: string): Promise<TelephonyRma> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/rma/${id}`);
  };

  /** Alter this object properties */
  putServiceNameRmaId = (id: string, serviceName: string, body: TelephonyRma): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/rma/${id}`, body);
  };

  /** Change RMA type */
  postServiceNameRmaIdChangeType = (
    id: string,
    serviceName: string,
    body: { type: TelephonyRmaChangeTypeEnum }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/rma/${id}/changeType`, body);
  };

  /** Search for available line creation meeting time slots, for order only */
  postServiceNameSearchOrderMeetings = (
    serviceName: string
  ): Promise<ConnectivityEligibilityMeetings> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/searchOrderMeetings`);
  };

  /** Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider */
  postServiceNameSendOrderToProvider = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/sendOrderToProvider`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/xdsl/${serviceName}/serviceInfos`, body);
  };

  /** Get various statistics about this access */
  getServiceNameStatistics = (serviceName: string): Promise<XdslTimestampAndValue> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/statistics`);
  };

  /** Tasks scheduled for this access */
  getServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getServiceNameTasksId = (id: number, serviceName: string): Promise<XdslTask> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/tasks/${id}`);
  };

  /** Delete the task in problem from the results */
  postServiceNameTasksIdArchive = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/tasks/${id}/archive`);
  };

  /** Give the price to requestTotalDeconsolidation on the access */
  getServiceNameTotalDeconsolidationTerms = (
    serviceName: string
  ): Promise<XdslDeconsolidationTerms> => {
    return this.ovh.request('GET', `/xdsl/${serviceName}/totalDeconsolidationTerms`);
  };

  /** Update RIO, or disable portability, for order in error because of missing or invalid RIO */
  postServiceNameUpdateInvalidOrMissingRio = (
    serviceName: string,
    body: { relaunchWithoutPortability: boolean; rio?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/xdsl/${serviceName}/updateInvalidOrMissingRio`, body);
  };
}

export default XdslHandler;
