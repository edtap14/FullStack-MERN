import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from "../../types";

import uuidv4 from "uuid/dist/v4";

const ProyectoState = (props) => {
    const proyectos = [
        { id: 1, nombre: "Tienda Virtual" },
        { id: 2, nombre: "Intranet" },
        { id: 3, nombre: "Diseño de Sitio Web" },
        { id: 4, nombre: "MERN" }
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    };

    //Dispatch para ejecutrar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    };

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    };

    //Agregar nuevo proyecto
    const agregarProyecto = (proyecto) => {
        proyecto.id = uuidv4();
        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    };

    // Validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    };

    // Seleccionar proyecto actual
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    };

    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
