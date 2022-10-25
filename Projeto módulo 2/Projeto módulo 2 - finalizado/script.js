// SCRPIT PARA O MENU

window.onscroll = function mudarMenu(){
  if (window.scrollY > 300){
      document.getElementById("menu").style.backgroundColor = "#61378C";
      document.getElementById("menu").style.boxShadow = "2px 2px 10px #000000";
  } else{
      document.getElementById("menu").style.backgroundColor = "";
      document.getElementById("menu").style.boxShadow = "";
  }

}

//SCRIPT PRODUTOS

function lua() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("lua").classList.toggle("d-none");
  }

}

function marte() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("marte").classList.toggle("d-none");
  }

}

function jupter() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("jupter").classList.toggle("d-none");
  }

}




