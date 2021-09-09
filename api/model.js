const db = require("./../data/db-config");

// const getRecipeById = async (id) => {
//   return db("recipe").where("recipe_id", id).first();
// };

const getRecipeById = async (id) => {
  const rows = await db("recipe")
    .leftJoin("recipe_steps", "recipe.recipe_id", "recipe_steps.step_id")
    .where("recipe.recipe_id", id)
    .select("recipe_steps.*", "recipe.*");

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.map((row) => {
    console.log(row);
    row.recipe_id
      ? result.steps.push({
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: [],
        })
      : [];
  });

  return result;
};

module.exports = { getRecipeById };
