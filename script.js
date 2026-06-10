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
}
