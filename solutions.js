// twoSum

let obj = {}
for (i=0;i<nums.length;i++){
    let found = target-nums[i]
    if(obj[found] != null){
        return [i,obj[found]]
    }else{
        obj[nums[i]] = i
    }
}

