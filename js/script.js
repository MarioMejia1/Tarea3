let url = 'http://www.raydelto.org/agenda.php';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
            //console.log(body)
        }
  
        function mandar()
        {
          var datos = {nombre,apellido,telefono};
          datos.nombre = document.getElementById("nombre").value;
          datos.apellido = document.getElementById("apellido").value;
          datos.telefono = document.getElementById("telefono").value;
        
          fetch("http://www.raydelto.org/agenda.php", {
            method: 'POST', 
          mode: 'no-cors',
           body: JSON.stringify(datos),
            headers:{
            'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
        
          setTimeout(CargarPágina,3000)
          
        }
        
        function CargarPágina(){
          window.location.reload();
        }