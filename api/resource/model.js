// build your `Resource` model here
function getResourceById(resource_id){
    return Promise.resolve(`awesome Project with id ${resource_id}`)
}

module.exports = {
    getResourceById
};