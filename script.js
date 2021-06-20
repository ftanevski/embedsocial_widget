function createCard(){
    let card = document.createElement("div");
    card.id = "card"
    let cardHeader = document.createElement("div");
    cardHeader.innerHTML = "<img src=" + profile_image + ">/img>"
}

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let container = document.getElementById("container");
       let response = JSON.parse(xhttp.responseText);
       for(let i = 0; i < response.length; i++){
            let image = "<img class=\"captionImage\" src=" + response[i].image + "></img>";
            let caption = "<p id=\"caption\">" + response[i].caption + "</p>";
            let source = "<a href=" + response[i].source_link + "><img class=\"social\" src=/icons/" + response[i].source_type + ".svg></img></a>"  
            let date = response[i].date;
            let likes = "<p class=\"likes\">" + response[i].likes + "</p>";
            let name = "<b class=\"name\">" + response[i].name + "</b>";
            let profile_image = "<img class=\"profileImage\" src=" + response[i].profile_image + "></img>";
            let heart = "<img class=\"heartIcon\" src=\"/icons/heart.svg\"></img>"
            var card = document.createElement("div");
            card.id = "card";
            var cardHeader = document.createElement("div");
            cardHeader.id = "cardHeader";
            cardHeader.innerHTML = profile_image + " " + name + " " + date + " " + source;
            card.append(cardHeader);
            var cardImage = document.createElement("div");
            cardImage.id = "cardImage";
            cardImage.innerHTML = image;
            card.append(cardImage);
            var cardCaption = document.createElement("div");
            var hr = document.createElement("hr");
            cardCaption.id = "cardCaption";
            cardCaption.innerHTML = caption;
            card.append(cardCaption);
            card.append(hr);
            var cardFooter = document.createElement("div");
            cardFooter.id = "cardFooter";
            cardFooter.innerHTML = heart + " " + likes;
            card.append(cardFooter);
            container.append(card);
            // var el = document.createElement("div");
            // el.innerHTML = profile_image + " " + name + " " + date + " " + source + " " + image + " " + caption + "<hr>" + heart + " " + likes;
            // el.id = "card";
            // container.append(el);
       }
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();