import Messages from "../constants/messages.js";

import { stdout } from 'node:process';

const showOperationFailed = async () => {
  try {
    stdout.write(`\x1b[1;31m${Messages.ERROR_MESS}\x1b[0m\n`)
  } catch(error) {
    throw new Error(error);
  }
}

export { showOperationFailed };