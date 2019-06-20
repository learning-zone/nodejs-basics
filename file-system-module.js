/**
 * ---------------
 *   File System
 * ---------------
 * 
 *  The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
 * 
 * 
 * --------------------------------
 *   Important method of fs module
 * --------------------------------
 * 
 *     ----------------------------------               ----------------------------------------
 *              Method	                                            Description
 *     ----------------------------------               ----------------------------------------
 *    fs.readFile(fileName [,options], callback)	      Reads existing file.
 *    fs.writeFile(filename, data[, options], callback)	Writes to the file. If file exists then overwrite the content otherwise creates new file.
 *    fs.open(path, flags[, mode], callback)	          Opens file for reading or writing.
 *    fs.rename(oldPath, newPath, callback)	            Renames an existing file.
 *    fs.chown(path, uid, gid, callback)	              Asynchronous chown.
 *    fs.stat(path, callback)	                          Returns fs.stat object which includes important file statistics.
 *    fs.link(srcpath, dstpath, callback)	              Links file asynchronously.
 *    fs.symlink(destination, path[, type], callback)	  Symlink asynchronously.
 *    fs.rmdir(path, callback)	                        Renames an existing directory.
 *    fs.mkdir(path[, mode], callback)	                Creates a new directory.
 *    fs.readdir(path, callback)	                      Reads the content of the specified directory.
 *    fs.utimes(path, atime, mtime, callback)	          Changes the timestamp of the file.
 *    fs.exists(path, callback)	                        Determines whether the specified file exists or not.
 *    fs.access(path[, mode], callback)               	Tests a user's permissions for the specified file.
 *    fs.appendFile(file, data[, options], callback)	  Appends new content to the existing file.
 * 
 * 
 * 
 * 
 * ---------      -------------------------------------------------
 *   Flag	                          Description
 * ---------      -------------------------------------------------
 *    r	          Open file for reading. An exception occurs if the file does not exist.
 *    r+	        Open file for reading and writing. An exception occurs if the file does not exist.
 *    rs	        Open file for reading in synchronous mode.
 *    rs+	        Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
 *    w	          Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 *    wx	        Like 'w' but fails if path exists.
 *    w+	        Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 *    wx+	        Like 'w+' but fails if path exists.
 *    a	          Open file for appending. The file is created if it does not exist.
 *    ax	        Like 'a' but fails if path exists.
 *    a+	        Open file for reading and appending. The file is created if it does not exist.
 *    ax+	        Like 'a+' but fails if path exists.
 * 
 */

const fs = require('fs');
const dir = __dirname;
const path = dir + `\\assets\\temp.txt`;


// Example: Reading a directory
fs.readdir('./assets', (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});
console.log('Reading a Directory...');


// Example: Open and Read file
fs.open(path, 'r', function(err, fd) {
  if (err) {
    return console.error(err);
  }

  var buffr = new Buffer(1024);
  fs.read(fd, buffr, 0, buffr.length, 0, function(err, bytes) {
    if (err) throw err;

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buffr.slice(0, bytes).toString());
    }

    // Close the opened file.
    fs.close(fd, function(err) {
      if (err) throw err;
    });
  });
});



// Example: Reading File Synchronously
var data = fs.readFileSync(path, 'utf8');
console.log(data);


// Example: Renaming a file
fs.rename(path+'\\assets\\temp.txt', path+'\\assets\\dummy.txt', err => {
  if (err) throw err;
  console.log('Rename complete');
}); 


// Example: Creating & Writing File
fs.writeFile(dir + '\\assets\\test.txt', 'This is first paragraph!', function(err) {
  if (err) console.log(err);
  else console.log('Write operation complete.');
});


// Example: Append File Content
fs.appendFile(dir + '\\assets\\test.txt', '\nThis is second paragraph!', function(err) {
  if (err) console.log(err);
  else console.log('Append operation complete.');
});


// Example: File Status
 fs.stat(path, (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});


// Example: Deleting a file 
fs.unlink(path, err => {
  if (err) throw err;
  console.log(`Successfully deleted file: ${path}`);
});  

