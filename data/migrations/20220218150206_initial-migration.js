
exports.up = async function(knex) {
    await knex.schema
      .createTable('projects', table =>{
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.integer('project_completed').defaultTo(false)    
      })
      .createTable('resources', table =>{
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
      })
      .createTable('tasks', table =>{
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.integer('task_completed').defaultTo(false)    
        table.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      })
      .createTable('project_resources', table =>{
        table.increments('projectResource_id')
        table.string('projectResource_notes')
        table.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
        table.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resource_id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      })
  };
  
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };