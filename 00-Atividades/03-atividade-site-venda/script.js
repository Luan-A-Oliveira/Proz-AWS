// Método simples
const titulo = document.querySelector("#titulo");
titulo.innerHTML = "Meu site 2.0";

// Método complexo
const produto = document.createElement("div");
produto.setAttribute("id", "produto");

const nome = document.createElement("h2");
nome.textContent = "Notebook Dell Inspiron";

const descricao = document.createElement("p");
descricao.textContent = "Processador Intel Core i5, 8 GB de RAM e 256 GB de armazenamento SSD.";

const preco = document.createElement("span");
preco.textContent = "R$ 5.000,00";

produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

document.body.appendChild(produto);