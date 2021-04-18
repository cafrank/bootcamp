// Note is number is Even if the remainder is 0 when divided by 2
// num %2 === 0

function allEvens(nums) {
    return nums.every(x => x%2==0);
}
