const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
var value = 0;
var a = 5;
var b = 10;
var c = 15;
var d = 20;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',() => {
        draggable.classList.add('dragging')
        
    })
    draggable.addEventListener('dragend',() => {
    draggable.classList.remove('dragging')
   })
})
/*
const draggables = document.querySelectorAll('.draggable')
draggables.forEach(draggable => {
 var left_margin = window.getComputedStyle(draggable).getPropertyValue("margin-left"); // returns margin e.g. '655px'
 left_margin = left_margin.match(/\d+/); //returns bare number e.g. '655'
    if(left_margin == 170)
    {
        draggable.classList.add('change')
    }
})*/



let result = true;
/*let start =true
const draggables = document.querySelectorAll('.draggable')
var timestart;
var timeend;
if(start)
{
var starttime = performance.now();
    start = false;
}
timestart = starttime;
timeend = performance.now();
if(timeend - timestart == 3000)
{
    draggables.forEach(draggable => {
        draggable.classList.add('timeup');
        })
        timeend = timestart;
}
if(timeend == timestart )
{
     draggables.forEach(draggable => {
        draggable.classList.remove('timeup');
        })
}*/
    

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
    const draggable = document.querySelector('.dragging')
  
  // container.appendChild(draggable);
    if((e.clientX >= 25 && e.clientY >= 350) && (e.clientX <= 225 && e.clientY <= 500))
       {
           
                  draggable.classList.add('over')
          /*   if(e.id == "dragnot1")
           {
             value = a;
           }
            else
           {
               value = 0 ;
           }
           if(value == 0)
           {
               result = false;
           }
           if(result == false)
           {
               alert("Sorry try again");
           
       }*/
       }
        
            
  
          
    
    else
        if((e.clientX >= 275 && e.clientY >= 350) && (e.clientX <= 475 && e.clientY <= 500 ))
       { 
            draggable.classList.add('over')
           /*if(e.id == "dragnot2")
           {
             value = b;
           }
            else
           {
               value = 0 ;
           }
           if(value == 0)
           {
               result = false;
           }
            if(result == false)
           {
               alert("Sorry try again");
           }*/
            
    }
    else
    if((e.clientX >= 525 && e.clientY >= 350) && (e.clientX <= 725 && e.clientY <= 500))
       {

            draggable.classList.add('over')
           /*if(e.id == "dragnot3")
           {
             value = c;
           }
            else
           {
               value = 0 ;
           }
           if(value == 0)
           {
               result = false;
           }
            if(result == false)
           {
               alert("Sorry try again");
           }*/
    }
    else
        if((e.clientX >= 775 && e.clientY >= 350) && (e.clientX <= 975 && e.clientY <= 500))
       {
    
            
              
           draggable.classList.add('over')
           /*if(e.id == "dragnot4")
           {
            value = d;
           }
           else
           {
               value = 0 ;
           }
           if(value == 0)
           {
               result = false;
           }
        if(result == false)
           {
               alert("Sorry try again");
           }*/
    }
})
})


