import os from 'node:os';


export const showHomedir = async() => {
  const homedir = os.homedir();
  process.stdout.write(`Home directory: \x1b[35m${homedir}\x1b[0m\n`);
}

showHomedir();