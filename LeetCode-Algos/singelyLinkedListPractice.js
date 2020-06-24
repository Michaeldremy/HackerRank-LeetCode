/*

Node { this.value = value, this.next = null }

Given head node of SLL
return the third from the last node
structure: this.val = value, this.next = null

this.head = node
runner = this.head.next
runner2 = this.head.next.next
while (runner2 !== null) 


*/

function thirdNode(node) {
    if (node === null) {
        return null;
    }
    
    let runner = node
    let finalRunner = node;
    let count = 0;
    while (runner.next !== null) {
        runner = runner.next
        count++;  
    }
    count = count - 3;
    if (count >= 0) {
        while (finalRunner.next !== null){
            if (count === 0) {
                return finalRunner
            } else {
                count--;
                finalRunner = finalRunner.next;
            }
        }
    }
}