let scoreHome = 0
let scoreAway = 0
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let quarter = document.getElementById("qrt-txt")

function addOneHome() {
    scoreHome += 1
    homeScore.textContent = scoreHome 
}

function addOneAway() {
    scoreAway += 1
    awayScore.textContent = scoreAway 
}

function addTwoHome() {
    scoreHome += 2
    homeScore.textContent = scoreHome 
}

function addTwoAway() {
    scoreAway += 2
    awayScore.textContent = scoreAway 
}

function addThreeHome() {
    scoreHome += 3
    homeScore.textContent = scoreHome 
}

function addThreeAway() {
    scoreAway += 3
    awayScore.textContent = scoreAway 
}

function clearAll() {
    homeScore.textContent = 0
    awayScore.textContent = 0
    quarter.textContent = "Quarter: "
}

function firstQrt() {
    quarter.textContent = "Quarter: 1st"
}

function secondQrt() {
    quarter.textContent = "Quarter: 2nd"
}

function thirdQrt() {
    quarter.textContent = "Quarter: 3rd"
}

function fourthQrt() {
    quarter.textContent = "Quarter: 4th"
}

function overtime() {
    quarter.textContent = "OVERTIME"
}