/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDataClaimNoticeContact } from './DomainDataClaimNoticeContact';
import { DomainDataClaimNoticeUDRP } from './DomainDataClaimNoticeUDRP';
import { DomainDataClaimNoticeClassification } from './DomainDataClaimNoticeClassification';
import { DomainDataClaimNoticeCourtDecision } from './DomainDataClaimNoticeCourtDecision';

export type DomainDataClaimNoticeClaimNoticeDecision = {
  classifications?: DomainDataClaimNoticeClassification[];
  courtDecisions?: DomainDataClaimNoticeCourtDecision[];
  goodsAndServices?: string;
  jurisdiction?: string;
  jurisdictionCountryCode?: string;
  markName?: string;
  trademarkContacts?: DomainDataClaimNoticeContact[];
  trademarkHolders?: DomainDataClaimNoticeContact[];
  trademarkUDRP?: DomainDataClaimNoticeUDRP[];
};
