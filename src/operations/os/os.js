import Commands from '../../constants/commands.js';
import { eol } from './eol.js';
import { cpus } from './cpus.js';
import { showHomedir } from './homedir.js';
import { userName } from './username.js';
import { architecture } from './architecture.js';
import { showInvalidInput } from '../../utils/showInvalidInput.js';

const commandMap = {
  [Commands.OS_EOL]: eol,
  [Commands.OS_CPUS]: cpus,
  [Commands.OS_HOMEDIR]: showHomedir,
  [Commands.OS_USERNAME]: userName,
  [Commands.OS_ARCHITECTURE]: architecture,
};

export const os = async (command) => {
  const commandFn = commandMap[command.arguments[0]];
  
  if (commandFn) {
    await commandFn();
  } else {
    await showInvalidInput();
  }
};
