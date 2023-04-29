/** *
  This file is used to make the database connection

  we are using mongodb so we use the mongoose library to create the connection

*/

const mongoose = require('mongoose');

/** 
  we export the db connection function so that we may use it in other files
  it takes a single parameter which is the connection string
*/

module.exports = async (dburi) => {
  try {
    await mongoose.connect(dburi).then(() => {
      console.log(`Database connection successful`)
    })
  } catch (e) {
    throw e
  }
}