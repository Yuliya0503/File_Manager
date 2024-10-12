import { sayHiToUser } from "./operations/sayHiToUser.js";

const fileManager = async() => {
  await sayHiToUser();
}

fileManager();
