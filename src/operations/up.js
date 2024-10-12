import path from 'node:path';
import { currentDirectory } from '../utils/currentDirectory.js';
import { showOperationFailed } from '../utils/showOperationFailed.js';

const up = async () => {
  try {
    const directory = path.resolve(currentDirectory.currentDir, '../');
    currentDirectory.currentDir = directory;
  } catch {
    showOperationFailed();
  }
}

export { up };