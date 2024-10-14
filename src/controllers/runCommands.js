import { ls } from '../operations/ls.js';
import { up } from '../operations/up.js';
import  { cd } from '../operations/cd.js';
import { cat } from '../operations/cat.js';
import { add } from '../operations/add.js';
import { rn } from '../operations/rn.js';
import { rm } from '../operations/rm.js';
import { hash } from '../operations/hash.js';
import { exit } from '../operations/exit.js';
import { compress } from '../operations/compress.js';
import { decompress } from '../operations/decompress.js';
import { cp } from '../operations/cp.js';
import { mv } from '../operations/mv.js';

import Commands from '../constants/commands.js';
import { showInvalidInput } from '../utils/showInvalidInput.js';

const commandMap = {
  [Commands.COMMAND_LS]: ls,
  [Commands.COMMAND_UP]: up,
  [Commands.COMMAND_CD]: cd,
  [Commands.COMMAND_CAT]: cat,
  [Commands.COMMAND_ADD]: add,
  [Commands.COMMAND_RN]: rn,
  [Commands.COMMAND_RM]: rm,
  // [Commands.COMMAND_OS]: os,
  [Commands.COMMAND_HASH]: hash,
  [Commands.COMMAND_EXIT]: exit,
  [Commands.COMMAND_COMPRESS]: compress,
  [Commands.COMMAND_DECOMPRESS]: decompress,
  [Commands.COMMAND_CP]: cp,
  [Commands.COMMAND_MV]: mv
};

export const runCommands = async (command) => {
  const commandFn = commandMap[command.name];
  
  if (commandFn) {
    await commandFn(command);
  } else {
    await showInvalidInput();
  }
};