class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

class Queues{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    unShift(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var second = this.first;
            this.first = newNode;
            this.first.next = second; 
        }
        this.size++;
        return this;
    }
    shift(){
        if(!this.first) return null;
        var first = this.first;
        var second = this.first.next;
        this.first = second;
        this.size--;
        return first;
    }
};

var one = new Queues();
one.unShift(1);
one.unShift(2);
one.unShift(3);
one.unShift(4);
