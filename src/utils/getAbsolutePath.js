import { currentDirectory } from "./currentDirectory.js";
import path from 'node:path';
import { showOperationFailed } from "./showOperationFailed.js";


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
    await showOperationFailed();
  }
}

export { getAbsolutePath };