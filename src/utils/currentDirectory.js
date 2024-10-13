import os from 'node:os';

const homedir = os.homedir();

class CurrentDirectory {
  constructor() {
    this.currentDirectory = homedir;
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