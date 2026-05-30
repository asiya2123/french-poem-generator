function genaratePoem(event){
    event.preventDefault();
    new Typewriter('#poem', {
    strings: ['let s be happy in world'],
    autoStart: true,
    delay:1,
    loop:false,
    cursor:" ",
});
}

let submitButton = document.querySelector("#submit-button");
 submitButton.addEventListener("click",genaratePoem)