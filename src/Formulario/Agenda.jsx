import { useState,useEffect } from "react"
import {reserva} from "../Services/servicioReserva"
export function Agenda() {

    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[telefono, setTelefono]=useState('')
    const[fechaInicio, setFechaInicio]=useState('')
    const[fechaFinal, setFechaFinal]=useState('')
    const[numPersonas, setNumPersonas]=useState('')

    const [errores, setErroress] = useState({})
    const [data, setData] = useState({})
    const [envioFormulario,setEnvioFormulario]=useState(false)

    useEffect(() => {
        console.log(errores)
        console.log(Object.keys(errores))
        if(Object.keys(errores).length>0){
            console.log("lanzo el error")
        }else if(envioFormulario){
            let datosEnvio={
                nombre,
                apellido,
                telefono,
                fechaInicio,
                fechaFinal,
                numPersonas
            }
            console.log(datosEnvio)
            reserva(datosEnvio)
            .then(function(respuesta){
                console.log(respuesta)
            })
        }
      }, [errores,envioFormulario]);

    function validarFormulario(evento){

        evento.preventDefault()

        let listaErrores = {};
        if(!nombre){
            listaErrores.nombre="El nombre es requerido"
        }
        if(!apellido){
            listaErrores.correo="El apellido es requerido"
        }
        if(!telefono){
            listaErrores.telefono="El telefono es requerido"
        }
        if(!fechaInicio){
            listaErrores.dia="La fecha de inicio es requerida"
        }
        if(!fechaFinal){
            listaErrores.dia="La fecha final es requerida"
        }
        if (!numPersonas) {
            listaErrores.hora = 'El número de personas es requerido';
        }

        setErroress(listaErrores)
        if(Object.keys(listaErrores).length==0){
           setEnvioFormulario(true)
        }



        
       

    }

    return (

        <>

            <form onSubmit={validarFormulario}>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-person-circle"></i>
                            </span>
                            <input 
                                type="text"
                                className={`form-control ${errores.nombre?'is-invalid':''} `} 
                                placeholder="Nombre Cliente" 
                                id="nombre"
                                value={nombre}
                                onChange={function(evento){setNombre(evento.target.value)}}
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="text"
                                className={`form-control ${errores.apellido?'is-invalid':''} `}
                                placeholder="Apellido"
                                id="apellido"
                                value={apellido}
                                onChange={function(evento){setApellido(evento.target.value)}} 
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="text" 
                                className={`form-control ${errores.telefono?'is-invalid':''} `}
                                placeholder="Telefono Cliente"
                                id="telefono"
                                value={telefono}
                                onChange={function(evento){setTelefono(evento.target.value)}}  
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="date" 
                                className={`form-control ${errores.fechaInicio?'is-invalid':''} `}
                                id="Fecha Inicio"
                                value={fechaInicio}
                                onChange={function(evento){setFechaInicio(evento.target.value)}}
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="date" 
                                className={`form-control ${errores.fechaFinal?'is-invalid':''} `}
                                id="Fecha Finalizacion"
                                value={fechaFinal}
                                onChange={function(evento){setFechaFinal(evento.target.value)}}
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input 
                                    type="number" 
                                    className={`form-control ${errores.numPersonas?'is-invalid':''} `}
                                    id="Número de Personas"
                                    value={numPersonas}
                                    onChange={function(evento){setNumPersonas(evento.target.value)}}
                                />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                        
                            
                        </div>

                <button type="submit" className="btn btn-info">reservar</button>

            </form>


        </>
    )

}