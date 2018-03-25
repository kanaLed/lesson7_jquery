/*
    Program Name: Recipe Display Application
    Author: Kana Ledbetter
    Date: 03/22/2018
    Filename: drill4.js
*/

//display the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow"); /*global"slow"*/
    
}//end of display

//attache event listner to h3 elements to invoke display function when clicked
$("h3").click(display); /*global $*/

//displays and animates the next element after the current target
function display2(event) {
    $(event.currentTarget).net().animate( {height: 'togle'}, "slow");
    
}//end of display2

//attach event listener to h3 invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
}, function(){
    $(this).css("background-color", "pink");
}) ;

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);

