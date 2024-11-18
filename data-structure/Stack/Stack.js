class Stack {
  constructor(parameters) {
    this.items = [];
  }
  push(element) {
    this.items.push(element); //add element at the end of an array
  }
  pop(element) {
    if (this.isEmpty()) {
      return "Stack is empty"; // Return message if the stack is empty
    }
    this.items.pop(element); //
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Return message if the stack is empty
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  printStack() {
    return this.items;
  }
}
const stackss = new Stack();
stackss.push(2);
stackss.push(5);
stackss.push(8);
// stackss.printStack();
console.log(stackss.printStack());
console.log(stackss.size());
