const Node = require('./node');

class LinkedList {
    //private _head:Node;
    //private _tail:Node;

    constructor() {
      this.length = 0;
    }

    append(data) {
      var node = new Node(data,this._tail);
      if (this._tail == null) {
        this._head = node; 
      }
      else {
        this._tail.next=node;
      }
      this._tail = node;
      this.length ++;
    }

    head() {
      if (this._head==null) 
        return null;
      return this._head.data;
    }

    tail() {
      if (this._tail==null)
        return null;
      return this._tail.data;
    }

    at(index) {
      var node = this.nodeAt(index);
      if (node == null)
        return null;
      return node.data;
    }

    nodeAt (index) {
      if (index<0)
        return null;
  
      var i = 0;
      var node = this._head;
      while (i<index) {
        if (node==null)
          return null;
        node = node.next;
        i++;
      }
      return node;
    }

    insertAt(index, data) {
      var node = this.nodeAt(index);
      if (node == null){
        if (index<0)
          return;
        if (index==0 && _tail==null)
          this.append (data); 
      }
      else{
        var newNode = new Node(data,node.prev,node);
          node.prev = newNode;
        if (newNode.prev !=null)
          newNode.prev.next = newNode;
        else 
          this._head = newNode;
      }
    }

    isEmpty() {
      var node = this._head;
        if (node == null)
          return;        
        if (index==0)
          return true;
        if (index!=0){
          var i=0;
          node = node.next;
          i++;
          return false;
      }
        else{
          var node = this.nodeEmpty(index);
          this.node = nodeEmpty;
          return true;
      }    
    }


    clear() {
      if (this._head==null && this._tail==null) 
        return null;
      if (this.length = 0)
        return this.length = 0;
      if (node !=null){
        if (node == null)
            return;
        else 
          var node = this.nodeClear;
          this.node.data ==0; 
      }
    }

    deleteAt(index) {    
      if (node == null){
        if (index<0)
          return; 
      }
      else{
        var node = this.deleteAt(index);
        var i = 0;
      while (i != index) {
        node = node.next;
        i++;
        }
          node = this.node.deleteAt (data); 
      }
    }  

    reverse() {}

    indexOf(data) {}
}
          
module.exports = LinkedList;
