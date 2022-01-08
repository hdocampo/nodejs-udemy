const fs = require('fs');

let multiply = (base, multiplier) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`${base} => Is not a number`);
            return;
        }
        let data = '';

        for (let i = 0; i <= multiplier; i++) {
            const currentData = `${base} * ${i} = ${base * i}`;
            data += `${base} * ${i} = ${base * i}\r\n`;
            console.log(currentData)
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


