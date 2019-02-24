function sing() {
    console.log("Twinkle twinkle...");
    console.log("How I wonder");

}

var intervalID = setInterval(sing, 1000);
clearInterval(intervalID);