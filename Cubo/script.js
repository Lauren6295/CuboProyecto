function rotar(n, event){
			let cubo = document.getElementById("cubo");
			cubo.style.transform = "rotateY(-"+n+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
			
			let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
			for(i=0; i<enlaces.length; i++){
				enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
			}
			
			event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
		}