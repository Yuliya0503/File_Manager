import os from 'node:os';

const formatCpuData = (cpuInfo) => {
  return cpuInfo.map((info) => ({
    'CPU model': info.model,
    'CPU clock rate, GHz': `${(info.speed / 1000).toFixed(2)} GHz`
  }));
};

export const cpus = async () => {
  const cpuInfo = os.cpus();
  const formattedCpuData = formatCpuData(cpuInfo);

  process.stdout.write(`Amount of CPUS: \x1b[35m${cpuInfo.length}\x1b[0m\n`);
  console.table(formattedCpuData);
};

cpus();