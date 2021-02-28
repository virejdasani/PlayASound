var sounds = ["assets/AirHorn.mp3", "assets/CarAlarm.mp3", "assets/DyingRobot.mp3"]

// playButton onClickListener
document.getElementById("playButton").addEventListener('click', function () {

    // Clear the "Sound Played" text if sound is being played for the second time
    document.getElementById("soundPlayed").innerHTML = ""

    // Pick a random sound
    let randomSound = random(sounds)

    // Assign the random sound to playSound
    var playSound = new Audio()
    playSound.src = randomSound

    console.log("Playing", randomSound)
    playSound.play()
    
    // Show "Sound Played" text
    setTimeout(soundPlayed, 4000)
})

function soundPlayed() {
    document.getElementById("soundPlayed").innerHTML = `
    <p>The sound has been played</p>`
}

// Function to get random values from arrays 
function random(array) {
    let getRandom = Math.floor(Math.random() * array.length)
    return array[getRandom]
}