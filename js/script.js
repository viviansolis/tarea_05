class Usuario{
  constructor(nombre,contraseña){ 
  
  this.nombre = nombre;
  this.contraseña = contraseña;
  }
  nombre(){
  return this.nombre;
  
  
  };
  contraseña(){
  return this.contraseña;
  };
  };
  var intentos = 0;
  function validar(){
      
  
  var user = new Usuario(document.getElementById('username').value, 
  document.getElementById('password').value
  );
  var usernametext = "michelle"
  var passwordtext = "000";
  
  
  if(intentos != 3){
  if(user.nombre == usernametext && user.contraseña == passwordtext){   
  alert("Bienvenido");
  }else{
   alert("usuario o contraseña incorrecta");
   intentos++;
    alert(intentos);
  
  
  }
  if(intentos == 3){
  document.write("Hemos bloqueado tu dirección ip a esta página por 3 intentos fallidos al administrador");
  
  }
  }
  };