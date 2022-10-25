//SCRIPT PAGINA LOG IN

const botao = document.getElementById("btnClique")

botao.addEventListener("click", fnMsg)

function fnMsg(){
  if (document.getElementById("inputEmail").value != ""){    
  alert("Solicitação de redefinição de senha enviada com sucesso!")
  return;
  }
}