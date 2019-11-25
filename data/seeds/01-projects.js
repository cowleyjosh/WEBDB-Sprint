exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Project 1',
      project_description: 'Project 1 Description',
      completed: 0
    },
    {
      name: 'Project 2',
      project_description: 'Project 2 Description',
      completed: 0
    },
    {
      name: 'Project 3',
      project_description: 'Project 3 Description',
      completed: 0
    },
    {
      name: 'Project 4',
      project_description: 'Project 4 Description',
      completed: 0
    },
    {
      name: 'Project 5',
      project_description: 'Project 5 Description',
      completed: 0
    },
    {
      name: 'Project 6',
      project_description: 'Project 6 Description',
      completed: 0
    },
    {
      name: 'Project 7 ',
      project_description: 'Project 7 Description',
      completed: 0
    }
  ])
};