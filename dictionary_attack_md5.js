const fs = require("fs");
const crypto = require("crypto");

const target = "0110b96270248f746ecca06f1ce09746";

// Baca file pinlist.txt
const pinList = fs.readFileSync("pinlist.txt", "utf-8").trim().split("\n");

let found = false;

for (let pin of pinList) {
  pin = pin.trim(); // Hilangkan whitespace jika ada
  if (pin.length === 6) {
    // Pastikan 6 digit
    const hash = crypto.createHash("md5").update(pin).digest("hex");
    if (hash === target) {
      console.log(`PIN ditemukan: ${pin}`);
      found = true;
      break;
    }
  }
}

if (!found) {
  console.log("Tidak ada PIN yang cocok di list");
}
