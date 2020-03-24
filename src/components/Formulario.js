import React, { useState } from "react";

const Formulario = ({}) => {
  // State del Formulario

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  // Extraer ciudad y pais, para colocarlos en el value

  const { ciudad, pais } = busqueda;

  // funcion que coloca los elementos en el State
  const handleChange = e => {
    //Actualizar el State
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <div className="input-field col s12">
        {/* name="ciudad" > para poder leerlo del state */}
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">--Selecione un País--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="CL">Chile</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País:</label>
      </div>
    </form>
  );
};

export default Formulario;
