var userImage=localStorage.getItem("user-image")
var imageTag=document.createElement("img")
imageTag.style.width="600px"
imageTag.src=userImage
document.querySelector("main").append(imageTag)