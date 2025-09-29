const crypto = require("crypto");

const target = "8d4c531eb4b0f54df72aa6839abbeaec";

let found = false;

for (let s = 0; s < 10; s++) {
  const salt = s.toString();
  for (let i = 0; i < 1000000; i++) {
    const pin = i.toString().padStart(6, "0");
    const inputStr = salt + pin;
    const hash = crypto.createHash("md5").update(inputStr).digest("hex");
    if (hash === target) {
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
