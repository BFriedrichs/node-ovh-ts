/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDataClaimNoticeClaimNoticeTypeEnum } from './DomainDataClaimNoticeClaimNoticeTypeEnum';
import { DomainDataClaimNoticeClaimNoticeDecision } from './DomainDataClaimNoticeClaimNoticeDecision';

export type DomainDataClaimNoticeClaimNotice = {
  claims?: DomainDataClaimNoticeClaimNoticeDecision[] | null;
  endingDate?: string;
  id?: string;
  label?: string;
  startingDate?: string | null;
  type?: DomainDataClaimNoticeClaimNoticeTypeEnum | null;
};
