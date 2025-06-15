document.getElementById("total-produtos").value = 0;
let categoria = "todos";
let finalizar = document.querySelector(".compra-finalizada");
finalizar.style.display = "none";
let total = 0;
let qtProduto = 0;
let qtd = 1;
let quantidade = 1;
//OBJETOS: estruturas que representam entidades da vida real, como um carro, um ser vivo etc. Os objetos podem conter propriedades e métodos.
const produtos = [
  {
    nome: "McShake Grimace",
    image: "images/grimaceShake.png",
    valor: 8.0,
    categ: "doces",
    qt: 1,
  },

  {
    nome: "Mc Flurry Branco",
    image: "images/McFlurryBranco.png",
    valor: 9.5,
    categ: "doces",
    qt: 1,
  },

  {
    nome: "McShake OvoMaltine",
    image: "images/OvoMaltine.png",
    valor: 8.0,
    categ: "doces",
    qt: 1,
  },
  {
    nome: "Coca básica",
    image: "images/coquinha.png",
    valor: "8.05",
    categ: "bebidas",
    qt: 1,
  },

  {
    nome: "Del Valle Uva",
    image: "images/delValle.png",
    valor: "6.05",
    categ: "bebidas",
    qt: 1,
  },

  {
    nome: "Fanta básica",
    image: "images/fanta.png",
    valor: "7.50",
    categ: "bebidas",
    qt: 1,
  },
  {
    nome: "Melt Onion",
    image: "images/meltOnion.png",
    valor: "12.50",
    categ: "hamburgueres",
    qt: 1,
  },
  {
    nome: "Club House",
    image: "images/clubHouse.png",
    valor: "12.00",
    categ: "hamburgueres",
    qt: 1,
  },
  {
    nome: "Cheedar MCMelt",
    image: "images/McMelt.png",
    valor: "10.00",
    categ: "hamburgueres",
    qt: 1,
  },
];
//map() percorrer um array e manipula cada índice da forma que achar melhor
//filter() filtra itens do array de acordo com o que se pede, mas para eu manipular cada item deste array, necessido do foreach, que é um for usado para percorrer estruturas.

//OBSERVAÇÃO: o arquivo só carregava uma vez,então, tive que adicionar um evento de clique para ele executar o script dnv. Aí você me vem com a pergunta: por que foreach? O addEvent só manipula um elemento p vez.

produtos.map((produtin) => {
  document
    .getElementsByClassName("lista-produtos")[0]
    .insertAdjacentHTML(
      "beforeend",
      `<div class="produto" onclick="addProduto('${produtin.nome}', ${produtin.valor})"><img src="${produtin.image}"><p>${produtin.nome}</p><p>R$ ${produtin.valor}</p></div>`
    );
});

document.querySelectorAll("#menu").forEach((tag) =>
  tag.addEventListener("click", () => {
    console.log("Aqui: " + categoria);
    if (categoria == "todos") {
      document
        .querySelectorAll(".produto")
        .forEach((tagzita) => tagzita.remove());
      produtos.map((produtin) => {
        document
          .getElementsByClassName("lista-produtos")[0]
          .insertAdjacentHTML(
            "beforeend",
            `<div class="produto" onclick="addProduto('${produtin.nome}', ${produtin.valor})"><img src="${produtin.image}"><p>${produtin.nome}</p><p>R$ ${produtin.valor}</p></div>`
          );
      });
    } else if (categoria == "doces") {
      document
        .querySelectorAll(".produto")
        .forEach((tagzita) => tagzita.remove());
      produtos
        .filter((prod) => prod.categ == "doces")
        .forEach((doces) => {
          document
            .getElementsByClassName("lista-produtos")[0]
            .insertAdjacentHTML(
              "beforeend",
              `<div class="produto" onclick="addProduto('${doces.nome}', ${doces.valor})"><img src="${doces.image}"><p>${doces.nome}</p><p>R$ ${doces.valor}</p></div>`
            );
        });
    } else if (categoria == "bebidas") {
      document
        .querySelectorAll(".produto")
        .forEach((tagzita) => tagzita.remove());
      produtos
        .filter((prod) => prod.categ == "bebidas")
        .forEach((bebidas) => {
          document
            .getElementsByClassName("lista-produtos")[0]
            .insertAdjacentHTML(
              "beforeend",
              `<div class="produto" onclick="addProduto('${bebidas.nome}', ${bebidas.valor})"><img src="${bebidas.image}"><p>${bebidas.nome}</p><p>R$ ${bebidas.valor}</p></div>`
            );
        });
    } else if (categoria == "hamburgueres") {
      document
        .querySelectorAll(".produto")
        .forEach((tagzita) => tagzita.remove());
      produtos
        .filter((prod) => prod.categ == "hamburgueres")
        .forEach((hamburgueres) => {
          document
            .getElementsByClassName("lista-produtos")[0]
            .insertAdjacentHTML(
              "beforeend",
              `<div class="produto" onclick="addProduto('${hamburgueres.nome}', ${hamburgueres.valor})"><img src="${hamburgueres.image}"><p>${hamburgueres.nome}</p><p>R$ ${hamburgueres.valor}</p></div>`
            );
        });
    }
  })
);

