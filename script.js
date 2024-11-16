document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("ya");
    const response = document.getElementById("response");

    yesButton.addEventListener("click", () => {
        response.textContent = "Really :3 I love you so much langga";
    });

    noButton.addEventListener("click", () => {
        response.textContent = "I gonna get you allll the matchas in the world";
    });
});
