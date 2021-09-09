exports.seed = function (knex, Promise) {
  return knex("step_ingredients").insert([
    { quantity: 1, ingredient_id: 1, step_id: 1 },
    { quantity: 5, ingredient_id: 1, step_id: 5 },
  ]);
};
