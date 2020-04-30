/**
 * V8 Engine
 * 
 * V8 is an open source JavaScript engine developed by the Chromium project 
 * for the Google Chrome web browser. It is written in C++. 
 * 
 * It is used in many projects such as Couchbase, MongoDB and Node.js.
 * 
 **/

//---------------------------
// v8.getHeapStatistics()
//---------------------------
var v8 = require('v8');  
console.log(v8.getHeapStatistics());  
// Output
/**
  { 
      total_heap_size: 6537216,
      total_heap_size_executable: 1048576,
      total_physical_size: 6537216,
      total_available_size: 1520712208,
      used_heap_size: 4204768,
      heap_size_limit: 1526909922,
      malloced_memory: 8192,
      peak_malloced_memory: 406408,
      does_zap_garbage: 0 
   }
 */




//-----------------------------
// v8.getHeapSpaceStatistics()
//-----------------------------
var v8 = require('v8');  
console.log(v8.getHeapSpaceStatistics());  
// Output
/**
  [ 
    { space_name: 'read_only_space', 
      space_size: 524288,
      space_used_size: 35208,        
      space_available_size: 480376,  
      physical_space_size: 524288 }, 
    { space_name: 'new_space',       
      space_size: 2097152,
      space_used_size: 980952,       
      space_available_size: 50216,   
      physical_space_size: 2097152 },
    { space_name: 'old_space',       
      space_size: 2330624,
      space_used_size: 2272568,
      space_available_size: 184,
      physical_space_size: 2330624 },
    { space_name: 'code_space',
      space_size: 1048576,
      space_used_size: 571968,
      space_available_size: 0,
      physical_space_size: 1048576 },
    { space_name: 'map_space',
      space_size: 536576,
      space_used_size: 344784,
      space_available_size: 0,
      physical_space_size: 536576 },
    { space_name: 'large_object_space',
      space_size: 0,
      space_used_size: 0,
      space_available_size: 1520180736,
      physical_space_size: 0 
    } 
  ]
 */