console.log('Hello World!');
randomColor();

function randomColor() {
  var color = '';
  var colorCode = ['#FF00FB', '#9D00FF', '#FFB300', '#FF5000', '#FF00F0', '#8800FF', '#00FF9A', '#459817', '#00FFB3', '#FF001F', '#FF00D0']; // colors
  var className = document.getElementsByClassName("cng"); // class name to random color
  var i;
  color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className.length; i++) {
    className[i].style.color = color;
  }
}



const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["I'm a web Developer", "I'm a Web Designer", "I'm a Web App Developer", "I'm a Electric Repring"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})







bgimg();

function bgimg() {
  var color = 'bgimg/';
  var colorCode = ['1.jpg', '3.jpg', '2.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg']; // colors
  var className1 = document.getElementsByClassName("body"); // class name to random color
  var i;
  color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className1.length; i++) {
    className1[i].style.backgroundImage = 'url(' + color + ')';

  }
}


/// loading System 
setTimeout(loadImg, 1000);

function loadImg() {
  document.getElementById("img").style.display = "none";
  document.getElementById("lod-txt").style.display = "block";

}

//onload data function name appload()
function appload() {
  document.getElementById("top-lod").style.display = "none";

  document.getElementById("boxpt").style.display = "block";
  /// control 
  document.getElementById("img_box").style.display = "block";

  document.getElementById("id2").style.display = "block";
  //click.play();

}
/// ////// end loading system //
////// java daya system with Server ////

function nahidio() {
  document.getElementById("data").value;

}

function skill() {
  document.getElementById("titf").innerHTML = "Skill"

}

// audio data 
var audio = document.getElementById("audio")

function aoaly() {
  audio.play();
  document.getElementById("texte").style = " box-shadow: 0 0 10px 0 black;border: 5px solid green;"
  click.play();
}


function bodys() {
  // document.getElementById("id1").style.display="block"
}

/// close ads 
function candata() {
  document.getElementById("id2").style.display = "none";
  click.play();
}
// menu mobile 
function menu1() {
  document.getElementById("menu").style.display = "block";
  click.play();
}

function menu2() {
  document.getElementById("menu").style.display = "none";
  click.play();
}

/// card function
function rop() {
  document.getElementById("xxx").style = " box-shadow: 0 0 10px 0 black;border: 1px solid green;"

}


//=------- The Menu System =====/////
/// home Button 
function home() {
 
  windo.location.href="https://www.nahidhk.info/v2.0"
  click.play();

}

//. mach lerning button 

function elml() {
  alert("click Home elml");
  click.play();

}

//// Electric cercet button
function ec() {
  alert("click ec Button");
  click.play();

}

// web developer button
function webDeve() {
  alert("click webDeve Button");
  click.play();

}
/// Blogs 

function blogs() {
  window.location.href="http://nahidhk.blogspot.com"
  click.play();

}

/// cont 

function cont() {
window.location.href="contact.html"
  click.play();
}
/// \\\\\====== end menu button ===\//

//// open is a new data and open a new schol function //

// Facebook
function facebook(){
  alert("Facebook")
  click.play();
}
/// x Twitter

function xp(){
  alert("xp")
  click.play();
}
// Instagram 
function instagram() {
  alert("Instagram")
  click.play();
}
// GitHub
function github() {
  alert("GitHub")
  click.play();
}
//TikTok

function tiktok() {
  alert("TikTok")
  click.play();
}
// LinkedIn
function linin() {
  alert("LinkedIn")
  click.play();
}


/// form function 
function mobi(){
  //click.play();
  pk.play();
}

function email(){
  pk.play();
}
var pk = document.getElementById("pk");

// data Save 
function dataSave(){
  document.getElementById("send_box").style.display="block"
 
  var name = document.getElementById("name").value;
 var number = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var massage = document.getElementById("massage").value;
  
document.getElementById("name_out").innerText=name; 
document.getElementById("mobile_out").innerText=number;  
document.getElementById("email_out").innerText=email;
document.getElementById("massage_out").innerText=massage;  
  pk.play();

  //alert(name);
}
// 
function xpx(){
  document.getElementById("send_box").style.display="none";
  pk.play();
}

