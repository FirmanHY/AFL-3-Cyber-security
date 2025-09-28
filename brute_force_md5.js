const crypto = require("crypto");

const target = "0110b96270248f746ecca06f1ce09746";

let found = false;

for (let i = 0; i < 1000000; i++) {
  const pin = i.toString().padStart(6, "0"); // Format sebagai 6 digit dengan zero padding
  const hash = crypto.createHash("md5").update(pin).digest("hex");
  if (hash === target) {
    console.log(`PIN ditemukan: ${pin}`);
    found = true;
    break;
  }
}

if (!found) {
  console.log("Tidak ada PIN yang cocok");
}
