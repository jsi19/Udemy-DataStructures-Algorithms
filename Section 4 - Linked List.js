//LL-Constructor
//Node
class Node {
    contructor(value) {
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    //LL-Push
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    //LL-Pop
    pop() {
        if(!this.head) { //Zero items
            return undefined
        }
        let pre = this.head //2 or more items
        let temp = this.head

        while(temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if(this.length === 0) { //Only one item
            this.head = null
            this.tail = null
        }

        return temp
    }

    //LL-Unshift
    unshift (value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    //LL-Shift
    shift() {
        if(!this.head) { //Zero items
            return undefined
        }

        let temp = this.head //Atleast 2 items
        this.head = this.head.next
        temp.next = null
        this.length--

        if(this.length === 0) { //Only one item
            this.tail = null
        }

        return temp
    }

    //LL-Get
    get(index) {
        if(index < 0 || index >=this.length){
            return undefined
        }

        let temp = this.head
        for(let i = 0; i<index;i++) {
            temp = temp.next
        }
        return temp
    }

    //LL-Set
    set(index, value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }

    //LL-Insert
    insert(index, value) {
        if(index === 0) { //Beginning of list
            return this.unshift(value)
        }
        if(index === this.length) { //End of list
            return this.push(value)
        }
        if(index < 0 || index > this.length) { //Out of bounds
            return false
        }

        const newNode = new Node(value) //Middle of list
        const temp = this.get(index -1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++

        return true
    }

    //LL-Remove
    remove(index) {
        if(index === 0) { //Beginning of list
            return this.shift()
        }
        if(index === this.length-1) { //End of list
            return this.pop()
        }
        if(index < 0 || index >= this.length) { //Out of bounds
            return undefined
        }

        const before = this.get(index-1) //Middle of list
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--

        return temp
    }

    //LL-Reverse
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for(let i = 0; i <this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

        return this
    }
}

let myLinkedList = new Linkedlist(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.pop()
myLinkedList.unshift(23)
myLinkedList.shift()
myLinkedList.get(2)
myLinkedList.set(2, 10)

