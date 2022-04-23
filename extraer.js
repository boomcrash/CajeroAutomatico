var dineroUno=document.getElementById("dineroUno");
var dineroDos=document.getElementById("dineroDos");
var dineroTres=document.getElementById("dineroTres");

var di=document.getElementById("di");
var ve=document.getElementById("ve");
var ci=document.getElementById("ci");

class Billete{
    constructor(valor,cantidad){    
        this.valor=valor;
        this.cantidad=cantidad;
    }
}

var dinero=40;
var mensaje=document.getElementById("mensaje");
var dolar=document.getElementById("dolares");

var monto=document.getElementById("saldo");
var cardNumber=document.getElementById("cardNumber");
var cardExpiry=document.getElementById("cardExpiry");
var cardCcv=document.getElementById("cardCcv");


var generar=document.getElementById("generar");
generar.addEventListener("click",generarCard);

var diez=document.getElementById("diez");
diez.addEventListener("click",diezDolares);

var veinte=document.getElementById("veinte");
veinte.addEventListener("click",veinteDolares);

var treinta=document.getElementById("treinta");
treinta.addEventListener("click",treintaDolares);

var cuarenta=document.getElementById("cuarenta");
cuarenta.addEventListener("click",cuarentaDolares);

var sesenta=document.getElementById("sesenta");
sesenta.addEventListener("click",sesentaDolares);

var ochenta=document.getElementById("ochenta");
ochenta.addEventListener("click",ochentaDolares);

var noventa=document.getElementById("noventa");
noventa.addEventListener("click",noventaDolares);

var cien=document.getElementById("cien");
cien.addEventListener("click",cienDolares);


var Total=0;
var TotalFinal=0;


var entregado=[];

var div=0;

var papeles=0;

var caja=[];

caja.push(new Billete(100,1000));
caja.push(new Billete(20,1000));
caja.push(new Billete(10,1000));
caja.push(new Billete(1,1000));


async function arrojarDinero(){
    entregado =[];
    console.log("dinero antes :"+Total);
    //console.log(caja);
    var contador=1;
    for(var bi of caja){
        console.log(dinero);
        if(dinero>0){
            div=Math.floor(dinero/bi.valor);
            if(div>bi.cantidad){
                papeles=bi.cantidad;
            }else{
                papeles=div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero=dinero-(bi.valor*papeles);
            console.log("dinero despues :"+Total);
            console.log(entregado);
            if(contador==3){
                break;
            }
            contador++;
        }
    }
    console.log(caja);

    if(dinero>0){
        alert("TRANSACCION NO REALIZADA: EL CAJERO NO POSEE BILLETES SUFICIENTES!"); 
    }else{
        dolar.style="";
    }

    var cienes=0;
    var veintes=0;
    var dieces=0;
    for(var valor of entregado){
        if(valor.valor==100){
            cienes=valor.cantidad;
        }else if(valor.valor==20){
            veintes=valor.cantidad;
        }else if(valor.valor==10){
            dieces=valor.cantidad;
        }
    }
    dineroUno.style="";
    dineroDos.style="";
    dineroTres.style="";
    di.style="color:white;";
    ve.style="color:white;";
    ci.style="color:white;";
    di.innerHTML=dieces;
    ve.innerHTML=veintes;
    ci.innerHTML=cienes;
}    

//genero la tarjeta de debito
function generarCard(){
    var numero=Math.floor(Math.random()*(9999-1000+1))+1000;
    var numero2=Math.floor(Math.random()*(9999-1000+1))+1000;
    var numero3=Math.floor(Math.random()*(9999-1000+1))+1000;
    var numero4=Math.floor(Math.random()*(9999-1000+1))+1000;
    cardNumber.placeholder=numero+"-"+numero2+"-"+numero3+"-"+numero4;
    var dia=Math.floor(Math.random()*(31-1+1))+1;
    var mes=Math.floor(Math.random()*(12-1+1))+1;
    if(dia<10&&mes<10){
        cardExpiry.placeholder="0"+dia+"/"+"0"+mes;
    }else if(dia<10){
        cardExpiry.placeholder="0"+dia+"/"+mes;
    }else if(mes<10){
        cardExpiry.placeholder=dia+"/"+"0"+mes;
    }else{
        cardExpiry.placeholder=dia+"/"+mes;
    }

    var ccv=Math.floor(Math.random()*(999-100+1))+100;
    cardCcv.placeholder=ccv;
    
    var saldo=Math.floor(Math.random()*(1000-10+1))-10;
    monto.innerText=saldo;
    Total=saldo;
    TotalFinal=saldo;
    console.log(Total);
    console.log("dinero al incio : "+saldo);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function diezDolares(){
    if(TotalFinal-10>0){
        dinero=10;    
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 10 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-10;
        TotalFinal=TotalFinal-10;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }
    

}

async function veinteDolares(){
    if(TotalFinal-20>0){
        dinero=20;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 20 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-20;
        TotalFinal=TotalFinal-20;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function treintaDolares(){
    if(TotalFinal-30>0){
        dinero=30;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 30 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-30;
        TotalFinal=TotalFinal-30;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function cuarentaDolares(){
    if(TotalFinal-40>0){
        dinero=40;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 40 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-40;
        TotalFinal=TotalFinal-40;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function sesentaDolares(){
    if(TotalFinal-60>0){
        dinero=60;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 60 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>"; 
        monto.innerHTML=TotalFinal-60;
        TotalFinal=TotalFinal-60;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function ochentaDolares(){
    if(TotalFinal-80>0){
        dinero=80;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 80 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-80;
        TotalFinal=TotalFinal-80;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function noventaDolares(){
    if(TotalFinal-90>0){
        dinero=90;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 90 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-90;
        TotalFinal=TotalFinal-90;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}

async function cienDolares(){
    if(TotalFinal-100>0){
        dinero=100;
        dolar.style="display: none;";
        mensaje.innerHTML="<h5>RETIRANDO 100 DLRS....</h5>";
        await sleep(1000);
        mensaje.innerHTML="<h5>PROCESANDO PAGO....</h5>";
        await sleep(1000);
        arrojarDinero();
        mensaje.innerHTML="<h4>NO OLVIDE CONTAR SU DINERO</h4>";
        monto.innerHTML=TotalFinal-100;
        TotalFinal=TotalFinal-100;
    }else{
        mensaje.innerHTML="<h4>¡ MONTO INSUFICIENTE !</h4>";
        dolar.style="display: none;";
    }


}



