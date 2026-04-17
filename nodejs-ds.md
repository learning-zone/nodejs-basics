# Data Structures and Algorithms in Node.js

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

<br/>

## Table of Contents

* [Time & Space Complexity](#-1-time--space-complexity)
* [Arrays](#-2-arrays)
* [Strings](#-3-strings)
* [Linked Lists](#-4-linked-lists)
* [Stacks](#-5-stacks)
* [Queues](#-6-queues)
* [Hash Tables (Maps & Sets)](#-7-hash-tables-maps--sets)
* [Trees (Binary Search Tree)](#-8-trees-binary-search-tree)
* [Graphs](#-9-graphs)
* [Sorting Algorithms](#-10-sorting-algorithms)
* [Searching Algorithms](#-11-searching-algorithms)
* [Recursion & Dynamic Programming](#-12-recursion--dynamic-programming)
* [Two Pointers Technique](#-13-two-pointers-technique)
* [Sliding Window](#-14-sliding-window)

<br/>

## # 1. TIME & SPACE COMPLEXITY

<br/>

## Q. What is complexity analysis and why does it matter?

Complexity analysis measures how an algorithm\'s resource usage (time or memory) grows relative to the input size `n`. **Big O notation** describes the **upper bound** (worst case) of this growth, ignoring constants and lower-order terms.

**Common use cases / why it matters:**
- Compare two solutions objectively before coding
- Predict performance on large inputs
- Identify bottlenecks (nested loops → O(n²) → optimize)
- Make time vs. space trade-off decisions (e.g., use a hash map to speed up a loop)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Big O notation? Explain common complexities with examples.

| Notation   | Name           | Example                              |
|------------|----------------|--------------------------------------|
| O(1)       | Constant       | Array index access `arr[0]`          |
| O(log n)   | Logarithmic    | Binary search                        |
| O(n)       | Linear         | Single loop through array            |
| O(n log n) | Linearithmic   | Merge sort, Quick sort (avg)         |
| O(n²)      | Quadratic      | Nested loops, Bubble sort            |
| O(2ⁿ)      | Exponential    | Naive recursive Fibonacci            |

```js
// O(1) — constant time
function getFirst(arr) { return arr[0]; }

// O(n) — linear time
function sumArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

// O(n²) — quadratic (nested loops)
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      console.log(arr[i], arr[j]);
}

// O(log n) — logarithmic (binary search)
function bsExample(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? lo = mid + 1 : hi = mid - 1;
  }
  return -1;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reduce time complexity from O(n²) to O(n)? (Duplicate check example)

```js
// O(n²) — naive: compare every pair
function hasDuplicateSlow(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) return true;
  return false;
}

// O(n) — optimized using a Set (time–space trade-off)
function hasDuplicateFast(arr) {
  const seen = new Set();
  for (const val of arr) {
    if (seen.has(val)) return true;
    seen.add(val);
  }
  return false;
}

console.log(hasDuplicateFast([1, 2, 3, 2])); // true
```

> Reduced O(n²) → O(n) by spending O(n) extra space.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is space complexity? Compare two approaches to reverse an array.

```js
// O(n) extra space — creates a new array
function reverseWithExtraSpace(arr) {
  return arr.slice().reverse();
}

// O(1) extra space — modifies array in place
function reverseInPlace(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
    lo++; hi--;
  }
  return arr;
}

console.log(reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

> Both run in O(n) time. `reverseInPlace` uses O(1) space — preferred for large inputs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are best, average, and worst case complexities? Give examples.

| Algorithm     | Best       | Average    | Worst      | Notes                           |
|---------------|------------|------------|------------|---------------------------------|
| Linear Search | O(1)       | O(n)       | O(n)       | Target at start / not found     |
| Binary Search | O(1)       | O(log n)   | O(log n)   | Requires sorted array           |
| Bubble Sort   | O(n)       | O(n²)      | O(n²)      | Best when already sorted        |
| Quick Sort    | O(n log n) | O(n log n) | O(n²)      | Worst: sorted array + bad pivot |
| Merge Sort    | O(n log n) | O(n log n) | O(n log n) | Consistent; costs O(n) space    |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. ARRAYS

<br/>

## Q. What are Arrays in JavaScript and what are their common use cases?

An array is a contiguous, ordered collection of elements stored at indexed positions. In JavaScript, arrays are dynamic — they can grow/shrink and hold mixed types.

**Common use cases:**
- Storing ordered lists of items (to-do list, search results)
- Iteration and bulk data processing
- Implementing other data structures (stacks, queues, heaps)
- Prefix sums, sliding windows, two-pointer problems

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the maximum element in an array without using `Math.max`?

```js
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax([3, 7, 1, 9, 4])); // 9
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you remove duplicates from an array?

```js
const arr = [1, 2, 2, 3, 4, 4, 5];

// Using Set
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

// Using filter
const unique2 = arr.filter((val, idx) => arr.indexOf(val) === idx);
console.log(unique2); // [1, 2, 3, 4, 5]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you rotate an array to the right by `k` steps?

```js
function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the two numbers in an array that sum to a target?

```js
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the second largest element in an array?

```js
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (const num of arr) {
    if (num > first)             { second = first; first = num; }
    else if (num > second && num !== first) { second = num; }
  }
  return second === -Infinity ? null : second;
}

console.log(secondLargest([3, 7, 1, 9, 4])); // 7
console.log(secondLargest([5, 5, 5]));        // null
```

> Time: O(n) | Space: O(1) — single pass, no sorting needed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the maximum subarray sum (Kadane\'s Algorithm)?

```js
function maxSubarraySum(arr) {
  let maxSum = arr[0], currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum     = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6  [4,-1,2,1]
console.log(maxSubarraySum([-1, -2, -3]));                      // -1
```

> Time: O(n) | Space: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you build a prefix sum array and use it for range queries?

```js
function buildPrefixSum(arr) {
  const prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) prefix[i] = prefix[i - 1] + arr[i];
  return prefix;
}

// Range sum in O(1) after O(n) preprocessing
function rangeSum(prefix, l, r) {
  return l === 0 ? prefix[r] : prefix[r] - prefix[l - 1];
}

const arr    = [1, 2, 3, 4, 5];
const prefix = buildPrefixSum(arr);   // [1, 3, 6, 10, 15]
console.log(rangeSum(prefix, 1, 3));  // 9  (2+3+4)
console.log(rangeSum(prefix, 0, 4));  // 15 (sum of all)
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you merge two sorted arrays into one sorted array?

```js
function mergeSorted(a, b) {
  const result = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return [...result, ...a.slice(i), ...b.slice(j)];
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
```

> Time: O(m + n) | Space: O(m + n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. STRINGS

<br/>

## Q. What are Strings in JavaScript and what are their common use cases?

A string is an immutable sequence of characters. In JavaScript, strings are primitives but have array-like properties (indexable, iterable).

**Common use cases:**
- User input validation and parsing
- Text search, pattern matching
- Encoding/decoding data (Base64, JSON)
- Palindrome, anagram, and substring problems

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse a string in JavaScript?

```js
// Method 1: Built-in split/reverse/join
const reverse1 = str => str.split('').reverse().join('');

// Method 2: Loop
function reverse2(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}

// Method 3: Two pointers
function reverse3(str) {
  const arr = str.split('');
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) { [arr[lo], arr[hi]] = [arr[hi], arr[lo]]; lo++; hi--; }
  return arr.join('');
}

console.log(reverse1('hello')); // 'olleh'
```

> Time: O(n) | Space: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you check if a string is a palindrome?

```js
function isPalindrome(str) {
  // Normalize: lowercase, remove non-alphanumeric
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let lo = 0, hi = s.length - 1;
  while (lo < hi) {
    if (s[lo] !== s[hi]) return false;
    lo++; hi--;
  }
  return true;
}

console.log(isPalindrome('racecar'));                        // true
console.log(isPalindrome('A man a plan a canal Panama'));    // true
console.log(isPalindrome('hello'));                          // false
```

> Time: O(n) | Space: O(n) for normalized string

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you check if two strings are anagrams?

```js
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const map = new Map();
  for (const ch of s1) map.set(ch, (map.get(ch) || 0) + 1);
  for (const ch of s2) {
    if (!map.get(ch)) return false;
    map.set(ch, map.get(ch) - 1);
  }
  return true;
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello',  'world'));  // false
```

> Time: O(n) | Space: O(k) — k = number of unique characters.
> Alternative: `s1.split('').sort().join('') === s2.split('').sort().join('')` — O(n log n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse the words in a sentence?

```js
function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseWords('Hello World from Node')); // 'Node from World Hello'
console.log(reverseWords('  extra  spaces  '));      // 'spaces extra'
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find character frequency in a string using a Map?

```js
function charFrequency(str) {
  const freq = new Map();
  for (const ch of str) freq.set(ch, (freq.get(ch) || 0) + 1);
  return freq;
}

const freq = charFrequency('banana');
console.log([...freq.entries()]); // [['b',1],['a',3],['n',2]]
```

> Prefer `Map` over plain objects when keys are dynamic — avoids prototype pollution risk.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. LINKED LISTS

<br/>

## Q. What is a Linked List and what are its common use cases?

A linked list is a linear data structure where each element (node) holds a value and a pointer to the next node. Unlike arrays, nodes are not stored contiguously in memory.

**Common use cases:**
- Implementing stacks, queues, and deques
- Undo/redo history (doubly linked list)
- LRU cache implementation
- Efficient insertions/deletions in the middle (no shifting needed)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a singly linked list in Node.js?

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) { this.head = node; return; }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }

  print() {
    let curr = this.head;
    const result = [];
    while (curr) { result.push(curr.data); curr = curr.next; }
    console.log(result.join(' -> '));
  }
}

const ll = new LinkedList();
ll.append(1); ll.append(2); ll.append(3);
ll.print(); // 1 -> 2 -> 3
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse a linked list?

```js
function reverseLinkedList(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev; // new head
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you detect a cycle in a linked list?

```js
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

> Uses Floyd\'s Cycle Detection (Tortoise and Hare) algorithm — O(n) time, O(1) space.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the middle node of a linked list?

```js
function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // at middle (second middle for even-length)
}
```

> Uses slow/fast pointer technique. Time: O(n) | Space: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you delete a node from a linked list given only that node (not the head)?

```js
// Works only when node is NOT the tail
function deleteNode(node) {
  node.data = node.next.data;   // copy next node\'s value
  node.next = node.next.next;   // skip next node
}
```

> Trick: overwrite the node with its successor, then unlink the successor. Time: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. STACKS

<br/>

## Q. What is a Stack and what are its common use cases?

A stack is a linear data structure that follows **LIFO** (Last In, First Out) order — the last element pushed is the first to be popped. In JavaScript, typically implemented with an array.

**Common use cases:**
- Function call stack (how JS handles execution contexts)
- Undo/redo in editors
- Balanced parentheses / bracket validation
- Backtracking (maze, tree DFS)
- Expression evaluation and conversion (infix → postfix)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Stack using an array?

```js
class Stack {
  constructor() { this.items = []; }

  push(item) { this.items.push(item); }
  pop()      { return this.items.pop(); }
  peek()     { return this.items[this.items.length - 1]; }
  isEmpty()  { return this.items.length === 0; }
  size()     { return this.items.length; }
}

const stack = new Stack();
stack.push(1); stack.push(2); stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.size()); // 2
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you check if parentheses are balanced using a stack?

```js
function isBalanced(str) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const ch of str) {
    if ('({['.includes(ch)) stack.push(ch);
    else if (map[ch]) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced('({[]})')); // true
console.log(isBalanced('({[})')); // false
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse a string using a stack?

```js
function reverseWithStack(str) {
  const stack = [];
  for (const ch of str) stack.push(ch);
  let result = '';
  while (stack.length) result += stack.pop();
  return result;
}

console.log(reverseWithStack('hello')); // 'olleh'
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the Next Greater Element for each item in an array?

```js
function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack  = []; // stores indices

  for (let i = 0; i < arr.length; i++) {
    // while stack top is smaller than current element
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}

console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [5, 10, 10, -1, -1]
```

> Time: O(n) — each element pushed/popped at most once (monotonic stack).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. QUEUES

<br/>

## Q. What is a Queue and what are its common use cases?

A queue is a linear data structure that follows **FIFO** (First In, First Out) order — the first element enqueued is the first to be dequeued. In JavaScript, typically implemented with an array.

**Common use cases:**
- Task scheduling and print queues
- BFS (Breadth-First Search) traversal
- Event loop / message queues in Node.js
- Rate limiting and request buffering
- Circular buffer for streaming data

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Queue using an array?

```js
class Queue {
  constructor() { this.items = []; }

  enqueue(item) { this.items.push(item); }
  dequeue()     { return this.items.shift(); }
  front()       { return this.items[0]; }
  isEmpty()     { return this.items.length === 0; }
  size()        { return this.items.length; }
}

const q = new Queue();
q.enqueue('a'); q.enqueue('b'); q.enqueue('c');
console.log(q.dequeue()); // 'a'
console.log(q.front());   // 'b'
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Queue using two stacks?

```js
class QueueUsingStacks {
  constructor() { this.s1 = []; this.s2 = []; }

  enqueue(item) { this.s1.push(item); }

  dequeue() {
    if (!this.s2.length) {
      while (this.s1.length) this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
  }
}

const q = new QueueUsingStacks();
q.enqueue(1); q.enqueue(2); q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Circular Queue?

```js
class CircularQueue {
  constructor(size) {
    this.size  = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear  = -1;
    this.count = 0;
  }

  enqueue(item) {
    if (this.count === this.size) { console.log('Queue full'); return; }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = item;
    if (this.front === -1) this.front = 0;
    this.count++;
  }

  dequeue() {
    if (this.count === 0) { console.log('Queue empty'); return null; }
    const item  = this.queue[this.front];
    this.front  = (this.front + 1) % this.size;
    this.count--;
    return item;
  }

  isFull()  { return this.count === this.size; }
  isEmpty() { return this.count === 0; }
}

const cq = new CircularQueue(3);
cq.enqueue(1); cq.enqueue(2); cq.enqueue(3);
console.log(cq.dequeue()); // 1
cq.enqueue(4);             // wraps around to index 0
console.log(cq.dequeue()); // 2
```

> Avoids wasted space of regular queue. Uses modulo `%` for wrap-around indexing.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. HASH TABLES (MAPS & SETS)

<br/>

## Q. What is a Hash Table and what are its common use cases?

A hash table (hash map) stores key-value pairs and uses a hash function to compute an index for each key, allowing O(1) average-time lookups, insertions, and deletions. In JavaScript, use `Map` (preferred) or plain objects `{}`.

**Common use cases:**
- Frequency counting (character/word count)
- Caching / memoization
- Two-sum and pair-finding problems
- Grouping data (group anagrams)
- Deduplication and membership testing

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you count the frequency of elements in an array using a Map?

```js
function frequency(arr) {
  const map = new Map();
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}

const freq = frequency(['a', 'b', 'a', 'c', 'b', 'a']);
console.log([...freq.entries()]); // [['a',3],['b',2],['c',1]]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the first non-repeating character in a string?

```js
function firstNonRepeating(str) {
  const map = new Map();
  for (const ch of str) map.set(ch, (map.get(ch) || 0) + 1);
  for (const ch of str) { if (map.get(ch) === 1) return ch; }
  return null;
}

console.log(firstNonRepeating('aabbcde')); // 'c'
console.log(firstNonRepeating('aabb'));    // null
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you group anagrams from a list of strings?

```js
function groupAnagrams(words) {
  const map = new Map();
  for (const word of words) {
    const key = word.split('').sort().join(''); // sorted chars as key
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return [...map.values()];
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [ ['eat','tea','ate'], ['tan','nat'], ['bat'] ]
```

> Time: O(n · k log k) where k = max word length.
> Prefer `Map` over plain object — safer for arbitrary string keys.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 8. TREES (BINARY SEARCH TREE)

<br/>

## Q. What is a Tree and what are its common use cases?

A tree is a hierarchical data structure of nodes connected by edges. A **Binary Search Tree (BST)** is a tree where each node has at most two children, and left child < parent < right child.

**Common use cases:**
- File system and directory structure
- Database indexing (B-trees)
- DOM structure in browsers
- Priority queues (binary heaps)
- Autocomplete / prefix search (tries)
- Sorted data retrieval (inorder BST = sorted output)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Binary Search Tree (BST) in Node.js?

```js
class TreeNode {
  constructor(val) { this.val = val; this.left = null; this.right = null; }
}

class BST {
  constructor() { this.root = null; }

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) { this.root = node; return; }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) { curr.left = node; return; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = node; return; }
        curr = curr.right;
      }
    }
  }

  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.val);
    this.inOrder(node.right, result);
    return result;
  }
}

const bst = new BST();
[5, 3, 7, 1, 4].forEach(v => bst.insert(v));
console.log(bst.inOrder()); // [1, 3, 4, 5, 7]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the height of a binary tree?

```js
function height(node) {
  if (!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you perform BFS (level-order traversal) on a binary tree?

```js
function bfs(root) {
  if (!root) return [];
  const queue = [root], result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left)  queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you perform preorder traversal (Root → Left → Right)?

```js
function preOrder(node, result = []) {
  if (!node) return result;
  result.push(node.val);          // visit root first
  preOrder(node.left,  result);
  preOrder(node.right, result);
  return result;
}

// BST with [5, 3, 7, 1, 4] inserted:
// preOrder result: [5, 3, 1, 4, 7]
```

> Use case: serialize/copy a tree (root needed before children).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you perform postorder traversal (Left → Right → Root)?

```js
function postOrder(node, result = []) {
  if (!node) return result;
  postOrder(node.left,  result);
  postOrder(node.right, result);
  result.push(node.val);          // visit root last
  return result;
}

// BST with [5, 3, 7, 1, 4] inserted:
// postOrder result: [1, 4, 3, 7, 5]
```

> Use case: safely delete a tree (children deleted before parent).

| Traversal   | Order                    | Use case                  |
|-------------|--------------------------|---------------------------|
| Inorder     | Left → Root → Right     | Sorted output from BST    |
| Preorder    | Root → Left → Right     | Copy / serialize tree     |
| Postorder   | Left → Right → Root     | Delete / evaluate tree    |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. GRAPHS

<br/>

## Q. What is a Graph and what are its common use cases?

A graph is a non-linear data structure consisting of **vertices** (nodes) and **edges** (connections). Graphs can be directed/undirected and weighted/unweighted. Represented as an adjacency list or adjacency matrix.

**Common use cases:**
- Social networks (friends/followers)
- Maps and navigation (shortest path)
- Dependency resolution (npm packages, task scheduling)
- Web crawling and page ranking
- Network topology and routing

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you represent a graph using an adjacency list?

```js
class Graph {
  constructor() { this.adjList = new Map(); }

  addVertex(v) { this.adjList.set(v, []); }

  addEdge(u, v) {
    this.adjList.get(u).push(v);
    this.adjList.get(v).push(u); // undirected
  }

  print() {
    for (const [vertex, edges] of this.adjList) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

const g = new Graph();
['A','B','C','D'].forEach(v => g.addVertex(v));
g.addEdge('A','B'); g.addEdge('A','C'); g.addEdge('B','D');
g.print();
// A -> B, C
// B -> A, D
// C -> A
// D -> B
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement DFS (Depth-First Search) on a graph?

```js
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (const neighbor of graph.adjList.get(start) || []) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement BFS on a graph?

```js
function bfsGraph(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (const neighbor of graph.adjList.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. SORTING ALGORITHMS

<br/>

## Q. What are Sorting Algorithms and when should you use each?

Sorting algorithms arrange elements in a specific order (ascending/descending). The choice of algorithm depends on input size, memory constraints, and whether the data is partially sorted.

**Common use cases:**
- Preparing data for binary search
- Ranking and leaderboard systems
- Merging datasets
- Finding duplicates (sort first, then scan)
- Display ordering in UIs (tables, search results)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Bubble Sort?

```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22])); // [12, 22, 25, 34, 64]
```

> Time: O(n²) | Space: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Merge Sort?

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left  = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([38, 27, 43, 3, 9])); // [3, 9, 27, 38, 43]
```

> Time: O(n log n) | Space: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Quick Sort?

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left  = arr.slice(0, -1).filter(x => x <= pivot);
  const right = arr.slice(0, -1).filter(x => x >  pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 80, 30, 90, 40])); // [10, 30, 40, 80, 90]
