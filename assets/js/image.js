var userImage = localStorage.getItem("user-image")

var imageTag = document.createElement("img")
imageTag.src = userImage;

var cardBox = document.createElement("div")
cardBox.setAttribute("id", "card-box")
cardBox.append(imageTag)

document.querySelector("#single-picture").append(cardBox)

var yourCards = JSON.parse(localStorage.getItem("yourcards")) || []

document.getElementById("message-form").addEventListener("submit", function (event) {
    event.preventDefault()
    var messageCard = document.createElement("div")
    cardBox.innerHTML=""
    var position = document.querySelector(".form-select").value
    console.log(event.target[4])
    var colorTheme = ""
    if (event.target[4].checked) {
        colorTheme = "light"
    }
    else {
        colorTheme = "dark"
    }
    var cardObject = {
        imgsrc: userImage,
        to: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        from: document.getElementById("from").value,
        colorTheme,
        position
    }

    localStorage.setItem("currentcard", JSON.stringify(cardObject))
    messageCard.setAttribute("data-color", cardObject.colorTheme)
    messageCard.setAttribute("class", cardObject.position)

    if (messageCard.getAttribute("data-color") === "light") {
        messageCard.style.color = "white"
    }
    var subjectLine = document.createElement("h3")
    subjectLine.textContent = "To: " + cardObject.to + ","
    var messageLine = document.createElement("h4")
    messageLine.textContent = cardObject.message
    var closingLine = document.createElement("h4")
    closingLine.textContent = "From: " + cardObject.from;
    messageCard.append(subjectLine, messageLine, closingLine)
    //imageTag.append(messageCard)
    document.querySelector("#card-box").append(imageTag, messageCard)
    //document.getElementById("form-column").style.display="none"
    //document.getElementById("button-column").style.display="block"
})
document.getElementById("reset").addEventListener("click", function () {
    document.location.href = "index.html"
})
document.getElementById("save").addEventListener("click", function () {
  
    var cardObject = JSON.parse(localStorage.getItem("currentcard"))
    yourCards.push(cardObject)
    localStorage.setItem("yourcards", JSON.stringify(yourCards))
    document.location.href = "yourcards.html"
})