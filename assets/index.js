const input = document.getElementByid ('input');
const buttons = document.querySelectorAll('button');

const string = "";
const arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'C')  {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
        
    })
})