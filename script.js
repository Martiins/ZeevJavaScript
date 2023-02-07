document.addEventListener('DOMContentLoaded', function(event) {
  
  var codUsuario = document.getElementById('inpcodigoUsuario').value;
    
  fetch('https://servicedeskv4.orquestrabpm.com.br/api/internal/legacy/1.0/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJneFzLqGZyfxqcXk6ZQy7CSxCpnQ5wlstrR6McfJbjCJ5WbYRqenYnSQjFcSTrLD9g__?inpcodigoUsuario='+codUsuario, {
      method: 'GET' 	
  })
  .then((response) => response.json())
  .then((data) => {      
 	 /*for (const key in data) {
    	console.log(data[key])
    }*/
      console.log(data)
  })
    
});
