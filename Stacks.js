class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last =  null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
        var last = this.last;
        last.next = newNode;
        this.last = newNode;
        }
        this.size++;
        return this;
    }
    pop(){
        if(!this.first){
            return null;
        }
        if(this.size === 1){
            var first = this.first;
            this.first = null;
            this.last = null;
            this.size--;
            return first;
        }else{
        var removed = this.last;
        var first = this.first;
        var secondLast;
        while(first.next){
            secondLast = first;
            first = first.next;
        }
        console.log(secondLast);
        secondLast.next = null;
        this.last = secondLast;
        this.size--;
        return removed;
        }
    }
};

var first = new Stack();
first.push(1);
