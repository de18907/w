

function agregar(){ 
    var lugar = document.getElementById("Lugar").value;
    var lat = document.getElementById("Latitud").value;
    var log = document.getElementById("Logitud").value;
    var email = document.getElementById("email").value;
    var tipv = document.getElementById("usr").value;
    var fec = document.getElementById("date").value;
    var comentario = document.getElementById("comment").value;
//--------------------------------------------------
    //los datos
    var text_numero = document.createTextNode(1);
    var text_lugar = document.createTextNode(lugar);
    var text_lat = document.createTextNode(lat);
    var text_log = document.createTextNode(log);
    var text_email = document.createTextNode(email);
    var text_tipv = document.createTextNode(tipv);
    var text_fec = document.createTextNode(fec);
    var text_comentario = document.createTextNode(comentario);
    //etiqueta de la fila
    var tr_element = document.createElement("tr");
    //etiquetas de los datos
    var th_numero = document.createElement("th");
    var td_lugar = document.createElement("td");
    var td_lat = document.createElement("td");
    var td_log = document.createElement("td");
    var td_email = document.createElement("td");
    var td_tipv = document.createElement("td");
    var td_fec = document.createElement("td");
    var td_comentario = document.createElement("td");
    //agregar texto en las etiquetas
    th_numero.appendChild(text_numero);
    td_lugar.appendChild(text_lugar);
    td_lat.appendChild(text_lat);
    td_log.appendChild(text_log);
    td_email.appendChild(text_email);
    td_tipv.appendChild(text_tipv);
    td_fec.appendChild(text_fec);
    td_comentario.appendChild(text_comentario);
    //agregar las etiquetas th y td a la etiqueta tr
    tr_element.appendChild(th_numero);
    tr_element.appendChild(td_lugar);
    tr_element.appendChild(td_lat);
    tr_element.appendChild(td_log);
    tr_element.appendChild(td_fec);
    tr_element.appendChild(td_tipv);
    tr_element.appendChild(td_comentario);
    tr_element.appendChild(td_email);
    document.getElementById("tabla").appendChild(tr_element);
}
function editar(){
    var mascota = prompt("¿Cuál fila quieres editar?", "");
    if (mascota != null){
        var tabla = document.getElementById("tabla").childNodes[mascota];
        tabla.removeChild(document.getElementById("Lugar").value, tabla.childNodes[1]);   
        tabla.removeChild(document.getElementById("Latitud").value, tabla.childNodes[2]);  
        tabla.removeChild(document.getElementById("Logitud").value, tabla.childNodes[3]);  
        tabla.removeChild(document.getElementById("email").value, tabla.childNodes[4]);  
        tabla.removeChild(document.getElementById("usr").value, tabla.childNodes[5]);  
        tabla.removeChild(document.getElementById("date").value, tabla.childNodes[6]); 
        tabla.removeChild(document.getElementById("comment").value, tabla.childNodes[7]);   
        alert("La fila " + mascota + "se a editado correctamente");
    }
    else {
        alert("La fila no se a eliminado");
    }
}
function eliminar(){
    var mascota = prompt("¿Cuál fila quieres eliminar?", "");
    if (mascota != null){
        var tabla = document.getElementById("tabla");
        tabla.removeChild(tabla.childNodes[mascota]);   
        alert("La fila " + mascota + "se a eliminado correctamente");
    }
    else {
        alert("La fila no se a eliminado");
    }
}