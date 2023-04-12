const buildFila =(mes,valor,valorTotal,capital,interes,total) =>{
    return `<tr>
        <td>${mes}</td>
        <td>${valor}</td>
        <td>${valorTotal}</td>
        <td>${capital}</td>
        <td>${interes}</td>
        <td>${total}</td>
        <tr>
        
        `
}
str="";
let mes=0;
function imprimir(){
    mes++
    let interesAnual=Number(document.formu.inte.value);
    let prestamo=Number(document.formu.prest.value);
    let cuotas=Number(document.formu.cuotas.value);
    let tasaInteres = (interesAnual/100) / cuotas;
    valor = prestamo;
    valorTotal= prestamo+interes;
    let interes= tazaInteres/cuotas;
    let capital= prestamo+tasaInteresMensual;
    valor+=capital;
    valorTotal -=total*mes;
    valor -=capital*mes;

    str +=buildFila =(mes,valor,valorTotal,capital,interes,total);
    document.getElementById("respuesta").innerHTML=str;
}
imprimir()
console.log(tazaInteres);
console.log(prestamo);
console.log(cuotas);