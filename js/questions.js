//DECLARACIÓN DE VARIABLES

var formElement=null;
var r1=null;
var r2=null;
var r3 = [];
var r4=null;
var r5=null;
var r6 = [];
var r7=null;
var r8 = [];
var r9 = [];
var r10 =null;
var nota = 0;  //nota del examen sobre 10 puntos (hay 10 preguntas)


//****************************************************************************************************
//AL CARGAR LA PÁGINA

//Se definen los eventos sobre los elementos y otras acciones.
window.onload = function(){

 //INSTRUCCIONES
//Se muestra el DIV que contiene las instrucciones
 document.getElementById("instruccionsDiv").style.display = "table";
 //Se deshabilita el botón de "Corregir" examen mientras se visualizan las instrucciones
 document.getElementById("corregir").disabled = true;

 //Se oculta el DIV que contiene las instrucciones y se habilita el botón "Corregir" cuando se pulsa el botón de "Començar examen"
 document.getElementById("iniciar").onclick = function () {
  document.getElementById("instruccionsDiv").style.display = "none";
  document.getElementById("corregir").disabled = false;
 };


 //CORRECCIÓN
 //Corregir el examen al apretar el botón correspondiente
 formElement=document.getElementById("myform");
 formElement.onsubmit = function(){
   //document.getElementById("instruccionsDiv").style.display = "none";
   //document.getElementById("resultatsDiv").style.display = "none";
   inicializar();
   if (comprobar()){
    corregir1();
    corregir2();
    corregir3();
    corregir4();
    corregir5();
    corregir6();
    corregir7();
    corregir8();
    corregir9();
    corregir10();
    presentarNota();
    //Se muestra el DIV de Resultados
    document.getElementById("resultatsDiv").style.display = "table";
   }
   return false;
 };

 //CARGA XML
 //Leer XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "https://rawgit.com/alishaibz/LMSGI04/master/xml/preguntas.xml", true);
 xhttp.send();

 //REPETIR EXAMEN
 //Cuando se pulsa el botón "Repetir examen", se oculta el DIV de resultados y se "limpia" el formulario
 document.getElementById("repetir").onclick = function () {
  document.getElementById("resultatsDiv").style.display = "none";
  document.getElementById("myform").reset();
 };


};


//****************************************************************************************************
//DATOS XML

