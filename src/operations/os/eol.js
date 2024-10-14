import { EOL } from 'node:os';

export const eol = async () => {
  const eolInfo = JSON.stringify(EOL);
  process.stdout.write(`Default system End-Of-Line: \x1b[35m${eolInfo}\x1b[0m\n`);
};