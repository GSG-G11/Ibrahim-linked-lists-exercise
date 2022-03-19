const SinglyLinkedList = require("./singly_linked_lists_exercise/singlyLinkedList");

const list = new SinglyLinkedList();

// console.log(list);

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log("Head ", list.head);
console.log("Tail ", list.tail);
console.log("---------------------");
list.reverse();

console.log("Head ", list.head);
console.log("Tail ", list.tail);
