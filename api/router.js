const router = require("express").Router();
const Recipe = require("./model");

router.get("/:id/recipe", (req, res, next) => {
  Recipe.getRecipeById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch(next);
});

router.use("*", (req, res) => {
  res.json({
    message: "something",
  });
});

module.exports = router;
