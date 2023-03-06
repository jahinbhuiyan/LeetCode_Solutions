// twoSum

var twoSum = function(nums, target) {
    let obj = {};
    for(let i =0 ; i < nums.length; i++){
        let found = target - nums[i];
        if(obj[found] !== undefined){
            return [i, obj[found]];
        }
        else{
            obj[nums[i]] = i;
        }
 
    }
 };
 

 // numbers Palindrome

 var isPalindrome = function(x) {
    //guess if it's a uni digit  integer, it's automatically a palindrome
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    // ^^^ adding this line of code brings down runtime from 184ms to 125ms
    
    if(x.toString().split('').reverse().join('') === x.toString())
    {
        return true
    }else{
        return false
    }
    
};


//  x < 0  is checking if the number is negative; negative numbers can't be palindrome;
// x%10 is checking whether the number is a multiple of 10; if a number is a multiple of 10
// the last digit is 0; any number with last digit 0 can't be palindrome; for example":
// 150 in reverse is 51;
// finally we are checking if x!= 0




