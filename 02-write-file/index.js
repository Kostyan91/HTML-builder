const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'text.txt');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');



const rl = readline.createInterface({ input, output });
function vvv(){
//   let answer = '';
  rl.question('What do you want to write? ', (answer) => {
    function aaa() {
      fs.appendFile(dirname, answer, function (error) {
        if (error) throw error;
        
        // let data = fs.readFileSync(dirname, 'utf8');
      });
      
    }
    if (!answer.includes('exit')) {
      aaa();
      vvv();
    } else { console.log('Thank you');
      rl.close();
    }
      
  });
}
vvv();