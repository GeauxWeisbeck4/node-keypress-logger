import readline from "node:readline";

const rl = readline.createInterface({
  terminal: true,
  input: process.stdin,
  output: process.stdout,
});

console.log("What is your name?");

let inmput = "";

rl.input.on("keypress", (event, rl) => {
  console.log(event, rl)
})

console.log(process.argv);