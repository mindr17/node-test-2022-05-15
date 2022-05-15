const process = require('process');
const fs = require('fs');
const readline = require('readline');
const {stdin, stdout, exit} = process;
const path = require('path');

const pathName = path.join(__dirname, './input.txt');

const main = async () => {
  let writeStream = fs.createWriteStream(pathName, { encoding: "utf8" });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Hello!');

  process.on('exit', () => {
    stdout.write('\nGood bye!');

    setTimeout(() => {
      exit(0);
    }, 1000);
  });

  const ask = () => {
    rl.question(`Waiting for input: `, (answer) => {
      if (answer != 'exit') {
        writeStream.write(`${answer}\n`);
        ask();
      }
      else {
        rl.close();
      }
    });
  };
  ask();
};

main();