//Recuperamos los datos del fichero XML xml/preguntas.xml
//xmlDOC es el documento leido XML.
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc

 //PREGUNTA 1 - INPUT
 //Recuperamos el título y la respuesta correcta de Input, guardamos la respuesta correcta
 var t1=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatos1(t1);
 r1=xmlDoc.getElementsByTagName("answer")[0].innerHTML;

 //PREGUNTA 2 - RADIO
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var t2=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opciones2 = [];
 var nopt = xmlDoc.getElementById("q002").getElementsByTagName("option").length;
  for (i = 0; i < nopt; i++) {
    opciones2[i] = xmlDoc.getElementById("q002").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos2(t2,opciones2);
 r2=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

 //PREGUNTA 3 - CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var t3 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opciones3 = [];
 var nopt = xmlDoc.getElementById("q003").getElementsByTagName("option").length;
 for (i = 0; i < nopt; i++) {
    opciones3[i]=xmlDoc.getElementById("q003").getElementsByTagName("option")[i].innerHTML;
 }  
 ponerDatos3(t3,opciones3);
 var nres = xmlDoc.getElementById("q003").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) {
  r3[i]=xmlDoc.getElementById("q003").getElementsByTagName("answer")[i].innerHTML;
 }

  //PREGUNTA 4 - RADIO
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var t4=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opciones4 = [];
 var nopt = xmlDoc.getElementById("q004").getElementsByTagName("option").length;
  for (i = 0; i < nopt; i++) {
    opciones4[i] = xmlDoc.getElementById("q004").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos4(t4,opciones4);
 r4=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);

  //PREGUNTA 5 - INPUT
 //Recuperamos el título y la respuesta correcta de Input, guardamos la respuesta correcta
 var t5=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 ponerDatos5(t5);
 r5=xmlDoc.getElementsByTagName("answer")[5].innerHTML;

  //PREGUNTA 6 - CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var t6 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
 var opciones6 = [];
 var nopt = xmlDoc.getElementById("q006").getElementsByTagName("option").length;
 for (i = 0; i < nopt; i++) {
    opciones6[i]=xmlDoc.getElementById("q006").getElementsByTagName("option")[i].innerHTML;
 }  
 ponerDatos6(t6,opciones6);
 var nres = xmlDoc.getElementById("q006").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) {
  r6[i]=xmlDoc.getElementById("q006").getElementsByTagName("answer")[i].innerHTML;
 }

  //PREGUNTA 7 - SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var t7=xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opciones7 = [];
 var nopt = xmlDoc.getElementById("q007").getElementsByTagName("option").length;
  for (i = 0; i < nopt; i++) {
    opciones7[i] = xmlDoc.getElementById("q007").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos7(t7,opciones7);
 r7=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);

    //PREGUNTA 8 - SELECT MULTIPLE
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var t8=xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opciones8 = [];
 var nopt = xmlDoc.getElementById("q008").getElementsByTagName("option").length;
  for (i = 0; i < nopt; i++) {
    opciones8[i] = xmlDoc.getElementById("q008").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos8(t8,opciones8);
 var nres = xmlDoc.getElementById("q008").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) {
 r8[i]=xmlDoc.getElementById("q008").getElementsByTagName("answer")[i].innerHTML;
 }

   //PREGUNTA 9 - CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var t9 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opciones9 = [];
 var nopt = xmlDoc.getElementById("q009").getElementsByTagName("option").length;
 for (i = 0; i < nopt; i++) {
    opciones9[i]=xmlDoc.getElementById("q009").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos9(t9,opciones9);
 var nres = xmlDoc.getElementById("q009").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) {
 r9[i]=xmlDoc.getElementById("q009").getElementsByTagName("answer")[i].innerHTML;
 }

   //PREGUNTA 10 - SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var t10=xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opciones10 = [];
 var nopt = xmlDoc.getElementById("q010").getElementsByTagName("option").length;
  for (i = 0; i < nopt; i++) {
    opciones10[i] = xmlDoc.getElementById("q010").getElementsByTagName("option")[i].innerHTML;
 }
 ponerDatos10(t10,opciones10);
 r10=parseInt(xmlDoc.getElementsByTagName("answer")[15].innerHTML);

}


//MOSTRAR LOS DATOS RECIBIDOS DE XML EN EL HTML

//Mostrar datos XML de Pregunta 1
function ponerDatos1(t){
 document.getElementById("titulo1").innerHTML = t;
}

//Mostrar datos XML de Pregunta 2
function ponerDatos2(t,opt){
 var radioContainer=document.getElementById("radioDiv1");
 document.getElementById("titulo2").innerHTML = t;
 for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "fill_"+i);
    input.type="radio";
    input.name="fill";
    input.id="fill_"+i;
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }
}

//Mostrar datos XML de Pregunta 3
function ponerDatos3(t,opt){
 var checkboxContainer=document.getElementById("checkboxDiv1");
 document.getElementById("titulo3").innerHTML = t;
 for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "licor_"+i);
    input.type="checkbox";
    input.name="licor";
    input.id="licor_"+i;
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }
}

//Mostrar datos XML de Pregunta 4
function ponerDatos4(t,opt){
 var radioContainer=document.getElementById("radioDiv2");
 document.getElementById("titulo4").innerHTML = t;
 for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "ingredients_"+i);
    input.type="radio";
    input.name="ingredients";
    input.id="ingredients_"+i;
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }
}

//Mostrar datos XML de Pregunta 5
function ponerDatos5(t){
 document.getElementById("titulo5").innerHTML = t;
}

//Mostrar datos XML de Pregunta 6
function ponerDatos6(t,opt){
 var checkboxContainer=document.getElementById("checkboxDiv2");
 document.getElementById("titulo6").innerHTML = t;
 for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "instrument_"+i);
    input.type="checkbox";
    input.name="instrument";
    input.id="instrument_"+i;
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }
}

//Mostrar datos XML de Pregunta 7
function ponerDatos7(t,opt){
  document.getElementById("titulo7").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}

