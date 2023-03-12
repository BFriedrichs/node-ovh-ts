/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsPttDetails } from '../models/SmsPttDetails';
import { SmsCountryEnum } from '../models/SmsCountryEnum';
import { SmsTypeSenderEnum } from '../models/SmsTypeSenderEnum';
import { SmsOutgoing } from '../models/SmsOutgoing';
import { TelephonyTask } from '../models/TelephonyTask';
import { SmsTypeTemplateEnum } from '../models/SmsTypeTemplateEnum';
import { SmsHlrLookupNumber } from '../models/SmsHlrLookupNumber';
import { SmsTemplateControl } from '../models/SmsTemplateControl';
import { SmsVirtualNumberGenericService } from '../models/SmsVirtualNumberGenericService';
import { TelephonyTaskStatusEnum } from '../models/TelephonyTaskStatusEnum';
import { ServicesService } from '../models/ServicesService';
import { SmsCodingEnum } from '../models/SmsCodingEnum';
import { SmsPackDetails } from '../models/SmsPackDetails';
import { SmsUser } from '../models/SmsUser';
import { SmsBatchUpdateParams } from '../models/SmsBatchUpdateParams';
import { ReferenceCountryEnum } from '../models/ReferenceCountryEnum';
import { SmsSenderRefererEnum } from '../models/SmsSenderRefererEnum';
import { SmsClassEnum } from '../models/SmsClassEnum';
import { SmsPhonebook } from '../models/SmsPhonebook';
import { SmsChatAccess } from '../models/SmsChatAccess';
import { TelephonyPcsFile } from '../models/TelephonyPcsFile';
import { TelephonyContactsExportFormatsEnum } from '../models/TelephonyContactsExportFormatsEnum';
import { SmsBlacklist } from '../models/SmsBlacklist';
import { SmsCharsetEnum } from '../models/SmsCharsetEnum';
import { SmsAllowedIPs } from '../models/SmsAllowedIPs';
import { SmsVirtualNumber } from '../models/SmsVirtualNumber';
import { SmsAccount } from '../models/SmsAccount';
import { SmsPhonebookContact } from '../models/SmsPhonebookContact';
import { SmsSettings } from '../models/SmsSettings';
import { SmsVirtualNumberJob } from '../models/SmsVirtualNumberJob';
import { SmsSender } from '../models/SmsSender';
import { SmsBatchParams } from '../models/SmsBatchParams';
import { SmsSmsSendingReport } from '../models/SmsSmsSendingReport';
import { SmsTask } from '../models/SmsTask';
import { SmsIncoming } from '../models/SmsIncoming';
import { SmsBatchStatistics } from '../models/SmsBatchStatistics';
import { SmsReceiversAsynchronousCleanReport } from '../models/SmsReceiversAsynchronousCleanReport';
import { SmsBillingCountryEnum } from '../models/SmsBillingCountryEnum';
import { SmsHlr } from '../models/SmsHlr';
import { SmsReceiver } from '../models/SmsReceiver';
import { SmsPackQuantityEnum } from '../models/SmsPackQuantityEnum';
import { SmsException } from '../models/SmsException';
import { SmsJobEstimate } from '../models/SmsJobEstimate';
import { SmsJob } from '../models/SmsJob';
import { SmsSenderDocument } from '../models/SmsSenderDocument';
import { SmsDestinationRates } from '../models/SmsDestinationRates';
import { SmsDocumentWayTypeEnum } from '../models/SmsDocumentWayTypeEnum';
import { SmsSenderAvailable } from '../models/SmsSenderAvailable';
import { SmsPackOffer } from '../models/SmsPackOffer';
import { SmsBatch } from '../models/SmsBatch';
import { SmsPriorityEnum } from '../models/SmsPriorityEnum';
import OVHBase from '../ovh';

class SmsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/sms');
  };

  /** Get the encoding, length and number of SMS parts of a text message */
  postEstimate = (body: {
    message: string;
    noStopClause: boolean;
    senderType: SmsTypeSenderEnum;
  }): Promise<SmsJobEstimate> => {
    return this.ovh.request('POST', '/sms/estimate', body);
  };

  /** Get informations about the given ptt code */
  getPtts = (): Promise<SmsPttDetails> => {
    return this.ovh.request('GET', '/sms/ptts');
  };

  /** Get the prices and credits to send a SMS towards given country */
  getRatesDestinations = (): Promise<SmsDestinationRates> => {
    return this.ovh.request('GET', '/sms/rates/destinations');
  };

  /** Get the prices and credits of all the SMS packs with informations about the destination country */
  getRatesPacks = (): Promise<SmsPackDetails[]> => {
    return this.ovh.request('GET', '/sms/rates/packs');
  };

  /** List available services */
  listVirtualNumbers = (): Promise<string[]> => {
    return this.ovh.request('GET', '/sms/virtualNumbers');
  };

  /** Get this object properties */
  getVirtualNumbersByNumber = (number: string): Promise<SmsVirtualNumberGenericService> => {
    return this.ovh.request('GET', `/sms/virtualNumbers/${number}`);
  };

  /** Get this object properties */
  getVirtualNumbersServiceInfosByNumber = (number: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sms/virtualNumbers/${number}/serviceInfos`);
  };

  /** Alter this object properties */
  updateVirtualNumbersServiceInfosByNumber = (
    number: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/virtualNumbers/${number}/serviceInfos`, body);
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<SmsAccount> => {
    return this.ovh.request('GET', `/sms/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: SmsAccount): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}`, body);
  };

  /** Get batches list */
  getBatchesByServiceName = (serviceName: string): Promise<SmsBatch[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches`);
  };

  /** Create a batch */
  createBatchesByServiceName = (serviceName: string, body: SmsBatchParams): Promise<SmsBatch> => {
    return this.ovh.request('POST', `/sms/${serviceName}/batches`, body);
  };

  /** Get a batch */
  getBatchesByServiceNameAndId = (serviceName: string, id: string): Promise<SmsBatch> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches/${id}`);
  };

  /** Update a batch */
  updateBatchesByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: SmsBatchUpdateParams
  ): Promise<SmsBatch> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/batches/${id}`, body);
  };

  /** Cancel a deferred batch (no SMS must have been sent) */
  postBatchesCancelByServiceNameAndId = (serviceName: string, id: string): Promise<SmsBatch> => {
    return this.ovh.request('POST', `/sms/${serviceName}/batches/${id}/cancel`);
  };

  /** Batch's statistics */
  getBatchesStatisticsByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<SmsBatchStatistics> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches/${id}/statistics`);
  };

  /** Numbers blacklisted associated to the sms account */
  getBlacklistsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/blacklists`);
  };

  /** Delete the blacklisted sms number given */
  deleteBlacklistsByServiceNameAndNumber = (number: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/blacklists/${number}`);
  };

  /** Get this object properties */
  getBlacklistsByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<SmsBlacklist> => {
    return this.ovh.request('GET', `/sms/${serviceName}/blacklists/${number}`);
  };

  /** Get the /me/document id generated */
  getDocumentByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/document`);
  };

  /** Describe filter exceptions in sms sending from a specific receiver. */
  getExceptionsByServiceName = (serviceName: string): Promise<SmsException[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/exceptions`);
  };

  /** Home Location Register informations. Give informations about a given cellular phone. */
  getHlrByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr`);
  };

  /** Add one or several sending hlr lookup request */
  addHlrByServiceName = (
    serviceName: string,
    body: { receivers?: string[]; receiversDocumentUrl?: string }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/hlr`, body);
  };

  /** Get this object properties */
  getHlrByServiceNameAndId = (id: number, serviceName: string): Promise<SmsHlrLookupNumber> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr/${id}`);
  };

  /** Get this object properties */
  getHlrOperatorByServiceNameAndId = (id: number, serviceName: string): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr/${id}/operator`);
  };

  /** Sms received associated to the sms account */
  getIncomingByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteIncomingByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/incoming/${id}`);
  };

  /** Get this object properties */
  getIncomingByServiceNameAndId = (id: number, serviceName: string): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms account */
  getJobsByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/jobs`);
  };

  /** Add one or several sending jobs */
  addJobsByServiceName = (
    serviceName: string,
    body: {
      charset?: SmsCharsetEnum;
      class?: SmsClassEnum;
      coding?: SmsCodingEnum;
      differedPeriod?: number;
      message: string;
      noStopClause?: boolean;
      priority?: SmsPriorityEnum;
      receivers?: string[];
      receiversDocumentUrl?: string;
      receiversSlotId?: string;
      sender?: string;
      senderForResponse?: boolean;
      tag?: string;
      validityPeriod?: number;
    }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/jobs`, body);
  };

  /** Delete the sms job given (stop sending) */
  deleteJobsByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/jobs/${id}`);
  };

  /** Get this object properties */
  getJobsByServiceNameAndId = (id: number, serviceName: string): Promise<SmsJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/jobs/${id}`);
  };

  /** Get SMS list */
  getOutgoingByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing`);
  };

  /** Delete outgoing SMS from history */
  deleteOutgoingByServiceNameAndId = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/outgoing/${id}`);
  };

  /** Get SMS details */
  getOutgoingByServiceNameAndId = (serviceName: string, id: number): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing/${id}`);
  };

  /** Get this object properties */
  getOutgoingHlrByServiceNameAndId = (id: number, serviceName: string): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing/${id}/hlr`);
  };

  /** Return phonebooks associated to this account */
  getPhonebooksByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks`);
  };

  /** Add a phonebook. Return the bookKey. */
  addPhonebooksByServiceName = (serviceName: string, body: { name: string }): Promise<string> => {
    return this.ovh.request('POST', `/sms/${serviceName}/phonebooks`, body);
  };

  /** Delete a phonebook */
  deletePhonebooksByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/phonebooks/${bookKey}`);
  };

  /** Get this object properties */
  getPhonebooksByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string
  ): Promise<SmsPhonebook> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}`);
  };

  /** Alter this object properties */
  updatePhonebooksByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string,
    body: SmsPhonebook
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/phonebooks/${bookKey}`, body);
  };

  /** Export the phonebook's contacts */
  exportPhonebooksByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string
  ): Promise<TelephonyPcsFile> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}/export`);
  };

  /** Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV */
  postPhonebooksImportByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string,
    body: { documentId: string }
  ): Promise<TelephonyTask> => {
    return this.ovh.request('POST', `/sms/${serviceName}/phonebooks/${bookKey}/import`, body);
  };

  /** Phonebook contacts */
  getPhonebooksPhonebookContactByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`);
  };

  /** Create a phonebook contact. Return identifier of the phonebook contact. */
  createPhonebooksPhonebookContactByServiceNameAndBookKey = (
    bookKey: string,
    serviceName: string,
    body: {
      group: string;
      homeMobile?: string;
      homePhone?: string;
      name: string;
      surname: string;
      workMobile?: string;
      workPhone?: string;
    }
  ): Promise<number> => {
    return this.ovh.request(
      'POST',
      `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`,
      body
    );
  };

  /** Delete a phonebook contact */
  deletePhonebooksPhonebookContactByServiceNameAndBookKeyAndId = (
    bookKey: string,
    id: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`
    );
  };

  /** Get this object properties */
  getPhonebooksPhonebookContactByServiceNameAndBookKeyAndId = (
    bookKey: string,
    id: number,
    serviceName: string
  ): Promise<SmsPhonebookContact> => {
    return this.ovh.request(
      'GET',
      `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`
    );
  };

  /** Alter this object properties */
  updatePhonebooksPhonebookContactByServiceNameAndBookKeyAndId = (
    bookKey: string,
    id: number,
    serviceName: string,
    body: SmsPhonebookContact
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`,
      body
    );
  };

  /** Receivers preloaded from text or csv document file */
  getReceiversByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers`);
  };

  /** Add a new document of csv receivers */
  addReceiversByServiceName = (
    serviceName: string,
    body: {
      autoUpdate: boolean;
      csvUrl?: string;
      description: string;
      documentId?: string;
      slotId: number;
    }
  ): Promise<SmsReceiver> => {
    return this.ovh.request('POST', `/sms/${serviceName}/receivers`, body);
  };

  /** Delete the document from the slot */
  deleteReceiversByServiceNameAndSlotId = (serviceName: string, slotId: number): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/receivers/${slotId}`);
  };

  /** Get this object properties */
  getReceiversByServiceNameAndSlotId = (
    serviceName: string,
    slotId: number
  ): Promise<SmsReceiver> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers/${slotId}`);
  };

  /** Alter this object properties */
  updateReceiversByServiceNameAndSlotId = (
    serviceName: string,
    slotId: number,
    body: SmsReceiver
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/receivers/${slotId}`, body);
  };

  /** Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation. */
  postReceiversCleanByServiceNameAndSlotId = (
    serviceName: string,
    slotId: number,
    body: { freemium: boolean; priceOnly: boolean }
  ): Promise<SmsReceiversAsynchronousCleanReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/receivers/${slotId}/clean`, body);
  };

  /** Get the document data container */
  getReceiversCsvByServiceNameAndSlotId = (
    serviceName: string,
    slotId: number
  ): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers/${slotId}/csv`);
  };

  /** Describe SMS offers available. */
  getSeeOffersByServiceName = (serviceName: string): Promise<SmsPackOffer[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/seeOffers`);
  };

  /** Senders allowed associated to the sms account */
  sendersByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders`);
  };

  /** Create the sms sender given */
  createSendersByServiceName = (
    serviceName: string,
    body: { description?: string; reason?: string; sender: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders`, body);
  };

  /** Delete the sms sender given */
  deleteSendersByServiceNameAndSender = (sender: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/senders/${sender}`);
  };

  /** Get this object properties */
  getSendersByServiceNameAndSender = (sender: string, serviceName: string): Promise<SmsSender> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}`);
  };

  /** Alter this object properties */
  updateSendersByServiceNameAndSender = (
    sender: string,
    serviceName: string,
    body: SmsSender
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/senders/${sender}`, body);
  };

  /** Documents linked to SMS sender for validation purpose */
  getSendersDocumentsByServiceNameAndSender = (
    sender: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}/documents`);
  };

  /** Create a new empty document */
  createSendersDocumentsByServiceNameAndSender = (
    sender: string,
    serviceName: string,
    body: { description?: string; name: string }
  ): Promise<SmsSenderDocument> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders/${sender}/documents`, body);
  };

  /** Get this object properties */
  getSendersDocumentsByServiceNameAndSenderAndDocumentID = (
    documentID: string,
    sender: string,
    serviceName: string
  ): Promise<SmsSenderDocument> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}/documents/${documentID}`);
  };

  /** Alter this object properties */
  updateSendersDocumentsByServiceNameAndSenderAndDocumentID = (
    documentID: string,
    sender: string,
    serviceName: string,
    body: SmsSenderDocument
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/sms/${serviceName}/senders/${sender}/documents/${documentID}`,
      body
    );
  };

  /** Validate a given sender with an activation code. */
  validateSendersByServiceNameAndSender = (
    sender: string,
    serviceName: string,
    body: { code: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders/${sender}/validate`, body);
  };

  /** The senders that are attached to your personal informations or OVH services and that can be automatically validated */
  getSendersAvailableForValidationByServiceName = (
    serviceName: string
  ): Promise<SmsSenderAvailable[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/sendersAvailableForValidation`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sms/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/serviceInfos`, body);
  };

  /** Get SMPP allowed IPs */
  getSmppAllowedIPsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/smpp/allowedIPs`);
  };

  /** Add or remove allowed IPs */
  addSmppAllowedIPsByServiceName = (
    serviceName: string,
    body: SmsAllowedIPs
  ): Promise<string[]> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/smpp/allowedIPs`, body);
  };

  /** Renew SMPP password */
  postSmppPasswordByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/smpp/password`);
  };

  /** Get SMPP settings */
  getSmppSettingsByServiceName = (serviceName: string): Promise<SmsSettings> => {
    return this.ovh.request('GET', `/sms/${serviceName}/smpp/settings`);
  };

  /** Operations on a SMS service */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndTaskId = (serviceName: string, taskId: number): Promise<SmsTask> => {
    return this.ovh.request('GET', `/sms/${serviceName}/task/${taskId}`);
  };

  /** Template pattern filled up for moderation (Needed to send in US country) */
  getTemplatesControlByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/templatesControl`);
  };

  /** Create the sms template control given */
  createTemplatesControlByServiceName = (
    serviceName: string,
    body: {
      activity: SmsTypeTemplateEnum;
      description?: string;
      message: string;
      name: string;
      reason?: string;
    }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/templatesControl`, body);
  };

  /** Delete the sms template control */
  deleteTemplatesControlByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/templatesControl/${name}`);
  };

  /** Get this object properties */
  getTemplatesControlByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<SmsTemplateControl> => {
    return this.ovh.request('GET', `/sms/${serviceName}/templatesControl/${name}`);
  };

  /** Alter this object properties */
  updateTemplatesControlByServiceNameAndName = (
    name: string,
    serviceName: string,
    body: SmsTemplateControl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/templatesControl/${name}`, body);
  };

  /** Attempt a new validation after moderation refusal */
  postTemplatesControlRelaunchValidationByServiceNameAndName = (
    name: string,
    serviceName: string,
    body: { description: string; message: string }
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/sms/${serviceName}/templatesControl/${name}/relaunchValidation`,
      body
    );
  };

  /** Credit transfer between two sms accounts. */
  postTransferCreditsByServiceName = (
    serviceName: string,
    body: { credits: number; smsAccountTarget: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/transferCredits`, body);
  };

  /** Users associated to the sms account */
  getUsersByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users`);
  };

  /** Create a new user for an sms account */
  createUsersByServiceName = (
    serviceName: string,
    body: { login: string; password: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/users`, body);
  };

  /** Delete the sms user given */
  deleteUsersByServiceNameAndLogin = (login: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}`);
  };

  /** Get this object properties */
  getUsersByServiceNameAndLogin = (login: string, serviceName: string): Promise<SmsUser> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}`);
  };

  /** Alter this object properties */
  updateUsersByServiceNameAndLogin = (
    login: string,
    serviceName: string,
    body: SmsUser
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/users/${login}`, body);
  };

  /** Get the /me/document id generated */
  getUsersDocumentByServiceNameAndLogin = (login: string, serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/document`);
  };

  /** Sms received associated to the sms user */
  getUsersIncomingByServiceNameAndLogin = (
    login: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteUsersIncomingByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/incoming/${id}`);
  };

  /** Get this object properties */
  getUsersIncomingByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms user */
  getUsersJobsByServiceNameAndLogin = (login: string, serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/jobs`);
  };

  /** Add one or several sending jobs */
  addUsersJobsByServiceNameAndLogin = (
    login: string,
    serviceName: string,
    body: {
      charset?: SmsCharsetEnum;
      class?: SmsClassEnum;
      coding?: SmsCodingEnum;
      differedPeriod?: number;
      message: string;
      noStopClause?: boolean;
      priority?: SmsPriorityEnum;
      receivers?: string[];
      receiversDocumentUrl?: string;
      receiversSlotId?: string;
      sender?: string;
      senderForResponse?: boolean;
      tag?: string;
      validityPeriod?: number;
    }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/users/${login}/jobs`, body);
  };

  /** Delete the sms job given (stop sending) */
  deleteUsersJobsByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/jobs/${id}`);
  };

  /** Get this object properties */
  getUsersJobsByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/jobs/${id}`);
  };

  /** Sms sent associated to the sms user */
  getUsersOutgoingByServiceNameAndLogin = (
    login: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing`);
  };

  /** Delete the sms outgoing history given */
  deleteUsersOutgoingByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/outgoing/${id}`);
  };

  /** Get this object properties */
  getUsersOutgoingByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing/${id}`);
  };

  /** Get this object properties */
  getUsersOutgoingHlrByServiceNameAndLoginAndId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing/${id}/hlr`);
  };

  /** Receivers preloaded from text or csv document file */
  getUsersReceiversByServiceNameAndLogin = (
    login: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers`);
  };

  /** Add a new document of csv receivers */
  addUsersReceiversByServiceNameAndLogin = (
    login: string,
    serviceName: string,
    body: {
      autoUpdate: boolean;
      csvUrl?: string;
      description: string;
      documentId?: string;
      slotId: number;
    }
  ): Promise<SmsReceiver> => {
    return this.ovh.request('POST', `/sms/${serviceName}/users/${login}/receivers`, body);
  };

  /** Delete the document from the slot */
  deleteUsersReceiversByServiceNameAndLoginAndSlotId = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/receivers/${slotId}`);
  };

  /** Get this object properties */
  getUsersReceiversByServiceNameAndLoginAndSlotId = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<SmsReceiver> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers/${slotId}`);
  };

  /** Alter this object properties */
  updateUsersReceiversByServiceNameAndLoginAndSlotId = (
    login: string,
    serviceName: string,
    slotId: number,
    body: SmsReceiver
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/users/${login}/receivers/${slotId}`, body);
  };

  /** Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation. */
  postUsersReceiversCleanByServiceNameAndLoginAndSlotId = (
    login: string,
    serviceName: string,
    slotId: number,
    body: { freemium: boolean; priceOnly: boolean }
  ): Promise<SmsReceiversAsynchronousCleanReport> => {
    return this.ovh.request(
      'POST',
      `/sms/${serviceName}/users/${login}/receivers/${slotId}/clean`,
      body
    );
  };

  /** Get the document data container */
  getUsersReceiversCsvByServiceNameAndLoginAndSlotId = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers/${slotId}/csv`);
  };

  /** Virtual numbers associated to the sms account */
  getVirtualNumbersByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers`);
  };

  /** Get this object properties */
  getVirtualNumbersByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<SmsVirtualNumber> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}`);
  };

  /** Delete the given web access */
  deleteVirtualNumbersChatAccessByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Get this object properties */
  getVirtualNumbersChatAccessByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<SmsChatAccess> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Create a new web access for this ressource */
  createVirtualNumbersChatAccessByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<SmsChatAccess> => {
    return this.ovh.request('POST', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Sms received associated to the sms account */
  getVirtualNumbersIncomingByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteVirtualNumbersIncomingByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`
    );
  };

  /** Get this object properties */
  getVirtualNumbersIncomingByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms account */
  getVirtualNumbersJobsByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/jobs`);
  };

  /** Add one or several sending jobs */
  addVirtualNumbersJobsByServiceNameAndNumber = (
    number: string,
    serviceName: string,
    body: {
      charset?: SmsCharsetEnum;
      class?: SmsClassEnum;
      coding?: SmsCodingEnum;
      differedPeriod?: number;
      message: string;
      priority?: SmsPriorityEnum;
      receivers?: string[];
      receiversDocumentUrl?: string;
      receiversSlotId?: string;
      tag?: string;
      validityPeriod?: number;
    }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/virtualNumbers/${number}/jobs`, body);
  };

  /** Delete the sms job given (stop sending) */
  deleteVirtualNumbersJobsByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`);
  };

  /** Get this object properties */
  getVirtualNumbersJobsByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsVirtualNumberJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`);
  };

  /** Sms sent associated to the sms account */
  getVirtualNumbersOutgoingByServiceNameAndNumber = (
    number: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/outgoing`);
  };

  /** Delete the sms outgoing history given */
  deleteVirtualNumbersOutgoingByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`
    );
  };

  /** Get this object properties */
  getVirtualNumbersOutgoingByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`);
  };

  /** Get this object properties */
  getVirtualNumbersOutgoingHlrByServiceNameAndNumberAndId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsHlr> => {
    return this.ovh.request(
      'GET',
      `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}/hlr`
    );
  };
}

export { SmsHandler };
