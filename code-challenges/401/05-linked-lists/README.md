# Linked Lists
* Linked Lists

## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
    * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    * Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    "{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
### Algorithm
* Create the node class passing in the data with node as null to initialize later
* Create LinkedList class should be empty with exception of head as null
* Create insert in LinkedList class to create new node and assign head, if none exist then make it the current and return the element
    1. If a head exists then assign head to current head and next to the list node (current).
* Create includes in LinkedList class to check if an existing node if present, If present then return true. if not then return false
* Create toString in LinkedList that outputs all the existing LinkedLists
    1. initialize empty array, string variable and current variable
    2. If current has a next property then push data into array
    3. Run through array and add to string with parameters {data} -->
    4. check for end and add {data} without arrow.
    5. return string

### Big O:
- Time: O(N)
- Space: O(1)

#### Time Taken to Execute
* 

#### Memory Taken to Execute
* 