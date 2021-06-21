function createCard(response) {
    let image = "<img class=\"captionImage\" src=" + response.image + "></img>";
    let caption = "<p id=\"caption\">" + response.caption + "</p>";
    let source = "<a href=" + response.source_link + "><img class=\"social\" src=/icons/" + response.source_type + ".svg></img></a>"
    let date = response.date;
    let likes = "<span class=\"likes\">" + response.likes + "</span>";
    let name = "<b class=\"name\">" + response.name + "</b>";
    let profile_image = "<img class=\"profileImage\" src=" + response.profile_image + "></img>";
    let heart = "<img class=\"heartIcon\" src=\"/icons/heart.svg\"></img>"
    let card = document.createElement("div");
    card.className = "card";
    let cardHeader = document.createElement("div");
    let profile = document.createElement("div");
    profile.className = "profile";
    profile.innerHTML = "<div>" + profile_image + "</div>";
    let nameContainer = document.createElement("div");
    nameContainer.className = "nameContainer";
    nameContainer.innerHTML = "<span>" + name + "</span><span>" + date + "</span>"
    cardHeader.className = "cardHeader";
    profile.append(nameContainer);
    cardHeader.append(profile);
    cardHeader.innerHTML += "<div>" + source + "</div>";
    card.append(cardHeader);
    let cardImage = document.createElement("div");
    cardImage.className = "cardImage";
    cardImage.innerHTML = image;
    card.append(cardImage);
    let cardCaption = document.createElement("div");
    let hr = document.createElement("hr");
    cardCaption.className = "cardCaption";
    cardCaption.innerHTML = caption;
    card.append(cardCaption);
    card.append(hr);
    let cardFooter = document.createElement("div");
    cardFooter.className = "cardFooter";
    cardFooter.innerHTML = heart + " " + likes;
    card.append(cardFooter);
    return card;
}
let postCount = 0;
let response;
function loadCards(container){
    if(postCount+4 <= response.length){
        for (let i = postCount; i < postCount+4; i++) {
            let card = createCard(response[i]);
            container.append(card);
        }
    }
    else{
        for (let i = postCount; i < response.length; i++) {
            let card = createCard(response[i]);
            container.append(card);
        }
    }
}

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let container = document.getElementById("container");
        let loadButton = document.getElementById("loadMore");
        loadButton.addEventListener('click', () =>{
            postCount+=4;
            loadCards(container);
            if(postCount >= response.length-4){
                document.getElementById("loadMore").style.display = "none";
            }
        })
        response = JSON.parse(xhttp.responseText);
        loadCards(container);
    }
};


xhttp.open("GET", "data.json", true);
xhttp.send();