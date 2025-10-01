function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
    let textArea = document.getElementById("userText");

    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
