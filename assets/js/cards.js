
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
    
        var btnDiv=document.createElement("div")
        var mailTag=document.createElement("a")
        mailTag.setAttribute("href",`mailto:${card.to_email}?subject:you%20received%20a%20card`)
        var sendBtn=document.createElement("button")
        sendBtn.textContent="Send"
        sendBtn.addEventListener("click", function(){
            console.log(card)
            this.setAttribute("href",`mailto:${card.to_email}?subject:you%20received%20a%20card`)
            console.log(this)
        })
            mailTag.append(sendBtn)

        var printBtn=document.createElement("button")
        printBtn.textContent="Print"
        var deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        deleteBtn.setAttribute("value", card.imgsrc)
        deleteBtn.addEventListener("click", function(){
            const updateArray=cardArray.filter(card =>card.imgsrc!==this.value)
            localStorage.setItem("yourcards", JSON.stringify(updateArray))
            document.location.reload()
        })

        btnDiv.append(mailTag, printBtn, deleteBtn)


        messageCard.append(subjectLine, messageLine, closingLine)
        cardDIV.append(cardImg, messageCard, btnDiv)

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