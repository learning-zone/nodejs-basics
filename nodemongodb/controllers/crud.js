/**
  This file contains all the function required to handle the user request and return a response
*/

const Todo = require('../models/todo')

exports.createTodo = async (req, res, next) => {
  
  if(!req.body){
    return next(Error("Invalid request body"))
  }

  const { title, content } = req.body

  if(!title || !content)
    return next(new Error("Provide title and content"))
  
  try{
    
    const todo = await Todo.create({ title, content });

    res.status(201).json({
        success: true,
        todo
    })
  }catch (e) {
    throw e
  }
  
}

exports.getTodos = async (req, res, next) => {
    
  const todos = await Todo.find();

  res.status(200).json({
    success: true,
    todos
  })
  
}

exports.getTodoById = async (req, res, next) => {
  const { id } = req.params

  if(!id){
    throw Error("Please provide an id")
    process.exit(1)
  }

  const todo = await Todo.findById(id)

  if (!todo){
    res.status(404).json({
      success: 'failed',
      message: `Todo with id ${id} not found`
    });
    return;
  }

  res.status(200).json({
      success: true,
      todo
  })
}

exports.updateTodo = async (req, res, next) => {

  const { isDone } = req.body

  const { id } = req.params

  try {
    const todo = await Todo.findById(id)

    if (!todo)
      res.status(404).json({
        success: 'failed',
        message: `Todo with id ${id} not found`

      });

    await Todo.findByIdAndUpdate(id, { isDone });
    // Todo.findByIdAndDelete()
    res.status(201).json({
      success: true,
      message: "update successful"
    })
  } catch (e) {
    throw e
  }


}

exports.deleteTodo = async (req, res, next) => {

  const { id } = req.params

  try {
    const todo = await Todo.findById(id)

    if (!todo){
      res.status(404).json({
        success: 'failed',
        message: `Todo with id ${id} not found`

      });
      return;
    }

    await Todo.findByIdAndDelete(id);

    res.status(204).json({})

  } catch (e) {
    throw e
  }
}