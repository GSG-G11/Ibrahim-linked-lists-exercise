function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(array)) {
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function (val) {
    const newNode = new Node(val)
    if (this.head) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    } else {
        this.head = this.tail = newNode;
    }
    this.length++;
    return this;
}

DoublyLinkedList.prototype.unshift = function (val) {
    const newNode = new Node(val)
    if (this.head) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    } else {
        this.head = this.tail = newNode;
    }
    this.length++;
    return this;
}

DoublyLinkedList.prototype.insert = function (index, val) {
    const newNode = new Node(val);
    const prevNode = this.getNode(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode
    this.length++;
    return this.length;
}


DoublyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index > this.length) return undefined;
    let counter, currentNode;
    if (index < (this.length / 2)) {
        currentNode = this.head;
        counter = 0;
        while (currentNode) {
            if (counter === index) return currentNode
            counter++;
            currentNode = currentNode.next;
        }
    } else {
        currentNode = this.tail;
        counter = this.length - 1;
        while (currentNode) {
            if (counter === index) return currentNode
            counter--;
            currentNode = currentNode.prev;
        }
    }
}

DoublyLinkedList.prototype.get = function (index) {
    return (this.getNode(index))?.val || null
}

DoublyLinkedList.prototype.set = function (index, val) {
    const toMod = this.getNode(index)
    if (!toMod) return toMod;
    toMod.val = val;
}
DoublyLinkedList.prototype.pop = function () {
    if (!this.tail) return undefined;
    const toBePopped = this.tail;
    let prev = this.tail.prev;
    this.tail.prev = null;
    prev.next = null;
    this.tail = prev;
    this.length--;

    return toBePopped.val
}

DoublyLinkedList.prototype.shift = function () {

    if (!this.head) return undefined;
    const toBeShifted = this.head;
    let next = this.head.next;
    this.head.next = null;
    if (next) next.prev = null;
    this.head = next;
    this.length--;

    return toBeShifted.val
}

DoublyLinkedList.prototype.remove = function (index) {
    if (index < 0 || index > this.length) return undefined;
    switch (index) {
        case 0:
            return this.shift(index);
        case this.length - 1:
            return this.pop(index);
        default:
            const toBeRemoved = this.getNode(index);
            const prevNode = toBeRemoved.prev;
            toBeRemoved.prev = null;
            const nextNode = toBeRemoved.next;
            toBeRemoved.next = null;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.length--;
    }
}

DoublyLinkedList.prototype.reverse = function () {
    let current=this.head;

    while(current){
        const next=current.next;
        [current.prev,current.next]=[current.next,current.prev]
        current=next;
    }

    [this.head,this.tail]=[this.tail,this.head]

    return this;
}