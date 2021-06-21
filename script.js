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
            let likes = "<span class=\"likes\">" + response[i].likes + "</span>";
            let name = "<b class=\"name\">" + response[i].name + "</b>";
            let profile_image = "<img class=\"profileImage\" src=" + response[i].profile_image + "></img>";
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
            container.append(card);
            // let el = document.createElement("div");
            // el.innerHTML = profile_image + " " + name + " " + date + " " + source + " " + image + " " + caption + "<hr>" + heart + " " + likes;
            // el.id = "card";
            // container.append(el);
       }
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();