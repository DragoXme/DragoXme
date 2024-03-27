var msgElement = document.getElementById('msg');
var textValues = [" ", "Hi", "I", "m", "'"];
var typingSpeed = 0; // Adjust typing speed as needed (milliseconds per character)
var typingInterval;
var picElement = document.getElementById('profilePic');
var nameElement = document.getElementById('name');
var bodyElement = document.getElementById('body');
var bgAudioElement = document.getElementById('bgAudio');
var welcomeImage = document.getElementById('welcomeImage');
var welcomeLines = document.getElementById('welcomeLines');

//var for bubbles
var bubbleP = [
    document.getElementById("bubbleText0"),
    document.getElementById("bubbleText1"),
    document.getElementById("bubbleText2"),
    document.getElementById("bubbleText3"),
    document.getElementById("bubbleText4"),
    document.getElementById("bubbleText5"),
    document.getElementById("bubbleText6")
];
var bubbleAnswer = [
    "I'm a hooman.",
    "No hobbies, just sleepin",
    "I like Something...",
    "I'm 18+",
    "From India",
    "Anime!! Let's gooo!",
    "Free time Sleeping likely :)"
];

window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 20);
};


function displayText() {
    
    setTimeout(function() {
        msgElement.textContent = textValues[1];
        msgElement.style.transition = "all 1s";
        msgElement.style.opacity = 1;
        console.log("displayText()"); //scroll to default view
    }, 1000);

    setTimeout(function() {
        msgElement.style.opacity = 0;
    }, 3000);

    setTimeout(function() {
        msgElement.textContent = textValues[2];
        msgElement.style.opacity = 1;
    }, 6000);
    setTimeout(function() {
        msgElement.textContent = textValues[2] + textValues[3];
        welcomeImage.style.display = "none";
    }, 7000);
       setTimeout(function() {
        msgElement.textContent = textValues[2] + textValues[4] + textValues[3];
       }, 7700);
       setTimeout(function() {
        msgElement.textContent = textValues[2] + textValues[4] + textValues[3] + ".";
       }, 9000);
       setTimeout(function() {
        msgElement.textContent = textValues[2] + textValues[4] + textValues[3] + ".."
       }, 9200);
       setTimeout(function() {
        msgElement.textContent = textValues[2] + textValues[4] + textValues[3] + "..."
       }, 9400);
    setTimeout(function() {
        msgElement.style.opacity = 0;
        picElement.style.display = "block";
    }, 11000);
    setTimeout(function() {
        msgElement.style.display = "none";
        msgElement.textContent = null;
        picElement.style.transform = "translate(-50%, -50%)";
        picElement.style.opacity = 1;
        welcomeLines.style.transform = "translate(0, -50%)";
    }, 14000);
    setTimeout(function() {
        picElement.style.transform = "translate(-50%, -90%)";
        picElement.style.border = "5px solid #59a3ed"
        nameElement.style.opacity = 1;
        nameElement.style.transform = "translate(-50%, 30%)";
        welcomeLines.style.transform = "translate(0, -70%)";
        welcomeLines.style.transition = "transform 8s ease";
    }, 16000);
    setTimeout(function() {
        picElement.style.transform = "translate(-50%, -50%)";
        nameElement.style.transform = "translate(-50%, -50%)";
        nameElement.style.opacity = 0;
        welcomeLines.style.transform = "translate(0, 100%)";
    }, 25000);
    setTimeout(function() {
        picElement.style.border = "5px solid #471b8e";
        picElement.style.boxShadow = "0 0 10px 5px #471b8e";
        nameElement.style.display = "none";
    }, 26050);
    setTimeout(function() {
        picButton();
        console.log("picButton()");
    }, 27000);
}

function picButton() {

    setTimeout(function() {
        picElement.style.transition = "all 5s ease";
        picElement.style.boxShadow = "0 0 0 1000px #471b8e";
    }, 0);
    setTimeout(function() {
        document.body.style.background = "radial-gradient(circle, #000077, #000000) no-repeat center center fixed";
    }, 2000);
    setTimeout(function() {
        picElement.style.boxShadow = "0 0 0 0 #471b8e";
        picElement.style.transition = "box-shadow 2s";
    }, 2500);
    setTimeout(function() {
        picElement.style.transition = "all 2s";
        picElement.style.opacity = 0;
    }, 3000);
    setTimeout(function() {
        picElement.style.display = "none";
        welcomeLines.style.transition = "transform 31s ease-in-out";
        welcomeLines.style.transform = "translate(0, -100%)";
        bubbleP[0].style.display = "block";
        bubbleP[1].style.display = "block";
        bubbleP[2].style.display = "block";
        bubbleP[3].style.display = "block";
        bubbleP[4].style.display = "block";
        bubbleP[5].style.display = "block";
        bubbleP[6].style.display = "block";
        textBubbles();
    }, 5000);
}

