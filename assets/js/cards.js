const cardArray = JSON.parse(localStorage.getItem("yourcards"))
let saveCard = document.getElementById("save-card")


function buildCards(){
    saveCard.innerHTML=""
    cardArray.forEach(card => {
        
        var cardDIV = document.createElement("div")
        cardDIV.style.width = "400px";
        cardDIV.style.position="relative"
        cardDIV.style.marginBottom="5px"
        var cardImg = document.createElement("img")
        cardImg.setAttribute("class", "card-img-top")
        cardImg.src = card.imgsrc;
        cardImg.style.width="100%"
        var messageCard = document.createElement("div")
        messageCard.setAttribute("data-color", card.colorTheme)
        messageCard.setAttribute("class", "message-card")
        messageCard.classList.add(card.position)
        messageCard.classList.add(card.colorTheme)
        var subjectLine = document.createElement("h3")
        subjectLine.textContent = "To: " + card.to + ","
    
        var messageLine=document.createElement("h4")
        messageLine.textContent=card.message
    
        var closingLine= document.createElement("h4")
        closingLine.textContent="From: "+card.from;
    
        messageCard.append(subjectLine, messageLine, closingLine)
        cardDIV.append(cardImg, messageCard)
        saveCard.append(cardDIV)
    
    });
}
buildCards()
// cardArray.forEach(card => {


//     messageCard.setAttribute("data-color", card.colorTheme)
//     messageCard.setAttribute("class", "message-card")
//     if(messageCard.getAttribute("data-color")==="light"){
//         messageCard.style.color="white"
//     }
//     

//     var closingLine= document.createElement("h4")
//     closingLine.textContent="From: "+card.from;
//     messageCard.append(subjectLine, messageLine, closingLine)
//     cardDIV.append(messageCard)
//     //document.querySelector("#card-box").append(imageTag, messageCard)
//     cardDIV.append(cardImg)
//     saveCard.append(cardDIV)
// });