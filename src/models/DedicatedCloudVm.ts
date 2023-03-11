/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupBackup } from './DedicatedCloudBackupBackup';
import { DedicatedCloudVmFiler } from './DedicatedCloudVmFiler';
import { DedicatedCloudVirtualMachinePowerState } from './DedicatedCloudVirtualMachinePowerState';
import { DedicatedCloudVirtualMachineCdrom } from './DedicatedCloudVirtualMachineCdrom';
import { DedicatedCloudVirtualMachineFaultToleranceState } from './DedicatedCloudVirtualMachineFaultToleranceState';
import { DedicatedCloudVmNetwork } from './DedicatedCloudVmNetwork';

export type DedicatedCloudVm = {
  backup: DedicatedCloudBackupBackup | null;
  cdroms: DedicatedCloudVirtualMachineCdrom | null;
  clusterName: string | null;
  cpuMax: number | null;
  cpuNum: number | null;
  cpuReady: number | null;
  cpuReadyPercent: number | null;
  cpuUsed: number | null;
  filers: DedicatedCloudVmFiler | null;
  folderName: string | null;
  hostName: string | null;
  memoryMax: number | null;
  memoryTps: string | null;
  memoryUsed: number | null;
  moRef: string;
  name: string | null;
  netPacketRx: number | null;
  netPacketTx: number | null;
  netRx: number | null;
  netTx: number | null;
  networks: DedicatedCloudVmNetwork | null;
  powerState: DedicatedCloudVirtualMachinePowerState;
  readLatency: number | null;
  readPerSecond: number | null;
  readRate: number | null;
  roleFt: string | null;
  snapshotNum: number | null;
  stateFt: DedicatedCloudVirtualMachineFaultToleranceState | null;
  vmId: number;
  vmwareTools: string | null;
  vmwareToolsVersion: string | null;
  writeLatency: number | null;
  writePerSecond: number | null;
  writeRate: number | null;
};
