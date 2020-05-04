const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNodes = notes.find(note => note.title === title)

  if (!duplicateNodes) {
    notes.push({
      title: title,
      body: body
    });
    saveNode(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note already exists!"));
  }

  //console.log(notes)
};

const saveNode = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNote();
  const notesToKeep = notes.filter(note => note.title !== title)

  if (notes.length !== notesToKeep.length)
    console.log(chalk.green.inverse("Note Removed!"));
  else console.log(chalk.red.inverse("No Note Found!"));
  saveNode(notesToKeep);
};

const listNote = () =>  {
  const notes= loadNote()
  console.log(chalk.blue.bold('Notes are -'))
  notes.forEach(x => console.log(chalk.italic(x.title)))
}

const readNote = (title) => {
  const notes= loadNote()
  const present= notes.find(x => x.title===title)
  if(!present){
    console.log(chalk.red.bold('Not present'))
  }
  else{
    console.log(chalk.inverse(title))
    console.log(present.body)
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
};
