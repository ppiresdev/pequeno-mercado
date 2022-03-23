/*Para exibir o barra de buscas */
const formBusca = document.querySelector(".form-busca");

document.querySelector("#busca-btn").onclick = () => {
  formBusca.classList.toggle("form-busca-ativo");
};

/*Para exibir o carrinho de compras */

const carrinhoCompras = document.querySelector(".carrinho-compras");

document.querySelector("#carrinho-compras-btn").onclick = () => {
  carrinhoCompras.classList.toggle("ativo");
};
