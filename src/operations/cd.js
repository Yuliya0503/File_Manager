import { checkExistPath } from "../utils/checkExistPath.js";
import { currentDirectory } from "../utils/currentDirectory.js";
import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { access } from 'node:fs/promises';
import { showInvalidInput } from "../utils/showInvalidInput.js";

const cd = async(command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  await access(newPath);
  if (checkExistPath(newPath)) {
    currentDirectory.currentDir = newPath;
  } else {
    showInvalidInput();
  }
}

export {cd};