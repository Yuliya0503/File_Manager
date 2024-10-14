import Messages from "../constants/messages.js";
import { currentDirectory } from "./currentDirectory.js";

import { stdout } from 'node:process';

const showCurrentDirectory = async () => {
  try {
    const dir = currentDirectory.currentDir;
    stdout.write(`\x1b[1;35m${Messages.END_OF_INPUT} ${dir}\x1b[0m\n`)
  } catch(error) {
    throw new Error(error);
  }
}

export { showCurrentDirectory };