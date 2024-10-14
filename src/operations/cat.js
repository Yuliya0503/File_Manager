import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { showOperationFailed } from "../utils/showOperationFailed.js";

import { createReadStream } from 'node:fs';

export const cat = async (command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  const readStream = createReadStream(newPath, 'utf-8');

  readStream.on('data', (data) => {
    process.stdout.write(`${data}\n`);
  });

  readStream.on('error', () => {
    showOperationFailed();
  })
}