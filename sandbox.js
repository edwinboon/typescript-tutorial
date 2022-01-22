var character = 'Mario';
console.log({ character: character });
var inputs = document.querySelectorAll('input');
console.log({ inputs: inputs });
inputs.forEach(function (input) {
    console.log({ input: input });
});
