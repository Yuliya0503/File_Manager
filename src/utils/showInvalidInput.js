import Messages from "../constants/messages.js";

import { stdout } from 'node:process';

const showInvalidInput = async () => {
  try {
    stdout.write(`\x1b[1;33m${Messages.INVALID_INPUT}\x1b[0m\n`)
  } catch(error) {
    throw new Error(error);
  }
}

export { showInvalidInput };