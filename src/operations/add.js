import { getAbsolutePath } from "../utils/getAbsolutePath.js";

import { writeFile } from 'node:fs/promises';

export const add = async (command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  await writeFile(newPath, '', { flag: 'a' });
}