var wordArray = [];
var word = "kuntal";
var reword = "";

for(var i = 0 ; i < word.length; i++){
    wordArray.push(word[i])
}

for(var i = 0; i<word.length; i++){
    reword+= wordArray.pop();
    
    console.log("wordArray",wordArray,reword);
}


if(word === reword){
    console.log("It's a palindrome");
}else{
    console.log("not a palindrome");
}