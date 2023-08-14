const { listenerCount } = require("process");

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    //O(1) --- prePend == add newly created node to start || add at begining 
    prePend(value){
        //Create a new node with value
        const node= new Node(value)

        //If list is empty
        if(this.head==null){ 
            //assign newly created node to head
            this.head=node
            this.size++
        }

        // if list is not empty
        else{ 
            node.next=this.head;
            this.head=node;
            this.size++
        }

    }

    //Print Lilnkedlist
    print(){
        //If List is empty
        if(this.isEmpty()){
            console.log("List is empty")
        }
        //If list is not Empty
        else{
            let curr=this.head;
            while(curr!==null){
                console.log("Value is ",curr.value)
                curr=curr.next
            }
        }
    }

    //O(n) --- Add at the end
    append(value){
        //Make a node
        const node = new Node(value)
        //Check if the list is empty
        if(this.head==null&&list.isEmpty()){
            this.head=node;
        }
        //if list is not empty
        else{
            let curr=this.head;
            //Iterate to go to the last element  of the linked list
            while(curr.next){
                curr=curr.next
            }

            // assign new node to next of the last element
            curr.next=node
        }
        this.size++
    }


    insert(index, value){
        // if index is less than zero
        if(index < 0 || index > this.size){
            return
        }

        // if index is 0
        if(index===0){
            prePend(value);
        }

        // if the index is more than 0
        else{
            // Creating a new node with value
            const node = new Node(value);

            // Creating a prev variable to iterate
            let prev=this.head;

            //iterate to the index where you want to put
            for(let i=0;i<=index;i++){
                prev=prev.next;
            }

            //point to the end which you might loose 
            node.next=prev.next 
            
            //point your current list to the new node
            prev.next=node



        }
        
    }
}

const list= new LinkedList()

console.log("List is empty? " , list.isEmpty())
console.log("List Size is : ", list.getSize())

// list.print()
list.prePend(30)
list.prePend(20)
list.prePend(10)
// list.print()
// console.log(list)
list.append(60)
list.print()

// console.log(list)