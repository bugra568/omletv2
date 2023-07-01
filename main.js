const express = require('express')
const {WebSocketServer}=require("ws")
const app = express()
const fs=require("fs")
const path = require('path');

async function runthemaincode(){
/*
  const { MongoClient, ServerApiVersion } = require("mongodb");
  const client = new MongoClient("mongodb+srv://topcat:bugra_69@omletrecreation.nszkng3.mongodb.net/?retryWrites=true&w=majority", {
  serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});
  await client.connect();


data=await client.db("user_data").collection("data").findOne({name:{$eq:"topcat"}})
console.log(data);
*/

app.use(express.static(path.join(__dirname, '/public')))
app.get('/', function (req, res) {
})
app.use((req, res, next) => {
  res.status(404).send("error 404:<br>invalid path!")
})
const server=app.listen(3000)
const wss = new WebSocketServer({server});



wss.on("connection", function(socket,req){
console.log("connected ip:"+socket._socket.remoteAddress);
wss.on
});


}runthemaincode();