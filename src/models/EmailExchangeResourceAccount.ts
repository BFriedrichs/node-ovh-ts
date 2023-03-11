/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeResourceTypeEnum } from './EmailExchangeResourceTypeEnum';
import { EmailExchangeShowMeetingDetailsEnum } from './EmailExchangeShowMeetingDetailsEnum';

export type EmailExchangeResourceAccount = {
  addOrganizerToSubject: boolean;
  allowConflict: boolean;
  bookingWindow: number;
  capacity: number;
  company: string | null;
  creationDate: Date | null;
  deleteComments: boolean;
  deleteSubject: boolean;
  displayName: string;
  location: string;
  maximumDuration: number;
  resourceEmailAddress: string;
  showMeetingDetails: EmailExchangeShowMeetingDetailsEnum;
  state: EmailExchangeObjectStateEnum;
  taskPendingId: number;
  type: EmailExchangeResourceTypeEnum;
};
