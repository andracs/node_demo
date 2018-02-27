// Løsning på opgave 1 fra kapitel 20 i Eloquent Javascript third edition

// Usage: node search.js search-string library

const {statSync, readdirSync, readFileSync} = require("fs");

let searchTerm = new RegExp(process.argv[2]);
//console.log("DEBUG searchTerm's regex:" + searchTerm);
//console.log("DEBUG mappe:" + process.argv.slice(3));

for (let arg of process.argv.slice(3)) {
    search(arg);
}

function search(file) {
    let stats = statSync(file);
//    console.log("DEBUG " + file);
    if (stats.isDirectory()) {
        for (let f of readdirSync(file)) {
            search(file + "/" + f);
        }
    } else if (searchTerm.test(readFileSync(file, "utf8"))) {
        "a-z,0-9"
        console.log(file);
    }
}


