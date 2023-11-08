const botao = document.querySelector("#scrollButton");

botao.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight, behavior: "smooth" });
  botao.style.display = "none";
});
