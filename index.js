import { inputBox, btn,audio,stop,list} from './var.js';

let value=[];
let valueOfInput=""
function valueInput(){
        
        if(inputBox.value==""){
            return 
        }else{ 
            valueOfInput=inputBox.value
        }
        audio.muted=false

        value.push(valueOfInput)
       let html=""
       value.map(item=>{
          html+=`<li>${item}</li>`
        })
        list.innerHTML=html 
        inputBox.value=""
        return value
        
}
function stopBudilnik(){
    audio.muted=true
    
}

function dataInfo(){
    const date=new Date()
    const hour=date.getHours();
    const minute=date.getMinutes();
    return {date,hour,minute}
}


btn.addEventListener('click',valueInput)
stop.addEventListener('click',stopBudilnik)



setInterval(()=>{
   const {date,hour,minute}=dataInfo()
   value.forEach(item=>(
item===`${hour}:${minute}`?audio.play():null
   )

)
   
    
},60000)
    