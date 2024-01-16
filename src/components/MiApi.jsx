
export default function Listado({listaColaboradores, listaColaboradoresFiltro}){

    if (listaColaboradoresFiltro.length > 0)
        listaColaboradores = listaColaboradoresFiltro;

    return(

        <>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Rut Empresa</th>
                                <th scope="col">Nombre Empresa</th>
                                <th scope="col">Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaColaboradores.map(colaborador =>
                                    <tr key={colaborador.codigo}>
                                        <td>{colaborador.rut}</td>
                                        <td>{colaborador.nombre}</td>
                                        <td>{colaborador.fono}</td>
                                    </tr>
                            )}
                        </tbody>
                        </table>        

                </div>     
        </>

    );
}
