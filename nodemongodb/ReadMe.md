# Illustrating mongodb with the node js run time
## What is mongodb
* it is a
    - non relational database that
    - stores data in form of documents and collections instead of rows and columns

## How do we access mongodb
  * First you have to ensure that you have Mongodb installed on your machine if you develop locally
  * Or you can use mongodb atlas if your developments are online
  * The first option is the easiest

    
## To use mongo db in Node Js
  - we use the mongoose package to
    - make the database connection by passing the database uri 
    - make the queries to the database

## In this folder we are using the Node Js runtime to interact with mongodb

# You can follow the steps of creating a node js application here 
- [Node js Basics](https://github.com/junrdev/nodejs-basics/edit/master/README.md)

# After succesfully creating the Node Js Application

## 1. Define the folders structure
  ```bash
    cd myapp
    mkdir models controllers routes utils
  ```
  - the ``models`` folders will store all the js files that define the collection(s) of the application
  - the ``controllers`` folder will contain files that will have the business logic of the application
  - the ``utils`` folder will contain all the helper function files of our folder this includes the file that makes the connection to the
  - the ``routes`` folder will contain all the routing done in the application

## 2. We require mongoose to interact with mongodb

- use the following command to install mongoose
  ```bash
    npm install mongoose
  ```

## 3. Define the database connection
  ```bash 
    cd utils
    touch dbconfig.js
  ```
  - inside this file we create a function that will help make the database connection and exports it inside the module exports object
  - this function takes one parameter that is the database connection 

- we use mongoose to make the connection we therefore  require it

```js
const mongoose = require('mongoose')
```

 ```js 
 module.exports = async (dburi) => {
  try {
    await mongoose.connect(dburi).then(() => {
      console.log(`Database connection successful`)
    })
  } catch (e) {
    throw e
  }
} 
```

## 3. Define the apps models
- we define our collection object first we move to the file
  ```
   models/todo.js
  ```
- require the mongoose package
  ```js
  const mongoose = require('mongoose')
  ```

- define the mongoose collection
  ```js
      const todoSchema = mongoose.Schema({
        
        title: String,
      
        content: String,
      
        isDone: {
          type: Boolean,
          default: false
        },
      
        dateCreated: {
          type: Date,
          default: Date.now()
        }
    });
  ```

- we use the mongoose object to define the schema of our object (todo)
- the fields that will be contained by the todo collection are defined as follows
  
  - Field with only the type
  ```js
        //name_of_field:type
        title : String
    ```
  - Field with parameters. This is used when the object defines multiple limitations e.g. length, default values e.t.c 
    ```js
      name_of_field:{
        //requirements of the object
      }

      title:{
        type:String,
        required:true,
        lowercase:true
      }
    ```
- thereafter we export the model to use in other parts of the application
    - this command create a collection using the model above
      ```js
        mongoose.model('Todo', todoSchema);
      ```
    - then we export it inside the module exports object
        ```js
          module.exports=mongoose.model('Todo', todoSchema);
        ```
- we can now use our model in any part of the application

## 4.Define the Business logic
- we are going to define the CRUD operations on top of the Todo model above. first move to the controllers folder
- ```bash
  cd controllers
  ```
- open the crud.js file

- we require the model to interact with mongodb
  ```js
    const Todo = require('../models/todo');
  ```
- ## Create
  - This is a request to the database to create an object of a certain collection and persist it to the database.
  - first we recieve the todo fields from the request body
    ```js
    const {title, content} = req.body
    ```
  - using the method create on top we create a new document on top of the Todo collection
    ```js
      try {
        const todo = await Todo.create({ title, content });
    
        res.status(201).json({
          success: true,
          todo
          })
      } catch (e) {
        throw e
      }
    ```
  - we wrap the whole process in a try catch block since errors might occur while creating the document
  - we must await the create method since it might take some time to create and save the document
  - we then return a response to the user with a <code>201</code> status code to indicate that a resource has been created


- ## Read
  - inlvoves the client querying for documents
    * ## First we query for all the todos in  the Todo collection
      - using the find methods we fetch all the documents in a certain collection
        ```js
          const todos = await Todo.find();
        ```
      
      - this returns a list of all available todos
      - Note : <em>We can pass filters inside the find function to fetch only documents that match a certain criteria for example, to fetch all todos with a specific title we could use:</em>
      - ```js
        const todos = await Todo.find({title:'some title'});
        ```
      - example response
        ```json
            {
              "success": true,
              "todos": [
                {
                  "_id": "644cf9423dce0406956e3829",
                  "isDone": false,
                  "dateCreated": "2023-04-29T11:02:11.515Z",
                  "__v": 0
                },
                {
                  "_id": "644cf98f2d1344e7eb8ecd31",
                  "title": "hello",
                  "content": "Hello world",
                  "isDone": false,
                  "dateCreated": "2023-04-29T11:03:35.022Z",
                  "__v": 0
                }
              ]
            }
        ```
    * ## Alternatively we can use the object id to fetch the object
      - When a new document is created a field ``` _id ``` is added to it.
      - we can use the contents of this field to access it
      - passing the id through the url param
          ```html
              /todos/{id}
          ```
      - Inside the getTodoById function we recieve the id

        ```js
              const {id} = req.params
        ```
      - then we use the readily available method of the mongoose package to fetch the document with the specific id
        ```js
          try {
            const todo = await Todo.findById(id)
        
            if (!todo)
              res.status(404).json({
                success: 'failed',
                message: `Todo with id ${id} not found`
              });
        
            res.status(200).json({
              success: true,
              todo
            })
          } catch (e) {
            throw e
          }
        ```

      - the response is a json object since the <code>_id</code> field is unique for every object it is like the primary key
      - url
        ```html
          http://localhost:9009/todos/644cf94c3dce0406956e382b
        ```
      - example response
        ```json
            {
              "success": true,
              "todo": {
                  "_id": "644cf98f2d1344e7eb8ecd31",
                  "title": "hello",
                  "content": "Hello world",
                  "isDone": false,
                  "dateCreated": "2023-04-29T11:03:35.022Z",
                  "__v": 0
              }
            }
        ```
    
- ## Update
  - Updating involves altering the fields of already existing document(s)
  - If we are updating a single document we require a unique identifier that distinguishes it from the other documents.
  - for example it could be the <code>_id</code> field, or a unique title for the todos
  - in this folder we use the <code>_id</code> field. we pass it through the request url
    ```html
      /todos/{id}
    ```
  - first inside our update function we check that the todo we are trying to update actually exists
    ```js
      //fetching the id from the url
      const { id } = req.params

      //getting the todo for the provided id
      const todo = await Todo.findById(id);

      //returnning an error message
      if (!todo)
        res.status(404).json({
          success: 'failed',
          message: `Todo with id ${id} not found`
  
        });
    ```
  - if not we return a <code>404</code> Not Found response
  - if it exists we call another method to find and update the todo. We pass the updated field
    ```js
    await Todo.findByIdAndUpdate(id, { isDone, title, content });
    ```
    and await it to finish
  - then we return a success response to the user
    ```js
      res.status(201).json({
        success: true,
        message: "update successful"
      })
    ```
  - We can also use a method that updates all the documents in a collection
    ```js
      await Todo.updateMany()
    ```
  - we can choose to pass filters to delete documents that fit a certain category
    ```js
    await Todo.updateMany({isDone:true})
    //updates all todos where the isDone 
    ```
- ## Delete
  - the process of deleting is quite the similar to  only this time we are removing the document permanently from the collection
  - deleting involves removing existing document(s) from the collection
  - If we are deleting a single document we require a unique identifier that distinguishes it from the other documents.
  - for example it could be the <code>_id</code> field, or a unique title for the todos
  - we use the <code>_id</code> field. we pass it through the request url
    ```html
      /todos/{id}
    ```
  - first inside our delete function we check that the todo we are trying to delete actually exists
    ```js
      //fetching the id from the url
      const { id } = req.params

      //getting the todo for the provided id
      const todo = await Todo.findById(id);

      //returnning an error message
      if (!todo)
        res.status(404).json({
          success: 'failed',
          message: `Todo with id ${id} not found`
  
        });
    ```
  - if not we return a <code>404</code> Not Found response
  - if it exists we call another method to find and delete the todo . We pass the updated field
    ```js
    await Todo.findByIdAndUpdate(id, { isDone, title, content });
    ```
    and await it to finish
  - then we return a success ``204`` response to the user
    ```js
      res.status(204).json({
        success: true,
        message: "update successful"
      })
    ```
  - We can also use a method that deletes all the documents in a collection
    ```js
      await Todo.deleteMany()
    ```
  - we can choose to pass filters to delete documents that fit a certain category
    ```js
    await Todo.deleteMany({isDone:true})
    //updates all todos where the isDone 
    ```
## 5. Routing
 - Routing is providing a way through which we can access the resources offered by our node js application
 - We define the routes in the `routes` folder
 - Open the file
     ```bash
        route.js
     ```
 - first we require the express package
    ```js
      const express = require('express');
    ```
 - we will use this to create out router. By typing the following
   ```js
    const router = express.Router();
   ```
   this creates a router on which we can define the ``Http`` Methods ``Get, Post, Patch, Put, Delete``
 - we define the methods by using the router object in the following syntax
   ```js
    router.<method>('<url>', <middlewares>,<handlerfunction>)
   ```
  - for example in our file we have the method to get all todos
    ```js
      router.get('/', getTodos)
    ```
- since we have no middlewares we call the getTodos function directly. To access this function we import it from the controllers/crud.js file
  ```js
      const {
        createTodo, getTodos, getTodoById, updateTodo,        deleteTodo
    } = require('../controllers/crud.js')
  ```
  - this   includes all the methods (<em>business logic</em>) related to the Todo model
  - Now that we have this we can do the Mappings of the routes to the related business logic function
    ```js
        router.get("/all", getTodos)
              .post("/new", createTodo)
              .get("/:id", getTodoById)
              .patch("/:id", updateTodo)
              .delete("/:id", deleteTodo)
    ```
  - the urls that have **/:id** define that a parameter, id, is required
    
  - Finally we export this router object
    ```js
    module.exports = router;
    ```
## Final Step Our server file
  - move to the index.js  fill which is in the root of our application structure
    ```bash
        index.js
    ```
- In here we had defined our node js server and now we add the mongodb functionality
- First import the helper function from `./utils` to access the function to connect to the database
  ```js
    const dbConnect = require('./utils/dbconfig')
  ```
- then import the routes from the `./routes/route.js`
  ```js
  ```
- create the database connection by passing the connection string
  - The connection string can be defined in the `enviromental variables` in a ``.env`` file. This will requie the following
    - installling the dotenv package
      ```bash
        npm install dotenv
      ```
    - defining our enviromental variables
        ```env
            uri=mongodb:localhost:27017/todos
        ```
    - configuring the application to recognize the enviromental variable. Add this to the `index.js` file
        ```js
        require('dotenv/config')
        ```
    - getting the enviromantal variables from our application
        ```js
        const uri = process.env.uri

        //connecting to db
        dbConnect(uri)
        ```
  - Or you can just type it statically
    ```js
      const uri = "mongodb:localhost:127017/todos"
      dbConnect(uri)
    ```
  - After connecting to db. Map the root url to the routes from the routes
    ```js
    //import the routes
    const router = require('./routes/todo');

    //mapping all the todo urls to the todo route
    app.use("/todos", router)

    ```
  - Now the application can be accessed by typing the root url `http://localhost:9009/todos` followed by any extension as defined in the routes file
  - for example
    ```html
      GET http://localhost:90009/todos/all - gets all todos
    ```

    ```html
      GET http://localhost:90009/todos/644cf94c3dce0406956e382b 
      - gets a todo with id 644cf94c3dce0406956e382b
    ```
    
    ```
      POST http://localhost:9009/todos/new - creates a todo from request body
    ```
    
    ```html
      PATCH http://localhost:9009/todos/644cf94c3dce0406956e382b 
      - updates todo with id 644cf94c3dce0406956e382b
    ```
    ```
      DELETE http://localhost:9009/todos/644cf94c3dce0406956e382b 
      -deletes todo with id 644cf94c3dce0406956e382b
    ```

  - Run the application by typing
    ```bash
        npm start
    ```
## This documentation is open to PRs :heart: