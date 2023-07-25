const prompt = require('prompt-sync')();
const st = prompt();
const stLength = st.length - 1;
let rst = "";
for (let i = stLength; i >= 0; i--) {
    rst += st[i];
}
console.log(rst);

