const sounds = [
    { name: "kick", src: "./assets/tekk-kick-298401.mp3" },
    { name: "snare", src: "./assets/snare-drum-2-427922.mp3" },
    { name: "closeHat", src: "./assets/closedhatroomphrase-009-90485.mp3" },
    { name: "openHat", src: "./assets/open-hat-snake-100639.mp3" },
    { name: "highTom", src: "./assets/dr-tom-065-36062.mp3" },
    { name: "lowTom", src: "./assets/tom-2-85124.mp3" },
    { name: "crash", src: "./assets/tr707-crash-cymbal-241376.mp3" }
];


function playkick(){
   
    console.log("hello");
    const audio= new Audio(sounds[0].src)
    audio.play()
   
} 

function playsnare(){

    console.log("hello");
    const audio=new Audio(sounds[1].src)
    audio.play()

}

function playcloseHat(){
    console.log("hello");
    const audio= new Audio(sounds[2].src)
    audio.play()
}

function playOpenHat(){
    console.log("hello");
    const audio= new Audio(sounds[3].src)
    audio.play()
}

function playhighTom(){
    console.log("hello");
    const audio= new Audio(sounds[4].src)
    audio.play()
}

function playlowTom(){
    console.log("hello");
    const audio= new Audio(sounds[5].src)
    audio.play()
}

function playcrash(){
    console.log("hello");
    const audio= new Audio(sounds[6].src)
    audio.play()
}


