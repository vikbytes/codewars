function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  if (head === null) {
    head = new Node(data);
    return head;
  } else {
    let hydra = new Node(data);
    hydra.next = head;
    return hydra;
  }
}

function buildOneTwoThree() {
  let list = null;
  list = push(list, 3);
  list = push(list, 2);
  list = push(list, 1);
  return list;
}

function length(head) {
  let length = 0;
  let temp = head;
  while (temp !== null) {
    length++;
    temp = temp.next;
  }
  return length;
}

function count(head, data) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    if (temp.data === data) {
      count++;
    }
    temp = temp.next;
  }
  return count;
}

function getNth(node, index) {
  if (index >= length(node) || node === null) {
    throw "ArgumentException";
  } else {
    while (index > -1) {
      if (index === 0) {
        return node;
      }
      index--;
      node = node.next;
    }
  }
}

console.log(buildOneTwoThree());
console.log(buildOneTwoThree().next.next.data, 3);
