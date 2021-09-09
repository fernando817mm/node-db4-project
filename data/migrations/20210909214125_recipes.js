exports.up = async function (knex) {
  await knex.schema
    .createTable("recipe", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 128).notNullable();
      table.timestamps(true, true);
    })
    .createTable("recipe_steps", (table) => {
      table.increments("step_id");
      table.integer("step_number");
      table.string("step_instructions");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipe")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("ingredient", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128);
    })
    .createTable("step_ingredients", (table) => {
      table.increments("quantity_id");
      table.integer("quantity");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredient")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("recipe_steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe");
};
