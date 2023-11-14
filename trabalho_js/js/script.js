document.addEventListener("DOMContentLoaded", inicializar);
function inicializar() {
  let btnDropdown = document.getElementById("btnDropdown");
  btnDropdown.addEventListener("click", alternarDropdown);
  window.addEventListener("click", fecharDropdown);
}
function alternarDropdown() {
  let menuDropdown  = document.getElementById("divMenuDropdown");
  menuDropdown.classList.toggle("exibir");
}
function fecharDropdown(event) {
  if (!event.target.matches('')) {
    let menusDropdown = document.getElementsByClassName("conteudoDropdown");

    for (let i = 0; i < menusDropdown.length; i++) {
      let menuAberto = menusDropdown [i];
      if (menuAberto.classList.contains('exibir')) {
        menuAberto.classList.remove('exibir');
      }
    }
  }
}
