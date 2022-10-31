
function total()
{
    let x, y, texto;
    let precio= 200;
    let resultado="Total a pagar: $";
    x = document.getElementById("input_cant").value;
    y = document.getElementById("categoria1").value;
    
    switch(y) {
        case '1':  
        multiplicar=(precio*x)-(precio*x*(0.80));  
        texto= (resultado+multiplicar); 
         
         document.getElementById("input_total").value=texto;
          break;
      
        case '2': 
            multiplicar=(precio*x)-(precio*x*(0.50));  
            texto= (resultado+multiplicar);  
         
         document.getElementById("input_total").value=texto;
         break;
      
        case '3':
          multiplicar=(precio*x)-(precio*x*(0.15));  
          texto= (resultado+multiplicar);  
           
           document.getElementById("input_total").value=texto;
           break;
          
      
       }                          
        

        
}




    
    
