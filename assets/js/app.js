function calcularEdad() {
    const fechaSeleccionada = document.getElementById('date').value

    if (!fechaSeleccionada) {
        const errorFecha = `Debes ingresar una fecha`
        document.getElementById('show__results').innerHTML = errorFecha
        return;
    }

    const fechaNacimiento = new Date(fechaSeleccionada)
    const fechaActual = new Date()

    if (fechaNacimiento > fechaActual) {
        const errorFecha1 = 'La fecha de nacimiento debe ser menor a la fecha actual'
        document.getElementById('show__results').innerHTML = errorFecha1
        return
    }

    let anos = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth()
    let dias = fechaActual.getDate() - fechaNacimiento.getDate()

    if (dias < 0) {
        meses--;
        dias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const resultado = `You are <span class="highlight">${anos}</span> years, <span class="highlight">${meses}</span> months and <span class="highlight">${dias}</span> days old`;
    document.getElementById('show__results').innerHTML = resultado
}