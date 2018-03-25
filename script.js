/*
    Program Name: Recipe Display Application
    Author: Kana Ledbetter
    Date: 03/22/2018
    Filename: script.js
*/

//display the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow"); /*global"slow"*/
    
}//end of display

//attache event listner to h3 elements to invoke display function when clicked
$("h3").click(display); /*global $*/
