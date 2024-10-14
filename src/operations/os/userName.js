import os from 'node:os';

export const userName = async() => {
  const nameInfo = os.userInfo().username;
  process.stdout.write(`System user name: \x1b[35m${nameInfo}\x1b[0m\n`);
};
