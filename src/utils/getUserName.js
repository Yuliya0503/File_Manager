import Messages from "../constants/messages.js";

const getUserName = async () => {
  try {
    const args = await process.argv.slice(2);
    const usernameArg = await args.find(arg => arg.startsWith(`--${Messages.USERNAME_ARGUMENT}=`));
    const username = await usernameArg ? usernameArg.split('=')[1] : Messages.DEFAULT_USERNAME;
    return username;
  } catch(error) {
    throw new Error(error);
  }
}

export { getUserName };