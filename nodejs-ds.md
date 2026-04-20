# Data Structures and Algorithms in Node.js

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

<br/>

## Table of Contents

* [Introduction](#-introduction)
* [Big O Notation](#-big-o-notation)
* [Arrays](#-arrays)
* [Stacks](#-stacks)
    * Operations on Stacks
        * [PUSH Operation](#-push-operation)
        * [POP Operation](#-pop-operation)
        * [Display Operation](#-display-operation)
        * [isEmpty Operation](#-isempty-operation)
    * Application of Stacks
        * [Recursion](#-recursion)
        * [Reversal of String](#-reversal-of-string)
        * [Checking the Parenthesis Matching](#-checking-the-parenthesis-matching)
        * [Polish Notation of Arithmetic Expressions](#-polish-notation-of-arithmetic-expressions)
        * [Conversion of the Expressions](#-conversion-of-the-expressions)
        * [Evaluation of POSTFIX Expression](#-evaluation-of-postfix-expression)
* [Queues](#-queues)
    * Operations on a Queue
        * [Insertion](#-insertion)
        * [Deletion](#-deletion)
        * [Qempty Operation](#-qempty-operation)
        * [Qfull Operation](#-qfull-operation)
        * [Display Operation](#-display-operation)
    * Types of Queues
        * [Simple Queue](#-simple-queue)
        * [Circular Queue](#-circular-queue)
        * [Priority Queue](#-priority-queue)
        * [Double Ended Queue](#-double-ended-queue)
* [Linked Lists](#-linked-lists)
    * Operations on Linked Lists
        * [Creating a Linked Lists](#-creating-a-lined-lists)
        * [Traversing a Linked Lists](#-creating-a-lined-lists)
        * [Displaying a Linked Lists](#-creating-a-lined-lists)
        * [Length Operation](#-creating-a-lined-lists)
        * [Searching a Linked Lists](#-creating-a-lined-lists)
        * [Insertion into a Linked Lists](#-creating-a-lined-lists)
        * [Deletion Operations on a singly Linked Lists](#-creating-a-lined-lists)
        * [Sorting a Linked Lists](#-creating-a-lined-lists)
        * [Reversing a Linked Lists](#-creating-a-lined-lists)
        * [Merging of two Sorted Lists](#-creating-a-lined-lists)
    * Types of Linked Lists
        * [Singly Linked Lists](#-singly-linked-lists)
        * [Circular Linked Lists](#-circular-singly-linked-lists)
            * [Creation of a CLL](#-creation-of-a-circular-linked-list)
            * [Display operation on a CLL](#-creation-of-a-circular-linked-list)
            * [Insertion into a CLL](#-creation-of-a-circular-linked-list)
            * [Deletion of a node from CLL](#-creation-of-a-circular-linked-list)
            * [Implementation of Stacks using CLL](#-creation-of-a-circular-linked-list)
            * [Implementation of Queue using CLL](#-creation-of-a-circular-linked-list)
        * [Doubly Linked Lists](#-doubly-linked-lists)
            * [Creating a DLL](#-creating-a-dll)
            * [Displaying a DLL](#-displaying-a-dll)
            * [Inserting a node into DLL](#-Inserting-a-node-into-dll)
            * [Deleting a node from DLL](#-deleting-a-node-from-dll)
        * [Header Linked Lists](#-header-linked-lists)
            * [Grounded Header Linked List](#-grounded-header-linked-list)
                * [Creation](#-creation)
                * [Insertion Operation](#-insertion-operation)
                * [Delete Operation](#-delete-operation)
            * [Circular Header Linked List](#-circular-header-linked-list)
                * [Creating a Linked List](#-creating-a-linked-list)
                * [Insertion](#-insertion)
            * Application of Linked Lists
                * [Addition of two Polynomials](#-addition-of-two-polynomials)
                * [Addition of two long positive Integers](#-addition-of-two-long-positive-integers)
    * [Linked List Implementation of Stacks](#-linked-list-implementation-of-stacks)
    * [Linked List Implementation of Queue](#-linked-list-implementation-of-queue)
    * [Linked List Implementation of Priority Queue](#-linked-list-implementation-of-priority-queue)
* [Trees](#-trees)
    * [Binary Trees](#-binary-tree)
        * [Strictly Binary Tree](#-strictly-binary-tree)
        * [Complete Binary Tree](#-complete-binary-tree)
        * [Almost Full Binary Tree](#-almost-full-binary-tree)
    * [Binary Search Trees](#-binary-search-tree)
        * Operations on a Binary Search Tree
            * [Constructing Binary Search Tree Insertion](#-constructing-binary-search-tree)
            * [Searching Operation on a BST](#-searching-operation-on-a-bst)
            * [Deletion operatin on BST](#-deletion-operatin-on-bst)
            * [Traversals](#-traversals)
            * [Finding Maximum value in BST](#-finding-maximum-value-in-bst)
            * [Finding Minimum value in BST](#-finding-minimum-value-in-bst)
    * [Threaded Binary Tree](#threaded-binary-tree)
        * [Right in Threaded Binary Trees](#-right-in-threaded-binary-trees)
        * [Left in Threaded Binary Trees](#-Left-in-threaded-binary-trees)
    * [Creation of BST from preorder and inorder traversals](#-creation-of-bst-from-preorder-and-inorder-traversals)
    * [Creation of BST from postorder and inorder traversals](#-creation-of-bst-from-postorder-and-inorder-traversals)
    * [AVL Trees](#-avl-tree)
    * [B- Trees](#-b-tree)
    * [B+ Trees](#-b-tree)
    * [Red-Black Trees](#-red-black-tree)
* [Graph](#-graph)
    * [Breadth First Search Algorithm](#-breadth-first-search-algorithm)
    * [Depth First Search Algorithm](#-depth-first-search-algorithm)
    * [Kruskal\'s Algorithm](#-Kruskals-algorithm)
    * [Dijkstra Algorithm](#-dijkstra-algorithm)
    * [Prim\'s Algorithm](#-prims-algorithm)
    * [Travelling Salesman Problem](#-travelling-salesman-problem)
    * [Floyd-Warshall Algorithm](#-floyd-warshall-algorithm)
* [Sorting](#-sorting-algorithms)
    * [Address Calculation Sort](#-address-calculation-sort)
    * [Binary Tree Sort](#-binary-tree-sort)
    * [Bubble Sort](#-bubble-sort)
    * [Bucket Sort](#-bucket-sort)
    * [Heap Sort](#-heap-sort)
    * [Insertion Sort](#-insertion-sort)
    * [Merge Sort](#-merge-sort)
    * [Quick Sort](#-quick-sort)
    * [Radix Sort](#-radix-sort)
    * [Selection Sort](#-selection-sort)
    * [Shell Sort](#-shell-sort)
* [Searching](#-searching-algorithms)
    * [Linear Search](#-linear-search)
    * [Binary Search](#-binary-search)
    * [Indexed Sequential Search](#-indexed-sequential-search)
* [Hash Table](#-hash-table)
* [Heap](#-heap)
* [Miscellaneous](#-miscellaneous)

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

## # 4. STACKS

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

## Q. What is Polish (Prefix) Notation and how do you evaluate a prefix expression?

Polish notation places the operator **before** its operands. No parentheses are needed because the notation itself determines the order of operations.

| Infix           | Prefix (Polish) | Postfix      |
|-----------------|-----------------|--------------|
| A + B           | + A B           | A B +        |
| (A + B) * C     | * + A B C       | A B + C *    |
| A + B * C       | + A * B C       | A B C * +    |

```js
// Evaluate Prefix Expression using a Stack (scan right to left)
function evalPrefix(expr) {
  const tokens = expr.trim().split(/\s+/).reverse();
  const stack  = [];
  const ops    = new Set(['+', '-', '*', '/']);

  for (const token of tokens) {
    if (!ops.has(token)) {
      stack.push(Number(token));
    } else {
      const a = stack.pop();
      const b = stack.pop();
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
      }
    }
  }
  return stack.pop();
}

console.log(evalPrefix('* + 2 3 4')); // (2+3)*4 = 20
console.log(evalPrefix('+ 2 * 3 4')); // 2+(3*4) = 14
```

> Time: O(n) | Space: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you convert an Infix expression to Postfix using a Stack?

```js
// Shunting-Yard Algorithm (Dijkstra)
function infixToPostfix(expr) {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
  const isOperator  = ch => ch in precedence;
  const stack = [], output = [];

  for (const ch of expr.replace(/\s+/g, '')) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      output.push(ch);
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length && stack[stack.length - 1] !== '(')
        output.push(stack.pop());
      stack.pop(); // remove '('
    } else if (isOperator(ch)) {
      while (
        stack.length &&
        isOperator(stack[stack.length - 1]) &&
        precedence[stack[stack.length - 1]] >= precedence[ch]
      ) output.push(stack.pop());
      stack.push(ch);
    }
  }
  while (stack.length) output.push(stack.pop());
  return output.join(' ');
}

console.log(infixToPostfix('A+B*C'));     // A B C * +
console.log(infixToPostfix('(A+B)*C'));   // A B + C *
console.log(infixToPostfix('A+B*(C-D)')); // A B C D - * +
```

> Time: O(n) | Space: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you evaluate a POSTFIX expression using a Stack?

```js
function evalPostfix(expr) {
  const stack  = [];
  const tokens = expr.trim().split(/\s+/);
  const ops    = new Set(['+', '-', '*', '/']);

  for (const token of tokens) {
    if (!ops.has(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop(); // second operand (popped first)
      const a = stack.pop(); // first  operand
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
      }
    }
  }
  return stack.pop();
}

console.log(evalPostfix('3 4 + 2 *'));          // (3+4)*2 = 14
console.log(evalPostfix('5 1 2 + 4 * + 3 -'));  // 14
```

> Time: O(n) | Space: O(n)
> Order matters: pop `b` first, then `a` — so `a op b` is correct for `-` and `/`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Stack using a Linked List?

```js
class StackNode {
  constructor(data) { this.data = data; this.next = null; }
}

class LinkedStack {
  constructor() { this.top = null; this.length = 0; }

  push(data) {
    const node = new StackNode(data);
    node.next  = this.top;
    this.top   = node;
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const data = this.top.data;
    this.top = this.top.next;
    this.length--;
    return data;
  }

  peek()    { return this.top ? this.top.data : null; }
  isEmpty() { return this.top === null; }
  size()    { return this.length; }
}

const ls = new LinkedStack();
ls.push(10); ls.push(20); ls.push(30);
console.log(ls.peek()); // 30
console.log(ls.pop());  // 30
console.log(ls.size()); // 2
```

> Advantage over array-based stack: **no capacity limit** — grows dynamically.
> Push/Pop: O(1) | Space: O(n)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 5. QUEUES

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

## Q. How do you implement a Priority Queue using a Min-Heap?

A Priority Queue dequeues the element with the **highest priority** (lowest value in min-heap) first.

```js
class MinHeapPQ {
  constructor() { this.heap = []; }

  enqueue(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);
    return min;
  }

  peek()  { return this.heap[0] ?? null; }
  size()  { return this.heap.length; }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

const pq = new MinHeapPQ();
pq.enqueue(10); pq.enqueue(3); pq.enqueue(7); pq.enqueue(1);
console.log(pq.dequeue()); // 1 (highest priority)
console.log(pq.dequeue()); // 3
```

> Enqueue: O(log n) | Dequeue: O(log n) | Peek: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Double Ended Queue (Deque)?

A Deque allows insertion and deletion from **both ends**.

```js
class Deque {
  constructor() { this.items = []; }

  addFront(item) { this.items.unshift(item); }
  addRear(item)  { this.items.push(item); }
  removeFront()  { return this.items.length ? this.items.shift() : null; }
  removeRear()   { return this.items.length ? this.items.pop()   : null; }
  peekFront()    { return this.items[0] ?? null; }
  peekRear()     { return this.items[this.items.length - 1] ?? null; }
  isEmpty()      { return this.items.length === 0; }
  size()         { return this.items.length; }
}

const dq = new Deque();
dq.addRear(1); dq.addRear(2); dq.addFront(0);
console.log(dq.peekFront());   // 0
console.log(dq.peekRear());    // 2
console.log(dq.removeFront()); // 0
console.log(dq.removeRear());  // 2
```

> Common use cases: sliding window problems, palindrome checking, browser history.
> Note: `unshift()` is O(n) for arrays. For O(1) at both ends, use a doubly linked list.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Queue using a Linked List?

```js
class QueueNode {
  constructor(data) { this.data = data; this.next = null; }
}

class LinkedQueue {
  constructor() { this.front = null; this.rear = null; this.length = 0; }

  enqueue(data) {
    const node = new QueueNode(data);
    if (!this.rear) { this.front = this.rear = node; }
    else { this.rear.next = node; this.rear = node; }
    this.length++;
  }

  dequeue() {
    if (!this.front) return null;
    const data = this.front.data;
    this.front  = this.front.next;
    if (!this.front) this.rear = null;
    this.length--;
    return data;
  }

  peek()    { return this.front ? this.front.data : null; }
  isEmpty() { return this.front === null; }
  size()    { return this.length; }
}

const lq = new LinkedQueue();
lq.enqueue('A'); lq.enqueue('B'); lq.enqueue('C');
console.log(lq.dequeue()); // 'A'
console.log(lq.peek());    // 'B'
```

> Enqueue/Dequeue: O(1) — `rear` pointer avoids full traversal on enqueue.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 6. LINKED LISTS

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

## Q. How do you implement a Circular Linked List (CLL)?

In a CLL, the last node points back to the head — there is no `null` terminator.

```js
class CLLNode {
  constructor(data) { this.data = data; this.next = null; }
}

class CircularLinkedList {
  constructor() { this.head = null; this.size = 0; }

  append(data) {
    const node = new CLLNode(data);
    if (!this.head) {
      this.head = node;
      node.next = this.head; // self-loop
    } else {
      let curr = this.head;
      while (curr.next !== this.head) curr = curr.next;
      curr.next = node;
      node.next = this.head;
    }
    this.size++;
  }

  display() {
    if (!this.head) return;
    const result = [];
    let curr = this.head;
    do { result.push(curr.data); curr = curr.next; } while (curr !== this.head);
    console.log(result.join(' -> ') + ' -> (head)');
  }

  delete(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      if (this.head.next === this.head) { this.head = null; this.size--; return; }
      let last = this.head;
      while (last.next !== this.head) last = last.next;
      this.head = this.head.next;
      last.next = this.head;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next !== this.head && curr.next.data !== data) curr = curr.next;
    if (curr.next.data === data) { curr.next = curr.next.next; this.size--; }
  }
}

const cll = new CircularLinkedList();
cll.append(1); cll.append(2); cll.append(3);
cll.display(); // 1 -> 2 -> 3 -> (head)
cll.delete(2);
cll.display(); // 1 -> 3 -> (head)
```

> Use cases: **Round-Robin scheduling**, multiplayer game turns, circular buffers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Doubly Linked List (DLL)?

Each DLL node holds pointers to both its **next** and **previous** nodes.

```js
class DLLNode {
  constructor(data) { this.data = data; this.prev = null; this.next = null; }
}

class DoublyLinkedList {
  constructor() { this.head = null; this.tail = null; this.size = 0; }

  append(data) {
    const node = new DLLNode(data);
    if (!this.tail) { this.head = this.tail = node; }
    else { node.prev = this.tail; this.tail.next = node; this.tail = node; }
    this.size++;
  }

  prepend(data) {
    const node = new DLLNode(data);
    if (!this.head) { this.head = this.tail = node; }
    else { node.next = this.head; this.head.prev = node; this.head = node; }
    this.size++;
  }

  delete(data) {
    let curr = this.head;
    while (curr) {
      if (curr.data === data) {
        if (curr.prev) curr.prev.next = curr.next; else this.head = curr.next;
        if (curr.next) curr.next.prev = curr.prev; else this.tail = curr.prev;
        this.size--;
        return;
      }
      curr = curr.next;
    }
  }

  displayForward() {
    const result = []; let curr = this.head;
    while (curr) { result.push(curr.data); curr = curr.next; }
    console.log(result.join(' <-> '));
  }

  displayBackward() {
    const result = []; let curr = this.tail;
    while (curr) { result.push(curr.data); curr = curr.prev; }
    console.log(result.join(' <-> '));
  }
}

const dll = new DoublyLinkedList();
dll.append(1); dll.append(2); dll.append(3); dll.prepend(0);
dll.displayForward();  // 0 <-> 1 <-> 2 <-> 3
dll.displayBackward(); // 3 <-> 2 <-> 1 <-> 0
dll.delete(2);
dll.displayForward();  // 0 <-> 1 <-> 3
```

> Use cases: **browser forward/back**, undo/redo, LRU cache (O(1) delete with pointer).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Stack using a Linked List?

```js
class StackLL {
  constructor() { this.head = null; this.length = 0; }

  push(data) {
    this.head = { data, next: this.head };
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    const data = this.head.data;
    this.head   = this.head.next;
    this.length--;
    return data;
  }

  peek()    { return this.head ? this.head.data : null; }
  isEmpty() { return this.head === null; }
  size()    { return this.length; }
}

const stack = new StackLL();
stack.push(1); stack.push(2); stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.size()); // 2
```

> Push/Pop at head: O(1). No array resizing — ideal for unknown sizes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Priority Queue using a Linked List?

```js
class PQNode {
  constructor(data, priority) {
    this.data = data; this.priority = priority; this.next = null;
  }
}

class LinkedPriorityQueue {
  constructor() { this.head = null; }

  // Insert in ascending priority order (lower number = higher priority)
  enqueue(data, priority) {
    const node = new PQNode(data, priority);
    if (!this.head || priority < this.head.priority) {
      node.next = this.head; this.head = node; return;
    }
    let curr = this.head;
    while (curr.next && curr.next.priority <= priority) curr = curr.next;
    node.next = curr.next;
    curr.next = node;
  }

  dequeue() {
    if (!this.head) return null;
    const data = this.head.data;
    this.head   = this.head.next;
    return data;
  }

  peek()    { return this.head ? this.head.data : null; }
  isEmpty() { return this.head === null; }
}

const lpq = new LinkedPriorityQueue();
lpq.enqueue('Task C', 3);
lpq.enqueue('Task A', 1);
lpq.enqueue('Task B', 2);
console.log(lpq.dequeue()); // 'Task A'
console.log(lpq.dequeue()); // 'Task B'
```

> Enqueue: O(n) | Dequeue: O(1). Use a binary heap for O(log n) enqueue.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you add two polynomials using a Linked List?

```js
class PolyNode {
  constructor(coeff, exp) { this.coeff = coeff; this.exp = exp; this.next = null; }
}

function addPolynomials(p1, p2) {
  let dummy = new PolyNode(0, 0), curr = dummy;
  while (p1 && p2) {
    let coeff, exp;
    if (p1.exp > p2.exp)      { coeff = p1.coeff; exp = p1.exp; p1 = p1.next; }
    else if (p1.exp < p2.exp) { coeff = p2.coeff; exp = p2.exp; p2 = p2.next; }
    else {
      coeff = p1.coeff + p2.coeff;
      exp   = p1.exp;
      p1 = p1.next; p2 = p2.next;
    }
    if (coeff !== 0) { curr.next = new PolyNode(coeff, exp); curr = curr.next; }
  }
  curr.next = p1 || p2;
  return dummy.next;
}

function polyToString(node) {
  const terms = [];
  while (node) { terms.push(`${node.coeff}x^${node.exp}`); node = node.next; }
  return terms.join(' + ');
}

// P1: 3x³ + 2x² + 5x¹
const p1 = new PolyNode(3, 3);
p1.next = new PolyNode(2, 2);
p1.next.next = new PolyNode(5, 1);

// P2: 4x³ + 1x² + 2x⁰
const p2 = new PolyNode(4, 3);
p2.next = new PolyNode(1, 2);
p2.next.next = new PolyNode(2, 0);

console.log(polyToString(addPolynomials(p1, p2)));
// 7x^3 + 3x^2 + 5x^1 + 2x^0
```

> Both polynomials must be in **descending order of exponents**. Time: O(m + n).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 7. TREES (BINARY SEARCH TREE)

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

## Q. What are the types of Binary Trees?

| Type                  | Description                                                        |
|-----------------------|--------------------------------------------------------------------|
| Strictly Binary Tree  | Every node has exactly 0 or 2 children (never 1)                  |
| Complete Binary Tree  | All levels full except possibly the last, filled left-to-right     |
| Full / Perfect Tree   | All levels completely filled — 2ⁿ − 1 nodes for height n          |
| Almost Full Tree      | Complete binary tree missing only rightmost leaves at the last level|

```js
// Check if a binary tree is a Complete Binary Tree (BFS approach)
function isCompleteBT(root) {
  if (!root) return true;
  const queue = [root];
  let reachedEnd = false;
  while (queue.length) {
    const node = queue.shift();
    if (!node) { reachedEnd = true; continue; }
    if (reachedEnd) return false; // a node found after a null gap
    queue.push(node.left);
    queue.push(node.right);
  }
  return true;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you search and delete a node in a BST?

```js
function searchBST(root, val) {
  if (!root || root.val === val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

function deleteBST(root, val) {
  if (!root) return null;
  if (val < root.val) {
    root.left  = deleteBST(root.left, val);
  } else if (val > root.val) {
    root.right = deleteBST(root.right, val);
  } else {
    if (!root.left)  return root.right; // no left child
    if (!root.right) return root.left;  // no right child
    // Two children: replace with inorder successor (min of right subtree)
    let successor = root.right;
    while (successor.left) successor = successor.left;
    root.val   = successor.val;
    root.right = deleteBST(root.right, successor.val);
  }
  return root;
}
```

> Search: O(log n) avg | Delete: O(log n) avg, O(n) worst (skewed tree).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the minimum and maximum values in a BST?

```js
function findMinBST(root) {
  if (!root) return null;
  let curr = root;
  while (curr.left) curr = curr.left;
  return curr.val; // leftmost node
}

function findMaxBST(root) {
  if (!root) return null;
  let curr = root;
  while (curr.right) curr = curr.right;
  return curr.val; // rightmost node
}

// BST with [5, 3, 7, 1, 4] → Min: 1, Max: 7
```

> Time: O(h) — h = height of tree. O(log n) for balanced, O(n) for skewed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you construct a BST from preorder and inorder traversals?

```js
function buildFromPreIn(preorder, inorder) {
  if (!preorder.length) return null;
  const rootVal = preorder[0];
  const root    = { val: rootVal, left: null, right: null };
  const mid     = inorder.indexOf(rootVal);
  root.left  = buildFromPreIn(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildFromPreIn(preorder.slice(mid + 1),    inorder.slice(mid + 1));
  return root;
}

// Preorder [5,3,1,4,7] + Inorder [1,3,4,5,7] → unique BST
const preorder = [5, 3, 1, 4, 7];
const inorder  = [1, 3, 4, 5, 7];
const tree = buildFromPreIn(preorder, inorder);

function inorderArr(node, res = []) {
  if (!node) return res;
  inorderArr(node.left, res);
  res.push(node.val);
  inorderArr(node.right, res);
  return res;
}
console.log(inorderArr(tree)); // [1, 3, 4, 5, 7]
```

> Key insight: **first element of preorder** is always the root.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you construct a BST from postorder and inorder traversals?

```js
function buildFromPostIn(postorder, inorder) {
  if (!postorder.length) return null;
  const rootVal = postorder[postorder.length - 1]; // last element is root
  const root    = { val: rootVal, left: null, right: null };
  const mid     = inorder.indexOf(rootVal);
  root.left  = buildFromPostIn(postorder.slice(0, mid),  inorder.slice(0, mid));
  root.right = buildFromPostIn(postorder.slice(mid, -1), inorder.slice(mid + 1));
  return root;
}

// Postorder [1,4,3,7,5] + Inorder [1,3,4,5,7] → unique BST
const postorder = [1, 4, 3, 7, 5];
const inorder2  = [1, 3, 4, 5, 7];
const tree2 = buildFromPostIn(postorder, inorder2);
console.log(inorderArr(tree2)); // [1, 3, 4, 5, 7]
```

> Key insight: **last element of postorder** is always the root.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement an AVL Tree (self-balancing BST)?

An AVL Tree maintains a **balance factor** (height difference between left and right subtrees) of −1, 0, or +1. Rotations restore balance on insertion.

```js
class AVLNode {
  constructor(val) { this.val = val; this.left = null; this.right = null; this.height = 1; }
}

const avlHeight   = node => node ? node.height : 0;
const getBalance  = node => node ? avlHeight(node.left) - avlHeight(node.right) : 0;
const updateHeight= node => { node.height = 1 + Math.max(avlHeight(node.left), avlHeight(node.right)); };

function rotateRight(y) {
  const x = y.left, T2 = x.right;
  x.right = y; y.left = T2;
  updateHeight(y); updateHeight(x);
  return x;
}

function rotateLeft(x) {
  const y = x.right, T2 = y.left;
  y.left = x; x.right = T2;
  updateHeight(x); updateHeight(y);
  return y;
}

function avlInsert(node, val) {
  if (!node) return new AVLNode(val);
  if (val < node.val)      node.left  = avlInsert(node.left,  val);
  else if (val > node.val) node.right = avlInsert(node.right, val);
  else return node; // no duplicates

  updateHeight(node);
  const balance = getBalance(node);

  if (balance > 1  && val < node.left.val)  return rotateRight(node);         // LL
  if (balance < -1 && val > node.right.val) return rotateLeft(node);           // RR
  if (balance > 1  && val > node.left.val)  { node.left  = rotateLeft(node.left);  return rotateRight(node); } // LR
  if (balance < -1 && val < node.right.val) { node.right = rotateRight(node.right); return rotateLeft(node); } // RL
  return node;
}

let avlRoot = null;
for (const v of [10, 20, 30, 40, 50, 25]) avlRoot = avlInsert(avlRoot, v);
console.log(inorderArr(avlRoot)); // [10, 20, 25, 30, 40, 50]
```

> AVL guarantees O(log n) search/insert/delete. Strictly balanced — ideal for read-heavy workloads.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are B-Trees and Red-Black Trees?

```
B-Trees
────────
- Generalization of BST where each node can have > 2 children
- All leaves at the same level (self-balancing by design)
- Order-m B-tree: each internal node has at most m children
- Each node stores multiple keys → minimizes disk I/O (one disk read per node)
- Used in: MySQL/PostgreSQL indexes, NTFS/ext4 file systems

Red-Black Trees
────────────────
- Self-balancing BST where each node is colored Red or Black
- Properties:
  1. Root is always Black
  2. Red node\'s children must be Black (no consecutive Reds)
  3. Every root-to-null path has the same number of Black nodes
- Guarantees O(log n) insert/search/delete
- Less strictly balanced than AVL → fewer rotations on writes
- Used in: C++ std::map, Java TreeMap, Linux CFS scheduler

When to choose:
  ✔ B-Tree      → disk-based storage, multi-level database indexes
  ✔ AVL Tree    → read-heavy (strict balance = faster lookups)
  ✔ Red-Black   → write-heavy (fewer rotations on insert/delete)
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a Threaded Binary Tree?

A Threaded Binary Tree repurposes **null pointers** to store inorder predecessor/successor links (called *threads*), enabling traversal without a stack or recursion.

```js
class ThreadedNode {
  constructor(val) {
    this.val         = val;
    this.left        = null;
    this.right       = null;
    this.rightThread = false; // true → right is a thread, not a child
  }
}

// Inorder traversal using right threads (O(n) time, O(1) space)
function threadedInorder(root) {
  if (!root) return [];
  // Go to leftmost node
  let curr = root;
  while (curr.left) curr = curr.left;

  const result = [];
  while (curr) {
    result.push(curr.val);
    if (curr.rightThread) {
      curr = curr.right; // follow thread to inorder successor
    } else {
      curr = curr.right;
      if (curr) while (curr.left) curr = curr.left;
    }
  }
  return result;
}
```

> Advantage: inorder traversal in O(n) time and **O(1) extra space** — no call stack.
> Types: Right-Threaded (right nulls → inorder successor), Left-Threaded, Fully-Threaded.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 8. GRAPHS

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

## Q. How do you implement Dijkstra\'s Shortest Path Algorithm?

Finds the shortest path from a **source vertex to all others** in a weighted graph (non-negative weights only).

```js
function dijkstra(graph, start) {
  // graph: Map<vertex, Array<{ node, weight }>>
  const dist    = new Map();
  const visited = new Set();

  for (const v of graph.keys()) dist.set(v, Infinity);
  dist.set(start, 0);

  function getMinUnvisited() {
    let minNode = null, minDist = Infinity;
    for (const [v, d] of dist) {
      if (!visited.has(v) && d < minDist) { minDist = d; minNode = v; }
    }
    return minNode;
  }

  while (true) {
    const u = getMinUnvisited();
    if (u === null) break;
    visited.add(u);
    for (const { node: v, weight } of graph.get(u) || []) {
      const newDist = dist.get(u) + weight;
      if (newDist < dist.get(v)) dist.set(v, newDist);
    }
  }
  return dist;
}

const graph = new Map([
  ['A', [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }]],
  ['B', [{ node: 'D', weight: 3 }, { node: 'C', weight: 1 }]],
  ['C', [{ node: 'B', weight: 1 }, { node: 'D', weight: 5 }]],
  ['D', []]
]);

console.log([...dijkstra(graph, 'A').entries()]);
// A:0, C:2, B:3, D:6  (A→C→B→D = 2+1+3)
```

> Time: O(V²) with array; O((V+E) log V) with min-heap | Non-negative weights only.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Kruskal\'s Minimum Spanning Tree Algorithm?

Kruskal\'s greedily adds the cheapest edges that don\'t form a cycle, using **Union-Find**.

```js
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank   = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }

  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if      (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    return true;
  }
}

function kruskal(numVertices, edges) {
  // edges: Array<{ u, v, weight }>
  edges.sort((a, b) => a.weight - b.weight);
  const uf = new UnionFind(numVertices);
  const mst = [];

  for (const edge of edges) {
    if (uf.union(edge.u, edge.v)) {
      mst.push(edge);
      if (mst.length === numVertices - 1) break;
    }
  }
  return mst;
}

const edges = [
  { u: 0, v: 1, weight: 10 },
  { u: 0, v: 2, weight: 6  },
  { u: 0, v: 3, weight: 5  },
  { u: 1, v: 3, weight: 15 },
  { u: 2, v: 3, weight: 4  }
];

const mst = kruskal(4, edges);
mst.forEach(e => console.log(`${e.u}-${e.v}: ${e.weight}`));
// 2-3: 4, 0-3: 5, 0-1: 10  (total MST weight: 19)
```

> Time: O(E log E) — dominated by edge sorting. Union-Find operations are near O(1) with path compression.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Prim\'s Minimum Spanning Tree Algorithm?

Prim\'s starts from a source and greedily picks the cheapest edge connecting the current tree to an unvisited vertex.

```js
function prim(graph, start) {
  // graph: Map<vertex, Array<{ node, weight }>>
  const inMST    = new Set([start]);
  const mstEdges = [];
  let   total    = 0;

  while (inMST.size < graph.size) {
    let minWeight = Infinity, minEdge = null;
    for (const u of inMST) {
      for (const { node: v, weight } of graph.get(u) || []) {
        if (!inMST.has(v) && weight < minWeight) {
          minWeight = weight; minEdge = { u, v, weight };
        }
      }
    }
    if (!minEdge) break; // disconnected graph
    inMST.add(minEdge.v);
    mstEdges.push(minEdge);
    total += minEdge.weight;
  }
  return { mstEdges, total };
}

const g = new Map([
  ['A', [{ node: 'B', weight: 2 }, { node: 'C', weight: 3 }]],
  ['B', [{ node: 'A', weight: 2 }, { node: 'C', weight: 1 }, { node: 'D', weight: 4 }]],
  ['C', [{ node: 'A', weight: 3 }, { node: 'B', weight: 1 }, { node: 'D', weight: 5 }]],
  ['D', [{ node: 'B', weight: 4 }, { node: 'C', weight: 5 }]]
]);

const { mstEdges, total } = prim(g, 'A');
console.log(mstEdges.map(e => `${e.u}-${e.v}(${e.weight})`).join(', '));
// A-B(2), B-C(1), B-D(4)
console.log(total); // 7
```

> Time: O(V²) with adjacency matrix; O(E log V) with a min-heap.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement the Floyd-Warshall Algorithm (all-pairs shortest path)?

Floyd-Warshall finds shortest paths between **all pairs** of vertices. Handles negative weights, but not negative cycles.

```js
function floydWarshall(n, edges) {
  // Initialize: 0 on diagonal, Infinity elsewhere
  const dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity))
  );
  // Direct edges
  for (const [u, v, w] of edges) dist[u][v] = w;

  // Relax via each intermediate vertex k
  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (dist[i][k] + dist[k][j] < dist[i][j])
          dist[i][j] = dist[i][k] + dist[k][j];

  return dist;
}

// 4 vertices, edges: [from, to, weight]
const fwEdges = [[0,1,3],[0,3,7],[1,0,8],[1,2,2],[2,0,5],[2,3,1],[3,0,2]];
const fwDist  = floydWarshall(4, fwEdges);
console.log(fwDist[0]); // [0, 3, 5, 6]  — shortest from vertex 0 to all
console.log(fwDist[3]); // [2, 5, 7, 0]  — shortest from vertex 3 to all
```

> Time: O(V³) | Space: O(V²) | Best for dense graphs or all-pairs shortest paths.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Travelling Salesman Problem (TSP)?

TSP asks: given `n` cities and distances between them, find the **shortest tour** visiting each city exactly once and returning to the start. It is NP-hard — no known polynomial-time exact solution.

```js
// Brute-force TSP — O(n!) time, feasible only for small n
function tspBruteForce(dist) {
  const n = dist.length;
  const cities = Array.from({ length: n - 1 }, (_, i) => i + 1);

  function permute(arr) {
    if (arr.length <= 1) return [arr];
    return arr.flatMap((v, i) =>
      permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(p => [v, ...p])
    );
  }

  let minCost = Infinity, bestRoute = null;
  for (const perm of permute(cities)) {
    const route = [0, ...perm, 0];
    const cost  = route.reduce((sum, city, i) =>
      i === 0 ? sum : sum + dist[route[i - 1]][city], 0
    );
    if (cost < minCost) { minCost = cost; bestRoute = route; }
  }
  return { minCost, bestRoute };
}

const tspDist = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];
console.log(tspBruteForce(tspDist));
// { minCost: 80, bestRoute: [0, 1, 3, 2, 0] }
```

> Practical approaches: **Held-Karp DP** O(2ⁿ·n²), nearest-neighbour heuristic, genetic algorithms.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 9. SORTING ALGORITHMS

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

## Q. How do you implement Address Calculation Sort?

Address Calculation Sort uses a hash function to place each element into a bucket at an estimated sorted position, then applies insertion sort within each bucket.

```js
function addressCalculationSort(arr) {
  const n   = arr.length;
  const max = Math.max(...arr);
  const buckets = Array.from({ length: n }, () => []);

  for (const num of arr) {
    const idx = Math.min(Math.floor((num / (max + 1)) * n), n - 1);
    buckets[idx].push(num);
  }

  return buckets.flatMap(bucket => {
    // Insertion sort within each bucket
    for (let i = 1; i < bucket.length; i++) {
      const key = bucket[i]; let j = i - 1;
      while (j >= 0 && bucket[j] > key) { bucket[j + 1] = bucket[j]; j--; }
      bucket[j + 1] = key;
    }
    return bucket;
  });
}

console.log(addressCalculationSort([20, 5, 15, 10, 25, 30]));
// [5, 10, 15, 20, 25, 30]
```

> Average O(n) when keys are uniformly distributed — degenerate to O(n²) for clustered data.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Binary Tree Sort?

Binary Tree Sort inserts all elements into a BST then performs an **inorder traversal** to retrieve them in sorted order.

```js
function binaryTreeSort(arr) {
  let root = null;
  for (const val of arr) root = bstInsertNode(root, val);
  const result = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return result;
}

function bstInsertNode(root, val) {
  if (!root) return { val, left: null, right: null };
  if (val < root.val) root.left  = bstInsertNode(root.left,  val);
  else                root.right = bstInsertNode(root.right, val);
  return root;
}

console.log(binaryTreeSort([5, 3, 8, 1, 4, 7, 9]));
// [1, 3, 4, 5, 7, 8, 9]
```

> Time: O(n log n) avg (balanced BST), O(n²) worst (sorted input → skewed tree) | Space: O(n).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

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

## Q. How do you implement Bucket Sort?

Bucket Sort distributes elements into buckets, sorts each bucket independently, then concatenates.

```js
function bucketSort(arr, bucketCount = 10) {
  if (arr.length === 0) return arr;
  const min = Math.min(...arr), max = Math.max(...arr);
  const range = (max - min) || 1;

  const buckets = Array.from({ length: bucketCount }, () => []);
  for (const num of arr) {
    const idx = Math.min(
      Math.floor(((num - min) / range) * bucketCount),
      bucketCount - 1
    );
    buckets[idx].push(num);
  }
  return buckets.flatMap(bucket => bucket.sort((a, b) => a - b));
}

console.log(bucketSort([0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51]));
// [0.23, 0.25, 0.32, 0.42, 0.47, 0.51, 0.52]
console.log(bucketSort([34, 7, 23, 32, 5, 62]));
// [5, 7, 23, 32, 34, 62]
```

> Time: O(n + k) average | Space: O(n + k) | Best for **uniformly distributed** data.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Heap Sort?

```js
function heapSort(arr) {
  const n = arr.length;
  // Build max-heap from bottom up
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  // Extract max to end, restore heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // move root (max) to sorted portion
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const l = 2 * i + 1, r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

console.log(heapSort([12, 11, 13, 5, 6, 7])); // [5, 6, 7, 11, 12, 13]
```

> Time: O(n log n) always | Space: O(1) | In-place but **not stable**.

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

## Q. How do you implement Radix Sort?

Radix Sort sorts integers digit by digit from least significant (LSD) to most significant (MSD), using a stable counting sort at each pass.

```js
function radixSort(arr) {
  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    arr = countByDigit(arr, exp);
  }
  return arr;
}

function countByDigit(arr, exp) {
  const n = arr.length, output = new Array(n), count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];          // prefix sums
  for (let i = n - 1; i >= 0; i--) {                              // right-to-left for stability
    const d = Math.floor(arr[i] / exp) % 10;
    output[--count[d]] = arr[i];
  }
  return output;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
// [2, 24, 45, 66, 75, 90, 170, 802]
```

> Time: O(d × (n + k)) — d = digits, k = 10 | Space: O(n + k) | Stable sort.

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

## Q. How do you implement Shell Sort?

Shell Sort is a generalized Insertion Sort that first sorts elements far apart using a decreasing gap sequence, improving to insertion sort (gap = 1) at the end.

```js
function shellSort(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2); // Shell\'s gap sequence
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

console.log(shellSort([12, 34, 54, 2, 3])); // [2, 3, 12, 34, 54]
console.log(shellSort([5, 4, 3, 2, 1]));    // [1, 2, 3, 4, 5]
```

> Time: O(n log² n) with good gap sequence | Space: O(1) | Faster than Insertion Sort on medium arrays.

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

## # 10. SEARCHING ALGORITHMS

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

> Both O(log n) — modified binary search that doesn\'t stop at first match.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Indexed Sequential Search?

Builds a sparse **index table** of key positions, uses the index to jump to the correct segment, then does sequential search within that segment.

```js
function indexedSequentialSearch(arr, target, segmentSize = 3) {
  const n = arr.length;

  // Build index: store first key and starting position of each segment
  const index = [];
  for (let i = 0; i < n; i += segmentSize) {
    index.push({ key: arr[i], pos: i });
  }

  // Find which segment might contain target
  let start = 0;
  for (let i = 0; i < index.length; i++) {
    if (index[i].key > target) {
      start = i > 0 ? index[i - 1].pos : 0;
      break;
    }
    if (i === index.length - 1) start = index[i].pos;
  }

  // Sequential search within segment
  const end = Math.min(start + segmentSize, n);
  for (let i = start; i < end; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(indexedSequentialSearch(arr, 35, 3)); // 6
console.log(indexedSequentialSearch(arr, 22, 3)); // -1
```

> Time: O(√n) with optimal segment size | Requires **sorted** array.
> Trade-off: more index entries → faster jump, but more memory.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 11. RECURSION & DYNAMIC PROGRAMMING

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

## # 12. TWO POINTERS TECHNIQUE

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

## # 13. SLIDING WINDOW

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

<br/>

## # 14. HASH TABLES (MAPS & SETS)

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

## # 15. HEAP

<br/>

## Q. What is a Heap and what are its common use cases?

A Heap is a **complete binary tree** stored as an array satisfying the heap property:
- **Min-Heap**: every parent ≤ its children (root = minimum element)
- **Max-Heap**: every parent ≥ its children (root = maximum element)

Array representation — for node at index `i`:
- Left child: `2i + 1` | Right child: `2i + 2` | Parent: `⌊(i−1)/2⌋`

**Common use cases:**
- Priority queues (OS task schedulers, Dijkstra\'s algorithm)
- Heap Sort
- Finding k-th largest/smallest element efficiently
- Median maintenance with two heaps
- Event-driven simulation

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Min-Heap?

```js
class MinHeap {
  constructor() { this.heap = []; }

  size()  { return this.heap.length; }
  peek()  { return this.heap[0] ?? null; }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min     = this.heap[0];
    this.heap[0]  = this.heap.pop(); // move last to root
    this._sinkDown(0);
    return min;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

const minH = new MinHeap();
[5, 3, 8, 1, 4].forEach(v => minH.insert(v));
console.log(minH.peek());       // 1
console.log(minH.extractMin()); // 1
console.log(minH.extractMin()); // 3
```

> Insert: O(log n) | ExtractMin: O(log n) | Peek: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Max-Heap?

```js
class MaxHeap {
  constructor() { this.heap = []; }

  size()  { return this.heap.length; }
  peek()  { return this.heap[0] ?? null; }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const max    = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);
    return max;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l] > this.heap[largest]) largest = l;
      if (r < n && this.heap[r] > this.heap[largest]) largest = r;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }
}

const maxH = new MaxHeap();
[5, 3, 8, 1, 4].forEach(v => maxH.insert(v));
console.log(maxH.peek());       // 8
console.log(maxH.extractMax()); // 8
console.log(maxH.extractMax()); // 5
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the k-th largest element using a Min-Heap?

```js
function kthLargest(arr, k) {
  const heap = new MinHeap();
  for (const num of arr) {
    heap.insert(num);
    if (heap.size() > k) heap.extractMin(); // keep only k largest elements
  }
  return heap.peek(); // root = k-th largest
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));         // 5
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
```

> Time: O(n log k) | Space: O(k) — far better than full sort O(n log n) when k ≪ n.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find the running median using two heaps?

```js
class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap(); // lower half of numbers
    this.minHeap = new MinHeap(); // upper half of numbers
  }

  addNum(num) {
    this.maxHeap.insert(num);
    // Balance: push max of lower half into upper half
    this.minHeap.insert(this.maxHeap.extractMax());
    // Keep maxHeap size >= minHeap size (at most 1 more)
    if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.insert(this.minHeap.extractMin());
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) return this.maxHeap.peek();
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
}

const mf = new MedianFinder();
mf.addNum(1); mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2
mf.addNum(4);
console.log(mf.findMedian()); // 2.5
```

> AddNum: O(log n) | FindMedian: O(1) — classic two-heap technique used in streaming data problems.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

<br/>

## # 16. MISCELLANEOUS

<br/>

## Q. How do you implement a Trie (Prefix Tree)?

A Trie stores strings node-by-node where each path from root to a marked node represents a word. Efficient for prefix-based searches and autocomplete.

```js
class TrieNode {
  constructor() { this.children = new Map(); this.isEnd = false; }
}

class Trie {
  constructor() { this.root = new TrieNode(); }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return node.isEnd;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return true;
  }

  autocomplete(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return [];
      node = node.children.get(ch);
    }
    const results = [];
    function dfs(n, word) {
      if (n.isEnd) results.push(word);
      for (const [ch, child] of n.children) dfs(child, word + ch);
    }
    dfs(node, prefix);
    return results;
  }
}

const trie = new Trie();
['apple', 'app', 'application', 'apply', 'apt'].forEach(w => trie.insert(w));
console.log(trie.search('app'));        // true
console.log(trie.search('ap'));         // false
console.log(trie.startsWith('app'));    // true
console.log(trie.autocomplete('app')); // ['app', 'apple', 'application', 'apply']
```

> Insert/Search/StartsWith: O(m) — m = word length | Space: O(n × m).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement an LRU Cache?

An LRU (Least Recently Used) Cache evicts the **least recently accessed** item when full. JavaScript\'s `Map` preserves insertion order, enabling O(1) get and put.

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache    = new Map(); // ordered by access time (oldest first)
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    // Move to end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key = oldest)
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

const lru = new LRUCache(3);
lru.put(1, 'one'); lru.put(2, 'two'); lru.put(3, 'three');
console.log(lru.get(1));  // 'one' → key 1 becomes most recent
lru.put(4, 'four');       // evicts key 2 (least recently used)
console.log(lru.get(2));  // -1 (evicted)
console.log(lru.get(3));  // 'three'
console.log(lru.get(4));  // 'four'
```

> Get: O(1) | Put: O(1) — Map\'s ordered keys give O(1) LRU eviction without a doubly linked list.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you find all subsets of an array (Power Set)?

```js
function powerSet(arr) {
  const result = [[]];
  for (const num of arr) {
    const newSubsets = result.map(subset => [...subset, num]);
    result.push(...newSubsets);
  }
  return result;
}

console.log(powerSet([1, 2, 3]));
// [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
```

> Time: O(2ⁿ) | Space: O(2ⁿ) — 2ⁿ subsets for n elements (unavoidable).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you check if a number is a power of two using bitwise operators?

```js
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1));  // true  (2⁰)
console.log(isPowerOfTwo(16)); // true  (2⁴)
console.log(isPowerOfTwo(18)); // false
```

> Trick: a power of two in binary has exactly **one set bit** (e.g., 16 = 10000).
> `n & (n-1)` clears the lowest set bit — result is 0 only for powers of two.
> Time: O(1) | Space: O(1)

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a Fisher-Yates Shuffle (unbiased random shuffle)?

```js
function shuffle(arr) {
  const result = [...arr]; // avoid mutating original
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

console.log(shuffle([1, 2, 3, 4, 5])); // e.g., [3, 1, 5, 2, 4]
```

> Time: O(n) | Space: O(n) — produces an **unbiased** permutation (each arrangement equally likely).
> Naive shuffle (random sort key) is biased — Fisher-Yates is the correct approach.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you check if a binary tree is height-balanced?

```js
function isBalancedTree(root) {
  function checkHeight(node) {
    if (!node) return 0;
    const left  = checkHeight(node.left);
    if (left  === -1) return -1; // short-circuit
    const right = checkHeight(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1; // unbalanced
    return 1 + Math.max(left, right);
  }
  return checkHeight(root) !== -1;
}
```

> Time: O(n) — single post-order pass. Returns `false` as soon as imbalance is detected.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Sorting Algorithm Comparison Summary

| Algorithm        | Best       | Average    | Worst      | Space    | Stable | Notes                            |
|------------------|------------|------------|------------|----------|--------|----------------------------------|
| Bubble Sort      | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes    | Simple; slow for large n         |
| Selection Sort   | O(n²)      | O(n²)      | O(n²)      | O(1)     | No     | Min swaps (n-1)                  |
| Insertion Sort   | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes    | Best for nearly-sorted input     |
| Shell Sort       | O(n log n) | O(n log²n) | O(n²)      | O(1)     | No     | Improved insertion sort          |
| Merge Sort       | O(n log n) | O(n log n) | O(n log n) | O(n)     | Yes    | Consistent; needs extra space    |
| Quick Sort       | O(n log n) | O(n log n) | O(n²)      | O(log n) | No     | Fastest in practice              |
| Heap Sort        | O(n log n) | O(n log n) | O(n log n) | O(1)     | No     | In-place; not cache-friendly     |
| Radix Sort       | O(d·n)     | O(d·n)     | O(d·n)     | O(n+k)   | Yes    | Integer / fixed-length strings   |
| Bucket Sort      | O(n+k)     | O(n+k)     | O(n²)      | O(n)     | Yes    | Uniform distribution             |
| Binary Tree Sort | O(n log n) | O(n log n) | O(n²)      | O(n)     | Yes    | BST-based; skewed on sorted input|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