function textBubbles() {
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, 0)";
        console.log("did it");
    }, 1000);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -150%)";
        bubbleP[1].style.transform = "translate(-2%, 0)";
    }, 1700);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -300%)";
        bubbleP[1].style.transform = "translate(-2%, -150%)";
        bubbleP[2].style.transform = "translate(2%, 0)";
    }, 2400);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -450%)";
        bubbleP[1].style.transform = "translate(-2%, -300%)";
        bubbleP[2].style.transform = "translate(2%, -150%)";
        bubbleP[3].style.transform = "translate(-2%, 0)";
    }, 3100);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -600%)";
        bubbleP[1].style.transform = "translate(-2%, -450%)";
        bubbleP[2].style.transform = "translate(2%, -300%)";
        bubbleP[3].style.transform = "translate(-2%, -150%)";
        bubbleP[4].style.transform = "translate(2%, 0)";
    }, 3800);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -750%)";
        bubbleP[1].style.transform = "translate(-2%, -600%)";
        bubbleP[2].style.transform = "translate(2%, -450%)";
        bubbleP[3].style.transform = "translate(-2%, -300%)";
        bubbleP[4].style.transform = "translate(2%, -150%)";
        bubbleP[5].style.transform = "translate(-2%, 0%)";
    }, 4500);
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(2%, -900%)";
        bubbleP[1].style.transform = "translate(-2%, -750%)";
        bubbleP[2].style.transform = "translate(2%, -600%)";
        bubbleP[3].style.transform = "translate(-2%, -450%)";
        bubbleP[4].style.transform = "translate(2%, -300%)";
        bubbleP[5].style.transform = "translate(-2%, -150%)";
        bubbleP[6].style.transform = "translate(2%, 0)";
    }, 5200);
    setTimeout(() => {
        answerFunction();
    }, 5400);
}

function answerFunction() {
    setTimeout(() => {
        typeText(bubbleAnswer[0], bubbleP[0]);
        bubbleP[0].style.transform = "translate(-50%, -900%)";
        bubbleP[0].style.backgroundColor = "#00134d";
        bubbleP[0].style.backgroundImage = "none";
    }, 1000);
    setTimeout(() => {
        typeText(bubbleAnswer[1], bubbleP[1]);
        bubbleP[1].style.backgroundColor = "#00134d";
        bubbleP[0].style.transform = "translate(2%, -900%)";
        bubbleP[1].style.transform = "translate(50%, -750%)";
        bubbleP[1].style.backgroundImage = "none";
    }, 1500);
    setTimeout(() => {
        typeText(bubbleAnswer[2], bubbleP[2]);
        bubbleP[2].style.backgroundColor = "#00134d";
        bubbleP[1].style.transform = "translate(-2%, -750%)";
        bubbleP[2].style.transform = "translate(-50%, -600%)";
        bubbleP[2].style.backgroundImage = "none";
    }, 2000);
    setTimeout(() => {
        typeText(bubbleAnswer[3], bubbleP[3]);
        bubbleP[3].style.backgroundColor = "#00134d";
        bubbleP[2].style.transform = "translate(2%, -600%)";
        bubbleP[3].style.transform = "translate(50%, -450%)";
        bubbleP[3].style.backgroundImage = "none";
    }, 2500);
    setTimeout(() => {
        typeText(bubbleAnswer[4], bubbleP[4]);
        bubbleP[4].style.backgroundColor = "#00134d";
        bubbleP[3].style.transform = "translate(-2%, -450%)";
        bubbleP[4].style.transform = "translate(-50%, -300%)";
        bubbleP[4].style.backgroundImage = "none";
    }, 3000);
    setTimeout(() => {
        typeText(bubbleAnswer[5], bubbleP[5]);
        bubbleP[5].style.backgroundColor = "#00134d";
        bubbleP[4].style.transform = "translate(2%, -300%)";
        bubbleP[5].style.transform = "translate(50%, -150%)";
        bubbleP[5].style.backgroundImage = "none";
    }, 3500);
    setTimeout(() => {
        typeText(bubbleAnswer[6], bubbleP[6]);
        bubbleP[6].style.backgroundColor = "#00134d";
        bubbleP[5].style.transform = "translate(-2%, -150%)";
        bubbleP[6].style.transform = "translate(-50%, 0)";
        bubbleP[6].style.backgroundImage = "none";
    }, 4000);
    setTimeout(() => {
        bubbleP[6].style.transform = "translate(2%, 0)";
    }, 4500);
    setTimeout(() => {
        removeBubble();
    }, 6000);
}
function removeBubble() {
    setTimeout(() => {
        bubbleP[0].style.transform = "translate(-200%, -900%)";
    }, 1000);
    setTimeout(() => {
        bubbleP[1].style.transform = "translate(200%, -750%)";
    }, 1100);
    setTimeout(() => {
        bubbleP[2].style.transform = "translate(-200%, -600%)";
    }, 1200);
    setTimeout(() => {
        bubbleP[3].style.transform = "translate(200%, -450%)";
    }, 1300);
    setTimeout(() => {
        bubbleP[4].style.transform = "translate(-200%, -300%)";
    }, 1400);
    setTimeout(() => {
        bubbleP[5].style.transform = "translate(200%, -150%)";
    }, 1500);
    setTimeout(() => {
        bubbleP[6].style.transform = "translate(-200%, 0)";
    }, 1600);
    setTimeout(() => {
        endingWords();
        
        picElement.style.display = "block";
        picElement.style.transition = "opacity 1s"
        picElement.style.transform = "translate(-50%, -70%)";
        bubbleP[0].style.display = "none";
        bubbleP[1].style.display = "none";
        bubbleP[2].style.display = "none";
        bubbleP[3].style.display = "none";
        bubbleP[4].style.display = "none";
        bubbleP[5].style.display = "none";
        bubbleP[6].style.display = "none";
    }, 2600);
}
function endingWords() {
    setTimeout(() => {
        picElement.style.opacity = "1";
        picElement.style.transform = "translate(-50%, -50%)";
    }, 1000);
    setTimeout(() => {
        displayAccountsImage();
    }, 2000);
    setTimeout(() => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            document.getElementById("youtube").style.transform = "translate(-50%, calc(-120px - 50%))";
            document.getElementById("instagram").style.transform = "translate(-50%, calc(120px - 50%))";
            document.getElementById("twitter").style.transform = "translate(calc(-120px - 50%), -50%)";
            document.getElementById("pinterest").style.transform = "translate(calc(120px - 50%), -50%)";
        } else {
            document.getElementById("youtube").style.transform = "translate(-50%, calc(-200px - 50%))";
            document.getElementById("instagram").style.transform = "translate(-50%, calc(200px - 50%))";
            document.getElementById("twitter").style.transform = "translate(calc(-200px - 50%), -50%)";
            document.getElementById("pinterest").style.transform = "translate(calc(200px - 50%), -50%)";
        }
        decreaseVolume(5);
    }, 3000);
    setTimeout(() => {
        bgAudioElement.pause();
        if (document.fullscreenElement) {
    document.exitFullscreen();
}
    }, 8000);
}
/*
function textBubbles() {
    setTimeout(function() {
        typeText(5, msgElement);
    }, 1000);
    setTimeout(function() {
        msgElement.style.display = "block";
        msgElement.style.opacity = 1;
        msgElement.style.textAlign = "center";
    }, 1000);
    setTimeout(function() {
        typeText(6, msgElement);
    }, 5000);
    setTimeout(function() {
        typeText(7, msgElement);
    }, 7000);
    setTimeout(function() {
        typeText(8, msgElement);
    }, 10000);
    setTimeout(function() {
        typeText(9, msgElement);
    }, 12000);
    setTimeout(function() {
        typeText(10, msgElement);
    }, 15000);
    setTimeout(function() {
        typeText(11, msgElement);
    }, 17000);
    setTimeout(function() {
        typeText(12, msgElement);
    }, 17000);
    setTimeout(function() {
        typeText(13, msgElement);
    }, 21000);
    setTimeout(function() {
        typeText(14, msgElement);
    }, 22000);
    setTimeout(function() {
        typeText(15, msgElement);
    }, 23000);
    setTimeout(function() {
        typeText(16, msgElement);
    }, 24000);
    setTimeout(function() {
        typeText(17, msgElement);
        msgElement.style.fontFamily = "courier";
        msgElement.style.fontSize = "18vh";
        msgElement.style.fontWeight = "bold";
        decreaseVolume(6);
    }, 25000);
    setTimeout(function() {
        bgAudioElement.pause();
        if (document.fullscreenElement) {
    document.exitFullscreen();
}
    }, 31000);
}
*/


