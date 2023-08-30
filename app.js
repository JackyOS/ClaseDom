const form = document.getElementById("agregarTareaForm")  //atrapamos el formulario
const ulLista = document.getElementById('tareasListas') //atrapamos el el div 
const eliminarTarea = document.getElementById('eliminarTareas') //atrapamos el el div 

//evento -> atrapamos el form con un add event listener
//con la accion submit (cuando el usuario envia el formulario, se ejecuta la función)
form.addEventListener('submit', function(event){
    event.preventDefault(); //evitamos el envio predeterminado del formulario, si o si debe enviar algo. (si pone enviar y se manda ningun dato (no se completa ningun campo del form), no te deja continuar con el envio)
    const tarea = document.getElementById("tarea").value;

    const nuevaTareaLi = document.createElement("li");
    nuevaTareaLi.innerText = tarea;
    //const li = `<li> ${tarea} </li>`
    //ulLista.innerHTML += li; //muestra el mensaje 

    nuevaTareaLi.addEventListener('click', function() {
        nuevaTareaLi.classList.toggle('completada');
        nuevaTareaLi.style.color = 'green'
    })
    ulLista.appendChild(nuevaTareaLi)

    document.getElementById('tarea').value = ' '
    


})




eliminarTarea.addEventListener('click', function(){
    const tareasCompletadas = document.querySelectorAll('.completada')
    tareasCompletadas.forEach(function(tareaLi) {
        //tareaLi.style.color = 'red'
        //ulLista.remove(tareaLi)  --> me borra todo
        ulLista.removeChild(tareaLi); //borra los li que tienen la clase completada
    } )
        



}
)
