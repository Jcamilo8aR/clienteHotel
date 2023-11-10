import { useEffect,useState } from "react"
import './Home.css'
import { Formulario } from "../Formulario/Formulario"

export function Home(){
    return(

        <>
            <div className="banner">
                <div className="row">
                    <div className="col-md-12 col-md-4 text-white fw-bold">
                        <h3>RESERVA AHORA MISMO</h3>
                        <Formulario/>
                    </div>
                </div>

            </div>
            
        </>

    )
}