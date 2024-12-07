// A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue is the first one to be removed.

class Queue {
  constructor() {
    this.Queue = []; // This array will hold our queue elements
  }

  //  Adds the item to the end of the array
  enqueue(item) {
    this.Queue.push(item);
  }

  // Removes the first item from the array
  dequeue(item) {
    if (this.isEmpty) {
      return "queue is empty";
    } else {
      return this.Queue.shift();
    }
  }
  isEmpty() {
    return this.Queue.length === 0;
  }
  size() {
    return this.Queue.length;
  }
  peek() {
    if (this.isEmpty) {
      return "queue is empty";
    } else {
      return this.Queue[0];
    }
  }
}
