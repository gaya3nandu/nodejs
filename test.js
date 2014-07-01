var fs = require('fs');


function copyData(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            //Do your processing, MD5, send a satellite to the moon, etc.
        console.log(data);
        data = JSON.parse(data);
        data.name="bbb";
            data = JSON.stringify(data);
            fs.writeFile (savPath, data, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
}


copyData('destination.json','test.json');