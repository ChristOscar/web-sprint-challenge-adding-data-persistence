// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProject(){
    const projectRows = await db('projects as p')
    return projectRows
}

module.exports = {
    getProject
};