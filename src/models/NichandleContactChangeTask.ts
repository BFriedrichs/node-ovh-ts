/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleChangeContactContactTypeEnum } from './NichandleChangeContactContactTypeEnum';
import { NichandleChangeContactTaskStateEnum } from './NichandleChangeContactTaskStateEnum';

export type NichandleContactChangeTask = {
  askingAccount: string | null;
  contactTypes: NichandleChangeContactContactTypeEnum[];
  dateDone: Date | null;
  dateRequest: Date;
  fromAccount: string;
  id: number;
  serviceDomain: string | null;
  state: NichandleChangeContactTaskStateEnum;
  toAccount: string;
};
