const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new node",
  builder: {
    title: {
      describe: "Node Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body!",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Removing a node",
  builder: {
    title:{
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List all nodes",
  // builder: {
  //   title: {
  //     describe: "Node Title",
  //     demandOption: true,
  //     type: "string"
  //   }
  // },
  handler(argv) {
    notes.listNote()
  }
});

yargs.command({
  command: "read",
  description: "Read a node",
  builder: {
    title: {
      describe: "Node Title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
});
yargs.parse();
//console.log(process.argv);
//console.log(yargs.argv);
