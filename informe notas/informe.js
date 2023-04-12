const buildFila = (num, NUIP, nom, puntaje) => {
    return `<tr>
            <td>${num}</td>
            <td>${NUIP}</td>
            <td>${nom}</td>
            <td>${puntaje}</td>
          
        <tr>`;
};
const buildFila2 = (num, NUIP, nom, puntaje) => {
    return `<tr>
    
            <td>${num}</td>
            <td>${NUIP}</td>
            <td>${nom}</td>
            <td>${puntaje}</td>
        <tr>`;
};
n = 0;
function imprimir() {
    let NUIP="";
      
    strHTML2 = "";
    strHTML = "";
    let num = 0;
    let num2 = 0;
    while (NUIP.toUpperCase() !== "FIN")  {
        if (NUIP.toUpperCase() !== "FIN") {
        NUIP = prompt("nuip del participante:");
        
        let nom = prompt("nombre del participante: ");
        let puntaje = prompt("puntaje : ");
        num += 1
       console.log(NUIP);
       

         if (puntaje > 35) {
             strHTML2 += buildFila2(num, NUIP, nom, puntaje);
             document.getElementById("respuesta2").innerHTML = strHTML2;
         }
         else{
             strHTML += buildFila(num, NUIP, nom, puntaje);
             document.getElementById("respuesta").innerHTML = strHTML;
         }
    }

}
}