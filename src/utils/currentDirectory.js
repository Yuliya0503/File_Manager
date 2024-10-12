import os from 'node:os';

class CurrentDirectory {
  constructor() {
    this.currentDirectory = os.homedir();
  }

  get currentDir() {
    return this.currentDirectory;
  }

  set currentDir(dir) {
    this.currentDirectory = dir; 
  }
}

const currentDirectory = new CurrentDirectory();
export { currentDirectory };