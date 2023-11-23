export async function reserva(datos){

    const URI="https://api-iota-silk.vercel.app/api/reservas"

    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(datos)
    }

    let respuesta= await fetch(URI,PETICION)
    respuesta= await respuesta.json()

    console.log(respuesta)
    return respuesta
}