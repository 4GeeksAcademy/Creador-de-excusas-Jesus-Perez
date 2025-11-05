import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
 
  const sujetos = ["mi hamster", "mi novia", "el socialismo", "un boliviano"];
  const acciones = ["se comió", "fulminó", "traumatizó", "profanó"];
  const objetos = ["la economía", "mi dignidad", "a la clase obrera", "un radiador"];
  const tiempos = ["antes de darse cuenta", "después de su descanso", "en Perú", "después de desayunar", "porque se sentía infeliz"];

  let sujeto = Math.floor(Math.random() * sujetos.length -1);
  let accion = Math.floor(Math.random() * acciones.length -1);
  let objeto = Math.floor(Math.random() * objetos.length -1);
  let tiempo = Math.floor(Math.random() * tiempos.length -1);

  let palabraSujeto = sujetos[sujeto];
  let palabraAccion = acciones[accion];
  let palabraObjeto = objetos[objeto];
  let palabraTiempo = tiempos[tiempo];

  let excusa = palabraSujeto + " " + palabraAccion + " " + palabraObjeto + " " + palabraTiempo + ".";

  
  let elementoExcusa = document.getElementById("excusa");
  elementoExcusa.innerText = excusa;
};
