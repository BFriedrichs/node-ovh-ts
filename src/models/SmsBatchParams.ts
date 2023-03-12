/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsBatchClassEnum } from './SmsBatchClassEnum';

export type SmsBatchParams = {
  class: SmsBatchClassEnum;
  deferred: Date;
  from: string;
  message?: string;
  name: string;
  noStop: boolean;
  senderForResponse: boolean;
  slotID: string;
  tag: string;
  to: string[];
};
