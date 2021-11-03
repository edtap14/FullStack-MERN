import React, { Fragment } from "react";
import { useState } from "react";
// video 197
const NuevoProyecto = () => {
  // State para proyecto

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre del proyecto
  const { nombre } = proyecto;

  // Funcion que lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia el proyecto
  
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar que el nombre del proyecto no esta vacio


    // Agregar al state


    // Reiniciar el form


  }
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form 
      className="formulario-nuevo-proyecto"
      onSubmit={onSubmitProyecto}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        ></input>

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        ></input>
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
