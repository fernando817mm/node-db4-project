const db = require("./../data/db-config");

const getRecipeById = async (id) => {
  return db("recipe").where("recipe_id", id).first();
};

module.exports = { getRecipeById };
