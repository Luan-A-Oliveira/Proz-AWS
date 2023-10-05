const titulo = document.getElementById("titulo");
const listaNO = document.querySelector("ul");
const ancora = document.querySelector("a");
const listaO = document.getElementById("lista-ordenada");


titulo.innerText = ("Este é o título da página");

ancora.innerText = ("Proz educação");

listaNO.innerHTML = `
        <li>texto</li>
        <li>texto</li>
        <li>texto</li>
`;

listaO.innerHTML = `
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
`;