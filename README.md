# EXPLICACIÓN DE LA TAREA

* ## WEB

En esta web puedes ver un poco de la historia del fútbol, donde se creó, cuando... Además, al final hay una imagen de un balón de fútbol en la cual si haces click va cambiando el balón y puedes ver un poco de la evolución de los balones de fútbol.

Esta web tiene su estructura inspirada en: [De los baby boomers a la Generación T, tenemos una misión: salvar el planeta](https://www.abc.es/contentfactory/post/2019/10/24/conproposito-coca-cola-mision-salvar-el-planeta-hagamoslo-juntos/).

* ## CÓDIGOS

La web tiene 5 códigos de JS claramente diferenciados:

1. Movimiento de la pelota
2. Aumento de velocidad
3. Rotación de la pelota
4. Intercambiador de imágenes
5. Cambio de usuario


### 1. Movimiento de la pelota

Para esto he definido la funcion **moveBall**:
```
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
```

Tiene dos estados, **left** igual a 1 y **left** igual a 0.

Dentro de los **if** es donde varío el valor de **newLeft**, el cual se utilizará como posición de la imagen en px. El valor **newLeft** varía dependiendo de **velocidad**.

**clientWidth** limita el movimiento a todo el ancho de la página.


### 2. Aumento de velocidad

Con esta función aumento la velocidad de movimiento de la pelota:
```
function velocidadClick(){
    velocidad=velocidad+1;
    if (velocidad > 10) {
      velocidad = 2;
    }
  }
```
Aquí defino un valor a **velocidad** que va incrementando si das click en la imagen y que cuando supera "10" vuelve a "2". De esta forma consigo que newLeft aumente la velocidad.


### 3. Rotación de la pelota

Ahora la pelota se mueve de lado a lado de la pantalla, pero se ve muy forzado, para ello decidí hacer la siguiente función:
```
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
```
Aquí vuelvo a utilizar los dos estados de **left**, para que la pelota gire en un sentido o en otro, dependiendo de la drirección en la que vaya; y **velocidad** para que simule que, igual que se mueve más rápido, rueda más rápido.


### 4. Intercambiador de imágenes

Para ver la evolución de la pelota, se me ocurrió hacerlo de forma interactiva y que, además, la pelota se intercambie por la que está en movimiento:
```
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
```
Esta función coge el atributo **src** de la imagen que está en "Evolución del balón de fútbol" y lo compara. Cuando el **src** es igual, intercambia las imágenes.


### 5. Cambio de usuario

Por último, añadí un botón de cambio de usuario:

```
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

```
Cuando entras a la página o cuando le das al botón de cambiar de usuario, aparece un campo de texto en el que puedes escribir tu nombre y aparece al lado del título de la web.


* ## ENLACE A LA WEB

  Puedes ver la web en este [enlace](https://l3inad2907.github.io/).
