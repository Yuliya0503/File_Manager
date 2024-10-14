import { getAbsolutePath } from "./getAbsolutePath.js";
import { lstat } from "node:fs/promises";
import { showOperationFailed } from "./showOperationFailed.js";

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
    showOperationFailed();
  }
}

const isDirectoryExist = async (path) => {
  try {
    const stat = await lstat(path);
    const res = stat.isDirectory();
    return res;
  } catch {
    showOperationFailed();
  }
}

export { checkExistPath, isFileExist, isDirectoryExist };