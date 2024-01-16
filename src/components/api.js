  const baseClientes = async (setListaColaboradores) => {
    const apiUrl = "https://www.dataworkdte.cl/web/api_tarea.php";
  
    try {
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();
      // console.log(data.clientes);
      setListaColaboradores(data.clientes);
    } catch (error) {
      console.log(error);
    }
  };
  
  export { baseClientes };
