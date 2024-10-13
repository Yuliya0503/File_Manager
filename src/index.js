import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import { sayHiToUser } from "./operations/sayHiToUser.js";
import { sayByeToUser } from "./operations/sayByeToUser.js";
import { readLineInterface } from "./utils/readlineInterface.js";
import { showCurrentDirectory } from './utils/showCurrDir.js';
import { showInvalidInput } from './utils/showInvalidInput.js';
import { cd } from './operations/cd.js';
import { up } from './operations/up.js';
import { ls } from './operations/ls.js';
import { cat } from './operations/cat.js';
import { add } from './operations/add.js';
import { rn } from './operations/rn.js';

const rl = readline.createInterface( { input: stdin, output: stdout } );
readLineInterface.readlineInterface = rl;

const fileManager = async() => {
  await sayHiToUser();
  await showCurrentDirectory();

  rl.prompt(); 

  rl.on('line', async (input) => {
    const command = input.toString().trim().split(' ');
    const cmdName = command[0];
    const args = command.slice(1);

    if (cmdName === '.exit') {
      rl.close();
    } else if(cmdName === 'cd'){
      await cd({ name: cmdName, arguments: args });
    } else if(cmdName === 'up') {
      await up();
    } else if(cmdName === 'ls') {
      await ls();
    } else if(cmdName === 'cat'){
      await cat({ name: cmdName, arguments: args })
    } else if(cmdName === 'add'){
      await add({ name: cmdName, arguments: args })
    } else if(cmdName === 'rn'){
      await rn({ name: cmdName, arguments: args })
    } else {
      await showInvalidInput();
    }
    await showCurrentDirectory();
    rl.prompt();
  });

  rl.on('close', async() =>{
    await sayByeToUser();
    process.exit(0);
  })
}

fileManager();
