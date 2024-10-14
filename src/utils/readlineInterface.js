class ReadlineInterface {
  constructor() {
    this.readline = null;
  }

  get readlineInterface() {
    return this.readline;
  }

  set readlineInterface(readline) {
    this.readline = readline;
  }
}

const readLineInterface = new ReadlineInterface();
export { readLineInterface };
