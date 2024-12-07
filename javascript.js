function makePrompt(callback) {
    prompt(alert("Hello World!"));
}
function helloWorld(callback) {
  while (true) {
      callback(alert("Hello World!"));
      break
  }
}
console.log(helloWorld(callback()));
