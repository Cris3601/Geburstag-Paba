const name=getNameFromURL() ||"Paba";

const nameEle = document.getElementById("name");


createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles);

ligtUpName(1);


function createNameSpans(name) {
    
    let nameArray = name.split("");
    let htmlString = "";
    nameArray.forEach((letter, index)=> {
               htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;       
                       });
    nameEle.innerHTML = htmlString;
}

function ligtUpName(n){
    let length = letterEles.length;
    for(let i = 0; i < length; i++){
        let ele = letterEles [i];
        ele.className = (n + i) % 2 == 0 ? "yellow" : "green";
            //ternary syntax: bedingung? true: falsch;
    }
    
    setTimeout(function(){
        ligtUpName(n+1);
          }, 500);
    }
    
    
function getNameFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlName = urlParams.get("name");
    return urlName;
    
}