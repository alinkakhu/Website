const section = document.querySelector('section.opis')
const h1 = document.querySelector('.opis h1')
const par = document.querySelector('.opis p')
const img = document.querySelector('.opis img')
let active = 0
const images = ['img/ist1.jpg','img/ist2.jpg','img/ist3.jpg']
    const descr = ['Meczet', 'Galata','Kiz kulesi']
    const paragraf = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel laborum cumque ad nulla quia, quidem, perferendis architecto optio libero odio. Officiis harum nulla modi! Vel magnam laborum fugit soluta.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel laborum cumque ad nulla quia, quidem, perferendis architecto optio libero odio. Officiis harum nulla modi! Vel magnam laborum fugit soluta.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel laborum cumque ad nulla quia, quidem, perferendis architecto optio libero odio. Officiis harum nulla modi! Vel magnam laborum fugit soluta.']
function changeImg(){
    active++
    if(active == images.length){
        active = 0
    }
    
    section.style.backgroundImage = "url('" + images[active] + "')";
    par.textContent = paragraf[active];
    h1.textContent = descr[active]
    
}
setInterval(changeImg, 4000)