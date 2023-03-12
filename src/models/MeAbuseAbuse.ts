/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeAbuseAbuseStatusEnum } from './MeAbuseAbuseStatusEnum';
import { MeAbuseAbuseCategoryEnum } from './MeAbuseAbuseCategoryEnum';

export type MeAbuseAbuse = {
  category: MeAbuseAbuseCategoryEnum;
  creationDate: Date;
  publicId: string;
  service: string;
  status: MeAbuseAbuseStatusEnum;
};
