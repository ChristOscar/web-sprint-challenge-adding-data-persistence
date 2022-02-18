// build your `Task` model here
function getTaskById(task_id){
    return Promise.resolve(`awesome Project with id ${task_id}`)
}

module.exports = {
    getTaskById
};