//event listner for welcome image
function clickHandler() {
    console.log("Welcome!");
    document.documentElement.requestFullscreen();
    setTimeout(function() {
    welcomeImage.style.transform = "translate(0, 5000px)";
    bgAudioElement.play();
    console.log('played!');
    }, 500);
    displayText();
    
    document.removeEventListener("click", clickHandler); //remove event listener
}


document.addEventListener("click", clickHandler); //event listener for welcome screen.


// fade volume effect
function decreaseVolume(durationInSeconds) {
    var startVolume = bgAudioElement.volume;
    var volumeChangePerMs = startVolume / (durationInSeconds * 1000);
    var startTime = performance.now();

    function updateVolume() {
        var elapsedTime = performance.now() - startTime;
        var newVolume = Math.max(0, startVolume - volumeChangePerMs * elapsedTime);
        bgAudioElement.volume = newVolume;
        if (newVolume > 0) {
            requestAnimationFrame(updateVolume);
        }
    }

    requestAnimationFrame(updateVolume);
}



//type
function typeText(index, textField) {
    var currentText = index;
    textField.textContent = ''; // Clear previous text
    var i = 0;

    // Clear previous interval if exists
    clearInterval(textField.typingInterval); // Assuming typingInterval is stored as a property of the textField

    textField.typingInterval = setInterval(function() {
        if (i < currentText.length) {
            textField.textContent += currentText.charAt(i);
            i++;
        } else {
            clearInterval(textField.typingInterval); // Clear the interval associated with this textField
        }
    }, typingSpeed);
}

//display account images
function displayAccountsImage() {
    document.getElementById("youtube").style.display = "block";
    document.getElementById("instagram").style.display = "block";
    document.getElementById("twitter").style.display = "block";
    document.getElementById("pinterest").style.display = "block";
}