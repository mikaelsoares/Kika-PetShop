const botao = document.querySelector("#scrollButton");

botao.addEventListener("click", () => {
  const alturaTotalPagina = document.body.scrollHeight;
  window.scroll({ top: alturaTotalPagina, behavior: "smooth" });
});
