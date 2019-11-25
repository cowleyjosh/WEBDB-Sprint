exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      resource_name: 'Resource 1',
      resource_description: 'Resource 1'
    },
    {
      resource_name: 'Resource 2',
      resource_description: 'Resource 2'
    },
    {
      resource_name: 'Resource 3',
      resource_description: 'Resource 3'
    },
    {
      resource_name: 'Resource 4',
      resource_description: 'Resource 4'
    },
    {
      resource_name: 'Resource 5',
      resource_description: 'Resource 5'
    },
    {
      resource_name: 'Resource 6',
      resource_description: 'Resource 6'
    },
    {
      resource_name: 'Resource 7',
      resource_description: 'Resource 7'
    }
  ])

};