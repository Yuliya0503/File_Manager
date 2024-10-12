import { currentDirectory } from "../utils/currentDirectory.js";
import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { access } from 'node:fs/promises';

const cd = async(command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  await access(newPath);
  currentDirectory.currentDir = newPath;
}

export {cd};