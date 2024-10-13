import { getAbsolutePath } from "../utils/getAbsolutePath.js";

import fs from 'node:fs/promises';

export const rm = async(command) => {
  const path = command.arguments[0];
  const newPath = await getAbsolutePath(path);
  await fs.rm(newPath);
}