/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpMitigationTraffic } from './IpMitigationTraffic';

export type IpMitigationDetailedStats = {
  destPort?: number | null;
  fragments?: boolean | null;
  icmpCode?: number | null;
  icmpType?: number | null;
  in?: IpMitigationTraffic | null;
  out?: IpMitigationTraffic | null;
  protocol?: number | null;
  srcPort?: number | null;
  syn?: boolean | null;
};
