const sayHiToUser = async () => {
  try {
    const args = process.argv.slice(2); 
    console.log(process.argv); 
    const usernameArg = args.find(arg => arg.startsWith('--username='));
    const username = usernameArg ? usernameArg.split('=')[1] : 'Anonymous';

    console.log(`Welcome to the File Manager, ${username}!`);
  } catch(error) {
    throw new Error(error);
  }
}

export {sayHiToUser};