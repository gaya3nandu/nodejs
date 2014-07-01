/**
 * Created by 402618 on 6/30/2014.
 */
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Enter val1>', function (val1) {
    rl.question('Enter val2>', function (val2) {

        var int1 = parseInt(val1);
        var int2 = parseInt(val2);
        rl.setPrompt('Enter the operator> ');
        rl.prompt();

        rl.on('line', function (line) {
            switch (line.trim()) {
                case '+':
                    sum = int1 + int2;
                    console.log(sum);
                    break;
                case '-':
                    if (int1 > int2)
                        diff = int1 - int2;
                    else {
                        diff = int2 - int1;
                        console.log(diff);
                    }
                    break;
                case '*':
                    prod = int1 * int2;
                    console.log(prod);
                    break;
                case '/':
                    if (int2 < 0)
                        console.log("cannot be negative");
                    else if (int2 == 0)
                        console.log("cannot be 0");
                    else {
                        quo = int1 / int2;
                        console.log(quo);
                    }
                    break;

                default:
                    console.log('JUST 4 OPERATORS NOW!!!(+,/,-,*)');
                    break;
            }
            rl.prompt();
        }).on('close', function () {

            process.exit(0);
        });
    });

});