sound_is_playing = false;
counter = 0;

function play(id){
 if (!sound_is_playing){
    sound_is_playing = true
    sound  = document.getElementById(id);
    sound.play()
 }else{
    sound_is_playing = false
    stop(id)
 }
}

function stop(id){
    sound  = document.getElementById(id);
    sound.pause()
}

function add_task(string){
 if(string){
    ul = document.getElementById("toDo_list");
    li = document.createElement("li");
    li.setAttribute("id", string.replace(/\s+/g,'')+(++counter));
  

    //append button&text to li
    li.appendChild(document.createTextNode(string));

    button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.setAttribute('onclick',` delet_task(${li.id})`)
    button.innerHTML = 'Delete'
    
    //buttion css
    button.style = 'animation: no-txt-color-gradient; color: white;'

    li.appendChild(button)

    ul.appendChild(li);
    }
 
  
}

function delet_task(elem){
    ul = document.getElementById("toDo_list");
    ul.removeChild(document.getElementById(elem.id))
}


