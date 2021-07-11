/*let myButton =document.getElementById('clik') ;

myButton,onclick =function () {
        this.window.nav.style.display = 'block';
        myButton,onclick =function () {
            this.window.nav.style.display = 'none';
        }
}*/

let myButton =document.getElementById('clik');
let ul =document.getElementById('nav');

myButton.onclick =function () {
    if(ul.classList.contains('nav')){
        ul.classList ='visible';
    }else{
        ul.classList ='nav';
    }
    
}


