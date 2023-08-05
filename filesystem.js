const fs = require('node:fs/promises');
/*fs.open('user.json', 'w')
.then(fh => fh.writeFile(`{"name": "Nirajan",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "coding", "gaming"],
    "address": {
    "street": "123 Main Street",
    "city": "Kathmandu",
    "country": "Nepal"}`))
    .then(()=>console.log("File Written"))
    .catch(err=> console.error(err))*/ //write return garna

/*fs.open('user.json', 'r')
.then(fh => fh.readFile("utf-8"))
    .then(content =>console.log(content))
    .catch(err=> console.error(err))*/ //read garna

    //Delete garna
fs.unlink('user.json')
        .then(()=>console.log("File Removed"))
        .catch(err=> console.error(err))