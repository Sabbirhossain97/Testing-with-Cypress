function jsAlert() {
    alert("I am a JS Alert")
}

function jsConfirm() {
    confirm("I am a JS Confirm Alert")
}

function jsPrompt() {
    prompt("I am a JS Prompt")
}

document.getElementById("double-click-btn").addEventListener("dblclick", function () {
    this.textContent = "Double Clicked!";
    this.classList.add("double-clicked");
});
