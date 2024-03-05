var userImage = localStorage.getItem("user-image")

var imageTag = document.querySelector(".card-img")
imageTag.src = userImage;

var yourCards = JSON.parse(localStorage.getItem("yourcards")) || []

document.getElementById("message-form").addEventListener("submit", function (event) {

    event.preventDefault()
    var messageCard = document.getElementById("message-card")
    messageCard.innerHTML = ""
    var position = document.querySelector(".form-select").value
    var colorTheme = ""
    if (event.target[6].checked) {
        colorTheme = "light"
    }
    else {
        colorTheme = "dark"
    }
    var cardObject = {
        imgsrc: userImage,
        to: document.getElementById("subject").value,
        to_email: document.getElementById("to-email").value,
        from_email: document.getElementById("from-email").value,
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
    else {
        messageCard.style.color = "black"

    }
    var subjectLine = document.createElement("h3")
    subjectLine.textContent = "To: " + cardObject.to + ","
    var messageLine = document.createElement("h4")
    messageLine.textContent = cardObject.message
    var closingLine = document.createElement("h4")
    closingLine.textContent = "From: " + cardObject.from;
    messageCard.append(subjectLine, messageLine, closingLine)

})

document.getElementById("save").addEventListener("click", function () {

    var cardObject = JSON.parse(localStorage.getItem("currentcard"))
    yourCards.push(cardObject)
    localStorage.setItem("yourcards", JSON.stringify(yourCards))
    document.location.href = "yourcards.html"
})