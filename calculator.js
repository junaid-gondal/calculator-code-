
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>
     {
    button.addEventListener('click', (e) => {
        
        if (e.target.innerHTML == '=') 
        {       
            string = eval(string);
            input.value= string;
        } 
        else if (e.target.innerHTML == 'C') 
        { 
            string = "";
            input.value = string;
        } 
        else
        { 
            
            string += e.target.innerHTML;  
            
            if(string[0]=='%' )
                {
                    alert("wrong input");
                    string="";
                }   
            
          else if(string[0]=='*' )
            {
                    alert("wrong input");
                    string="";
            }  
          else if(string[0]=='/' )
            {
                    alert("wrong input");
                    string="";
            }   
            else{
                input.value= string;
            }  
            
        }
    });
});
