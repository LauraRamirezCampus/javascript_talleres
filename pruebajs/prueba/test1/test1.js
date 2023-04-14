const buildfila  = (cc,nom,categoria,sbruto,aux,bonifi,eps,pension,sneto) =>{
    return `<tr>
    <td>${cc}</td>
    <td>${nom}</td>
    <td>${categoria}</td>
    <td>${sbruto}</td>
    <td>${aux}</td>
    <td>${bonifi}</td>
    <td>${eps}</td>
    <td>${pension}</td>
    <td>${sneto}</td>

    `
};

const mejor=(cant,menosg,prom,masg,total) =>{
    return `
    <tr>
    <td>${cant}</td>
    <td>${menosg}</td>
    <td>${prom}</td>
    <td>${masg}</td>
    <td>${total}</td>
    <tr>
    `
}
str="";
gana="";
cont=0;
let salarios=[];
let nombres=[];

let total=0;
function imprimir(){
    cont++
    let cc=document.formu.cc.value;
    let nom=document.formu.nombre.value;
    let categoria=document.formu.categoria.value;
    let sbruto=0;
    let aux=0;
    let bonifi=0;
    let eps=0;
    let prom=0;
    

    nombres.push(nom);
    

    if (categoria=="auxiliar a"){
        aux=400000;
        bonifi=100000;
        sbruto=1160000;
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);

    }
    else if(categoria=="auxiliar b"){
        aux=400000;
        bonifi=100000;
        sbruto=(1160000*1.2);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


    }
    else if(categoria=="tecnico a"){
        aux=0;
        bonifi=150000;
        sbruto=(1160000*1.5);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);
        
    }
    else if(categoria=="tecnico b"){
        aux=0;
        bonifi=150000;
        sbruto=(1160000*2);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


        

    }
    else if(categoria=="profesional a"){
        aux=0;
        bonifi=200000;
        sbruto=(1160000*2.5);
        eps=(sbruto*0,04);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);



    }
    else if(categoria=="profesional b"){
        aux=0;
        bonifi=250000;
        sbruto=(1160000*3);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


    }
    else if(categoria=="director a"){
        aux=0;
        bonifi=500000;
        sbruto=(1160000*4);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


        

    }
    else if(categoria=="director b"){
        aux=0;
        bonifi=1000000;
        sbruto=(1160000*4.5);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


    }
    else if(categoria=="gerente departamento"){
        aux=0;
        bonifi=2000000;
        sbruto=(1160000*6);
        eps=(sbruto*0.04);
        pension=(sbruto*0.04);


    }
    else if(categoria=="gerente general"){
        aux=0;
        bonifi=5000000;
        sbruto=(1160000*10);
        eps=(sbruto*0.04);    let numeroMayor = Math.max(...totales);

        pension=(sbruto*0.04);


    }
    let sneto=sbruto+bonifi-aux-eps-pension
    total=total+sneto;
    salarios.push(sneto)
    // console.log(salarios);
    // console.log(nombres);
    let menor = Math.min(...salarios);
    let mayor= Math.max(...salarios);

    let posicionma=salarios.indexOf(mayor);
    let posicionme=salarios.indexOf(menor);

    let menosg=nombres[posicionme];
    let masg=nombres[posicionma];
    let cant=cont;
    prom = total/cant;
    

    console.log("el mas",mayor);
    console.log("el menos",menor);
    
    console.log(sneto);
    str += buildfila (cc,nom,categoria,sbruto,aux,bonifi,eps,pension,sneto);
    document.getElementById("respuesta").innerHTML = str;

    gana = mejor(cant,menosg,prom,masg,total);
    document.getElementById("respuesta2").innerHTML = gana;
}