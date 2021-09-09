exports.seed = function (knex, Promise) {
  return knex("recipe_steps").insert([
    {
      step_number: 1,
      step_instructions: "Slice protein 1 inch cubes",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Season protein",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "Cook protein",
      recipe_id: 1,
    },
    {
      step_number: 4,
      step_instructions: "Boil vegetables in stock",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instructions: "Boil water",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "Place noodles in water",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instructions: "Drain water",
      recipe_id: 2,
    },
    {
      step_number: 4,
      step_instructions: "Mix butter, cheese and milk",
      recipe_id: 2,
    },
  ]);
};
