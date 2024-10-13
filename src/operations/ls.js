import { currentDirectory } from "../utils/currentDirectory.js";
import { showOperationFailed } from "../utils/showOperationFailed.js";
import fs from 'node:fs/promises';

const fileArr = (dir) => {
  return dir
    .filter(file => file.isDirectory() || file.isFile())
    .map((file) => {
      const type = file.isDirectory() ? 'directory' : 'file';
      return {
        'name': file.name,
        'type': type
      };
    })
    .sort((a, b) => a.type === b.type ? a.name.localeCompare(b.name) : a.type === 'file' ? 1 : -1);
};

export const ls = async () => {
  try {
    const curDir = currentDirectory.currentDir;
    const dirList = await fs.readdir(curDir, { withFileTypes: true }); 
    const filesArr = fileArr(dirList); 
    console.table(filesArr);
  } catch {
    showOperationFailed();
  }
};
