let fever_start = 0;
let fever_end = 0;

const noteScores = {
    "01": 200, // Small
    "02": 200, // Small (Up)
    "03": 200, // Small (Down)
    "04": 300, // Medium 1
    "05": 300, // Medium 1 (Up)
    "06": 300, // Medium 1 (Down)
    "07": 300, // Medium 2
    "08": 300, // Medium 2 (Up)
    "09": 300, // Medium 2 (Down)
    "0A": 400, // Large 1
    "0B": 400, // Large 2
    "0C": 300, // Raider
    "0D": 400, // Hammer
    "0E": 400, // Gemini
    "0F": 'hold', // Hold Note
    "0G": 'masher', // Masher
    "0H": 200, // Gear
    "11": 500, // Boss Melee 1
    "12": 500, // Boss Melee 2
    "13": 200, // Boss Projectile 1
    "14": 200, // Boss Projectile 2
    "15": 200, // Boss Projectile 3
    "16": 'masher', // Boss Masher 1
    "17": 'masher', // Boss Masher 2
    "18": 200, // Boss Gear
    "20": 100, // P item
    "21": 300, // Ghost
    "22": 300, // Heart
    "23": 200 // Blue Note
}

const rinNotes = {
    "0H": 200, // Gear
    "21": 300, // Ghost
    "22": 300, // Heart
    "23": 200 // Blue Note
}

(async () => {
    const beatsFile = JSON.parse(await (Bun.file('./data/beats.json').text()))
    beatsFile.sort((a, b) => a.offset - b.offset)

    let maxCombo = 70;
    let modifier = 1;
    let rinFlag = false;
    let maxFever = 120;

    let combo = 0;
    let currCombo = 1;
    
    if (character == "Joker") {
        maxCombo = 70;
    }
    if (character == "Little Devil") {
        modifier += 0.25;
    }
    if (character == "Bunny Girl") {
        rinFlag = true;
    }

    for (let i = 0; i < beatsFile.length; i++) {
        
        if (combo <= maxCombo && combo % 10 == 0) currCombo += 1; 
        const beat = beatsFile[i];
        if (beat.offset == 0) continue;
        let score = noteScores[beat.note_type] * currCombo;

        
        if (beat.fever_start > fever_start) {
            fever_start = beat.fever_start;
            fever_end = beat.fever_end;
        }

        if (beat.offset >= fever_start && beat.offset <= fever_end) {
            // 300 * 1.5 * (1 + 0.25 + 0.05 + 0.5)
        }
    }
})




