// build your `Project` model here
function getProjectById(project_id){
    return Promise.resolve(`awesome Project with id ${project_id}`)
}

module.exports = {
    getProjectById
};