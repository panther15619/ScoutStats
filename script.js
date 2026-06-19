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

    let rating = 6.0;

    rating += goals * 1.0;
    rating += assists * 0.7;
    rating += shotsOnTarget * 0.2;
    rating += oneVOneWon * 0.1;

    rating -= shotsOffTarget * 0.1;
    rating -= oneVOneLost * 0.15;

    if (rating > 10) rating = 10;
    if (rating < 1) rating = 1;

    const match = {

        opponent:
        document.getElementById("opponent").value,

        competition:
        document.getElementById("competition").value,

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
}
