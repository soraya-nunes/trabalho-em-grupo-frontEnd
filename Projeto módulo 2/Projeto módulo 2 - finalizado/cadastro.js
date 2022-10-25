
  $(document).ready(function() {

    function limpa_formulário_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    $("#inputCEP").focusout(function(){
        var cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;
            if(validacep.test(cep)) {

                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#inputAddress").val(dados.logradouro);
                        $("#inputBairro").val(dados.bairro);
                        $("#inputCity").val(dados.localidade);
                        $("#inputEstado").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

document.getElementById("inputSenha").addEventListener("focusout", validarSenha);
document.getElementById("confirmarSenha").addEventListener("focusout", validarSenha);
// FUNÇÃO PARA O MENU FICAR ROXO AO SCROLLAR 

window.onscroll = function mudarMenu(){
    if (window.scrollY > 300){
        document.getElementById("menu").style.backgroundColor = "#61378C";
        document.getElementById("menu").style.boxShadow = "2px 2px 10px #000000";
    } else{
        document.getElementById("menu").style.backgroundColor = "";
        document.getElementById("menu").style.boxShadow = "";
    }

}

// FIM DA FUNÇÃO PARA O MENU FICAR ROXO AO SCROLLAR 

let senhaValidada = false;
function validarSenha(){
  if (document.getElementById("inputSenha").value != "" && document.getElementById("confirmarSenha").value != ""){
    if (document.getElementById("inputSenha").value != document.getElementById("confirmarSenha").value){
      document.getElementById("inputSenha").parentElement.parentElement.classList.add("senhaInvalida");
    } else {
      document.getElementById("inputSenha").parentElement.parentElement.classList.remove("senhaInvalida");
      senhaValidada = true;
    }
  }
}

function simularEnvio(){
  let validado = true;

  document.querySelectorAll("[required]").forEach(function(i){
    if (validado == false){
      return;
    }
    if (i.type === "text"){
      if (!i.value) {
        validado = false;
        return; 
        }
      }
  });

  if (validado){
  document.getElementById("confirmacaoDeEnvio").classList.toggle("d-none");
  }

}