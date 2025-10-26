height=[1,1]
var maxArea = function(height) {
    let l=0 ,r=height.length-1;
    let max=0;
    while (l<r){
        let min= height[l]>height[r]?height[r]:height[l]
        if(min*(r-l)>max)
            max=min*(r-l)
        if(height[l]>=height[r]){
            let curR=r;
            while(l<r){
                r--;
                if(height[r]>height[curR])
                    break
            }
        }else{
            let curL=l;
            while(l<r){
                l++;
                if(height[l]>height[curL])
                    break;
            }

        }
    }
    return max
};

console.log(maxArea(height));
