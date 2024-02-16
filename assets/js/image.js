var userImage=localStorage.getItem("user-image")
var imageTag=document.createElement("img")
imageTag.style.width="600px"
imageTag.src=userImage 
var cardBox=document.createElement("div")
cardBox.setAttribute("id", "card-box")
cardBox.style.border="2px solid red"
cardBox.append(imageTag)
document.querySelector("#single-picture").append(cardBox)
var yourCards=[]
document.getElementById("message-form").addEventListener("submit", function(event){
    event.preventDefault()
    var cardObject={
        imgsrc:userImage,
        to:document.getElementById("subject").value,
        message:document.getElementById("message").value,
        from:document.getElementById("from").value,

    }
    yourCards.push(cardObject)
    localStorage.setItem("yourcards", JSON.stringify(yourCards))
    var messageCard=document.createElement("div")
    messageCard.setAttribute("class", "card message-card")
    var subjectLine=document.createElement("h3")
    subjectLine.textContent=cardObject.to
    messageCard.append(subjectLine)
    document.querySelector("#card-box").append(imageTag, messageCard)
})