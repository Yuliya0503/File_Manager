import Commands from "../constants/commands.js"

const commandsCount = {
  [Commands.COMMAND_ADD]: 1,
  [Commands.COMMAND_CAT]: 1,
  [Commands.COMMAND_CD]: 1,
  [Commands.COMMAND_COMPRESS]: 2,
  [Commands.COMMAND_CP]: 2,
  [Commands.COMMAND_DECOMPRESS]: 2,
  [Commands.COMMAND_EXIT]: 0,
  [Commands.COMMAND_HASH]: 1,
  [Commands.COMMAND_LS]: 0,
  [Commands.COMMAND_MV]: 2,
  [Commands.COMMAND_OS]: 1,
  [Commands.COMMAND_RM]: 1,
  [Commands.COMMAND_RN]: 2,
  [Commands.COMMAND_UP]: 0
};

export const isCommandArgsCount = async ({ name, arguments: args }) => {
  return args.length === commandsCount[name];
};