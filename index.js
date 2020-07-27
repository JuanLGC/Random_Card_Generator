window.onload = () => {
    
    
}
function changeCard() {
   
    var numbers = ["A", "2", "3", "4", "5","6", "7", "8", "9", "10", "J", "Q", "K"];
    var cardNumber = numbers[Math.floor(Math.random()*13)];

    document.querySelector("#cardNumber").innerHTML = cardNumber;


    var mainBody = document.querySelector(".mainContainer");

    var colorCode = Math.floor(Math.random()*4);
    if (colorCode == 0 ) {
        document.querySelector("#cardColor").innerHTML = "\u2660";
        document.querySelector("#cardColor2").innerHTML = "\u2660";
        mainBody.style.color = "black"
        
    }
    else if (colorCode == 1 ) {
        document.querySelector("#cardColor").innerHTML = "\u2663";
        document.querySelector("#cardColor2").innerHTML = "\u2663";
        mainBody.style.color = "black"
        
    }
    else if (colorCode == 2 ) {
        document.querySelector("#cardColor").innerHTML = "\u2665";
        document.querySelector("#cardColor2").innerHTML = "\u2665";
        mainBody.style.color = "red"
    }
    else if (colorCode == 3 ) {
        document.querySelector("#cardColor").innerHTML = "\u2666";
        document.querySelector("#cardColor2").innerHTML = "\u2666";
        mainBody.style.color = "red"
    }

    
    
    

}

