/* WARNING: This file is auto-generated . Do not edit manually. */

import { ZoneNamedResolutionFieldTypeEnum } from './ZoneNamedResolutionFieldTypeEnum';

export type DomainZoneRecord = {
  fieldType?: ZoneNamedResolutionFieldTypeEnum;
  id?: number;
  subDomain?: string | null;
  target?: string;
  ttl?: number | null;
  zone?: string;
};
