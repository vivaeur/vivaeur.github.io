let editor = document.querySelector("textarea");
let button = document.querySelector("button");


utton.addEventListener('click', () => {
    editor.select();
    // document.execCommand("copy"); méthode numéro 1
    navigator.clipboard.writeText(editor.value); // méthode numéro 2
    button.innerText = "Copié !";
  });