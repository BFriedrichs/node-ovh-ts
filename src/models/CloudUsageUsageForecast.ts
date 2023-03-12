/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewMonthlyResources } from './CloudBillingViewMonthlyResources';
import { CloudUsagePeriod } from './CloudUsagePeriod';
import { CloudBillingViewHourlyResources } from './CloudBillingViewHourlyResources';
import { CloudBillingViewUsedCredits } from './CloudBillingViewUsedCredits';
import { CloudBillingViewTypedResources } from './CloudBillingViewTypedResources';

export type CloudUsageUsageForecast = {
  hourlyUsage: CloudBillingViewHourlyResources | null;
  lastUpdate: Date;
  monthlyUsage: CloudBillingViewMonthlyResources | null;
  period: CloudUsagePeriod;
  resourcesUsage: CloudBillingViewTypedResources[] | null;
  usableCredits: CloudBillingViewUsedCredits | null;
};
