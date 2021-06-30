class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        var current = this.root;
        while(true){
            if(current === null){
                this.root = newNode;
                return this;
            }else{
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else{
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(val){
        if(!val) return null;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            }else if(val > current.val){
                current = current.right;
            }else if(val === current.val){
                found = true;
            }
        }
        if(!found) return null;
        return current;
    }
};

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(1);
tree.insert(21);
