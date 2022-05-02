// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", matchSubmit);
var matchArr = JSON.parse(localStorage.getItem("schedule"))|| []

function matchSubmit(){
    event.preventDefault()

    var matchObj = {
        teamNumber: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        teamDate: masaiForm.date.value,
        teamVenue: masaiForm.venue.value,
    };
    matchArr.push(matchObj);
    console.log(matchArr);
    localStorage.setItem("schedule", JSON.stringify(matchArr));
    window.location.href = "matches.html";
}