```

> Time: O(n log n) avg, O(n²) worst | Space: O(log n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Selection Sort?

```js
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
```

> Time: O(n²) always | Space: O(1) | Performs at most n-1 swaps (fewer than Bubble Sort).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Insertion Sort?

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]
```

> Time: O(n²) worst, **O(n) best** (nearly sorted input) | Space: O(1)
> Best choice for **small or nearly-sorted** arrays.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which sorting algorithm is best for large data, and why?

```
For large data:
  ✔ Merge Sort  — O(n log n) guaranteed; stable; costs O(n) space
  ✔ Quick Sort  — O(n log n) average; in-place (O(log n) space)
  ✘ Bubble / Selection / Insertion Sort — O(n²), too slow for large n

JavaScript\'s built-in Array.prototype.sort() uses TimSort
(hybrid of Merge Sort + Insertion Sort) — O(n log n).
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 11. SEARCHING ALGORITHMS

<br/>

## Q. What are Searching Algorithms and when should you use each?

Searching algorithms find the location of a target value within a data structure. The two most common are **linear search** (works on any array) and **binary search** (requires a sorted array).

**Common use cases:**
- Lookup in sorted arrays or databases
- Dictionary / phonebook search
- Finding insert position in sorted data
- First/last occurrence of a value
- Game logic (guess the number)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Binary Search?

```js
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 6)); // -1
```

> Time: O(log n) | Requires sorted array

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Linear Search and when should you use it?

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([4, 2, 9, 7], 9)); // 2
```

