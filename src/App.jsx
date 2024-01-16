import { useState, useEffect } from 'react';
import Listado from './components/MiApi'
import Buscador from './components/Buscador'
import { baseClientes } from './components/api'

function App() {

  const [listaColaboradores, setListaColaboradores] = useState([])
  const [listaColaboradoresFiltro, setListaColaboradoresFiltro] = useState([])
  

  useEffect(() => {
    baseClientes(setListaColaboradores);
  }, []);


  return (
    <>
      <div className="container">

          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                  <Buscador listaColaboradoresFiltro={listaColaboradoresFiltro} setListaColaboradoresFiltro={setListaColaboradoresFiltro} listaColaboradores={listaColaboradores}></Buscador>
                  <Listado listaColaboradores={listaColaboradores} listaColaboradoresFiltro={listaColaboradoresFiltro}></Listado>
              </div>
            </div>
          </div>

      </div>
    </>
  )


  
}
export default App
