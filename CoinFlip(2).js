document.getElementById('click').onclick = click;
 var heads = 0;
 var tails = 0;
 var myObj;
 myObj = {
	 "name": "Coin",
	 "Side": {"side1": "Heads", "side2": "Tails"}
 }
 function click() {
    x = Math.random();
    if(x <= 0.5) {
	   document.getElementById("coin").src = "half_dollar_head.png";
	   console.log("It's Heads");
	   document.getElementById("demo").innerHTML = myObj.Side.side1;
	 }
	else{
	   document.getElementById("coin").src = "half_dollar_tail.png";
	   console.log("It's tails");
	   document.getElementById("demo").innerHTML = myObj.Side.side2;
	 } 
 };
 function click2() {
	 document.getElementById("coin").src = "unnamed.png";
	 console.clear();
	 document.getElementById("demo").innerHTML = " ";
 };
	
