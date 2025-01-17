
const projects = [
    { project_name: "Survive and Finish BloomTech(formally known as LambdaSchool)", project_completed: 1 },
    {
      project_name: "Find a job",
      project_description:
        "go through interviews, get offers, choose the best one and accept it",
      project_completed: 0,
    },
    {
      project_name: "Enjoy life",
      project_description:
        "Travel the world with the girls and inspire others ",
      project_completed: 0,
    },
    {
        project_name: "Create a Company",
        project_description:
          "Create a company that helps people in tough times and the backbone to support that adventure.",
        project_completed: 0,
      },
  ];
  
  const resources = [
    {resource_name: 'my fingers', resource_description: 'fingers that can type what my brain thinks about'},
    {resource_name: 'my wife & parents', resource_description: 'a very supportive couple of persons'},
    {resource_name: 'patience'},
    {resource_name: 'good health', resource_description: 'Maybe not anymore with Covid'},
    {resource_name: 'lots of $$$$', resource_description: 'I have a kid soooooo nope '},
    {resource_name: 'free time'}
  ]
  
  const project_resources = [
    // Finish Lambda School
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2, projectResource_notes: 'their support keeps me motivated'},
    {project_id: 1, resource_id: 3},
    {project_id: 1, resource_id: 4},
    // Find a job
    {project_id: 2, resource_id: 3},
    {project_id: 2, resource_id: 6, projectResource_notes: 'looking for a job takes time'},
    // Enjoy the rich life
    {project_id: 3, resource_id: 4},
    {project_id: 3, resource_id: 5},
    {project_id: 3, resource_id: 6}
  ]
  
  
  const tasks = [
    // Finish Lambda School
    {task_description: 'Attend lectures', task_completed: 0, project_id: 1},
    {task_description: 'Finish hw', task_completed: 1, project_id: 1 },
    {task_description: 'Ace sprint challenges', task_notes: 'complete mvp, polish code, submit', task_completed: 1, project_id: 1 },
    // Find a job
    {task_description: 'Make a resume and cover letter', task_completed: 1, project_id: 2},
    {task_description: 'Apply', task_completed: 1, project_id: 2 },
    {task_description: 'Go to interviews', task_notes: 'attend interviews and make a great impression', task_completed: 0, project_id: 2 },
    {task_description: 'Accept an offer', task_notes: 'carefully read the offer', task_completed: 0, project_id: 2 },
    // Enjoy the rich life
    {task_description: 'buy everything I want', task_completed: 0, project_id: 3},
    {task_description: 'go everywhere I want', task_completed: 0, project_id: 3 }
  ]
  
  
  exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
  };