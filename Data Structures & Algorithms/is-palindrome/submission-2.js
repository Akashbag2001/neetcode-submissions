class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let start = 0;
        let end = s.length-1;
        
        while(start < end ){
            while(start < end && !this.isAlphaNum(s[start])) start ++;
            while(start < end && !this.isAlphaNum(s[end])) end --;

            if(s[start].toLowerCase() !== s[end].toLowerCase()) return false;
            start++;
            end--;
        }
        return true;

    }
    isAlphaNum(ch){
        const code = ch.charCodeAt(0);
        return (
        (code >= 48 && code <= 57) || 
        (code >= 65 && code <= 90) ||  
        (code >= 97 && code <= 122)     
    );
    }
}
