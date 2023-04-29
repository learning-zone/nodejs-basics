const express = require('express');
const { getTodos, createTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/crud');


const router = express.Router();

router.get("/all", getTodos)
      .post("/new", createTodo)
      .get("/:id", getTodoById)
      .patch("/:id", updateTodo)
      .delete("/:id", deleteTodo)

module.exports = router;