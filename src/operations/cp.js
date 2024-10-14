import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { isDirectoryExist, isFileExist } from "../utils/checkExistPath.js";
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs'; 
import { showOperationFailed } from "../utils/showOperationFailed.js";

export const cp = async (command) => {
  try {
    const fileToCopy = command.arguments[0];
    const directoryForCopy = command.arguments[1];

    const absolutePathToCopy = await getAbsolutePath(fileToCopy);
    const absolutePathDestination = await getAbsolutePath(directoryForCopy);

    await isDirectoryExist(absolutePathDestination);
    await isFileExist(absolutePathToCopy);

    const fileName = path.basename(fileToCopy);
    const fileCopied = path.join(absolutePathDestination, fileName);

    const readStream = createReadStream(absolutePathToCopy);
    const writeStream = createWriteStream(fileCopied);

    readStream.pipe(writeStream);

    readStream.on('error', showOperationFailed);

    writeStream.on('error', showOperationFailed);

    writeStream.on('finish', () => {
      console.log(`File copied to ${fileCopied}`);
    });

  } catch {
    showOperationFailed();
  }
}