//Mostrar datos XML de Pregunta 8
function ponerDatos8(t,opt){
  document.getElementById("titulo8").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < (opt.length); i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}

//Mostrar datos XML de Pregunta 9
function ponerDatos9(t,opt){
 var checkboxContainer=document.getElementById("checkboxDiv3");
 document.getElementById("titulo9").innerHTML = t;
 for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "expr_"+i);
    input.type="checkbox";
    input.name="expr";
    input.id="expr_"+i;
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }
}

//Mostrar datos XML de Pregunta 10
function ponerDatos10(t,opt){
  document.getElementById("titulo10").innerHTML=t;
  var select = document.getElementsByTagName("select")[2];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}


//****************************************************************************************************
//CORRECCIÓN EXAMEN

//Corrección Pregunta 1
function corregir1(){
  //Compara el texto escrito (s) con el texto que hay en el xml (r1)
  var s=formElement.elements[1].value;
  if (s==r1) {
   darRespuestaHtml("P1: Correcta");
   nota +=1;
  }
  else {
    darRespuestaHtml("P1: Incorrecta");
  }
}

//Corrección Pregunta 2
function corregir2(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y, si es correcta, se le da el valor "true" a la variable escorrecta
  var f=formElement;
  var escorrecta = false;
  for (i = 0; i < f.fill.length; i++) {
   if (f.fill[i].checked) {
    if(i == r2){
     escorrecta = true;
     darRespuestaHtml("P2: Correcta");
     nota +=1;
    } else {
     escorrecta = false;
     darRespuestaHtml("P2: Incorrecta");
    } 
   }
  }
}

//Corrección Pregunta 3
function corregir3(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  var respuesta = "P3:";
  for (i = 0; i < f.licor.length; i++) {
   if (f.licor[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < r3.length; j++) {
     if (i==r3[j]) escorrecta[i]=true;
    }
    //Si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/r3.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" correcta.";    
    } else {
     nota -=1.0/r3.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" incorrecta.";
    } 
   }
  }
 darRespuestaHtml(respuesta);
}

//Corrección Pregunta 4
function corregir4(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y, si es correcta, se le da el valor "true" a la variable escorrecta
  var f=formElement;
  var escorrecta = false;
  for (i = 0; i < f.ingredients.length; i++) {
   if (f.ingredients[i].checked) {
    if(i == r4){
     escorrecta = true;
     darRespuestaHtml("P4: Correcta");
     nota +=1;
    } else {
     escorrecta = false;
     darRespuestaHtml("P4: Incorrecta");
    } 
   }
  }
}

//Corrección Pregunta 5
function corregir5(){
  //Compara el texto escrito (s) con el texto que hay en el xml (r5)
  var s=formElement.elements[18].value;
  if (s==r5) {
   darRespuestaHtml("P5: Correcta");
   nota +=1;
  }
  else {
    darRespuestaHtml("P5: Incorrecta");
  }
}

//Corrección Pregunta 6
function corregir6(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  var respuesta = "P6:";
  for (i = 0; i < f.instrument.length; i++) {
   if (f.instrument[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < r6.length; j++) {
     if (i==r6[j]) escorrecta[i]=true;
    }
    //Si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/r6.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" correcta.";   
    } else {
     nota -=1.0/r6.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" incorrecta.";
    }   
   } 
  }
 darRespuestaHtml(respuesta);
}

//Corrección Pregunta 7
function corregir7(){
  //Compara el índice seleccionado con el valor del índice que hay en el xml (<answer>2</answer>)
  var sel = formElement.elements[25];  
  if (sel.selectedIndex-1==r7) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("P7: Correcta");
   nota +=1;
  }
  else darRespuestaHtml("P7: Incorrecta");
}

//Corrección Pregunta 8
function corregir8(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  var respuesta = "P8:";
  for (i = 0; i < f.elements[27].options.length; i++) {
   if (f.elements[27].options[i].selected) {
    escorrecta[i]=false;     
    for (j = 0; j < r8.length; j++) {
     if (i==r8[j]) escorrecta[i]=true;
    }
    //Si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/r8.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" correcta.";     
    } else {
     nota -=1.0/r8.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" incorrecta.";
    }   
   } 
  }
 darRespuestaHtml(respuesta);
}

//Corrección Pregunta 9
function corregir9(){
  //Para cada opción se mira si está checkeada, si está checkeada se mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  var respuesta = "P9:";
  for (i = 0; i < f.expr.length; i++) {
   if (f.expr[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < r9.length; j++) {
     if (i==r9[j]) escorrecta[i]=true;
    }
    //Si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/r9.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" correcta.";    
    } else {
     nota -=1.0/r9.length;  //dividido por el número de respuestas correctas   
     respuesta = respuesta + " Opció "+i+" incorrecta.";
    }
      
   }
  }
 darRespuestaHtml(respuesta);
}

//Corrección Pregunta 10
function corregir10(){
  ///Compara el índice seleccionado con el valor del índice que hay en el xml (<answer>1</answer>)
  var sel = formElement.elements[34];  
  if (sel.selectedIndex-1==r10) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("P10: Correcta");
   nota +=1;
  }
  else darRespuestaHtml("P10: Incorrecta");
}


//****************************************************************************************************
//RESPUESTAS

//Gestionar la presentación de las respuestas
//Añade una línea de texto en el DIV de repuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById("respostesDiv").appendChild(p);
}

//Presentar la nota final del examen
function presentarNota(){
 var p = document.createElement("p");
 nota = nota.toFixed(2);
 var node = document.createTextNode("Nota: "+nota+" puntos (sobre 10)");
 p.appendChild(node);
 p.setAttribute("id", "nota");
 document.getElementById("respostesDiv").appendChild(p);        
}

//Inicializar el DIV que muestra las respuestas insertadas
function inicializar(){
   document.getElementById("respostesDiv").innerHTML = "";
   nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
function comprobar(){
   var f=formElement;
   var checked1=false;
   var checked2=false;
   var checked3=false;
   var checked4=false;
   var checked5=false;

   for (i1 = 0; i1 < f.fill.length; i1++) {
      if (f.fill[i1].checked) checked1=true;
   }
   for (i2 = 0; i2 < f.licor.length; i2++) {
      if (f.licor[i2].checked) checked2=true;
   }
   for (i3 = 0; i3 < f.ingredients.length; i3++) {
      if (f.ingredients[i3].checked) checked3=true;
   }
   for (i4 = 0; i4 < f.instrument.length; i4++) {
      if (f.instrument[i4].checked) checked4=true;
   }
   for (i5 = 0; i5 < f.expr.length; i5++) {
      if (f.expr[i5].checked) checked5=true;
   }


   if (f.elements[1].value==="") {
    f.elements[1].focus();
    alert("Escriu una paraula per a la Pregunta 1");
    return false;
   } else if (!checked1) {
    f.elements[3].focus();
    alert("Selecciona una opció per a la Pregunta 2");
    return false;
   } else if (!checked2) {
    f.elements[8].focus();
    alert("Selecciona, com a mínim, una opció per a la Pregunta 3");
    return false;
   } else if (!checked3) {
    f.elements[13].focus();
    alert("Selecciona una opció per a la Pregunta 4");
    return false;
   } else if (f.elements[18].value==="") {
    f.elements[18].focus();
    alert("Escriu una paraula per a la Pregunta 5");
    return false;
   } else if (!checked4) {
    f.elements[20].focus();
    alert("Selecciona, como a mínim, una opció per a la Pregunta 6");
    return false;
   } else if (f.elements[25].selectedIndex===0) {
    f.elements[25].focus();
    alert("Selecciona una opció per a la Pregunta 7");
    return false;
   } else if (f.elements[27].selectedIndex==-1) {
    f.elements[27].focus();
    alert("Selecciona, com a mínim, una opció per a la Pregunta 8");
    return false;
   } else if (!checked5) {
    f.elements[29].focus();
    alert("Selecciona, como a mínim, una opció per a la Pregunta 9");
    return false;
   } else if (f.elements[34].selectedIndex===0) {
    f.elements[34].focus();
    alert("Selecciona una opció per a la Pregunta 10");
    return false;
   } else  return true;
}