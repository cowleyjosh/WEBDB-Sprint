exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_description: 'Task 1',
      task_notes: 'Task 1 Notes',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'Task 2 ',
      task_notes: 'Task 2 Notes',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'Task 3',
      task_notes: 'Task 3 Notes',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'Task 4',
      task_notes: 'Task 4 Notes',
      completed: 0,
      project_id: 4
    },
    {
      task_description: 'Task 5',
      task_notes: 'Task 5 Notes',
      completed: 0,
      project_id: 5
    },
    {
      task_description: 'Task 6',
      task_notes: 'Task 6 Notes',
      completed: 0,
      project_id: 6
    },
    {
      task_description: 'Task 7',
      task_notes: 'Task 7 Notes',
      completed: 0,
      project_id: 7
    },
    {
      task_description: 'Task 8',
      task_notes: 'Task 8 Notes',
      completed: 0,
      project_id: 8
    },
  ])
};