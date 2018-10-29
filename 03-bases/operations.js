const fs = require('fs');

let multiply = (base) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`${base} => Is not a number`);
            return;
        }
        let data = '';

        for (let i = 0; i <= 20; i++) {
            data += `${base} * ${i} = ${base * i}\r\n`;
        }

        fs.writeFile(`build/tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(`tabla-${base}.txt`)
            }
        })
    })
}

module.exports = { multiply }


