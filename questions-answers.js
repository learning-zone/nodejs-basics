// Q. What is an error-first callback?
// A. Error-first callbacks are used to pass errors and data as well.

fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err);
  }
  // use the data object
  console.log(data);
});
