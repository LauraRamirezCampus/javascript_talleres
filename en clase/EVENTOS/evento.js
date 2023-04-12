function mostrarMensaje(){
    console.log("click en el titulo l")
}

const titulo =document.querySelector("h1");
const parrafo = document.querySelector("p")

// titulo.onclick= mostrarMensaje;

titulo.addEventListener("click",mostrarMensaje);
let cont=0;
parrafo.addEventListener("mouseover",() => {
    
    parrafo.textContent="haz pasado"+ (++cont)+"veces"
})

parrafo.addEventListener("mouseout",()=>{
    parrafo.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique ad nobis error vel quod, libero tempora quasi, quibusdam ea fuga adipisci impedit! Laudantium minima neque eaque velit sunt!"
})