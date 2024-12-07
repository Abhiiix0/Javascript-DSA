// Description: Implement a queue using two stacks. The queue should support the following operations:

// enqueue(x): Add element x to the queue.
// dequeue(): Remove the element from the front of the queue and return it.
// peek(): Return the front element without removing it.
// isEmpty(): Return whether the queue is empty.
// You need to implement the queue using two stacks, stack1 and stack2, where the elements are added to stack1 and removed from stack2.

class QueueUsingTwoStacks {
  constructor() {
    this.stack1 = []; // Stack for enqueue operations
    this.stack2 = []; // Stack for dequeue operations
  }
  enqueue(item) {
    this.stack1.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop(); // Remove and return the front element from stack2
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const queue = new QueueUsingTwoStacks();
console.log(queue.isEmpty()); // Output: true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue()); // Output: 1
console.log(queue.stack2); // Output: 1
