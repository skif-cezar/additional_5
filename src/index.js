module.exports = function check(str, bracketsConfig) {
  // your solution
  var st = [];
  function find(inputArray, value){
    for (var i = 0, L = inputArray.length; i < L; i++){
        var j = inputArray[i].indexOf(value);
        if (j >= 0) {
            return [i, j];
        };
    };
    return -1;
};

  for(var i = 0; i < str.length; i++){
    if(find(bracketsConfig,str[i]) != -1){
      if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] ==='|' || str[i] ==='1' || str[i] ==='3' || str[i] ==='5' || str[i] ==='7' || str[i] ==='8'){
        st.push(str[i]);
      } else {
        if(st.length <= 0){
          return false;
        } else {
          if(str[i]=== ')' && st[st.length-1] ==='('){
            st.pop();
          }else if(str[i]=== ']' && st[st.length-1] ==='['){
            st.pop();
          }else if(str[i]=== ')' && st[st.length-1] ==='('){
            st.pop();
          }else if(str[i]=== '}' && st[st.length-1] ==='{'){
            st.pop();
          }else if(str[i]=== '|' && st[st.length-1] ==='|'){
            st.pop();
            st.pop()
            st.pop();
          }else if(str[i]=== '1' && st[st.length-1] ==='2'){
           st.pop();
          }else if(str[i]=== '3' && st[st.length-1] ==='4'){
            st.pop();
          }else if(str[i]=== '5' && st[st.length-1] ==='6'){
            st.pop();
          }else if(str[i]=== '7' && st[st.length-1] ==='7'){
            st.pop();
          }else if(str[i]=== '8' && st[st.length-1] ==='8'){
            st.pop();
          }else return false;
        }
      }
    }
  } if(st[st.length-1]==='|' && st.length%2 == 0){
  return true;
  }
  return st.length === 0;

}
