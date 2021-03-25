const express= require ("express");
const app= express();
const http= require("http");
const server= http.createServer(app);
const port=process.env.port || 8080;
const socket= require("socket.io");
let io=socket(server);

app.use(express.static("public"));

app.set("view engine","hbs");

app.get("/",(req,res)=>{

    res.render("index");
})

io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("chat",(data)=>{

       io.sockets.emit("chat",data);

        
        
    })

    socket.on("type",(use)=>{
        socket.broadcast.emit("type",use)
    })

})





server.listen(port,"127.0.0.1",()=>{
    console.log(`server is listening on ${port}`)

})