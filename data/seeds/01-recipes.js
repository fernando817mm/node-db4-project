exports.seed = function (knex, Promise) {
  return knex("recipe").insert([
    { recipe_name: "Jambalaya" },
    { recipe_name: "Mac & Cheese" },
    { recipe_name: "Lemon Meringue Pie" },
    { recipe_name: "Enchiladas" },
  ]);
};
