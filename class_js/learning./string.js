//String is a sequence of characters used to represent text.
//create String.--way one.
let str="Mahadev interprise\n";
//way-2
let str2='Mahadev interprise';
console.log(str,str);
//string length
console.log(str.length,str2.length);
//string indices.--access of a single charater.
console.log(str[2]);
//Template Literals.
let sentence=`this is a special string which is bounded in back tics ${1+23}.`;
console.log(sentence);
let obj={
    item:"pen",
    price:10,
};
//String Interpolation
//To create strings by doing substitiution of placeholders `string text ${expression} string text`
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//normal
console.log("the cose of",obj.item,"is",obj.price,"rupees");
//escape characters.\n -next line,\t -for tab
console.log("Lorem Ipsum\t is simply dummy \n text of the printing and typesetting industry. ");



//String Methods------
/* these are built-in functions to manipulate a string 
1. str.toUppercase()
2. str.toLowercase()
3. str.trim() it removes whitespaces.
*/
console.log("string methods.")
let str3="Har Har Mahadev.";
let orginal_str=str3.toUpperCase();
let lower_string=str3.toLowerCase();
let trim12="        sonal singh .";
console.log(trim12.trim())
console.log(str3,orginal_str,lower_string);
/* more methods--
str.slice(start, end?) // returns part of string

* str1.concat(str2) // joins str2 with str1

* str.replace(searchVal, newVal)

str.charAt(idx) */
console.log("more methods of string.");
let c="4983984938";
console.log(c.slice(0,4));//cuts the peace of string.
let b="sonal";
console.log(c.concat(b));//in js we could concat the values via + sign too.
console.log(b.replace("sonal","riya"));
//replace any word with other word.
let d="i love love js.";
console.log(d.replaceAll("love","hate"));//replace all replaces all values not one.
console.log(d.replace("love","hate"));
//we could know on which index which character is staying we could use charAt.
console.log(d.charAt(4));







