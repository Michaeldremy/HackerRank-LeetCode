// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*

The goal is to find the max depth of the binary tree, in this case we will be finding the max depth on side of the side.

Two variables 

leftCount = 1
rightCount = 1

pre-order search: which will first go down the left side of tree until it is null
As it is going down the left / right side everytime it hits a node it will increase count, in this case it will increase leftCount++
On the right side we need to have an if check for the values to check the nodes left and right and make sure they are null;

Right side and left side:

if node.left && node.right === null;
break;

Compare right and left sides
which ever one is larger we will return that one

   BST:
    3       count 1
   / \
  9  20     count 2
    /  \
   15   7   count 3


*/


var maxDepth = function(root) {
    function height(node = root, count) {
        if (node == null){
            return count;
        }
        count++;

        var left = height(node.left, count);
        var right = height(node.right, count);

        if (left < right){
            return right;
        }
        else{
            return left;
        }
    }
    return height(root, 0)
};