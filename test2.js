/**
 * Created by 402618 on 6/30/2014.
 */
var fs = require('fs');


function copyData(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;

        console.log(data);
        data = JSON.parse(data);
       // data.employee.name="ccc";
        data.employee.push({ "id":"123" });
            data = JSON.stringify(data);
            fs.writeFile (savPath, data, function(err) {
                if (err) throw err;
                console.log('VALUES UPDATED');
            });
        });
}

copyData('destination.json','source.json');