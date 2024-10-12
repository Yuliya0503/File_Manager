import { getUserName } from "../utils/getUserName.js";
import Messages from "../constants/messages.js";

const sayByeToUser = async () => {
  try {
    const username = await getUserName();
    const byeMess = `${Messages.GOODBYE_MESS}, ${username}, ${Messages.GOODBYE_END}!`;

    process.stdout.write(`\x1b[1;32m${byeMess}\x1b[0m\n`);
  } catch(error) {
    throw new Error(error);
  }
}

export { sayByeToUser };