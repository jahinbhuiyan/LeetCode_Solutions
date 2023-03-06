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

