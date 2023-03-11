/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewTypedResources } from './CloudBillingViewTypedResources';
import { CloudBillingViewMonthlyResources } from './CloudBillingViewMonthlyResources';
import { CloudBillingViewUsedCredits } from './CloudBillingViewUsedCredits';
import { CloudBillingViewHourlyResources } from './CloudBillingViewHourlyResources';
import { CloudUsagePeriod } from './CloudUsagePeriod';

export type CloudUsageUsageForecast = {
  hourlyUsage: CloudBillingViewHourlyResources | null;
  lastUpdate: Date;
  monthlyUsage: CloudBillingViewMonthlyResources | null;
  period: CloudUsagePeriod;
  resourcesUsage: CloudBillingViewTypedResources | null;
  usableCredits: CloudBillingViewUsedCredits | null;
};
