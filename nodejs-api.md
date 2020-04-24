# Node.js APIs



## Global Objects.

In browsers, the top-level scope is the global scope.
That means that in browsers if you're in the global scope var something will define a global variable.
In Node this is different. The top-level scope is not the global scope; var something inside a Node module will be local to that module.

|  API        |  Description |
|-------------|--------------|
|__filename;  | The filename of the code being executed. (absolute path)|
|__dirname;   | The name of the directory that the currently executing script resides in. (absolute path)|
|module;      | A reference to the current module. In particular module.exports is used for defining what a module exports and makes available through require().
|exports;     | A reference to the module.exports that is shorter to type.|
|process;     | The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.|
|Buffer;      | The Buffer class is a global type for dealing with binary data directly.|

