var appId = "566894"
var accessKey = "yWH9hjEhFXjQhvtQPA8HDnyVzi_ocqp0JvHQDdzE9jA"
var secretKey = "tLxOXBxVmBk3PeUzYuiAhr1MWH-HTTy3Crg4fIDaax8"





function fetchpictures(term) {
    document.getElementById("picturebox").innerHTML = ""
    const testUrl = "https://api.unsplash.com/search/photos?page=1&query=" + term + "&orientation=portrait&client_id=" + accessKey
    fetch(testUrl).then(response => response.json()).then(data => {
        for (var i = 1; i < data.results.length; i++) {
            var imgSrc = data.results[i].urls.thumb;
            var largeImage= data.results[i].urls.full
            var image = document.createElement("img")
            image.setAttribute("src", imgSrc)
            image.setAttribute("data-selected", "false")
            image.style.width = "250px"
            image.style.height = "auto"
            image.addEventListener("click", function () {
                console.log(this)
                if (this.getAttribute("data-selected") === "false") {
                    this.setAttribute("data-selected", "true")
                }
                else {
                    this.setAttribute("data-selected", "false")
                }
                if(this.getAttribute("data-selected")==="true"){
                    localStorage.setItem("user-image", largeImage)
                }
                document.location.href="image.html"
            })
            //if (image.getAttribute("data-selected") === "true") {
                //console.log(image)
           // }
            document.getElementById("picturebox").appendChild(image)

        }
    })
}


document.getElementById("Search-btn").addEventListener("click", function () {
    var searchTerm = document.getElementById("Search-term").value
    fetchpictures(searchTerm)
})