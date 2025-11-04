var findMin = function (nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1; // 右边无序 -> 最小值在右侧
        } else {
            right = mid; // 左边无序 -> 最小值在左侧（包括 mid）
        }
    }

    return nums[left];
};
