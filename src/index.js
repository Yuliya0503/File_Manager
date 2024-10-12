import { sayHiToUser } from "./operations/sayHiToUser.js";
import { sayByeToUser } from "./operations/sayByeToUser.js";

const fileManager = async() => {
  await sayHiToUser();
  await sayByeToUser();
}

fileManager();
