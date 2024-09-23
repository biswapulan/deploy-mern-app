const router = require("express").Router();
const ensureAuthenticated = require("../Middlewares/auth");

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
  ]);
});

module.exports = router;
