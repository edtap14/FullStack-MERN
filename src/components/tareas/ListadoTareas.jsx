import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: "Elegir plataforma", estado: true },
        { nombre: "Elegir colores", estado: true },
        { nombre: "Elegir diseño", estado: false },
        { nombre: "Elegir plataforma", estado: true }
    ];

    //Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    };

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
                )}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >
                Eliminar Pryecto &times;
            </button>
        </Fragment>
    );
};

export default ListadoTareas;
