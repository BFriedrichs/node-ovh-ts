/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsPackQuantityEnum } from '../models/SmsPackQuantityEnum';
import { SmsBatch } from '../models/SmsBatch';
import { SmsOutgoing } from '../models/SmsOutgoing';
import { SmsPhonebook } from '../models/SmsPhonebook';
import { SmsDocumentWayTypeEnum } from '../models/SmsDocumentWayTypeEnum';
import { SmsHlrLookupNumber } from '../models/SmsHlrLookupNumber';
import { SmsPttDetails } from '../models/SmsPttDetails';
import { SmsIncoming } from '../models/SmsIncoming';
import { TelephonyContactsExportFormatsEnum } from '../models/TelephonyContactsExportFormatsEnum';
import { SmsPhonebookContact } from '../models/SmsPhonebookContact';
import { SmsReceiver } from '../models/SmsReceiver';
import { SmsCharsetEnum } from '../models/SmsCharsetEnum';
import { SmsSettings } from '../models/SmsSettings';
import { SmsPackOffer } from '../models/SmsPackOffer';
import { SmsReceiversAsynchronousCleanReport } from '../models/SmsReceiversAsynchronousCleanReport';
import { SmsSenderDocument } from '../models/SmsSenderDocument';
import { SmsBatchUpdateParams } from '../models/SmsBatchUpdateParams';
import { SmsHlr } from '../models/SmsHlr';
import { SmsSender } from '../models/SmsSender';
import { SmsPackDetails } from '../models/SmsPackDetails';
import { SmsClassEnum } from '../models/SmsClassEnum';
import { SmsTypeTemplateEnum } from '../models/SmsTypeTemplateEnum';
import { SmsException } from '../models/SmsException';
import { SmsAllowedIPs } from '../models/SmsAllowedIPs';
import { SmsSenderRefererEnum } from '../models/SmsSenderRefererEnum';
import { SmsUser } from '../models/SmsUser';
import { SmsBillingCountryEnum } from '../models/SmsBillingCountryEnum';
import { SmsBlacklist } from '../models/SmsBlacklist';
import { SmsBatchStatistics } from '../models/SmsBatchStatistics';
import { ServicesService } from '../models/ServicesService';
import { SmsJob } from '../models/SmsJob';
import { SmsPriorityEnum } from '../models/SmsPriorityEnum';
import { SmsChatAccess } from '../models/SmsChatAccess';
import { SmsJobEstimate } from '../models/SmsJobEstimate';
import { SmsCountryEnum } from '../models/SmsCountryEnum';
import { TelephonyTask } from '../models/TelephonyTask';
import { SmsTask } from '../models/SmsTask';
import { TelephonyPcsFile } from '../models/TelephonyPcsFile';
import { SmsVirtualNumberGenericService } from '../models/SmsVirtualNumberGenericService';
import { SmsTypeSenderEnum } from '../models/SmsTypeSenderEnum';
import { SmsVirtualNumber } from '../models/SmsVirtualNumber';
import { SmsTemplateControl } from '../models/SmsTemplateControl';
import { ReferenceCountryEnum } from '../models/ReferenceCountryEnum';
import { SmsSenderAvailable } from '../models/SmsSenderAvailable';
import { SmsSmsSendingReport } from '../models/SmsSmsSendingReport';
import { TelephonyTaskStatusEnum } from '../models/TelephonyTaskStatusEnum';
import { SmsAccount } from '../models/SmsAccount';
import { SmsBatchParams } from '../models/SmsBatchParams';
import { SmsVirtualNumberJob } from '../models/SmsVirtualNumberJob';
import { SmsCodingEnum } from '../models/SmsCodingEnum';
import { SmsDestinationRates } from '../models/SmsDestinationRates';
import OVHBase from '../ovh';

class SmsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
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
  getRatesPacks = (): Promise<SmsPackDetails> => {
    return this.ovh.request('GET', '/sms/rates/packs');
  };

  /** List available services */
  getVirtualNumbers = (): Promise<string> => {
    return this.ovh.request('GET', '/sms/virtualNumbers');
  };

  /** Get this object properties */
  getVirtualNumbersNumber = (number: string): Promise<SmsVirtualNumberGenericService> => {
    return this.ovh.request('GET', `/sms/virtualNumbers/${number}`);
  };

  /** Get this object properties */
  getVirtualNumbersNumberServiceInfos = (number: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sms/virtualNumbers/${number}/serviceInfos`);
  };

  /** Alter this object properties */
  putVirtualNumbersNumberServiceInfos = (number: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/sms/virtualNumbers/${number}/serviceInfos`, body);
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<SmsAccount> => {
    return this.ovh.request('GET', `/sms/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: SmsAccount): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}`, body);
  };

  /** Get batches list */
  getServiceNameBatches = (serviceName: string): Promise<SmsBatch> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches`);
  };

  /** Create a batch */
  postServiceNameBatches = (serviceName: string, body: SmsBatchParams): Promise<SmsBatch> => {
    return this.ovh.request('POST', `/sms/${serviceName}/batches`, body);
  };

  /** Get a batch */
  getServiceNameBatchesId = (serviceName: string, id: string): Promise<SmsBatch> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches/${id}`);
  };

  /** Update a batch */
  putServiceNameBatchesId = (
    serviceName: string,
    id: string,
    body: SmsBatchUpdateParams
  ): Promise<SmsBatch> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/batches/${id}`, body);
  };

  /** Cancel a deferred batch (no SMS must have been sent) */
  postServiceNameBatchesIdCancel = (serviceName: string, id: string): Promise<SmsBatch> => {
    return this.ovh.request('POST', `/sms/${serviceName}/batches/${id}/cancel`);
  };

  /** Batch's statistics */
  getServiceNameBatchesIdStatistics = (
    serviceName: string,
    id: string
  ): Promise<SmsBatchStatistics> => {
    return this.ovh.request('GET', `/sms/${serviceName}/batches/${id}/statistics`);
  };

  /** Numbers blacklisted associated to the sms account */
  getServiceNameBlacklists = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/blacklists`);
  };

  /** Delete the blacklisted sms number given */
  deleteServiceNameBlacklistsNumber = (number: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/blacklists/${number}`);
  };

  /** Get this object properties */
  getServiceNameBlacklistsNumber = (number: string, serviceName: string): Promise<SmsBlacklist> => {
    return this.ovh.request('GET', `/sms/${serviceName}/blacklists/${number}`);
  };

  /** Get the /me/document id generated */
  getServiceNameDocument = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/document`);
  };

  /** Describe filter exceptions in sms sending from a specific receiver. */
  getServiceNameExceptions = (serviceName: string): Promise<SmsException> => {
    return this.ovh.request('GET', `/sms/${serviceName}/exceptions`);
  };

  /** Home Location Register informations. Give informations about a given cellular phone. */
  getServiceNameHlr = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr`);
  };

  /** Add one or several sending hlr lookup request */
  postServiceNameHlr = (
    serviceName: string,
    body: { receivers?: string; receiversDocumentUrl?: string }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/hlr`, body);
  };

  /** Get this object properties */
  getServiceNameHlrId = (id: number, serviceName: string): Promise<SmsHlrLookupNumber> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr/${id}`);
  };

  /** Get this object properties */
  getServiceNameHlrIdOperator = (id: number, serviceName: string): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/hlr/${id}/operator`);
  };

  /** Sms received associated to the sms account */
  getServiceNameIncoming = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteServiceNameIncomingId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/incoming/${id}`);
  };

  /** Get this object properties */
  getServiceNameIncomingId = (id: number, serviceName: string): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms account */
  getServiceNameJobs = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/jobs`);
  };

  /** Add one or several sending jobs */
  postServiceNameJobs = (
    serviceName: string,
    body: {
      charset?: SmsCharsetEnum;
      class?: SmsClassEnum;
      coding?: SmsCodingEnum;
      differedPeriod?: number;
      message: string;
      noStopClause?: boolean;
      priority?: SmsPriorityEnum;
      receivers?: string;
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
  deleteServiceNameJobsId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/jobs/${id}`);
  };

  /** Get this object properties */
  getServiceNameJobsId = (id: number, serviceName: string): Promise<SmsJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/jobs/${id}`);
  };

  /** Get SMS list */
  getServiceNameOutgoing = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing`);
  };

  /** Delete outgoing SMS from history */
  deleteServiceNameOutgoingId = (serviceName: string, id: number): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/outgoing/${id}`);
  };

  /** Get SMS details */
  getServiceNameOutgoingId = (serviceName: string, id: number): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing/${id}`);
  };

  /** Get this object properties */
  getServiceNameOutgoingIdHlr = (id: number, serviceName: string): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/outgoing/${id}/hlr`);
  };

  /** Return phonebooks associated to this account */
  getServiceNamePhonebooks = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks`);
  };

  /** Add a phonebook. Return the bookKey. */
  postServiceNamePhonebooks = (serviceName: string, body: { name: string }): Promise<string> => {
    return this.ovh.request('POST', `/sms/${serviceName}/phonebooks`, body);
  };

  /** Delete a phonebook */
  deleteServiceNamePhonebooksBookKey = (bookKey: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/phonebooks/${bookKey}`);
  };

  /** Get this object properties */
  getServiceNamePhonebooksBookKey = (
    bookKey: string,
    serviceName: string
  ): Promise<SmsPhonebook> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}`);
  };

  /** Alter this object properties */
  putServiceNamePhonebooksBookKey = (
    bookKey: string,
    serviceName: string,
    body: SmsPhonebook
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/phonebooks/${bookKey}`, body);
  };

  /** Export the phonebook's contacts */
  getServiceNamePhonebooksBookKeyExport = (
    bookKey: string,
    serviceName: string
  ): Promise<TelephonyPcsFile> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}/export`);
  };

  /** Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV */
  postServiceNamePhonebooksBookKeyImport = (
    bookKey: string,
    serviceName: string,
    body: { documentId: string }
  ): Promise<TelephonyTask> => {
    return this.ovh.request('POST', `/sms/${serviceName}/phonebooks/${bookKey}/import`, body);
  };

  /** Phonebook contacts */
  getServiceNamePhonebooksBookKeyPhonebookContact = (
    bookKey: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`);
  };

  /** Create a phonebook contact. Return identifier of the phonebook contact. */
  postServiceNamePhonebooksBookKeyPhonebookContact = (
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
  deleteServiceNamePhonebooksBookKeyPhonebookContactId = (
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
  getServiceNamePhonebooksBookKeyPhonebookContactId = (
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
  putServiceNamePhonebooksBookKeyPhonebookContactId = (
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
  getServiceNameReceivers = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers`);
  };

  /** Add a new document of csv receivers */
  postServiceNameReceivers = (
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
  deleteServiceNameReceiversSlotId = (serviceName: string, slotId: number): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/receivers/${slotId}`);
  };

  /** Get this object properties */
  getServiceNameReceiversSlotId = (serviceName: string, slotId: number): Promise<SmsReceiver> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers/${slotId}`);
  };

  /** Alter this object properties */
  putServiceNameReceiversSlotId = (
    serviceName: string,
    slotId: number,
    body: SmsReceiver
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/receivers/${slotId}`, body);
  };

  /** Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation. */
  postServiceNameReceiversSlotIdClean = (
    serviceName: string,
    slotId: number,
    body: { freemium: boolean; priceOnly: boolean }
  ): Promise<SmsReceiversAsynchronousCleanReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/receivers/${slotId}/clean`, body);
  };

  /** Get the document data container */
  getServiceNameReceiversSlotIdCsv = (serviceName: string, slotId: number): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/receivers/${slotId}/csv`);
  };

  /** Describe SMS offers available. */
  getServiceNameSeeOffers = (serviceName: string): Promise<SmsPackOffer> => {
    return this.ovh.request('GET', `/sms/${serviceName}/seeOffers`);
  };

  /** Senders allowed associated to the sms account */
  getServiceNameSenders = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders`);
  };

  /** Create the sms sender given */
  postServiceNameSenders = (
    serviceName: string,
    body: { description?: string; reason?: string; sender: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders`, body);
  };

  /** Delete the sms sender given */
  deleteServiceNameSendersSender = (sender: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/senders/${sender}`);
  };

  /** Get this object properties */
  getServiceNameSendersSender = (sender: string, serviceName: string): Promise<SmsSender> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}`);
  };

  /** Alter this object properties */
  putServiceNameSendersSender = (
    sender: string,
    serviceName: string,
    body: SmsSender
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/senders/${sender}`, body);
  };

  /** Documents linked to SMS sender for validation purpose */
  getServiceNameSendersSenderDocuments = (sender: string, serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}/documents`);
  };

  /** Create a new empty document */
  postServiceNameSendersSenderDocuments = (
    sender: string,
    serviceName: string,
    body: { description?: string; name: string }
  ): Promise<SmsSenderDocument> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders/${sender}/documents`, body);
  };

  /** Get this object properties */
  getServiceNameSendersSenderDocumentsDocumentID = (
    documentID: string,
    sender: string,
    serviceName: string
  ): Promise<SmsSenderDocument> => {
    return this.ovh.request('GET', `/sms/${serviceName}/senders/${sender}/documents/${documentID}`);
  };

  /** Alter this object properties */
  putServiceNameSendersSenderDocumentsDocumentID = (
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
  postServiceNameSendersSenderValidate = (
    sender: string,
    serviceName: string,
    body: { code: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/senders/${sender}/validate`, body);
  };

  /** The senders that are attached to your personal informations or OVH services and that can be automatically validated */
  getServiceNameSendersAvailableForValidation = (
    serviceName: string
  ): Promise<SmsSenderAvailable> => {
    return this.ovh.request('GET', `/sms/${serviceName}/sendersAvailableForValidation`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/sms/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/serviceInfos`, body);
  };

  /** Get SMPP allowed IPs */
  getServiceNameSmppAllowedIPs = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/smpp/allowedIPs`);
  };

  /** Add or remove allowed IPs */
  putServiceNameSmppAllowedIPs = (serviceName: string, body: SmsAllowedIPs): Promise<string> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/smpp/allowedIPs`, body);
  };

  /** Renew SMPP password */
  postServiceNameSmppPassword = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/smpp/password`);
  };

  /** Get SMPP settings */
  getServiceNameSmppSettings = (serviceName: string): Promise<SmsSettings> => {
    return this.ovh.request('GET', `/sms/${serviceName}/smpp/settings`);
  };

  /** Operations on a SMS service */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskTaskId = (serviceName: string, taskId: number): Promise<SmsTask> => {
    return this.ovh.request('GET', `/sms/${serviceName}/task/${taskId}`);
  };

  /** Template pattern filled up for moderation (Needed to send in US country) */
  getServiceNameTemplatesControl = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/templatesControl`);
  };

  /** Create the sms template control given */
  postServiceNameTemplatesControl = (
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
  deleteServiceNameTemplatesControlName = (name: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/templatesControl/${name}`);
  };

  /** Get this object properties */
  getServiceNameTemplatesControlName = (
    name: string,
    serviceName: string
  ): Promise<SmsTemplateControl> => {
    return this.ovh.request('GET', `/sms/${serviceName}/templatesControl/${name}`);
  };

  /** Alter this object properties */
  putServiceNameTemplatesControlName = (
    name: string,
    serviceName: string,
    body: SmsTemplateControl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/templatesControl/${name}`, body);
  };

  /** Attempt a new validation after moderation refusal */
  postServiceNameTemplatesControlNameRelaunchValidation = (
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
  postServiceNameTransferCredits = (
    serviceName: string,
    body: { credits: number; smsAccountTarget: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/transferCredits`, body);
  };

  /** Users associated to the sms account */
  getServiceNameUsers = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users`);
  };

  /** Create a new user for an sms account */
  postServiceNameUsers = (
    serviceName: string,
    body: { login: string; password: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/sms/${serviceName}/users`, body);
  };

  /** Delete the sms user given */
  deleteServiceNameUsersLogin = (login: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}`);
  };

  /** Get this object properties */
  getServiceNameUsersLogin = (login: string, serviceName: string): Promise<SmsUser> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}`);
  };

  /** Alter this object properties */
  putServiceNameUsersLogin = (login: string, serviceName: string, body: SmsUser): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/users/${login}`, body);
  };

  /** Get the /me/document id generated */
  getServiceNameUsersLoginDocument = (login: string, serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/document`);
  };

  /** Sms received associated to the sms user */
  getServiceNameUsersLoginIncoming = (login: string, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteServiceNameUsersLoginIncomingId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/incoming/${id}`);
  };

  /** Get this object properties */
  getServiceNameUsersLoginIncomingId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms user */
  getServiceNameUsersLoginJobs = (login: string, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/jobs`);
  };

  /** Add one or several sending jobs */
  postServiceNameUsersLoginJobs = (
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
      receivers?: string;
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
  deleteServiceNameUsersLoginJobsId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/jobs/${id}`);
  };

  /** Get this object properties */
  getServiceNameUsersLoginJobsId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/jobs/${id}`);
  };

  /** Sms sent associated to the sms user */
  getServiceNameUsersLoginOutgoing = (login: string, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing`);
  };

  /** Delete the sms outgoing history given */
  deleteServiceNameUsersLoginOutgoingId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/outgoing/${id}`);
  };

  /** Get this object properties */
  getServiceNameUsersLoginOutgoingId = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing/${id}`);
  };

  /** Get this object properties */
  getServiceNameUsersLoginOutgoingIdHlr = (
    id: number,
    login: string,
    serviceName: string
  ): Promise<SmsHlr> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/outgoing/${id}/hlr`);
  };

  /** Receivers preloaded from text or csv document file */
  getServiceNameUsersLoginReceivers = (login: string, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers`);
  };

  /** Add a new document of csv receivers */
  postServiceNameUsersLoginReceivers = (
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
  deleteServiceNameUsersLoginReceiversSlotId = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/users/${login}/receivers/${slotId}`);
  };

  /** Get this object properties */
  getServiceNameUsersLoginReceiversSlotId = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<SmsReceiver> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers/${slotId}`);
  };

  /** Alter this object properties */
  putServiceNameUsersLoginReceiversSlotId = (
    login: string,
    serviceName: string,
    slotId: number,
    body: SmsReceiver
  ): Promise<void> => {
    return this.ovh.request('PUT', `/sms/${serviceName}/users/${login}/receivers/${slotId}`, body);
  };

  /** Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation. */
  postServiceNameUsersLoginReceiversSlotIdClean = (
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
  getServiceNameUsersLoginReceiversSlotIdCsv = (
    login: string,
    serviceName: string,
    slotId: number
  ): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/users/${login}/receivers/${slotId}/csv`);
  };

  /** Virtual numbers associated to the sms account */
  getServiceNameVirtualNumbers = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers`);
  };

  /** Get this object properties */
  getServiceNameVirtualNumbersNumber = (
    number: string,
    serviceName: string
  ): Promise<SmsVirtualNumber> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}`);
  };

  /** Delete the given web access */
  deleteServiceNameVirtualNumbersNumberChatAccess = (
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Get this object properties */
  getServiceNameVirtualNumbersNumberChatAccess = (
    number: string,
    serviceName: string
  ): Promise<SmsChatAccess> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Create a new web access for this ressource */
  postServiceNameVirtualNumbersNumberChatAccess = (
    number: string,
    serviceName: string
  ): Promise<SmsChatAccess> => {
    return this.ovh.request('POST', `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`);
  };

  /** Sms received associated to the sms account */
  getServiceNameVirtualNumbersNumberIncoming = (
    number: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/incoming`);
  };

  /** Delete the sms incoming history given */
  deleteServiceNameVirtualNumbersNumberIncomingId = (
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
  getServiceNameVirtualNumbersNumberIncomingId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsIncoming> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`);
  };

  /** Sms in pending associated to the sms account */
  getServiceNameVirtualNumbersNumberJobs = (
    number: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/jobs`);
  };

  /** Add one or several sending jobs */
  postServiceNameVirtualNumbersNumberJobs = (
    number: string,
    serviceName: string,
    body: {
      charset?: SmsCharsetEnum;
      class?: SmsClassEnum;
      coding?: SmsCodingEnum;
      differedPeriod?: number;
      message: string;
      priority?: SmsPriorityEnum;
      receivers?: string;
      receiversDocumentUrl?: string;
      receiversSlotId?: string;
      tag?: string;
      validityPeriod?: number;
    }
  ): Promise<SmsSmsSendingReport> => {
    return this.ovh.request('POST', `/sms/${serviceName}/virtualNumbers/${number}/jobs`, body);
  };

  /** Delete the sms job given (stop sending) */
  deleteServiceNameVirtualNumbersNumberJobsId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`);
  };

  /** Get this object properties */
  getServiceNameVirtualNumbersNumberJobsId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsVirtualNumberJob> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`);
  };

  /** Sms sent associated to the sms account */
  getServiceNameVirtualNumbersNumberOutgoing = (
    number: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/outgoing`);
  };

  /** Delete the sms outgoing history given */
  deleteServiceNameVirtualNumbersNumberOutgoingId = (
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
  getServiceNameVirtualNumbersNumberOutgoingId = (
    id: number,
    number: string,
    serviceName: string
  ): Promise<SmsOutgoing> => {
    return this.ovh.request('GET', `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`);
  };

  /** Get this object properties */
  getServiceNameVirtualNumbersNumberOutgoingIdHlr = (
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

export default SmsHandler;
