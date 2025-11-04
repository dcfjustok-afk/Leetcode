var search = function(nums, target) {
    function func(left, right) {
        if (left > right) return -1;

        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        // 左半部分有序
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid])
                return func(left, mid - 1);
            else
                return func(mid + 1, right);
        }
        // 右半部分有序
        else {
            if (nums[mid] < target && target <= nums[right])
                return func(mid + 1, right);
            else
                return func(left, mid - 1);
        }
    }
    return func(0, nums.length - 1);
};
