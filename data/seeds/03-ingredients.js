exports.seed = function (knex, Promise) {
  return knex("ingredient").insert([
    { ingredient_name: "Chicken" },
    { ingredient_name: "Beef" },
    { ingredient_name: "Wine" },
    { ingredient_name: "Rice" },
    { ingredient_name: "Stock" },
    { ingredient_name: "Green Bell Pepper" },
    { ingredient_name: "Red Bell Pepper" },
    { ingredient_name: "Onion" },
    { ingredient_name: "Garlic" },
    { ingredient_name: "Salt" },
  ]);
};
