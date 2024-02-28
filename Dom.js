// const myParagraph = document.getElementById("my-paragraph");

// myParagraph.textContent = "The text content of this paragraph is changed by JavaScript!";

document.getElementById("firstPara").innerHTML = "<h1>Hello World!</h1>";
document.getElementById("secondPara").innerHTML ="<h1>Hello my world!</h1>";
document.getElementById("someone").innerHTML = "<h2>somthing is right</h2>";


document.getElementById("someone").innerHTML = "<h1> hello there how are you</h1>";

document.getElementById("someone").innerHTML = "<h2> this is a javascript page for learing</h2>"

document.getElementById("someone").innerHTML ="<h1> foundation of HTML and Javasricpt page</h1>"

const someOne = document.getElementById('someone'); 

if (someOne) {

    someOne.textContent ="This text is changed by JavaScript!";
    someOne.style.color ="red";
    someOne.style.color ="blue";
    someOne.style.backgroundColor = "yellow"

    const someTag = document.getElementsByTagName('p');
    someTag.textContent = "this is the new test in h1 tag.";
    } else{

    }
