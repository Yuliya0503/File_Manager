import { currentDirectory } from "./currentDirectory.js";
import path from 'node:path';
import { showInvalidInput } from './showInvalidInput.js'


const getAbsolutePath = async (pth) => {
  try {
    const getCurrentDir = currentDirectory.currentDir;
    const checkPath = path.isAbsolute(pth);
    if(checkPath) {
      return pth;
    } else {
      return (path.join(getCurrentDir, pth));
    }
  } catch {
    await showInvalidInput();
  }
}

export { getAbsolutePath };