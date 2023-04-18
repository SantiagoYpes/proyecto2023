import React, { useState } from 'react';

function Formulario() {
  const [datosFormulario, setDatosFormulario] = useState({
    campo1: '',
    campo2: '',
    // Agrega aquí los demás campos del formulario
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí va el código para enviar la solicitud axios.get()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campo 1:
        <input type="text" name="campo1" value={datosFormulario.campo1} onChange={handleChange} />
      </label>
      <label>
        Campo 2:
        <input type="text" name="campo2" value={datosFormulario.campo2} onChange={handleChange} />
      </label>
      {/* Agrega aquí los demás campos del formulario */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;


import axios from 'axios';

// Dentro de la función handleSubmit del componente Formulario
const url = 'https://ejemplo.com/mi-accion';
const params = new URLSearchParams(datosFormulario).toString();
axios.get(`${url}?${params}`)
  .then(response => {
    console.log('Respuesta recibida:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error al enviar la solicitud axios.get:', error);
  });
