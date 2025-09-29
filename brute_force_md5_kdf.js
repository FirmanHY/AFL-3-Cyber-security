const crypto = require("crypto");

const target = "b20f8b0405b88e2b0b50eb3356d34ba7";

let found = false;

for (let s = 0; s < 10; s++) {
  const salt = s.toString();
  for (let i = 0; i < 1000000; i++) {
    const pin = i.toString().padStart(6, "0");
    let h = salt + pin; // h0
    h = crypto.createHash("md5").update(h).digest("hex"); // h1
    h = crypto.createHash("md5").update(h).digest("hex"); // h2
    h = crypto.createHash("md5").update(h).digest("hex"); // h3
    if (h === target) {
      console.log(`Salt: ${salt}, PIN: ${pin}`);
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}

if (!found) {
  console.log("Tidak ada yang cocok");
}
