function getPassword() {
 var num = "0123456789";
 var letra = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
 var letra2 = "ABCDEFGHIJLMNOPQRSTUVWXYZ";

 var passwordLength = 1;
 var password = "";

 for (var i = 0; i < passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * num.length);
   var randomLetra = Math.floor(Math.random() * letra.length);
   var randomLetra2 = Math.floor(Math.random() * letra2.length);
   
   password += letra.substring(randomLetra, randomLetra + 2) 
   password += num.substring(randomNumber, randomNumber + 2)
   password += letra2.substring(randomLetra2, randomLetra2 + 2) 
   
 }
 document.getElementById('password').value = password
}