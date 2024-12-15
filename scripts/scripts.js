  let ballEl = document.getElementById("ball");
  ballEl.style.left="0px";
  
  var velocidad=2;

  function velocidadClick(){
    velocidad=velocidad+1;
    if (velocidad > 10) {
      velocidad = 2;
    }
  }


  
  var clientWidth = document.documentElement.clientWidth - 150;
  var left = 0;
  let newLeft = 0;

  var moveBall=function(){
      if (left == 1) {
        if (newLeft > 0 ) {
          newLeft=newLeft-velocidad;
        } else {
          left = 0;
        }
      } else {
        if (newLeft < clientWidth) {
          newLeft=newLeft+velocidad;
        } else {
          left = 1;
        }
      }
  
      ballEl.style.left = newLeft + "px";
      window.requestAnimationFrame(moveBall);
  }



    moveBall();
document.getElementById("titulo").onclick = function() {velocidadClick()};


let miImage = document.getElementById("coleccion")
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/balon_1.png") {
    miImage.setAttribute("src", "images/balon_2.png");
    ballEl.setAttribute("src","images/balon_1.png");
  } else if (miSrc === "images/balon_2.png") {
    miImage.setAttribute("src", "images/balon_3.png");
    ballEl.setAttribute("src","images/balon_2.png");
  } else if (miSrc === "images/balon_3.png") {
    miImage.setAttribute("src", "images/balon_4.png");
    ballEl.setAttribute("src","images/balon_3.png");
  } else if (miSrc === "images/balon_4.png") {
    miImage.setAttribute("src", "images/balon_5.png");
    ballEl.setAttribute("src","images/balon_4.png");
  } else {
    miImage.setAttribute("src", "images/balon_1.png");
    ballEl.setAttribute("src","images/balon_5.png");
  }
};


let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "¿Cuándo se inventó el fútbol?, " + miNombre;
  }
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "¿Cuándo se inventó el fútbol?, " + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};




 const imagen = document.getElementById("ball");
  
   let angulo = 0;

   var rotate = function() {
    if(left==0) {
      angulo += 1 + velocidad/2;
    }
    else {
      angulo -=1 + velocidad/2;
    }

     imagen.style.transform = `rotate(${angulo}deg)`;
     window.requestAnimationFrame(rotate);
  };
  
rotate();