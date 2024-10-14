import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import { checkExistPath } from "../utils/checkExistPath.js";
import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

export const compress = async (command) => {
  const fileNameToCompress = command.arguments[0];
  const fileNameDestination = command.arguments[1];
  const absolutePathToCompress = await getAbsolutePath(fileNameToCompress);
  const absolutePathDestination = await getAbsolutePath(fileNameDestination);
  
  await checkExistPath(absolutePathToCompress);

  const readStream = createReadStream(absolutePathToCompress);
  const writeStream = createWriteStream(absolutePathDestination);

  const brotli = zlib.createBrotliCompress();
  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on('finish', () => {
    console.log('Ok');
  })
}