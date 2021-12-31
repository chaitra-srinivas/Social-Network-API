const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require("../../controllers/thoughtController.js");

// api/thoughts/ - Get all thoughts and create a new thought

router.route("/").get(getThoughts).post(createThought);

// api/thoughts/:thoughtId - Get a single thought by Id

router.route("/:thoughtId").get(getSingleThought);

module.exports = router;
