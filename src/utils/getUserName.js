import Messages from "../constants/messages.js";
import { showOperationFailed } from "./showOperationFailed.js";

const getUserName = async () => {
  try {
    const args = process.argv.slice(2);
    const usernameArg = args.find(arg => arg.startsWith(`--${Messages.USERNAME_ARGUMENT}=`));
    const username = usernameArg ? usernameArg.split('=')[1] : Messages.DEFAULT_USERNAME;
    return username;
  } catch {
    await showOperationFailed();
  }
}

export { getUserName };