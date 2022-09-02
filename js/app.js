const imagen1 = document.getElementById("imagen-1");
const imagen2 = document.getElementById("imagen-2");

const cargarImagen = (entradas) => {
  //isIntersecting indica con un valor booleano si el elemento esta visible o no.
  //target indica al elemento que se esta observando.
  console.log(observador);
  console.log(entradas);

  entradas.forEach((element) => {
    if (element.isIntersecting) {
      console.log("La imágen esta en pantalla");
      element.target.classList.add("visible");
    } else {
      console.log("La imágen sale del viewport en pantalla");
      element.target.classList.remove("visible");
    }
  });
};

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px 0px 0px 0px", //permite agregar margenes al observador. ej: '100px 100px 100px 100px'
  threshold: 0.5, //hace referencia al elemento y recibe valores de 0 a 1. al tener el valor de 1 quiere decir que el elemento es completamente visible en el viewport
});

observador.observe(imagen1); //Le pasamos el elemento que va a observar
observador.observe(imagen2); //Le pasamos el elemento que va a observar
