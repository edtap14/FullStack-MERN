import React from 'react'

import proyectoContext from "./proyectoContext"
import proyectoReducer from './proyectoReducer'

const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    //Dispatch para ejecutrar las acciones
    const [state, dispatch] = React.useReducer(proyectoReducer, initialState)

    // Serie de funciones

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
