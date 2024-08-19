const fs = require('fs');

const prompt = require('prompt-sync')();

console.log("select option:create,read,rename,delete,append");

let option = prompt("enter option:");

switch (option) {
    case 'create':
        let createfile = prompt("enter file name to create: ");
        fs.writeFileSync(createfile, '');
        console.log(`file created: ${createfile}`);
        break;

    case 'read':
        let readfile = prompt("enter file name to read: ");
        let data = fs.readFileSync(readfile, 'utf8');
        console.log(`content read: ${readfile}:\n${data}`);
        break;
    case 'rename':
        let oldamefile = prompt("enter file current file name: ");
        let newfile = prompt("enter new file name to rename: ");

        fs.renameSync(oldamefile, newfile);
        console.log(`file renamed from ${oldamefile} to ${newfile}`);
        break;

    case 'delete':
        let deletefile = prompt("enter file name to delete: ");
        fs.unlinkSync(deletefile);
        console.log(`file deleted: ${deletefile}`);
        break;

    case 'append':
        let appendfile = prompt("enter file name to append: ");
        let appendText = prompt("enter text to append: ");
        fs.appendFileSync(appendfile, appendText);
        console.log(`data appended to ${appendfile}`);
        break;
    default:
        console.log("invalid choice");
        break;


};



