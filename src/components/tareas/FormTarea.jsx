import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
    // Extraer proyectos de un state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay un proyecto seleccionado
    if (!proyecto) return null;

    // Extraer si un proyecto esta activo
    const [proyectoActivo] = proyecto;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        placeholder="Nombre Tarea"
                        className="input-text"
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormTarea;
