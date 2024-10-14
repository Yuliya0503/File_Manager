import {arch} from 'node:os';

export const architecture = async() => {
  process.stdout.write(`CPU architecture: \x1b[35m${arch()}\x1b[0m\n`);
}

architecture();