> Use when the array is **unsorted** or small. Time: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Binary Search recursively?

```js
function binarySearchRecursive(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target)   return binarySearchRecursive(arr, target, mid + 1, hi);
  return binarySearchRecursive(arr, target, lo, mid - 1);
}

console.log(binarySearchRecursive([1, 3, 5, 7, 9], 7)); // 3
console.log(binarySearchRecursive([1, 3, 5, 7, 9], 6)); // -1
```

> Time: O(log n) | Space: O(log n) due to call stack (vs O(1) for iterative).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the first and last occurrence of an element in a sorted array?

```js
function firstOccurrence(arr, target) {
  let lo = 0, hi = arr.length - 1, result = -1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) { result = mid; hi = mid - 1; } // keep going left
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return result;
}

function lastOccurrence(arr, target) {
  let lo = 0, hi = arr.length - 1, result = -1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) { result = mid; lo = mid + 1; } // keep going right
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return result;
}

const arr = [1, 2, 2, 2, 3, 4, 5];
console.log(firstOccurrence(arr, 2)); // 1
console.log(lastOccurrence(arr, 2));  // 3
```

> Both O(log n) — modified binary search that doesn't stop at first match.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 12. RECURSION & DYNAMIC PROGRAMMING

<br/>

## Q. What is Recursion and Dynamic Programming? What are their common use cases?

