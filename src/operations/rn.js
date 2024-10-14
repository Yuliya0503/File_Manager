import { getAbsolutePath } from "../utils/getAbsolutePath.js";

import { rename } from 'node:fs/promises';


export const rn = async (command) => {
  const oldName = command.arguments[0];
  const newName = command.arguments[1];
  const absoluteOldPath = await getAbsolutePath(oldName);
  const absoluteNewPath = await getAbsolutePath(newName);

  await rename(absoluteOldPath, absoluteNewPath);
}