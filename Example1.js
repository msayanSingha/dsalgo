var wordArray = [];
var word = "noon";
var reword = "";

for(var i = 0 ; i < word.length; i++){
    wordArray.push(word[i])
}

for(var i = 0; i<word.length; i++){
    reword+= wordArray.pop();

}


if(word === reword){
    console.log("It's a palindrome");
}else{
    console.log("not a palindrome");
}