**Recursion:** A function that calls itself with a smaller input until it reaches a **base condition**. Every recursive solution has a call stack cost (O(n) space).

**Dynamic Programming (DP):** An optimization technique that solves complex problems by breaking them into overlapping subproblems, storing results to avoid recomputation (**memoization** = top-down, **tabulation** = bottom-up).

**Common use cases:**
- Fibonacci, factorial, tree traversal (recursion)
- Shortest path, knapsack, coin change (DP)
- String edit distance and LCS (DP)
- Parsing nested structures (recursion)
- Game theory and optimization problems (DP)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you compute Fibonacci numbers using recursion vs dynamic programming?

```js
// Recursive (exponential time - O(2^n))
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Memoized (O(n) time, O(n) space)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
}

// Bottom-up DP (O(n) time, O(1) space)
function fibDP(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

console.log(fibDP(10)); // 55
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you compute factorial using recursion? Identify the base condition.

```js
function factorial(n) {
  if (n < 0)  throw new Error('Negative input');
  if (n <= 1) return 1;          // base condition
  return n * factorial(n - 1);   // recursive call
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
```

> Call stack depth = n (stack overflow risk for large n).
> Iterative version is O(n) time, O(1) space; recursive is O(n) time, O(n) space.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse an array using recursion?

```js
function reverseArray(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return arr;
  [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
  return reverseArray(arr, lo + 1, hi - 1);
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

> Time: O(n) | Space: O(n) call stack. Iterative two-pointer approach is preferred (O(1) space).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you solve the 0/1 Knapsack problem using dynamic programming?

```js
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = dp[i - 1][w]; // exclude item
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      }
    }
  }
  return dp[n][capacity];
}

const weights = [1, 3, 4, 5];
const values  = [1, 4, 5, 7];
console.log(knapsack(weights, values, 7)); // 9
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the longest common subsequence (LCS) of two strings?

```js
function lcs(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

console.log(lcs('ABCBDAB', 'BDCABA')); // 4  (BCBA or BDAB)
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the minimum number of coins for a given amount (Coin Change)?

```js
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 5, 6, 9], 11)); // 2  (5 + 6)
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 13. TWO POINTERS TECHNIQUE

<br/>

## Q. What is the Two Pointers technique and what are its common use cases?

The two pointers technique uses two index variables that move through a data structure (usually an array or string) — typically one from each end, or one slow and one fast. Reduces many O(n²) problems to O(n).

**Common use cases:**
- Pair/triplet sum in sorted arrays
- Removing duplicates in sorted arrays
- Reversing arrays or strings in place
- Detecting cycles in linked lists (slow/fast pointers)
- Merging two sorted arrays

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find a pair with a given sum in a sorted array using two pointers?

```js
function pairWithSum(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const sum = arr[lo] + arr[hi];
    if (sum === target) return [lo, hi];
    sum < target ? lo++ : hi--;
  }
  return [];
}

console.log(pairWithSum([1, 2, 3, 4, 6], 6)); // [1, 3]  (2+4)
console.log(pairWithSum([1, 3, 5, 7, 9], 8)); // [0, 3]  (1+7)
```

> Time: O(n) | Space: O(1) — only works on **sorted** arrays.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you remove duplicates from a sorted array in place?

```js
function removeDuplicatesInPlace(arr) {
  if (!arr.length) return 0;
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1; // length of unique portion
}

const arr = [1, 1, 2, 3, 3, 4, 5, 5];
const len = removeDuplicatesInPlace(arr);
console.log(arr.slice(0, len)); // [1, 2, 3, 4, 5]
```

> Time: O(n) | Space: O(1) — `slow` tracks the last unique position.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you reverse an array in place using two pointers?

```js
function reverseInPlace(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
    lo++; hi--;
  }
  return arr;
}

console.log(reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseInPlace(['a','b','c']));    // ['c','b','a']
```

> Time: O(n) | Space: O(1) — works for both arrays and conceptually for strings (as char arrays).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 14. SLIDING WINDOW

<br/>

## Q. What is the Sliding Window technique and what are its common use cases?

The sliding window technique maintains a subset (window) of elements that expands or shrinks as it moves through the array or string. Avoids nested loops by reusing computation from the previous window.

**Types:**
- **Fixed window** — window size k is constant (max sum of k elements)
- **Variable window** — window grows/shrinks based on a condition (longest unique substring)

**Common use cases:**
- Maximum/minimum sum subarray of size k
- Longest substring without repeating characters
- Counting characters within a window
- DNA sequence analysis
- Network packet throughput calculation

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the maximum sum subarray of size k (fixed window)?

```js
function maxSumSubarrayK(arr, k) {
  if (arr.length < k) return null;

  // Compute sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  let maxSum = windowSum;

  // Slide the window: add next element, remove first element
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSumSubarrayK([2, 1, 5, 1, 3, 2], 3)); // 9  (5+1+3)
console.log(maxSumSubarrayK([2, 3, 4, 1, 5], 2));    // 7  (3+4)
```

> Time: O(n) | Space: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the length of the longest substring without repeating characters (variable window)?

```js
function longestUniqueSubstring(str) {
  const seen = new Map(); // char → last seen index
  let start = 0, maxLen = 0;

  for (let end = 0; end < str.length; end++) {
    const ch = str[end];
    if (seen.has(ch) && seen.get(ch) >= start) {
      start = seen.get(ch) + 1; // shrink window past duplicate
    }
    seen.set(ch, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

console.log(longestUniqueSubstring('abcabcbb')); // 3  ('abc')
console.log(longestUniqueSubstring('bbbbb'));    // 1  ('b')
console.log(longestUniqueSubstring('pwwkew'));   // 3  ('wke')
```

> Time: O(n) | Space: O(k) — k = size of character set.
> Classic variable sliding window problem (window shrinks when duplicate found).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Complexity Quick Reference

| Algorithm            | Best       | Average    | Worst      | Space    |
|----------------------|------------|------------|------------|----------|
| Bubble Sort          | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Selection Sort       | O(n²)      | O(n²)      | O(n²)      | O(1)     |
| Insertion Sort       | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Merge Sort           | O(n log n) | O(n log n) | O(n log n) | O(n)     |
| Quick Sort           | O(n log n) | O(n log n) | O(n²)      | O(log n) |
| Linear Search        | O(1)       | O(n)       | O(n)       | O(1)     |
| Binary Search        | O(1)       | O(log n)   | O(log n)   | O(1)     |
| BFS / DFS (Graph)    | O(V+E)     | O(V+E)     | O(V+E)     | O(V)     |
| Two Pointers         | O(n)       | O(n)       | O(n)       | O(1)     |
| Sliding Window       | O(n)       | O(n)       | O(n)       | O(1)–O(k)|
| Hash Map Lookup      | O(1)       | O(1)       | O(n)*      | O(n)     |
| BST Insert/Search    | O(log n)   | O(log n)   | O(n)       | O(n)     |

> \* Hash Map worst case O(n) only on hash collision (rare with good hash functions).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. When to Use Which Data Structure?

| Problem Type                      | Best Data Structure     |
|-----------------------------------|-------------------------|
| Fast lookup by key                | Map / Hash Table        |
| Unique values / membership test   | Set                     |
| LIFO (undo, backtracking)         | Stack                   |
| FIFO (BFS, task queues)           | Queue                   |
| Sorted data / range queries       | BST / Sorted Array      |
| Graph traversal                   | BFS (Queue) / DFS (Stack / Recursion) |
| Sliding window / pair finding     | Two Pointers            |
| Subarray sum queries              | Prefix Sum              |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
