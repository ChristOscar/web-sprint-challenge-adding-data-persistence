// build your `Resource` model here
const db = require('../../data/dbConfig');


async function getResource(){
    const projectRows = await db('resources as r')
    return projectRows;
}

module.exports = {
    getResource
};