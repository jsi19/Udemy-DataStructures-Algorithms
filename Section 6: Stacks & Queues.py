class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    #Stack - Constructor
    def __init__(self, value):
        new_node = Node(value)
        self.top = new_node
        self.height = 1

    #Stack - Push
    def push(self, value):
        new_node = Node(value)
        if self.height == 0:
            self.top = new_node
        else:
            new_node.next = self.top
            self.top = new_node
        self.height+=1

    #Stack - Pop
    def pop(self):
        if self.height == 0:
            return None
        temp = self.top
        self.top = self.top.next
        temp.next = None
        self.height-=1
        return temp
            

    def print_stack(self):
        temp = self.top
        while temp is not None:
            print(temp.value)
            temp = temp.next


my_stack = Stack(7)
my_stack.push(23)
my_stack.push(3)
my_stack.push(11)

print(my_stack.pop(),'\n')

my_stack.print_stack()

#Queue
class Queue:
    #Queue - Constructor
    def  __init__(self, value):
        new_node = Node(value)
        self.first = new_node
        self.last = new_node
        self.length = 1
    
    #Queue - Enqueue
    def enqueue(self, value):
        new_node = Node(value)
        if self.first is None:
            self.first = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            self.last = new_node
        self.length+=1
    
    #Queue - Dequeue
    def dequeue(self):
        if self.length == 0:
            return None
        temp = self.first
        if self.length == 1:
            self.first = None
            self.last = None
        else:
            self.first = self.first.next
            temp.next = None
        self.length -= 1
        return temp


    def print_queue(self):
        temp = self.first
        while temp is not None:
            print(temp.value)
            temp = temp.next

my_queue = Queue(1)
my_queue.enqueue(2)

#(2) Items - Returns 2 Node
print(my_queue.dequeue())

#(1) Items - Returns 1 Node
print(my_queue.dequeue())

#(0) Items - Returns Node
print(my_queue.dequeue())