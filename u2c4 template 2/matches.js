// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr);

var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

function venueFilter(){
    var selected = document.querySelector("#filterVenue").Value;
    
    var filteredList = matchArr.filter(function(elem){
        return elem.teamVenue == selected;
    });
    console.log(filteredList);
    displayData(filteredList);
}

function displayData(data){
    document.querySelector("tbody").innerHTML = "";

    data.forEach(function(elem){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = elem.teamNumber;

        var td2 = document.createElement("td");
        td2.innerHTML = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerHTML = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerHTML = elem.teamDate;

        var td5 = document.createElement("td");
        td5.innerHTML = elem.teamVenue;

        var td6 = document.createElement("td");
        td6.innerHTML = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function(){
            FavouriteFun(elem);
        });

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("tbody").append(tr);
    });
}

function FavouriteFun(elem){
    console.log(elem);
    favouriteArr.push(elem);
    localStorage.setItem("favourites", JSON.stringify(favouriteArr));
    // window.location.href = "favourites.html";
}