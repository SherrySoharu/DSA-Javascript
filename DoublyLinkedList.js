class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    push(val){
        if(!val){
            return this.length;
        }else{
            var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
        var oldTail = this.tail;
        oldTail.next = newNode;
        newNode.prev = oldTail;
        this.tail = newNode;
        }
        this.length++;
        return this;
        }
    }
    pop(){
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }else{
            var currentLast = this.tail;
            var secondLast = currentLast.prev;
            currentLast.prev = null;
            if(secondLast) secondLast.next = null;
            this.tail = secondLast;
            if(!secondLast) this.head = null;
            this.length--;
        }
        return currentLast;
    }
    shift(){
        if(!this.head){
            this.head = null;
            this.head = null;
        }else{
            var currentHead = this.head;
            var secondElement = this.head.next;
            currentHead.next = null;
            if(secondElement) secondElement.prev = null;
            this.head = secondElement;
            if(!secondElement) this.tail = null;
        }
        this.length--;
        return currentHead;
    }
    unShift(val){
        if(!val){
            return this.length;
        }else{
            var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            var currentHead = this.head;
            currentHead.prev = newNode;
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return this;
        }
    }
    get(index){
        var halfPointer = Math.floor(this.length/2);
        var counter = 0;
        var reverseCounter = this.length - 1;
        var current = this.head;
        var reverseCurrent = this.tail;
        if(index < 0 || index >= this.length) return null;
        if(index <= halfPointer){
            while(index !== counter){
                current = current.next;
                counter++;
            }
            return current;
        }
        if(index > halfPointer){
            while(index !== reverseCounter){
                reverseCurrent = reverseCurrent.prev;
                reverseCounter--;
            }
            return reverseCurrent;
        }
    }
    set(index, val){
        if(!val) return undefined;
        if(index < 0 || index >= this.length) return false;
        var selected = this.get(index);
        if(selected){
        selected.val = val;
        return true;
        }
    }
    insert(index, val){
        if(!val) return false;
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unShift(val);
        if(index === this.length - 1){
            return !!this.push(val);
        }
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var next = this.get(index);
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = next;
        next.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index){
            var selected = this.get(index);
            var prev = selected.prev;
            var next = selected.next;
            prev.next = next;
            next.prev = prev;
            this.length--;
            return selected;
        }
    }
};

var first = new DoublyLinkedList;
first.push(5);
first.push(6);
first.push(7);
first.push(8);
first.push(9);
