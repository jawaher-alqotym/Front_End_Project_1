sound_is_playing = false;


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
    const task = {
        id: Date.now(),
        title: string,
    }
    localStorage.setItem(task.id, task.title);
    
    //get all local storge
    values = []
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
     values.push( localStorage.getItem(keys[i]) );
    }
 
    
    i = keys.length;
    delet_all_tasks()
    while(i--){
      ul = document.getElementById("toDo_list");
      li = document.createElement("li");
      li.setAttribute("id", `${keys[i]}`);
      //append button&text to li
      li.appendChild(document.createTextNode(localStorage.getItem(keys[i])));

      button = document.createElement('button')
      button.setAttribute('type', 'submit')
      button.setAttribute('onclick',`delet_task(${keys[i]})`)
      button.innerHTML = 'Delete'
    
      //buttion css
      button.style = 'animation: no-txt-color-gradient; color: white;'

      li.appendChild(button)


      ul.appendChild(li);
    }
     
    
     }
    }
 
function  delet_all_tasks(){
  const myNode = document.getElementById("toDo_list");
  myNode.innerHTML = '';
}


function delet_task(id){

    localStorage.removeItem(`${id}`);
    ul = document.getElementById("toDo_list");
    ul.removeChild(document.getElementById(id))

   
}


