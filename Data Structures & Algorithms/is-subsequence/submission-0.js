class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let count = 0;
        let i = 0;
        let j = 0;
        while(j < t.length){
            if(s[i] === t[j]){
                i++;
                j++;
                count++;
            }else{
                j++;
            }
        }
        if(count !== s.length){
            return false;
        }
        return true;

    }
}
