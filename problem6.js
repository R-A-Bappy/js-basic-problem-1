const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_-+=<>?/{}~";

const allChars = [uppercaseChars, lowercaseChars, numericChars, specialChars];
let password = "";

for (let i = 0, j = 0; i < 10; i++, j++) {
    password += allChars[j][Math.floor(Math.random() * allChars[j].length)];
    if (j == 3)
        j = 0;
}

console.log(password);
