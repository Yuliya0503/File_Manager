import { getUserName } from "../utils/getUserName.js";
import Messages from "../constants/messages.js";

const sayHiToUser = async () => {
  try {
    const username = await getUserName();
    const welcome = `${Messages.WELCOME}, ${username}!`;

    process.stdout.write(`\x1b[1;32m${welcome}\x1b[0m\n`);
  } catch(error) {
    throw new Error(error);
  }
}

export { sayHiToUser };