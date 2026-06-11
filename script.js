function saveProfile() {

    const profile = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        position: document.getElementById("position").value,
        team: document.getElementById("team").value
    };

    localStorage.setItem(
        "playerProfile",
        JSON.stringify(profile)
    );

    alert("Profile Saved!");

    window.location.href = "./dashboard.html";
}
function saveMatch() {

    const match = {
        opponent: document.getElementById("opponent").value,
        competition: document.getElementById("competition").value,
        minutes: document.getElementById("minutes").value,
        goals: document.getElementById("goals").value,
        assists: document.getElementById("assists").value,
        shotsOnTarget: document.getElementById("shotsOnTarget").value,
        shotsOffTarget: document.getElementById("shotsOffTarget").value,
        oneVOneWon: document.getElementById("oneVOneWon").value,
        oneVOneLost: document.getElementById("oneVOneLost").value,
        reflection: document.getElementById("reflection").value
    };

    let matches =
        JSON.parse(localStorage.getItem("matches")) || [];

    matches.push(match);

    localStorage.setItem(
        "matches",
        JSON.stringify(matches)
    );

    alert("Match Saved!");
}
