document.getElementById('click').onclick = click;
 var heads = 0;
 var tails = 0;
 function click() {
    x = Math.random();
    if(x <= 0.5) {
	   document.getElementById("coin").src = "half_dollar_head.png";
	   console.log("It's Heads");
	 }
	else{
	   document.getElementById("coin").src = "half_dollar_tail.png";
	   console.log("It's tails");
	 } 
 };
 function click2() {
	 document.getElementById("coin").src = "unnamed.png";
	 console.clear();
 };
	