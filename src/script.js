function displayPoem(response){

console.log(response.data.answer);
new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    loop:false,
    cursor:" ",
});
}


function genaratePoem(event){
    event.preventDefault();
    
    let userTopic=document.querySelector("#topic-searchBox");
    let apiKey='fa802d0et31047o097e3a46943abb4fe';
    let prompt=`response the user Instructions to genrate a french poem by the topic of ${userTopic.value}`;
    let context='your a romantic poet and love to write a poems send a short and sweet poem that i never heared any whear send  8 lines separate each line with <br/> element poem shoud be precise and after that 8 lines <br /> sign that send by Asiya at the bottom with salmon color usiing <strong> element no neeed to place any headings and paras at top just 8 line poem is enough';
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement=document.querySelector(".hidden");
        poemElement.classList.remove("hidden");
        poemElement.innerHTML=`<div class="blink">⌛ Genarating a poem on the topic of ${userTopic.value}</div>`;

    axios.get(apiUrl).then(displayPoem);

}

let submitButton = document.querySelector("#submit-button");
 submitButton.addEventListener("click",genaratePoem)