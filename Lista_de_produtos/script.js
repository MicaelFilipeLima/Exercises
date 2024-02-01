const produtos = [
    { Nome: "Computador", Categoria: "Tecnologia", preco: "800" },
    { Nome: "Telemovel", Categoria: "Tecnologia", preco: "600" },
    { Nome: "TV", Categoria: "Tecnologia", preco: "758" }
  ];

  let produtoTabela = document.getElementById("produtoLista");

  for (let i = 0; i < produtos.length; i++) {
    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('th');
    produtoTabelaDadosNome.innerHTML = produtos[i].Nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);

    let produtoTabelaDadosCategoria = document.createElement('th');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].Categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);

    let produtoTabelaDadosPreco = document.createElement('th');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);

    produtoTabela.appendChild(produtoTabelaLinha);
  }