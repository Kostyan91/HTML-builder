const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


const fileName = path.join(__dirname, 'text.txt');

// create file - text.txt
fs.writeFile(fileName, "", (error) => {
    if (error) throw error; // если возникла ошибка
    console.log("File created.");
});


function readConsole() {
    rl.question('', (answer) => {
        if (answer.includes('exit')) {
            console.log('Завершаем программу "exit".');
            fs.appendFile(fileName, answer + '\n', (error) => {
                if (error) throw error; // если возникла ошибка
            });
            rl.close();
        } else {
            fs.appendFile(fileName, answer + '\n', (error) => {
                if (error) throw error; // если возникла ошибка
                readConsole();
            });
        }
    });         
}

readConsole();

process.on('exit', (code) => {
    console.log('Выходим из программы:', code);
});