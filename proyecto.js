const btnav=document.querySelector('.btn-nav')
const btnavi=document.querySelector('.btn-nav i')
const menuabajo=document.querySelector('.menuabajo')

btnav.onclick = function(){
    menuabajo.classList.toggle('open')
}

/*var header = document.querySelector('nav')
window.addEventListener('scroll', function(){
    header.classList.toggle('abajo',window.scrollY>0)
})*/
var slider=document.querySelector('.contenedor')
let slidersolo=document.querySelectorAll('.slider-contenedor')
let contador=1;
let width=slidersolo[0].clientWidth;
let intervalo = 3000;

window.addEventListener('resize', function(){
    let width=slidersolo[0].clientWidth;
})

console.log(slidersolo.length);

let mapa=document.querySelector('.mapa-cont');
let mapamovil=document.querySelector('.mapa-cont-movil')
const cuerpo=document.querySelector('body')
if(cuerpo>width(800)){
    mapamovil.classList.add('.esconde')
}
