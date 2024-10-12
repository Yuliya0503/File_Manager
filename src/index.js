import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import { sayHiToUser } from "./operations/sayHiToUser.js";
import { sayByeToUser } from "./operations/sayByeToUser.js";
import { readLineInterface } from "./utils/readlineInterface.js";
import { showCurrentDirectory } from './utils/showCurrDir.js';

const rl = readline.createInterface( { input: stdin, output: stdout } );
readLineInterface.readlineInterface = rl;

const fileManager = async() => {
  await sayHiToUser();
  await showCurrentDirectory();

  rl.prompt(); 

  rl.on('line', async (input) => {
    if (input.trim() === '.exit') {
      rl.close();
    } else {
      console.log(`Invalid input: ${input}`);
      rl.prompt();
    }
  });

  rl.on('close', async() =>{
    await sayByeToUser();
    process.exit(0);
  })
}

fileManager();
