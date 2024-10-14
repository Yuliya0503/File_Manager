import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import { sayHiToUser } from "./operations/sayHiToUser.js";
import { sayByeToUser } from "./operations/sayByeToUser.js";
import { readLineInterface } from "./utils/readlineInterface.js";
import { showCurrentDirectory } from './utils/showCurrDir.js';
import { showInvalidInput } from './utils/showInvalidInput.js';
import { showOperationFailed } from './utils/showOperationFailed.js';
import { runCommands } from './controllers/runCommands.js';
import { isCommandArgsCount } from './controllers/controllerCountArgs.js';

const rl = readline.createInterface( { input: stdin, output: stdout } );
readLineInterface.readlineInterface = rl;

const fileManager = async() => {
  await sayHiToUser();
  await showCurrentDirectory();

  rl.prompt(); 

  rl.on('line', async (input) => {
    const str = input.toString().trim().split(' ');
    const command = {
      name: str[0],
      arguments: str.slice(1), 
    };
    const commandCallError = (await isCommandArgsCount(command));
    if(!commandCallError) {
      await showInvalidInput();
    } else {
      try {
        await runCommands(command);
      } catch {
        await showOperationFailed();
        rl.prompt();
      }
    }
    
    await showCurrentDirectory();
    rl.prompt();
  });

  rl.on('SIGINT', () => {
    rl.close();
  });

  rl.on('close', async() =>{
    await sayByeToUser();
    process.exit(0);
  })
}

fileManager();
