import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { createHash } from 'node:crypto';
import { createReadStream } from 'fs';
import { showOperationFailed } from "../utils/showOperationFailed.js";

export const hash = async (command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  const hash = createHash('sha256');
  const stream = createReadStream(newPath);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => {
      const res = hash.digest('hex');
      console.warn(`SHA256 hash (hex): ${res}`)
    });
    stream.on('error', showOperationFailed);
}