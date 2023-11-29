
let header = document.querySelector('header');
let altezza= document.querySelector('#accantoAlleM h3').offsetTop;
window.addEventListener('scroll', function () {   
    let scrollY = window.scrollY || window.pageYOffset;    
    if (scrollY > altezza) {
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }
});

function mFantasmini() {
    let mmm = document.querySelectorAll('g[stroke-linecap="butt"]');
   for (let i =0;i<20;i++){
    console.log(i);
    console.log(mmm[i]);

   }
    let n = Math.floor(Math.random() * mmm.length-1)+1;
    console.log(mmm[n]);
    console.log(n);
    console.log(mmm[n].attributes.opacity.value);
    if(mmm[n].attributes.opacity.value==1){
        mmm[n].attributes.opacity.value=0
    }else{
        mmm[n].attributes.opacity.value=1
    }
}
mFantasmini();
setInterval(mFantasmini, 100); 
 
