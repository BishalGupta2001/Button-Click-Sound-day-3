let btn = document.querySelector("#btn"); //selected button and store in btn
btn.addEventListener("click" , function(){  // when click this function will work
    let audio = new Audio(); // new Audio() is a constructor
    audio.src = "./click.wav"; // given audio its source
    audio.play(); // it will play the audio;
});
