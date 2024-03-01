const cardArray=JSON.parse(localStorage.getItem("yourcards"))
let saveCard=document.getElementById("save-card")
cardArray.forEach(card => {
    console.log(card)
    var cardDIV=document.createElement("div")
    cardDIV.setAttribute( "class", "card col-4")
    var cardImg=document.createElement("img")
    cardDIV.style.width="500px"
    cardImg.setAttribute("class", "card-img-top")
    cardImg.src=card.imgsrc; 
    var messageCard=document.createElement("div")
    messageCard.setAttribute("data-color", card.colorTheme)
    messageCard.setAttribute("class", "message-card")
    if(messageCard.getAttribute("data-color")==="light"){
        messageCard.style.color="white"
    }
    var subjectLine=document.createElement("h3")
    subjectLine.textContent="To: "+card.to+","
    var messageLine=document.createElement("h4")
    messageLine.textContent=card.message
    var closingLine= document.createElement("h4")
    closingLine.textContent="From: "+card.from;
    messageCard.append(subjectLine, messageLine, closingLine)
    cardDIV.append(messageCard)
    //document.querySelector("#card-box").append(imageTag, messageCard)
    cardDIV.append(cardImg)
    saveCard.append(cardDIV)
});