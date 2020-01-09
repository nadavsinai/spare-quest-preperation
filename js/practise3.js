/*
Equivalent Keypresses
Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses. Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. A keypress can be either a printable character or a backspace represented by -B. You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.

For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"] the output should return true because those keypresses produce the same printable string. The array given will not be empty. The keypresses will only contain letters from the alphabet and backspaces.
Examples
Input: ["a,b,c,d", "a,b,c,d,-B,d"]
Output: true
Input: ["c,a,r,d", "c,a,-B,r,d"]
Output: false
 */
function EquivalentKeypresses(strArr) {
  //code here
}

EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]) // true
EquivalentKeypresses(["c,a,r,d", "c,a,-B,r,d"]) // false
