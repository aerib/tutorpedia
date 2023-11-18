let suhu = 55
let kelembapan = 60
let isExhaustOn = false
let isHumidifierOn = false

if (suhu <= 55 && kelembapan >= 80) {
    isExhaustOn = false;
    isHumidifierOn = false;
    console.log ("Exhaust dan humidifier OFF");
} else if (suhu > 55 && kelembapan >= 80) {
    isExhaustOn = true;
    isHumidifierOn = false;
    console.log ("Exhaust ON dan humidifier OFF");
} else if (suhu > 55 && kelembapan < 80){
    isExhaustOn = true;
    isHumidifierOn = true;
    console.log ("Exhaust dan humidifier ON");
} else {
    console.log("No Input")
}