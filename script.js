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

    const goals =
    Number(document.getElementById("goals").value);

    const assists =
    Number(document.getElementById("assists").value);

    const shotsOnTarget =
    Number(document.getElementById("shotsOnTarget").value);

    const shotsOffTarget =
    Number(document.getElementById("shotsOffTarget").value);

    const oneVOneWon =
    Number(document.getElementById("oneVOneWon").value);

    const oneVOneLost =
    Number(document.getElementById("oneVOneLost").value);

    const matchResult =
    document.getElementById("result").value;

    let rating = 6.0;

    rating += goals * 1.0;
    rating += assists * 0.8;
    rating += shotsOnTarget * 0.2;
    rating += oneVOneWon * 0.15;

    rating -= shotsOffTarget * 0.1;
    rating -= oneVOneLost * 0.15;

    if (matchResult === "Win") {
        rating += 0.3;
    }

    if (matchResult === "Loss") {
        rating -= 0.3;
    }

    if (rating > 10) rating = 10;
    if (rating < 1) rating = 1;

    const match = {

        opponent:
        document.getElementById("opponent").value,

        competition:
        document.getElementById("competition").value,

        result:
        document.getElementById("result").value,

        matchDate:
        document.getElementById("matchDate").value,

        minutes:
        document.getElementById("minutes").value,

        goals: goals,
        assists: assists,

        shotsOnTarget: shotsOnTarget,
        shotsOffTarget: shotsOffTarget,

        oneVOneWon: oneVOneWon,
        oneVOneLost: oneVOneLost,

        rating: rating.toFixed(1),

        reflection:
        document.getElementById("reflection").value
    };

    let matches =
    JSON.parse(localStorage.getItem("matches")) || [];

    matches.push(match);

    localStorage.setItem(
        "matches",
        JSON.stringify(matches)
    );

    alert(
        "Match Saved!\n\nRating: " +
        rating.toFixed(1)
    );

    window.location.href = "dashboard.html";
}
