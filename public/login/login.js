const socket=new WebSocket("ws://localhost:3000")

function checkpasswordrules(otherpass,thispass) {
    
    if(document.getElementById(otherpass).value!=document.getElementById(thispass).value){
        document.getElementById('signinalert').innerHTML='password does not match'
        }else{document.getElementById('signinalert').innerHTML=''
        if(document.getElementById(otherpass).value.length<5){
            document.getElementById('signinalert').innerHTML='password length needs to be minimum 5 word'  
        }else{
            document.getElementById('signinalert').innerHTML=''  
        }
}}



function signupfunction() {
password=document.getElementById("password")
passwordconfirm=document.getElementById("passwordconfirm")
username=document.getElementById("username")
socket.onopen=()=>{
socket.send(JSON.stringify({
    "event":"signup",
    "data":{
"password":password,
"passwordconfirm":passwordconfirm,
"username":username
    }
}))
}
}

function loginfunction() {
password=document.getElementById("loginpassword")
username=document.getElementById("loginusername")
socket.onopen=()=>{
socket.send(JSON.stringify({
    "event":"login",
    "data":{
"password":password,
"username":username
    }
}))
}
}




