import { readLineInterface } from '../utils/readlineInterface.js';

export const exit = async () => {
  const rl = readLineInterface.readlineInterface;  
  if (rl) {
    rl.close();
  }
};