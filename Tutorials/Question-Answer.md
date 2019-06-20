
**NodeJS** 
Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.  


**Node.js Process Model** 
Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.  


**Primitive Types**  

1. String
1. Number
1. Boolean
1. Undefined
1. Null
1. RegExp  


**Buffer**  
Node.js includes an additional data type called Buffer (not available in browser's JavaScript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.  


**Node.js Module**  

1. Core Modules
1. Local Modules
1. Third Party Modules  


**Core Modules**  

|  Core Module |	Description                                                                 |
|:-------------|:-------------------------------------------------------------------------------|
|http	       | http module includes classes, methods and events to create Node.js http server.|
|url	       | url module includes methods for URL resolution and parsing.                    |
|querystring   | querystring module includes methods to deal with query string.                 |
|path	       | path module includes methods to deal with file paths.                          |
|fs	           | fs module includes classes, methods, and events to work with file I/O.         |
|util	       | util module includes utility functions useful for programmers.                 |
