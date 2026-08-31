let total = 0;

function adicionar(){
  total++;
  document.getElementById("carrinho").innerText = total;
  alert("Produto adicionado ao carrinho!");
}

function topo(){
  window.scrollTo({top:0,behavior:"smooth"});
}

function categoria(nome){
  document.querySelectorAll(".produto").forEach(p=>{
    p.style.display = p.classList.contains(nome) ? "block" : "none";
  });
  document.getElementById("produtos").scrollIntoView();
}

document.getElementById("busca").onkeyup = function(){
  let texto = this.value.toLowerCase();

  document.querySelectorAll(".produto").forEach(p=>{
    p.style.display = p.innerText.toLowerCase().includes(texto)
      ? "block" : "none";
  });
};