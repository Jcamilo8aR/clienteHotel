export function Formulario(){
    return(

        <>

            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Fecha Inicio</label>
                            <input type="date" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Fecha Final</label>
                            <input type="date" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div class="mb-3">
                            <label className="form-label">Número de personas</label>
                            <input type="number" className="form-control"/>
                        </div>
                    </div>

                </div>
                <div className="row">
                <button type="submit" className="btn btn-info">reservar</button> 
                </div>
            </form>
        
        
        </>
    )
}