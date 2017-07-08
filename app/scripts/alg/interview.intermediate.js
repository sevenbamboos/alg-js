/*
isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.
*/
export function isBalanced2(s, ...braces) {
  if (!s || typeof s !== 'string') return false;
  if (!braces || braces.length === 0 || braces.length % 2 !== 0) return false;

  // parse braces
  let startBraces = [],
      endBraces = [];
  braces.forEach((x,i)=>{
    if (i % 2 === 0) {
      startBraces.push(x);
    } else {
      endBraces.push(x);
    }
  });

  let stack = [];
  let inputs = s.split('');
  for (let i = 0; i < inputs.length; i++) {
    const c = inputs[i];
    let index = -1;

    // is start brace
    if (startBraces.indexOf(c) !== -1) {
      stack.push(c);
    
    // is end brace
    } else if ((index = endBraces.indexOf(c)) !== -1) {
      if (stack.pop() !== startBraces[index]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}