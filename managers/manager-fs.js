import fs from 'fs';

// afegiu codi ... (2pto)
export class ManagerFs {
    constructor(_file) {
    let movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf8"));
      
    }
    getData() {
    export default movies;

    }
}



