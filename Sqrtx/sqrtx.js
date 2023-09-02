var mySqrt = function (x) {
    //Binary Search 

    //x  = 4
    // left pointer 0; Right Pointer  = 4 
    // mid = 0 + 4 / 2  !!! 2   
    // mid * mid == x  return mid 
    // mid * mid <= x if mid + 1  * mid + 1 > X  RETURN MID 
    // mid * mid > x 
    let left = 0;
    let right = x;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (middle * middle <= x && (middle + 1) * (middle + 1) > x) {
            return middle
        } else if (middle * middle < x) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
}
