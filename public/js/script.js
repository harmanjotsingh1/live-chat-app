const socket = io();

let message= document.getElementById("usermsg");
let userid= document.getElementById("userid");
let send=document.getElementById("send");
let output= document.getElementById("output");
let feedback=document.getElementById("feedback");

send.addEventListener("click",()=>{
    

    socket.emit("chat",data={
        
        id:userid.value,
        msg:message.value


    });

    message.value="";
    
    
})

message.addEventListener("keypress",()=>{
    socket.emit("type",userid.value);
})


socket.on("chat",(data)=>{
    feedback.innerText="";
    let elem=document.createElement("p");
    elem.innerText=data.id +" : "+data.msg;
    elem.id="para";
    output.appendChild(elem);

})
 
socket.on("type",(data)=>{
    feedback.innerText=data + " is typing a message...";
})

  