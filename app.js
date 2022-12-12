const value = document.getElementById(`textarea`).value;
console.log(value);
console.log(`hi`);
function myFunction(any){

    // const len = any.length;
    


//     const StrTOArr = e.split(` `);
//     const revArr= StrTOArr.reverse();
//     const revString = revArrValues.join(``);
//     if (e=revString) {
//         console.log(`is palindrome`);
        
//     }
// else{
//     console.log(`not pallindreme`);
// }

var input=document.getElementById(`textarea`).value
console.log(input);

var Sinput=input.split(``)
console.log(Sinput);
var Rinput = input.split(``).reverse();
console.log(Rinput);

var Revinput = Rinput.join(``)
console.log(Revinput);

if (input===Revinput && input!==``) {
    // console.log(`palindrome`);
       document.getElementById(`mainoutput`).innerText= input +` `+ `Is a Pallindrome`


} else {
    // console.log(`fail`);
        document.getElementById(`mainoutput`).innerHTML= input +` `+ `Is not a Pallindrome`;

}

if (input==``) {
    document.getElementById(`mainoutput`).innerText= `please add text`

    
}

// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// You cant take arrays in      if (here) 
// the condition of if is string by default








// document.getElementById(`textarea`).innerText=``; remove innerText

// MY Attempts



// if (input.charAt(0)===input.slice(-1)) {
//    console.log(`hello world`); 
//    document.getElementById(`mainoutput`).innerText= input +` `+ `Is Pallindrome`

// } else {
//     console.log(`not hello world`);
//     document.getElementById(`mainoutput`).innerHTML= input +` `+ `Is not Pallindrome`;

// }

}
