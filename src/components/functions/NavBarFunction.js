
window.onload= function () {
    const boton = document.getElementById('icono')
const enlaces = document.getElementById('enlaces')
let contador =0

console.log(boton)
if(boton){
    
    boton.addEventListener('click', function(){
        if(contador === 0){
            enlaces.className = ('enlaces dos')
            contador=1
        }
        else{
            enlaces.classList.remove('dos')
            enlaces.className =('enlaces uno')
            contador=0
        }
    })
}
   




window.addEventListener('resize', function(){
    if( Screen.width>750){
        contador=0
        enlaces.classList.remove('dos')
        enlaces.className =('enlaces uno')
    }
   
  
})
}



