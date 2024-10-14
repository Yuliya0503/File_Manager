import path from 'node:path';
import { currentDirectory } from '../utils/currentDirectory.js';
import { showOperationFailed } from '../utils/showOperationFailed.js';
import os from 'node:os';

const up = async () => {
  try {
    const homedir = os.homedir();
    const directory = path.resolve(currentDirectory.currentDir, '../');
    if (directory.startsWith(homedir)) {
      currentDirectory.currentDir = directory;
    } 
  } catch {
    showOperationFailed();
  }
}

export { up };