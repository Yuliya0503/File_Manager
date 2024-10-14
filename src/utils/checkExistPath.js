import { getAbsolutePath } from "./getAbsolutePath.js";
import { lstat } from "node:fs/promises";
import { showInvalidInput } from './showInvalidInput.js'

const checkExistPath = async (path) => {
  try {
    const file = await getAbsolutePath(path);
    const stat = await lstat(file);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

const isFileExist = async (path) => {
  try {
    const stat = await lstat(path);
    const res = stat.isFile();
    return res;
  } catch {
    showInvalidInput();
  }
}

const isDirectoryExist = async (path) => {
  try {
    const stat = await lstat(path);
    const res = stat.isDirectory();
    return res;
  } catch {
    showInvalidInput();
  }
}

export { checkExistPath, isFileExist, isDirectoryExist };