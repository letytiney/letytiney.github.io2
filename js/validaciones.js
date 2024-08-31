
const nombre = document.getElementById("nombres").value;
const apellido = document.getElementById("apellidos").value;
const noAfli = document.getElementById("noAfiliacion").value;
const cui = document.getElementById("dpi").value;
const nits = document.getElementById("nit").value;
const fechaNacimientoInput = document.getElementById("fNacimientos").value;
const fechaAfiliacionInput = document.getElementById("fAfiliacion").value;
const salario = document.getElementById("SalarioPromedio").value;
const noContribuciones = document.getElementById("contribuciones").value;


function validaciones(event){
    event.preventDefault();
    const nombre = document.getElementById("nombres").value;
console.log(nombre)
   

  /* function validaciones(){
    if (noContribuciones === "nulo") {
        alert("Por favor, selecciona una causa válida.");
        return; // Salir de la función si la opción es "nulo"
    }
}
    validaciones();
    */
   //Validacion de edad minima
    if (!validarEdadMinima(fechaNacimientoInput)) {
        alert("El afiliado debe tener al menos 60 años.");
        return;
    }
        console.log("Fecha de nacimiento válida:", fechaNacimientoInput);

   function validarEdadMinima(fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad >= 60;
}

if (!validarFechaAfiliacion(fechaAfiliacionInput)) {
    alert("La fecha de afiliación debe ser anterior al 1 de febrero de 2011.");
    return;
}

console.log("Fecha de afiliación válida:", fechaAfiliacionInput);



function validarFechaAfiliacion(fechaAfiliacion) {
    const fechaAfiliacionDate = new Date(fechaAfiliacion);
    const fechaLimite = new Date("2011-02-01");
    return fechaAfiliacionDate < fechaLimite;
}

function calculoJubilacion(){
    remunacionBase = 0.5*salario;
    console.log(`Remuneracion base es ${remunacionBase}`);
    contribucionIGSS=120;
    contribucionesAdicionales = noContribuciones-contribucionIGSS;
    console.log(`Meses adicionales ${contribucionesAdicionales}`);
    meses = contribucionesAdicionales/6
    console.log(meses)
    incremento = meses*salario*0.005
    console.log(incremento);
    asignacionFamiliar = 0.10*salario
    console.log(asignacionFamiliar)
    
    montoTotal= remunacionBase + incremento + asignacionFamiliar
    console.log(montoTotal)

    }
      calculoJubilacion();
    
    }
    
    document.getElementById("submitButton").addEventListener("click", validaciones);


    function mostrarDatos(){
        document.getElementById("resultado").innerHTML =` 
        <p>Nombre: ${nombre}</p>
        <p>Apellidos: ${apellido}</p>
        <p>No. de afiliacion: ${noAfli}</p>
        <p>No. de DPI: ${cui}</p>
        <p>Monto asignado: ${montoTotal}</p>
        <p>Desglose:</p>
        <p>Remuneracion Base: ${remunacionBase}</p>
        <p>Incremento por contribucion Adicionales: ${incremento}</p>
        <p>Asingacion Familiar: ${asignacionFamiliar}</p>`;
        
    }

