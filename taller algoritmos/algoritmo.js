function calcular(base, altura)
{
   
     const area=base*altura;
     const perimetro=2*(base+altura);

     return [area, perimetro];    
}

// 2

function calcular_hipotenusa(a, b)
{
    //Math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+b**2);    
    return hipotenusa;
}

//3
function calculadora(a,b)
{

    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);
}

// 4

function media(){

    //alert(), prompt(): Usarla con precaución    
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');

    //Casting: Transformar de manera explícita el tipo
    //de dato de una variable en js 
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= (x+y+z)/3;
    console.log(promedio);
    return promedio;
    
}
// 5
function calcular_tiempo(){
    
    let v1= parseInt(document.getElementById("x"));
    let v2= parseInt(document.getElementById("y"));
    let d= parseInt(document.getElementById("z"));

    let t=d/(v1-v2);
    let tf=t*60

    let resultado= document.getElementById("resultado");
    resultado.value= tf;
    return tf;
}
 
// 6

function notas(){

      
    let nota1 = parseFloat(document.getElementById("note").value);
    let nota2 = parseFloat(document.getElementById("nota3").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let nota6 = parseFloat(document.getElementById("nota6").value);
    let notas=(nota1+nota2+nota3)/3;
    let notafinal =(notas*0.55)+(nota4*0.3)+(nota6*0.15);

    console.log(notafinal);
    return notafinal;
}