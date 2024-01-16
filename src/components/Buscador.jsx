
export default function Buscador({listaColaboradoresFiltro, setListaColaboradoresFiltro, listaColaboradores}){


    const filtrarTable = (e) => {

        if (e === "") {
            setListaColaboradoresFiltro(listaColaboradores);
        } else {
          const newResult = listaColaboradores.filter(
            (f) =>
              f.nombre.toLowerCase().includes(e.toLowerCase()) ||
              f.rut.toLowerCase().includes(e.toLowerCase()) ||
              f.fono.toLowerCase().includes(e.toLowerCase())
          );
          setListaColaboradoresFiltro(newResult);
        }
      };

      function OrdenarTabla(tipoOrden){
            let nuevaLista = '';

            if (listaColaboradoresFiltro.length > 0 )
                nuevaLista = [...listaColaboradoresFiltro]
            else
                nuevaLista = [...listaColaboradores]
        
            let listaFiltrada = '';

            if (tipoOrden == 'A')
                listaFiltrada = nuevaLista.sort((a, b) => a.nombre.localeCompare(b.nombre));

            if (tipoOrden == 'D')
                listaFiltrada = nuevaLista.reverse((a, b) => a.nombre.localeCompare(b.nombre));


            if (tipoOrden != '')
                return setListaColaboradoresFiltro(listaFiltrada)

      }

      
    return(

        <>

            <input type="text" id="q" className="form-control" placeholder="Buscar..." onChange={(e)=>filtrarTable(e.target.value)}/>

            <div className="mb-3">
                    <label><b>ORDENAR POR NOMBRE</b></label>
                    <p>
                    <input type="radio" value='A' name="orden" id="orden"  onClick={(e)=>OrdenarTabla(e.target.value)} /> Ascendente 
                    <input type="radio" value='D' name="orden"  id="orden" onClick={(e)=>OrdenarTabla(e.target.value)} /> Descendente
                    </p>
            </div>            
        </>

    );
}
