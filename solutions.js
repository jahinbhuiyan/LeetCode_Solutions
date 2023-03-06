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

