import { useState,useEffect } from "react"
import {servicioReserva} from "../Services/servicioReserva"
export function Listareservas(){

    //configuro mis variables de estado
    //uso para almacenar los datos que lleguen del api
    const[reservas,setReserva]=useState(null)
    const[carga,setCarga]=useState(true)

    //programo el useeffect para garantizar que llamare
    //al servicio SOLO CUANDO CARGUE MI COMPONENTE
    useEffect(function(){},[
        servicioReserva().then(function(respuestaDelBack){
            setReserva(respuestaDelBack.reservas)
            setCarga(false)
        })
    ])


    //programo la interfaz para mostrar el mensaje de carga o para mostrar los datos
    //del servicio
    if(carga){
        return(
            <>
            <br /><br /><br />
            <h3>estoy cargando...</h3>
            </>
            
        )
       
    }else{

        return(
            <>
                <br /><br /><br />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            reservas.map(function(reserva){
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow">
                                            <h5>Nombre: {reserva.nombre}</h5>
                                            <p>Apellido: {reserva.apellido}</p>
                                            <p>Telefono: {reserva.telefono}</p>
                                            <p>Fecha Inicio: {reserva.fechaInicio}</p>
                                            <p>Fecha Final: {reserva.fechaFinal}</p>
                                            <p>Número de personas: {reserva.numPersonas}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )

    }

    
}

