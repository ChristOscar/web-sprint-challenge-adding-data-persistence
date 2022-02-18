const dbConfig = require("../../data/dbConfig");

// build your `Task` model here
async function getTasks(){
    const taskRows = await dbConfig('tasks as t')
    return taskRows
}

module.exports = {
    getTasks
};