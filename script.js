let body = document.body;
let audio = new Audio();
let displayKey = document.querySelector("#display-key");
let displayNote = document.querySelector("#display-note");

body.addEventListener("keypress", function (dets) {
    if (dets.code == 'KeyQ') {
        audio.src = 'A1.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C3'
    }
    if (dets.code == 'KeyW') {
        audio.src = 'Bhagavanth Kesari Dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'D3'
    }
    if (dets.code == 'KeyE') {
        audio.src = 'Voicy_Totla seth.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'E3'
    }
    if (dets.code == 'KeyR') {
        audio.src = 'Voicy_TMKOC Tapu Sena.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F3'
    }
    if (dets.code == 'KeyT') {
        audio.src = 'Voicy_Rahul Gandhi aloo sona machine.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G3'
    }
    if (dets.code == 'KeyY') {
        audio.src = 'Voicy_Padhaai Likhaai me dhyan do.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A3'
    }
    if (dets.code == 'KeyU') {
        audio.src = 'Voicy_Moye More.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'B3'
    }
    if (dets.code == 'KeyI') {
        audio.src = 'Voicy_Laugh.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C4'
    }
    if (dets.code == 'KeyO') {
        audio.src = 'Voicy_Jetha Nonsense.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'D4'
    }
    if (dets.code == 'KeyP') {
        audio.src = 'Voicy_Hey Ma Mataji.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F4'
    }
    if (dets.code == 'KeyA') {
        audio.src = 'Voicy_Fart.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G4'
    }
    if (dets.code == 'KeyS') {
        audio.src = 'Voicy_Bolo Zubaan Kesari.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A4'
    }
    if (dets.code == 'KeyD') {
        audio.src = 'Voicy_Babuchak Chup re.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'B4'
    }
    if (dets.code == 'KeyF') {
        audio.src = 'Technologiya.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C5'
    }
    if (dets.code == 'KeyG') {
        audio.src = 'Si Sir Si Sir Audio Download.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C#3'
    }
    if (dets.code == 'KeyH') {
        audio.src = 'Rom-Rom-Bhaiyo.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'D#3'
    }
    if (dets.code == 'KeyJ') {
        audio.src = 'Rahul-Ghandi-Khatam.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F#3'
    }
    if (dets.code == 'KeyK') {
        audio.src = 'Pehchan Kaun Ringtone Mp3 Download Pagalworld.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G#3'
    }
    if (dets.code == 'KeyL') {
        audio.src = 'Pat Se Headshot - Game Dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A#3'
    }
    if (dets.code == 'KeyZ') {
        audio.src = 'Nahi Nahi Salunke Kuch Toh Gadbad Hai Meme Audio Download.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C#4'
    }
    if (dets.code == 'KeyX') {
        audio.src = 'Kon Bhonk Raha Hai Badtameez Notification Tone.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'D#4'
    }
    if (dets.code == 'KeyC') {
        audio.src = 'Just Looking Like A Wow _ Dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F#4'
    }
    if (dets.code == 'KeyV') {
        audio.src = 'Humnava Mere Dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G#4'
    }
    if (dets.code == 'KeyB') {
        audio.src = 'Holi Kab Hai Sholay Dialogue Mp3 Download.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A#4'
    }
    if (dets.code == 'KeyN') {
        audio.src = 'hindi-meme---ye-majboor-hai-par-aap-nahi-made-with-Voicemod.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C6'
    }
    if (dets.code == 'KeyM') {
        audio.src = 'hindi-meme---wah-kya-scene-hai-made-with-Voicemod.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C#6'
    }
    if (dets.code == 'Space') {
        audio.src = 'hindi-meme---mard-ko-dard-nahi-hota-made-with-Voicemod.mp3'
        audio.play()
        displayKey.innerHTML = "space"
        displayNote.innerHTML = 'D6'
    }
    if (dets.code == 'Digit1') {
        audio.src = 'hindi-meme---accha-humko-sikha-riya-hai-made-with-Voicemod.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'D#6'
    }
    if (dets.code == 'Digit2') {
        audio.src = 'Dum Hai To Rok Ke Dikha Shekhawat Dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'E6'
    }
    if (dets.code == 'Digit3') {
        audio.src = 'Daya Kuch N Kuch To Gadbad Jarur Hai Audio Download.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F6'
    }
    if (dets.code == 'Digit4') {
        audio.src = 'Chalo.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'F#6'
    }
    if (dets.code == 'Digit5') {
        audio.src = 'wanted.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G6'
    }
    if (dets.code == 'Digit6') {
        audio.src = 'agneepath_dialogue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'G#6'
    }
    if (dets.code == 'Digit7') {
        audio.src = 'knock_don_don.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A6'
    }
    if (dets.code == 'Digit8') {
        audio.src = 'don_dialougue.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'A#6'
    }
    if (dets.code == 'Digit9') {
        audio.src = 'kgf_dialogue_dj_bgm2.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'B6'
    }
    if (dets.code == 'Digit0') {
        audio.src = 'rajkumar.mp3'
        audio.play()
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C7'
    }
    if (dets.code == 'Enter') {
        location.reload();
        displayKey.innerHTML = dets.key
        displayNote.innerHTML = 'C#7'
    }
    console.log(dets.code);
})