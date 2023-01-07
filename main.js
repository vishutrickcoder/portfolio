const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent)

const phrases = ["Software Engineer...","Student.....","Being Human....","Stunt Man"]
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150
const erasing = 75
function printletters(phrase){
    if(letterIndex == phrase.length){
        //clear letter 
        clearLetters();
    }
    else if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;

        setTimeout(function(){
            printletters(phrase)
        },typingSpeed)

    }
    }


function clearLetters(){
    if(letterIndex == -1){
        phraseIndex =(phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printletters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
        let updatedphrase = "";
        for(let index =0 ;index < letterIndex; index++){
            updatedphrase += phrases[phraseIndex].charAt(index);
            }
        // console.log(updatedphrase)
            dynamicContent.textContent = updatedphrase;
            letterIndex -= 1
            setTimeout(clearLetters,erasing)
    }
}
printletters(phrases[phraseIndex])

window.addEventListener('scroll', function(){
    // console.log(this.window.scrollY)
    let intro = this.document.querySelector('.intro');
    if (this.window.scrollY >= (intro.offsetHeight + intro.offsetTop )) {
        this.document.querySelector(".header").style.position = "sticky";
    }
    else{
        this.document.querySelector(".header").style.position = "revert";
    }
})