//OBSERVAÇÃO: CRIANDO MODO CLARO E ESCURO.

function modoClaro() {
  let botao = document.getElementsByClassName("butao")[0];
  botao.classList.toggle("ativado");
  document.body.classList.toggle("ativado");
}

//MANIPULAR PRODUTO:
function addProduto(nome, valor) {
  const nomeProduto = String(nome);
  const valorProduto = parseFloat(valor);
  console.log("==========ADICIONANDO....==========")
  console.log("Quantidade: " + quantidade);
  total = parseFloat(document.getElementById("total-produtos").value);
  total += valorProduto;
  console.log("Nome: " + nomeProduto);
  console.log("Valor: " +valorProduto);
  qtProduto++;
  if (qtProduto <= 8) {
    document.querySelector(".produtos-compra").insertAdjacentHTML(
      "beforeend",
      `<div class="produto">
              <p>${nomeProduto}</p>
              <p id="vl" value="${valorProduto}">R$${valorProduto}</p>
              <p id="qtd">${qtd}</p>
              <div class="botoes">
                <button id="remover" value="${valorProduto}" onclick="removerProduto(event)">X</button>
                <button id="aumentar" onclick="aumentarProduto(event, ${valorProduto})">+</button>
              </div>`
    );
    document.querySelector("#total-produtos").value = `${total}`;
  } else {
    document.querySelector("#total-produtos").value = 0;
    total = 0;
    qtProduto = 0;
    const filhos = Array.from(
      document.querySelector(".produtos-compra").children
    );
    filhos.forEach((fizinho) => {
      fizinho.remove();
    });
  }
}

function aumentarProduto(event) {
  let avo = event.target.parentElement.parentElement;
  let totalzin = parseFloat(document.querySelector("#total-produtos").value);
  let vlProduto = parseFloat(avo.querySelector("#vl").getAttribute("value"));
  quantidade = parseInt(avo.querySelector("#qtd").textContent);
  quantidade++;
  avo.querySelector("#qtd").textContent = quantidade;
  console.log( "=================== Aumentando...... ===================" )
  console.log("Var total: " + total)
  console.log("Preço Anterior: " + totalzin)
  console.log("Quantidade: " + quantidade)
  console.log("Total dele: " + vlProduto * quantidade)
  console.log("Valor unitário: " + vlProduto);
  totalzin += vlProduto;
  console.log("Totalzin: " + totalzin)
  document.querySelector("#total-produtos").value = `${totalzin}`;
}

function removerProduto(event) {
  let valor = parseFloat(event.target.getAttribute("value"));
  let avo = event.target.parentElement.parentElement
  let totalissimo = parseFloat(document.querySelector("#total-produtos").value)
  const qt = parseInt(avo.querySelector("#qtd").textContent)
  console.log("==========REMOVENDO......==========")
  console.log("Antes: " +total)
  console.log("AQui: " + totalissimo)
  totalissimo -= (valor * qt);
  console.log("Quantidade: " + qt)
  console.log("Total: " + total)
  console.log("Valor: " + valor)
  console.log("Valor qt: " + valor * qt)
  event.target.parentElement.parentElement.remove();
  document.querySelector("#total-produtos").value = `${totalissimo}`;
}

function cancelarCompra() {
  total = 0;
  qtProduto = 0;
  const filhos = Array.from(
    document.querySelector(".produtos-compra").children
  );
  filhos.forEach((fizinho) => {
    fizinho.remove();
  });

  document.querySelector("#total-produtos").value = 0;
}

function confirmarCompra() {
  console.log(finalizar);
  finalizar.style.display = "flex";
  const filhos = Array.from(
    document.querySelector(".produtos-compra").children
  );
  filhos.forEach((filho) => {
    filho.remove();
  });
  total = 0;
  qtProduto = 0;
  console.log("EAI?????");
}
