var randomNumber1 = Math.floor(Math.random()*6) + 1;

var newsrc1 = randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", newsrc1);





var randomNumber2 = Math.floor(Math.random()*6) + 1;

var newsrc2 = randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", newsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML = "It's a tie";
}


