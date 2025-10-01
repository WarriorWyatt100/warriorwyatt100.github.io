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

function mooify() {
    let textArea = document.getElementById("userText");
    let text = textArea.value;

    // Split text into sentences by period
    let sentences = text.split(".");  

    // Process each sentence
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            // Add "-Moo" to the last word
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ").toUpperCase();
        } else {
            sentences[i] = "";
        }
    }

    // Join sentences back with ". "
    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "." : "");
}
